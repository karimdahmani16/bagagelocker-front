<template>
    <BlockUI :blocked="blockUI">
        <div class="container">
            <ToastComponent></ToastComponent>
            <div class="mb-5">
                <NavBar />
            </div>
            <label class="col-12 connexion" style="margin-top:30px"><b>LOGIN</b></label>
            <button class="signin-button col-12 font-bold" @click="login">
                Login
            </button>
            <div class="col-12">
                <v-divider class="divider"></v-divider>
            </div>
            <label class="col-12 connexion"><b>REGISTER</b></label>
            <div class="form-group" >
                <!--<ButtonComponent class="signin-button col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12" outlined
                    @click="login" label="Se connecter"></ButtonComponent>-->
                <div class="row text-center">
                    <label for="email"></label>
                    <div class="col-12 form-outline" data-mdb-input-init>
                        <input v-model="email" type="email" id="typeEmail" class="form-control height"
                            placeholder="Enter your email" />
                        <label class="form-label" for="typeEmail"></label>
                    </div><!--
                    <v-text-field v-model="email" :rules="emailRules" label="E-mail" required clearable
                        variant="outlined" placeholder="Enter your email"
                        class="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12" type='text'></v-text-field>-->
                    <div class="col-12 form-group mb-4">
                        <div class="input-group" data-mdb-input-init>
                            <input v-model="password" :type="isPasswordType ? 'password' : 'text'"
                                placeholder="Enter your password" class="form-control height" />
                            <div class="input-group-addon div-icon">
                                <a href="" class="eyeicon">
                                    <i v-if="isPasswordType" class="bi bi-eye-slash" type="button"
                                        @click.prevent="setPasswordType"></i>
                                    <i v-else class="bi bi-eye" type="button" @click.prevent="setPasswordType"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <!--
                <div class="field">
                    <label for="password"></label>
                    <v-text-field v-model="password" :rules="passwordRules" label="Password" required clearable
                        variant="outlined" :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                        :type="show1 ? 'text' : 'password'" @click:append="show1 = !show1"
                        placeholder="Confirm your password"
                        class="password-field col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12"></v-text-field>
                    <small v-if="false">Password should be at least 8 characters</small>
                </div>-->

                    <div class="col-12 form-group mb-4">
                        <div class="input-group" data-mdb-input-init>
                            <input v-model="confirmpassword" :type="isConfirmPasswordType ? 'password' : 'text'"
                                placeholder="Confirm your password" class="form-control height" />
                            <div class="input-group-addon div-icon">
                                <a href="" class="eyeicon">
                                    <i v-if="isConfirmPasswordType" class="bi bi-eye-slash" type="button"
                                        @click.prevent="setConfirmPasswordType"></i>
                                    <i v-else class="bi bi-eye" type="button"
                                        @click.prevent="setConfirmPasswordType"></i>
                                </a>
                            </div>
                        </div>
                    </div><!--
                    <div class="field">
                        <label for="confirmpassword"></label>
                        <v-text-field v-model="confirmpassword" :rules="confirmPasswordRules" label="Confirm Password"
                            required clearable variant="outlined" :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                            :type="show1 ? 'text' : 'password'" @click:append="show1 = !show1"
                            placeholder="Confirm your password"
                            class="password-field col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12"></v-text-field>
                        <small v-if="false">Password should be at least 8 characters</small>
                    </div>
                    -->
                    <!--
                        <ButtonComponent class="signin-button col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12"
                        v-if="canRegister" label="S'inscrire" @click="register" outlined />
                        <ButtonComponent class="signin-button col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12" v-else
                        disabled label="S'inscrire" @click="register" outlined />
                    -->
                </div>
            </div>
            <button class="signin-button col-12 font-bold mb-3" @click="register">
                Sign up
            </button>
        </div>
    </BlockUI>
</template>

