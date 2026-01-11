<template>
  <BlockUI :blocked="blockUI">
    <div class="container">
      <ToastComponent></ToastComponent>
      <div class="mb-5">
        <NavBar />
      </div>
      <label class="col-12 connexion" style="margin-top:30px"><b>LOGIN</b></label>
      <div class="form-group mt-3">
        <div class="row text-center">
          <div class="col-xs-0 col-lg-1"></div>
          <div class="col-xs-12 col-lg-10">
            <div class="col-12 form-outline" data-mdb-input-init>
              <input v-model="email" type="email" id="typeEmail" class="form-control height" placeholder="Email" />
              <label class="form-label" for="typeEmail"></label>
            </div>
            <div class="col-12 form-group mb-4">
              <div class="input-group" data-mdb-input-init>
                <input v-model="password" :type="isPasswordType ? 'password' : 'text'" placeholder="Password"
                  class="form-control height" />
                <div class="input-group-addon div-icon">
                  <a href="" class="eyeicon">
                    <i v-if="isPasswordType" class="bi bi-eye-slash" type="button" @click.prevent="setPasswordType"></i>
                    <i v-else class="bi bi-eye" type="button" @click.prevent="setPasswordType"></i>
                  </a>
                </div>
              </div>
            </div>
            <button class="login-button col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 font-bold"
              @click="emailSignin">Login</button>
            <button class="forgot-password-button col-xs-6 col-md-4 col-lg-4 col-xl-3 mt-2 flex text-start" type="link"
              @click="forgotPassword">Forgot password?</button>
            <div class="col-12">
              <v-divider class="divider"></v-divider>
            </div>
            <label class="col-12 connexion"><b>OR</b></label>
            <div class="col-12">
              <v-divider class="divider"></v-divider>
            </div>
            <div class="col-12 text-center">
              <div class="col-12">
                <GoogleButton class="shadow width-100" @click="gmailSignin"></GoogleButton>
              </div>
              <!--<div class="col-12">
                <FacebookButton class="shadow apple-button-small width-100" @click="facebookSignin"></FacebookButton>
              </div>-->
              <!--<div class="col-12">
                <AppleButton class="shadow btn-apple-small" @click="appleSignin"></AppleButton>
              </div>
              -->
            </div>
            <div class="col-12">
              <v-divider class="divider"></v-divider>
            </div>
            <label class="col-12 connexion mb-2"><b>REGISTER</b></label>
            <ButtonComponent class="signin-button col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 mb-5" outlined
              @click="signup" label="Sign up"></ButtonComponent>
          </div>
          <div class="col-xs-0 col-lg-1"></div>
        </div>
      </div>
    </div>
  </BlockUI>
</template>

<script setup>
import NavBar from '@/components/base/en/NavBar.vue';
import { ref } from 'vue'
import GoogleButton from '@/components/loginpage/GoogleButton.vue'
//import AppleButton from '@/components/loginpage/AppleButton.vue'
//import FacebookButton from '@/components/loginpage/FacebookButton.vue'
import { VDivider } from 'vuetify/lib/components/index.mjs';
import { useRouter } from 'vue-router'
import { getAuth, signInWithPopup, signInWithEmailAndPassword, GoogleAuthProvider, signOut } from 'firebase/auth'
import Service from '@/core/Service';
import { useStore } from 'vuex'
import { useToast } from "primevue/usetoast";
let isPasswordType = ref(true)
const store = useStore()
const toast = useToast();
const router = useRouter()
let email = ref(null)
let password = ref(null)
let blockUI = ref(false)
const auth = getAuth()
auth.languageCode = 'en'

