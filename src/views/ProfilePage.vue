<template>
    <NavBar />
    <div class="information-personnelle">
        <b class="informations-personnelles">Personal informations</b>
        <div class="information-personnelle-child" />
        <div class="prnom">Prénom</div>
        <span class="p-float-label">
            <v-text-field v-model="username" label="Username" variant="outlined" placeholder="Enter your username"
                class="information-personnelle-item" type='text'></v-text-field>
        </span>
        <span class="p-float-label">
            <v-text-field v-model="prenom" label="First Name" variant="outlined" placeholder="Enter your first name"
                class="information-personnelle-item" type='text'></v-text-field>
        </span>
        <span class="p-float-label">
            <v-text-field v-model="name" label="Last Name" variant="outlined" placeholder="Enter your last name"
                class="rectangle-div" type='text'></v-text-field>
        </span>
        <span class="p-float-label">
            <v-text-field v-model="email" :rules="emailRules" label="Email" variant="outlined"
                placeholder="Enter your email" class="information-personnelle-inner" type='text'></v-text-field>
        </span>
        <span class="p-float-label">
            <v-text-field v-model="phone" label="Phone Number" variant="outlined" placeholder="Enter your phone number"
                class="information-personnelle-child1" type='text'></v-text-field>
        </span>
        <div class="adresse-courriel">Adresse courriel</div>
        <ButtonComponent class="supprimer-le-compte" severity="danger" v-if="false" text @click="deleteAccount"
            label="Delete account"></ButtonComponent>

        <ButtonComponent class="rectangle-parent" severity="secondary" @click="cancel" label="Cancel"></ButtonComponent>
        <ButtonComponent class="image-5-parent" outlined raised @click="save" label="Save"></ButtonComponent>
        <div class="prnom1">Nom</div>
        <div class="tlphone">Téléphone</div>
    </div>
</template>
<script setup>
import { ref, onMounted } from 'vue'
import { VTextField } from 'vuetify/lib/components/index.mjs';
import NavBar from '../components/base/en/NavBar.vue'
import { useRouter } from 'vue-router'
import Service from '@/core/Service';
import store from '@/store';
const router = useRouter()
let prenom = ref(null)
let name = ref(null)
let email = ref(null)
let phone = ref(null)
const emailRules = ref([
    value => {
        if (value) return true
        return 'E-mail is required.'
    },
    value => {
        if (/.+@.+\..+/.test(value)) return true

        return 'E-mail must be valid.'
    },
])
const deleteAccount = () => {
    console.log('Account deleted')
}
const cancel = () => {
    router.go(-1)
}
const save = () => {
    Service.updateUser(store.getters.userId, prenom.value, name.value, email.value, phone.value).then(response => {
        console.log('response.data ' + response.data);
        router.go(-1)
    })
}
onMounted(() => {
    const userId = store.getters.userId
    if (userId != null) {
        Service.getUserDetails(userId).then(response => {
            prenom.value = response.data.firstName
            name.value = response.data.lastName
            email.value = response.data.email
            phone.value = response.data.telephone
        })
    }
})
</script>
<style scoped>
.informations-personnelles {
    position: absolute;
    top: 127px;
    left: calc(50% - 868px);
    font-size: 40px;
    display: inline-block;
    width: 788px;
    height: 43px;
}

.information-personnelle-child {
    position: absolute;
    top: 239px;
    left: calc(50% - 867px);
    background-color: #fff;
    border: 3px solid #a6a6a6;
    box-sizing: border-box;
    width: 1735px;
    height: 835px;
}

.information-personnelle-item {
    position: absolute;
    top: 400px;
    left: calc(50% - 695px);
    width: 350px;
    height: 60px;
}

.information-personnelle-inner {
    position: absolute;
    top: 597px;
    left: calc(50% - 695px);
    width: 350px;
    height: 60px;
}

.rectangle-div {
    position: absolute;
    top: 400px;
    left: calc(50% + 162px);
    width: 350px;
    height: 60px;
}

.information-personnelle-child1 {
    position: absolute;
    top: 597px;
    left: calc(50% + 162px);
    width: 350px;
    height: 60px;
}

.prnom {
    position: absolute;
    top: 331px;
    left: calc(50% - 695px);
    font-weight: 500;
}

.adresse-courriel {
    position: absolute;
    top: 528px;
    left: calc(50% - 695px);
    font-weight: 500;
}

.supprimer-le-compte {
    position: absolute;
    top: 983px;
    left: calc(50% - 152px);
    font-weight: 500;
    color: #ff0000;
}

.group-child {
    position: absolute;
    top: 0px;
    left: calc(50% - 160.5px);
    border-radius: 10px;
    background-color: #d9d9d9;
    width: 321px;
    height: 77px;
}

.annuler {
    position: absolute;
    top: 26px;
    left: calc(50% - 44.5px);
    display: inline-block;
    width: 88px;
    height: 23px;
}

.rectangle-parent {
    position: absolute;
    top: 794px;
    left: calc(50% - 189px);
    width: 321px;
    height: 77px;
    font-size: 20px;
    border: 0px;
}

.prnom1 {
    position: absolute;
    top: 331px;
    left: calc(50% + 162px);
    font-weight: 500;
}

.tlphone {
    position: absolute;
    top: 528px;
    left: calc(50% + 162px);
    font-weight: 500;
}

.image-5-icon {
    position: absolute;
    top: 0px;
    left: calc(50% - 223.5px);
    border-radius: 10px;
    width: 447px;
    height: 93px;
    object-fit: cover;
}

.sauvegarder-les-modifications {
    position: absolute;
    top: 35px;
    left: calc(50% - 160.5px);
    display: inline-block;
    width: 320px;
    height: 23px;
}

.image-5-parent {
    position: absolute;
    top: 794px;
    left: calc(50% - 695px);
    width: 447px;
    height: 77px;
    font-size: 20px;
    color: #fff;
    border: 0px;
    background-color: #00cff4;
}

.information-personnelle {
    position: relative;
    background-color: #f2f2f2;
    width: 100%;
    height: 1155px;
    overflow: hidden;
    text-align: left;
    font-size: 28px;
    color: #000;
    font-family: Montserrat;
}
</style>
  