<script setup>
import NavBar from '@/components/base/en/NavBar.vue';
import { ref } from 'vue'
import { VDivider } from 'vuetify/lib/components/index.mjs';
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import Service from '@/core/Service';
import { useToast } from "primevue/usetoast";
import { createUserWithEmailAndPassword, getAuth, sendEmailVerification, signOut } from "firebase/auth";
const auth = getAuth();
const toast = useToast();
const router = useRouter()
const store = useStore()
let email = ref(null)
let password = ref(null)
let blockUI = ref(false)
let confirmpassword = ref(null)
let isPasswordType = ref(true)
const setPasswordType = () => {
    isPasswordType.value = !isPasswordType.value
}
let isConfirmPasswordType = ref(true)
const setConfirmPasswordType = () => {
    isConfirmPasswordType.value = !isConfirmPasswordType.value
}
const login = () => {
    router.push({
        name: "Login"
    })
}
const register = () => {
    blockUI.value = true
    if(email.value == null){
        blockUI.value = false
        toast.add({ severity: 'error', summary: 'Error', detail: 'Email is required!', life: 3500 });
        return
    }
    if(password.value == null){
        blockUI.value = false
        toast.add({ severity: 'error', summary: 'Error', detail: 'Password is required!', life: 3500 });
        return
    }
    if(confirmpassword.value == null){
        blockUI.value = false
        toast.add({ severity: 'error', summary: 'Error', detail: 'Confirm password is required!', life: 3500 });
        return
    }
    if(password.value.length < 6){
        blockUI.value = false
        toast.add({ severity: 'error', summary: 'Error', detail: 'Password should be at least 6 characters!', life: 3500 });
        return
    }
    if(password.value != confirmpassword.value){
        blockUI.value = false
        toast.add({ severity: 'error', summary: 'Error', detail: 'Passwords do not match!', life: 3500 });
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
    createUserWithEmailAndPassword(auth, email.value, password.value).then(response => {
        let email = response.user.email
        let username = response.user.displayName
        let enabled = response.user.emailVerified
        let photo = response.user.photoURL
        let telephone = response.user.phoneNumber
        sendEmailVerification(auth.currentUser).then(() => {
            console.log('verification email sent')
        }).catch(error => {
            console.log('error sending verification email' + error);
        })
        Service.register(email, username, enabled, photo, telephone).then(response => {
            blockUI.value = false
            toast.add({ severity: 'success', summary: 'User registered', detail: 'A verification email has been sent to you. Please confirm your email!', life: 10000 });
            store.commit('setUserId', response.data.user_id)
        }).catch(error => {
            blockUI.value = false
            console.log('error registering' + error);
        })
        signOut(auth).then(() => {
            console.log('signed out after registration')
        }).catch(error => {
            console.log('error signing out after registration' + error);
        })
    }).catch(error => {
        blockUI.value = false
        console.log('error firebase registering' + error);
        toast.add({ severity: 'error', summary: 'Error', detail: error.code, life: 3500 });
    })
}
</script>

<style scoped>
/* Extra small devices (phones, 600px and down) */
.div-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #efefef;
    width: 40px;
}

.height {
    height: 50px;
}

.eyeicon {
    color: #333;
}

.eyeicon:hover {
    color: #333
}