const setPasswordType = () => {
  isPasswordType.value = !isPasswordType.value
}
const successfulSignin = () => {
  console.log("successful signin: cartId=" + store.getters.cartId);
  if (store.getters.cartId != null) {
    Service.updateCartUser(store.getters.cartId, store.getters.userId).then(response => {
      if (response.data != -1) {
        router.push({
          name: "CartPage"
        })
      } else {
        router.push({
          name: "Home"
        })
      }
    }).catch(error => {
      console.log("error updating cart user: " + error);
    })
  } else {
    router.push({
      name: "Home"
    })
  }
}
const emailSignin = () => {
  blockUI.value = true
  console.log("loggin in");
  if (email.value === null || email.value === "") {
    blockUI.value = false
    toast.add({ severity: 'error', summary: 'Email is required', detail: 'Please enter your email!', life: 3500 });
    return
  }
  if (!email.value.includes('@')) {
    blockUI.value = false
    toast.add({ severity: 'error', summary: 'Error', detail: 'Invalid email!', life: 3500 });
    return
  }
  if (!email.value.includes('.')) {
    blockUI.value = false
    toast.add({ severity: 'error', summary: 'Error', detail: 'Invalid email!', life: 3500 });
    return
  }
  if (password.value === null || password.value === "") {
    blockUI.value = false
    toast.add({ severity: 'error', summary: 'Password is required', detail: 'Please enter your password!', life: 3500 });
    return
  }
  if (password.value.length < 6) {
    blockUI.value = false
    toast.add({ severity: 'error', summary: 'Password is too short', detail: 'Please enter a password with at least 6 characters!', life: 3500 });
    return
  }
  let userId = ref(null)
  Service.getUserByEmail(email.value).then(response => {
    console.log("userid=" + response.data.id)
    userId.value = response.data.id
    if (userId.value === null || userId.value === "") {
      blockUI.value = false
      toast.add({ severity: 'error', summary: 'Error', detail: 'User not found!', life: 3500 });
      return
    }
    signInWithEmailAndPassword(auth, email.value, password.value).then(response => {
      if (!response.user.emailVerified) {
        blockUI.value = false
        toast.add({ severity: 'error', summary: 'Email not verified', detail: 'Please verify your email address!', life: 3500 });
        signOut(auth)
        return
      }
      store.commit('setUserId', userId.value)
      blockUI.value = false
      successfulSignin()
    }).catch(error => {
      blockUI.value = false
      console.log('error signing in firebase: ' + error);
      const errorCode = error.code;
      if (errorCode === "auth/invalid-credential") {
        toast.add({ severity: 'error', summary: 'Wrong credentials', detail: 'Your email or password is wrong!', life: 3500 });
      } else {
        toast.add({ severity: 'error', summary: 'Error', detail: errorCode, life: 3500 });
      }
    })
  }).catch(error => {
    blockUI.value = false
    console.log('error signing in' + error);
    toast.add({ severity: 'error', summary: 'Error', detail: error, life: 3500 });

  })
}
const gmailSignin = () => {
  const provider = new GoogleAuthProvider()
  signInWithPopup(auth, provider).then((result) => {
    //const credential = GoogleAuthProvider.credentialFromResult(result)
    const user = result.user
    Service.getUserByEmail(user.email).then(response => {
      if (response.data === null || response.data === "") {
        Service.register(user.email, user.displayName, true, user.photoURL, user.phoneNumber).then(response => {
          // {"access_token":null,"error":null,"user_id":1403}
          if (response.data.error != null) {
            toast.add({ severity: 'error', summary: 'Error', detail: response.data.error, life: 3500 });
          }
          else {
            store.commit('setUserId', response.data.user_id)
            successfulSignin()
          }
        }).catch(error => {
          toast.add({ severity: 'error', summary: 'Error', detail: "error: " + error, life: 3500 });
        })
      } else {
        console.log("setting userId id: " + response.data.id);
        store.commit('setUserId', response.data.id)
        successfulSignin()
      }
    })
  }).catch((error) => {
    toast.add({ severity: 'error', summary: 'Error', detail: error.code, life: 3500 });
  })
}
/*
const facebookSignin = () => {
  const provider = new FacebookAuthProvider()
  signInWithPopup(auth, provider).then((result) => {
    //const credential = GoogleAuthProvider.credentialFromResult(result)
    const user = result.user
    console.log("result=" + result);
    console.log("result.user=" + result.user);
    Service.getUserByEmailAndProvider(user.email, "FACEBOOK").then(response => {
      if (response.data === null || response.data === "") {
        console.log("registering user: " + user.email + " " + user.displayName + " " + user.photoURL + " " + user.phoneNumber);
        Service.registerByFacebook(null, user.email, user.displayName, true, user.photoURL, user.phoneNumber).then(response => {
          // {"access_token":null,"error":null,"user_id":1403}
          if (response.data.error != null) {
            toast.add({ severity: 'error', summary: 'Error', detail: response.data.error, life: 3500 });
          }
          else {
            store.commit('setUserId', response.data.user_id)
            router.push({
              name: "Home"
            })
            toast.add({ severity: 'success', summary: 'Success', detail: "Welcome " + (user.displayName != null ? user.displayName : user.email) + "! You have been successfully registered!", life: 3500 });
          }
        }).catch(error => {
          toast.add({ severity: 'error', summary: 'Error', detail: "error: " + error, life: 3500 });
        })
      } else {
        console.log("setting userId id: " + response.data.id);
        store.commit('setUserId', response.data.id)
        router.push({
          name: "Home"
        })
      }
    })
  }).catch((error) => {
    toast.add({ severity: 'error', summary: 'Error', detail: error.code, life: 3500 });
  })
}
*/
/*
const appleSignin = () => {
  const provider = new OAuthProvider('apple.com')
  signInWithPopup(auth, provider).then((result) => {
    //const credential = GoogleAuthProvider.credentialFromResult(result)
    const user = result.user
    console.log("result=" + result);
    console.log("result.user=" + result.user);
    Service.getUserByEmailAndProvider(user.email, "APPLE").then(response => {
      if (response.data === null || response.data === "") {
        console.log("registering user: " + user.email + " " + user.displayName + " " + user.photoURL + " " + user.phoneNumber);
        Service.registerByApple(null, user.email, user.displayName, true, user.photoURL, user.phoneNumber).then(response => {
          // {"access_token":null,"error":null,"user_id":1403}
          if (response.data.error != null) {
            toast.add({ severity: 'error', summary: 'Error', detail: response.data.error, life: 3500 });
          }
          else {
            store.commit('setUserId', response.data.user_id)
            router.push({
              name: "Home"
            })
            toast.add({ severity: 'success', summary: 'Success', detail: "Welcome " + (user.displayName != null ? user.displayName : user.email) + "! You have been successfully registered!", life: 3500 });
          }
        }).catch(error => {
          toast.add({ severity: 'error', summary: 'Error', detail: "error: " + error, life: 3500 });
        })
      } else {
        console.log("setting userId id: " + response.data.id);
        store.commit('setUserId', response.data.id)
        router.push({
          name: "Home"
        })
      }
    })
  }).catch((error) => {
    toast.add({ severity: 'error', summary: 'Error', detail: error.code, life: 3500 });
  })
}
*/


