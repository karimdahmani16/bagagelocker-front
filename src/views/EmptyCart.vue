<template>
    <div class="container-fluid background-grey">
        <div class="row">
            <div class="col-12">
                <NavBar />
            </div>
        </div>
        <div class="row margin-top">
            <div class="col-12">
                <div class="card centered col-12">
                    <b class="panier-vide centered">Votre panier est actuellement vide.</b>
                    <ButtonComponent class="retour-button" label="Retour à la page d’accueil" outlined raised
                        @click="back" />
                </div>
            </div>
        </div>
        <div class="row">
            <PaymentsAcceptedCard class="col-12 mt-5 mb-5"></PaymentsAcceptedCard>
        </div>
    </div>
</template>
<script setup>
import NavBar from '../components/base/en/NavBar.vue';
import { useRouter } from 'vue-router'
import PaymentsAcceptedCard from '../components/cartpage/en/PaymentsAcceptedCard.vue'
const router = useRouter()
import { useStore } from 'vuex'
const store = useStore()
const back = () => {
    if (store.getters.selectedLanguage === 'pt') {
        router.push({
            name: "HomePortuguese"
        })
    } else if (store.getters.selectedLanguage === 'fr') {
        router.push({
            name: "HomeFrench"
        })
    } else if (store.getters.selectedLanguage === 'es') {
        router.push({
            name: "HomeSpanish"
        })
    } else {
        router.push({
            name: "Home"
        })
    }
}
</script>
<style scoped>
/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
    .margin-top {
        margin-top: 50px;
    }

    .background-grey {
        width: 100%;
        height: 100%;
        margin-top: 50px;
        background-color: #e9e9e9
    }

    .panier-vide {
        height: 253px;
        overflow: hidden;
        text-align: left;
        font-size: 24px;
        color: #000;
        font-family: Montserrat;
        white-space: nowrap;
    }

    .retour-button {
        background-color: #00cff4;
        color: #ffffff;
        border-radius: 20px;
        width: 310px;
        height: 60px;
        font-size: 18px;
        border-width: 0px;
        margin-top: -50px;
        margin-bottom: 20px;
    }

    .centered {
        display: flex;
        justify-content: center;
        align-items: center;
    }

}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {

    .margin-top {
        margin-top: 50px;
    }

    .background-grey {
        width: 100%;
        height: 100%;
        margin-top: 50px;
        background-color: #e9e9e9
    }

    .panier-vide {
        height: 253px;
        overflow: hidden;
        text-align: left;
        font-size: 32px;
        color: #000;
        font-family: Montserrat;
        white-space: nowrap;
    }

    .retour-button {
        background-color: #00cff4;
        color: #ffffff;
        border-radius: 20px;
        width: 369px;
        height: 75px;
        font-size: 18px;
        border-width: 0px;
        margin-top: -50px;
        margin-bottom: 20px;
    }

    .centered {
        display: flex;
        justify-content: center;
        align-items: center;
    }
}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {

    .margin-top {
        margin-top: 50px;
    }

    .background-grey {
        width: 100%;
        height: 100%;
        margin-top: 50px;
        background-color: #e9e9e9
    }

    .panier-vide {
        height: 253px;
        overflow: hidden;
        text-align: left;
        font-size: 32px;
        color: #000;
        font-family: Montserrat;
    }

    .retour-button {
        background-color: #00cff4;
        color: #ffffff;
        border-radius: 20px;
        width: 369px;
        height: 75px;
        font-size: 18px;
        border-width: 0px;
        margin-top: -50px;
        margin-bottom: 20px;
    }

    .centered {
        display: flex;
        justify-content: center;
        align-items: center;
    }
}

/* Large devices (landscape tablets, 992px and up) */
@media only screen and (min-width: 992px) {
    .margin-top {
        margin-top: 50px;
    }

    .background-grey {
        width: 100%;
        height: 100%;
        margin-top: 50px;
        background-color: #e9e9e9
    }

    .panier-vide {
        height: 253px;
        overflow: hidden;
        text-align: left;
        font-size: 40px;
        color: #000;
        font-family: Montserrat;
    }

    .retour-button {
        background-color: #00cff4;
        color: #ffffff;
        border-radius: 20px;
        width: 419px;
        height: 90px;
        font-size: 20px;
        border-width: 0px;
        margin-top: -50px;
        margin-bottom: 20px;
    }

    .centered {
        display: flex;
        justify-content: center;
        align-items: center;
    }

}

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
    .margin-top {
        margin-top: 50px;
    }

    .background-grey {
        width: 100%;
        height: 100%;
        margin-top: 50px;
        background-color: #e9e9e9
    }

    .panier-vide {
        height: 253px;
        overflow: hidden;
        text-align: left;
        font-size: 40px;
        color: #000;
        font-family: Montserrat;
    }

    .retour-button {
        background-color: #00cff4;
        color: #ffffff;
        border-radius: 20px;
        width: 419px;
        height: 90px;
        font-size: 20px;
        border-width: 0px;
        margin-top: -50px;
        margin-bottom: 20px;
    }

    .centered {
        display: flex;
        justify-content: center;
        align-items: center;
    }

}

/* XX large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1600px) {
    .margin-top {
        margin-top: 50px;
    }

    .background-grey {
        width: 100%;
        height: 100%;
        margin-top: 50px;
        background-color: #e9e9e9
    }

    .panier-vide {
        height: 253px;
        overflow: hidden;
        text-align: left;
        font-size: 40px;
        color: #000;
        font-family: Montserrat;
    }

    .retour-button {
        background-color: #00cff4;
        color: #ffffff;
        border-radius: 20px;
        width: 419px;
        height: 90px;
        font-size: 20px;
        border-width: 0px;
        margin-top: -50px;
        margin-bottom: 20px;
    }

    .centered {
        display: flex;
        justify-content: center;
        align-items: center;
    }
}
</style>