@media only screen and (max-width: 600px) {
    .ou {
        margin-top: 20px;
        text-align: center;

    }

    .connexion {
        text-align: center;
        font-size: 22px;
        color: #000;
        font-family: Montserrat;
        margin-top: -20px;
    }

    .forgot-password-button {
        color: #00eeff;
        text-align: start;
    }

    .password-field {
        margin-top: -20px;
    }

    .login-button {
        border-radius: 10px;
        border: 1px solid #000;
        box-sizing: border-box;
        background-color: #000000;
        color: #ffffff;
        font-size: 16px;
        width: 100%;
    }

    .gmail {
        width: 100%;
        height: 44px;
        font-size: 16px;
    }

    .signin-button {
        border-radius: 10px;
        border: 1px solid #000;
        box-sizing: border-box;
        background-color: #fff;
        color: #000;
        font-size: 16px;
    }
}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {
    .ou {
        margin-top: 20px;
        text-align: center;

    }

    .connexion {
        text-align: center;
        font-size: 22px;
        color: #000;
        font-family: Montserrat;
        margin-top: -20px;
    }

    .forgot-password-button {
        color: #00eeff;
        text-align: start;
    }

    .password-field {
        margin-top: -20px;
    }

    .login-button {
        border-radius: 10px;
        border: 1px solid #000;
        box-sizing: border-box;
        background-color: #000000;
        color: #ffffff;
        font-size: 16px;
    }

    .gmail {
        width: 100%;
        height: 44px;
        font-size: 16px;
    }

    .signin-button {
        border-radius: 10px;
        border: 1px solid #000;
        box-sizing: border-box;
        background-color: #fff;
        color: #000;
        font-size: 16px;
    }
}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {
    .connexion {
        text-align: center;
        font-size: 24px;
        color: #000;
        font-family: Montserrat;
    }

    .forgot-password-button {
        color: #00eeff;
        text-align: start;
    }

    .password-field {
        margin-top: -20px;
    }

    .login-button {
        border-radius: 10px;
        border: 1px solid #000;
        box-sizing: border-box;
        background-color: #000000;
        color: #ffffff;
        font-size: 16px;
    }

    .gmail {
        width: 100%;
        height: 44px;
        font-size: 16px;
    }

    .signin-button {
        border-radius: 10px;
        border: 1px solid #000;
        box-sizing: border-box;
        background-color: #fff;
        color: #000;
        font-size: 16px;
    }
}

/* Large devices (landscape tablets, 992px and up) */
@media only screen and (min-width: 992px) {
    .connexion {
        text-align: center;
        font-size: 24px;
        color: #000;
        font-family: Montserrat;
    }

    .forgot-password-button {
        color: #00eeff;
        text-align: start;
    }

    .password-field {
        margin-top: -20px;
    }

    .login-button {
        border-radius: 10px;
        border: 1px solid #000;
        box-sizing: border-box;
        background-color: #000000;
        color: #ffffff;
        font-size: 18px;
    }

    .gmail {
        width: 100%;
        height: 44px;
        font-size: 16px;
    }

    .signin-button {
        border-radius: 10px;
        border: 1px solid #000;
        box-sizing: border-box;
        background-color: #fff;
        color: #000;
        font-size: 18px;
    }
}

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
    .connexion {
        text-align: center;
        font-size: 26px;
        color: #000;
        font-family: Montserrat;
    }

    .forgot-password-button {
        color: #00eeff;
        text-align: start;
    }

    .password-field {
        margin-top: -20px;
    }

    .e-mail-field {
        text-align: center;
    }

    .login-button {
        border-radius: 10px;
        border: 1px solid #000;
        box-sizing: border-box;
        background-color: #000000;
        color: #ffffff;
        font-size: 20px;
    }

    .gmail {
        width: 100%;
        height: 44px;
        font-size: 16px;
    }

    .signin-button {
        border-radius: 10px;
        border: 1px solid #000;
        box-sizing: border-box;
        background-color: #fff;
        color: #000;
        font-size: 20px;
    }
}

/* XX large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1600px) {
    .connexion {
        text-align: center;
        font-size: 28px;
        color: #000;
        font-family: Montserrat;
        margin-bottom: 10px;
        margin-top: 5px;
    }

    .forgot-password-button {
        color: #00eeff;
        text-align: start;
    }

    .password-field {
        margin-top: -20px;
    }

    .e-mail-field {
        text-align: center;
    }

    .login-button {
        border-radius: 10px;
        border: 1px solid #000;
        box-sizing: border-box;
        background-color: #000000;
        color: #ffffff;
        font-size: 20px;
    }

    .signin-button {
        border-radius: 10px;
        border: 1px solid #000;
        box-sizing: border-box;
        background-color: #fff;
        color: #000;
        font-size: 20px;
    }

    .gmail {
        width: 100%;
        font-size: 16px;
    }
}
</style>