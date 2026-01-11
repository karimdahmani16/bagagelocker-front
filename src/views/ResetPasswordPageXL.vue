<template>
    <div class="aprs-cliquer-sur-le-lien-de-c">
        <b class="rinitialiser-le-mot">Réinitialiser le Mot de Passe</b>
        <div class="veuillez-entrer-votre">
            Veuillez entrer votre nouveau mot de passe.
        </div>
        <div class="mot-de-passe">
            <span class="p-float-label">
                <v-text-field v-model="password" :rules="passwordRules" label="Password" required clearable variant="outlined"
                    placeholder="Enter your password" class="mot-de-passe-child" :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                    :type="show1 ? 'text' : 'password'" @click:append="show1 = !show1"></v-text-field>

            </span>
        </div>
        <div class="confirme-le-mot-de-passe">
            <span class="p-float-label">
                <v-text-field v-model="confirmPassword" :rules="confirmPasswordRules" label="Confirm Password" required clearable variant="outlined"
                    class="mot-de-passe-child" :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                    :type="show1 ? 'text' : 'password'" @click:append="show1 = !show1"></v-text-field>

            </span>
        </div>
        <div class="rectangle-parent">
            <ButtonComponent class="group-child" outlined @click="resetPassword" label="Enregistrer">
            </ButtonComponent>
            
        </div>
    </div>
</template>
<script setup>
import Service from '@/core/Service';
import { ref, defineProps } from "vue"
import { VTextField } from 'vuetify/lib/components/index.mjs';
const props = defineProps({
  token: String
})
let show1 = ref(false)
let password = ref(null)
let confirmPassword = ref(null)
const passwordRules = ref([
  value => {
    if (value) return true
    return 'Password is required.'
  }
])
const confirmPasswordRules = ref([
  value => {
    if (value === password.value) return true
    return 'Passwords are not equal.'
  }
])
const resetPassword = () => {
    if(password.value === confirmPassword.value) {
        Service.resetPassword(props.token, password.value)
    }
}
</script>
<style scoped>
.rinitialiser-le-mot {
    position: absolute;
    top: 80px;
    left: calc(50% - 311px);
    font-size: 40px;
    display: inline-block;
    width: 623px;
    height: 57px;
}

.veuillez-entrer-votre {
    position: absolute;
    top: 183px;
    left: calc(50% - 345px);
    font-size: 28px;
    font-weight: 500;
    display: inline-block;
    width: 690px;
    height: 37px;
}

.mot-de-passe-child {
    position: absolute;
    top: 0px;
    left: calc(50% - 267px);
    width: 534px;
    padding-left: 10px;
}

.mot-de-passe {
    position: absolute;
    top: 290px;
    left: calc(50% - 270px);
    width: 534px;
    height: 50px;
}

.confirme-le-mot-de-passe {
    position: absolute;
    top: 380px;
    left: calc(50% - 270px);
    width: 534px;
    height: 50px;
}

.nouveau-mot-de {
    position: absolute;
    top: 260px;
    left: calc(50% - 270px);
    text-align: left;
    display: inline-block;
    width: 492px;
    height: 30px;
}

.montrer {
    position: absolute;
    top: 263px;
    left: calc(50% + 190px);
    font-size: 18px;
    text-align: left;
    display: inline-block;
    width: 80px;
    height: 23px;
}

.retapez-le-nouveau {
    position: absolute;
    top: 370px;
    left: calc(50% - 270px);
    text-align: left;
    display: inline-block;
    width: 492px;
    height: 30px;
}

.vector-icon {
    position: absolute;
    top: 268px;
    left: calc(50% + 160px);
    width: 25px;
    height: 13px;
}

.group-child {
    position: absolute;
    top: 10px;
    left: calc(50% - 267px);
    border-radius: 10px;
    background-color: #3fdcfc;
    width: 534px;
    height: 76px;
    color: #fff;
    font-size: 20px;
}

.modifier-le-mot {
    position: absolute;
    top: 22px;
    left: calc(50% - 220px);
    display: inline-block;
    width: 440px;
    color: #fff;
    height: 32px;
}

.rectangle-parent {
    position: absolute;
    top: 464px;
    left: calc(50% - 270px);
    width: 534px;
    height: 76px;
    color: #fff;
}

.aprs-cliquer-sur-le-lien-de-c {
    position: relative;
    width: 100%;
    height: 693px;
    overflow: hidden;
    text-align: center;
    font-size: 20px;
    color: #000;
    font-family: Montserrat;
}</style>
  