const forgotPassword = () => {
  router.push({
    name: "ForgotPassword"
  })
}



const signup = () => {
  router.push({
    name: "SignupPage"
  })
}
</script>

<style scoped>
.eyeicon {

  color: #333;
}

.div-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #efefef;
  width: 40px;
}

.margin-right-5 {
  margin-right: 5px;
}

.eyeicon:hover {
  color: #333
}

.zindex-1 {
  z-index: 100;
}

.zindex-2 {
  z-index: 200;
}

.height {
  height: 50px;
}

.width-100 {
  width: 100%;
}

.facebook-signin-small {
  width: 100%;
  height: 44px;
  font-size: 16px;
  margin-top: 20px;
}

.btn-facebook {
  color: #fff;
  background-color: #3b5998;
  border-color: rgba(0, 0, 0, 0.2);
}

.btn-social-small {
  position: relative;
  padding-left: 44px;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.btn-social {
  position: relative;
  padding-left: 44px;
  text-align: left;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.btn-social :first-child {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 40px;
  padding: 7px;
  font-size: 1.5em;
  text-align: center;
  border-right: 1px solid rgba(0, 0, 0, 0.2);
}

.btn-apple {
  color: #fff;
  background-color: #000;
  width: 250px;
  border-color: rgba(0, 0, 0, 0.2);
}

.btn-apple-small {
  color: #fff;
  background-color: #000;
  width: 100%;
  border-color: rgba(0, 0, 0, 0.2);
}

/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
  .connexion {
    text-align: center;
    font-size: 22px;
    color: #000;
    font-family: Montserrat;
    margin-top: -20px;
    margin-bottom: -20px;
  }

  .forgot-password-button {
    color: #00eeff;
    text-align: start;
    font-weight: 500;
    text-decoration: underline;
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
    height: 44px;
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
    width: 100%;
  }
}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {
  .connexion {
    text-align: center;
    font-size: 22px;
    color: #000;
    font-family: Montserrat;
    margin-top: -20px;
    margin-bottom: -20px;
  }

  .forgot-password-button {
    color: #00eeff;
    text-align: start;
    font-weight: 500;
    text-decoration: underline;
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
    height: 44px;
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
    margin-bottom: -20px;
  }

  .forgot-password-button {
    color: #00eeff;
    text-align: start;
    font-weight: 500;
    text-decoration: underline;
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
    height: 44px;
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
    margin-bottom: -20px;
    font-family: Montserrat;
  }

  .forgot-password-button {
    color: #00eeff;
    text-align: start;
    font-weight: 500;
    text-decoration: underline;
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
    height: 44px;
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
    margin-bottom: -20px;
  }

  .forgot-password-button {
    color: #00eeff;
    text-align: start;
    font-weight: 500;
    text-decoration: underline;
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
    height: 44px;
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
    margin-bottom: -20px;
    font-family: Montserrat;
  }

  .forgot-password-button {
    color: #00eeff;
    text-align: start;
    font-weight: 500;
    text-decoration: underline;
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
    height: 44px;
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
