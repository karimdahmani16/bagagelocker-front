<template>
    <BlockUI :blocked="blockUI">
        <div class="container">
            <ToastComponent></ToastComponent>
            <div class="mb-5">
                <NavBar />
            </div>
            <label class="col-12 mot-de-passe-oublie" style="margin-top:50px"><b>RESET YOUR PASSWORD</b></label>
            <label class="col-12 message"><b>Enter your email address and we'll send you a link to reset your password.</b></label>
            <div class="form-group mt-5">
                <div class="row text-center">
                    <label for="email"></label>
                    <div class="col-12 form-outline" data-mdb-input-init>
                        <input v-model="email" type="email" id="typeEmail" class="form-control height"
                            placeholder="Enter your email" />
                        <label class="form-label" for="typeEmail"></label>
                    </div>

                    <!--<div class="field">
                    <label for="email"></label>
                    <v-text-field v-model="email" :rules="emailRules" label="E-mail" required clearable
                        variant="outlined" placeholder="Enter your email"
                        class="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12" type='text'></v-text-field>
                </div>-->
                    <button class="signin-button col-12 font-bold mb-3" @click="resetPassword">
                        Reset password
                    </button>
                    <button class="back-button col-12 font-bold mb-3" type="link" @click="backToLogin">
                        Back to Login</button>
                </div>
            </div>
        </div>
    </BlockUI>
</template>

<script setup>
import NavBar from '@/components/base/en/NavBar.vue';
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useToast } from "primevue/usetoast";
import { sendPasswordResetEmail, getAuth } from 'firebase/auth';
const toast = useToast();
const router = useRouter()
const auth = getAuth()
auth.languageCode = 'en';
let email = ref(null)
let blockUI = ref(false)

const resetPassword = () => {
    blockUI.value = true
    if(email.value == null){
        blockUI.value = false
        toast.add({ severity: 'error', summary: 'Error', detail: 'Please enter your email!', life: 3500 });
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
    console.log(email.value);
    sendPasswordResetEmail(auth, email.value).then(() => {
        blockUI.value = false
        email.value = null
        toast.add({ severity: 'success', summary: 'Reset password', detail: 'An email with a reinitialization link has been sent to your email address, please check your inbox!', life: 3500 });
    }).catch((error) => {
        blockUI.value = false
        toast.add({ severity: 'error', summary: 'Error', detail: error.message, life: 3500 });
    });
    /*
    Service.forgotPassword(email.value).then(response => {
        blockUI.value = false
        if (response.data.error != null) {
            if (response.data.error === "User not found") {
                toast.add({ severity: 'error', summary: 'User not found', detail: 'No user is registered using this email address! Please sign up!', life: 3500 });
            }
        }
        else {
            email.value = null
            toast.add({ severity: 'success', summary: 'Reset password', detail: 'An email with a reinitialization link has been sent to your email address, please check your inbox!', life: 3500 });
        }
    });
    */
}
const backToLogin = () => {
    router.push({
        name: "Login", params: {
            cartId: 0
        }
    })
}
</script>

<style scoped>
.height {
    height: 50px;
}
.back-button:hover {
    color: #001eff;
    text-decoration: underline;
}
.back-button {
    font-family: Montserrat;
}

/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
    .message {
        margin-top: 30px;
        font-size: 16px;
        font-weight: 500;
        font-family: Montserrat;

    }

    .mot-de-passe-oublie {
        text-align: start;
        font-size: 20px;
        color: #000;
        font-family: Montserrat;
        margin-top: -20px;
    }

    .signin-button {
        border-radius: 10px;
        border: 1px solid #000;
        box-sizing: border-box;
        background-color: #fff;
        color: #000;
        font-size: 16px;
        font-family: Montserrat;
    }
}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {
    .mot-de-passe-oublie {
        text-align: start;
        font-size: 21px;
        color: #000;
        font-family: Montserrat;
        margin-top: -20px;
    }

    .message {
        margin-top: 30px;
        font-size: 18px;
        font-weight: 500;
        font-family: Montserrat;
    }

    .signin-button {
        border-radius: 10px;
        border: 1px solid #000;
        box-sizing: border-box;
        background-color: #fff;
        color: #000;
        font-size: 16px;
        font-family: Montserrat;
    }
}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {
    .mot-de-passe-oublie {
        text-align: start;
        font-size: 22px;
        color: #000;
        font-family: Montserrat;
    }

    .message {
        margin-top: 30px;
        font-size: 20px;
        font-weight: 500;
        font-family: Montserrat;
    }

    .signin-button {
        border-radius: 10px;
        border: 1px solid #000;
        box-sizing: border-box;
        background-color: #fff;
        color: #000;
        font-family: Montserrat;
        font-size: 16px;
    }
}

/* Large devices (landscape tablets, 992px and up) */
@media only screen and (min-width: 992px) {
    .mot-de-passe-oublie {
        text-align: start;
        font-size: 24px;
        color: #000;
        font-family: Montserrat;
    }

    .message {
        margin-top: 30px;
        font-size: 24px;
        font-weight: 500;
        font-family: Montserrat;
    }

    .signin-button {
        border-radius: 10px;
        border: 1px solid #000;
        box-sizing: border-box;
        background-color: #fff;
        color: #000;
        font-family: Montserrat;
        font-size: 18px;
    }
}

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
    .mot-de-passe-oublie {
        text-align: start;
        font-size: 26px;
        color: #000;
        font-family: Montserrat;
    }

    .message {
        margin-top: 30px;
        font-size: 24px;
        font-weight: 500;
        font-family: Montserrat;
    }

    .signin-button {
        border-radius: 10px;
        border: 1px solid #000;
        box-sizing: border-box;
        background-color: #fff;
        font-family: Montserrat;
        color: #000;
        font-size: 20px;
    }
}

/* XX large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1600px) {
    .mot-de-passe-oublie {
        text-align: start;
        font-size: 32px;
        color: #000;
        font-family: Montserrat;
        margin-bottom: 10px;
        margin-top: 5px;
    }

    .message {
        margin-top: 30px;
        font-size: 24px;
        font-weight: 500;
        font-family: Montserrat;
    }

    .signin-button {
        border-radius: 10px;
        border: 1px solid #000;
        box-sizing: border-box;
        background-color: #fff;
        font-family: Montserrat;
        color: #000;
        font-size: 20px;
    }
}
</style>