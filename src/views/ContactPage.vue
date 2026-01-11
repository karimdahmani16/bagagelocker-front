<template>
    <meta name="description" content="Get in touch with us for any inquiries or support. Visit our Contact Us page to find our contact information and reach out to our team.">
    <BlockUI :blocked="blockUI">
    <div class="container-fluid background-gris">
        <NavBar />
        <button type="button" class="btn btn-primary mt-4 bg-black fg-white font-bold border-black" @click="router.go(-1)"><i class="bi bi-arrow-return-left mr-2 font-bold"></i> Back</button>
        <div class="row">
            <div class="col-xs-12 col-md-4">
                <div class="card mt-5 card-height">
                    <div class="card-body">
                        <h5 class="card-title">Address</h5>
                        <p class="card-text">Rua Cimo de Vila N18 <br> 4000-169 Porto <br> Portugal</p>
                    </div>
                </div>
            </div>
            <div class="col-xs-12 col-md-4">
                <div class="card mt-5 card-height">
                    <div class="card-body">
                        <h5 class="card-title">Phone number</h5>
                        <p class="card-text">00 351 91 37 81 716</p>
                    </div>
                </div>
            </div>
            <div class="col-xs-12 col-md-4">
                <div class="card mt-5 card-height">
                    <div class="card-body">
                        <h5 class="card-title">Email</h5>
                        <p class="card-text">support@bagagelocker.com</p>
                    </div>
                </div>
            </div>
            <div class="col-8">
                <p class="fs-1 font-bold mt-xs-2 mt-xl-3">Support</p>
                <label for="exampleInputEmail1" class="form-label">Email</label>
                <input type="email" v-model="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                <div id="emailHelp" class="form-text invisible">We'll never share your email with anyone else.</div>
                <label for="exampleInputEmail1" class="form-label">Message</label>
                <div class="input-group">
                    <textarea class="form-control" v-model="message" rows="5"></textarea>
                </div>
                <button type="submit" class="btn bouton-bleu mt-3 mb-3" @click="sendEmailToSupport">Send</button>
            </div>
        </div>
    </div>
</BlockUI>
</template>
<script setup>
import NavBar from '@/components/base/en/NavBar.vue';
import Service from '@/core/Service';
import { useToast } from 'primevue/usetoast';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
const toast = useToast();
const router = useRouter();
let blockUI = ref(false)
let email = ref(null)
let message = ref(null)
const sendEmailToSupport = () => {
    blockUI.value = true
    if(email.value == null){
        blockUI.value = false
        toast.add({ severity: 'error', summary: 'Error', detail: 'Email is required!', life: 3500 });
        return
    }
    if(!email.value.includes('@')){
        blockUI.value = false
        toast.add({ severity: 'error', summary: 'Error', detail: 'Invalid email!', life: 3500 });
        return
    }
    if(!email.value.includes('.')){
        blockUI.value = false
        toast.add({ severity: 'error', summary: 'Error', detail: 'Invalid email!', life: 3500 });
        return
    }
    if(message.value == null){
        blockUI.value = false
        toast.add({ severity: 'error', summary: 'Error', detail: 'Enter your message!', life: 3500 });
        return
    }
    Service.sendEmailToSupport(email.value, message.value).then(response => {
        console.log(response.data);
        email.value = null
        message.value = null
        blockUI.value = false
        toast.add({ severity: 'success', summary: 'Email sent to Bagage Locker Support Team. We will take care of your request. Thank you!', life: 3000 });
    }).catch(error => {
        blockUI.value = false
        toast.add({ severity: 'error', summary: 'Error', detail: 'An error occurred! ' + error, life: 3500 });
    })
};
</script>
<style scoped>
.background-gris {
    width: 100%;
    height: 100%;
    margin-top: 60px;
    overflow: hidden;
    background: #ededed;
    font-family: Montserrat;
}

.card-height {
    height: 140px;
}

.bouton-bleu {
    background-color: #00cff4;
    color: #ffffff;
    border-radius: 5px;
    font-size: 20px;
    padding-left: 25px;
    padding-right: 25px;
    font-weight: 600;
    border-width: 0px;
}
</style>