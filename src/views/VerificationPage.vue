<template>
    <div class="vrification-layout">
        <b class="coordonnes">COORDONNÉES</b>
        <div class="votre-adresse-e-mail-container">
            <p class="votre-adresse-e-mail">
                Votre adresse e-mail est requise pour recevoir les informations
            </p>
            <p class="de-votre-commande">de votre commande par E-mail</p>
        </div>
        <div class="mail-adresse">
            <div class="mail-adresse-child" />
            <div class="testgmailcom">
                <v-text-field v-model="email" :rules="emailRules" label="E-mail" hide-details required rounded clearable
                    variant="solo" placeholder="Enter your email" class="e-mail-child"></v-text-field>
            </div>
        </div>
        <div class="bouton-continuer">
            <div class="bouton-continuer-child" />
            <div class="continuer" @click="confirm">Continuer</div>
        </div>
        <div class="vector-parent">
            <VTimeline truncate-line="both" side="end" direction="horizontal" line-inset="0">
                <VTimelineItem v-for="item in events" :key="item.number" fill-dot class="mb-12" dot-color="grey-lighten-4"
                    size="x-large">
                    <template v-slot:icon>
                        <span v-if="item.number == 2" class="timeline-number-selected">{{ item.number }}</span>
                        <span v-else class="timeline-number">{{ item.number }}</span>
                    </template>
                    <div v-if="item.number == 2" class="timeline-status-selected">{{ item.status }}</div>
                    <div v-else class="timeline-status">{{ item.status }}</div>
                </VTimelineItem>
            </VTimeline>
        </div>
    </div>
</template>
<script setup>
import { defineProps, ref } from "vue"
import { useRouter } from 'vue-router'
import Service from "@/core/Service";
const router = useRouter()
import { VTimeline, VTimelineItem, VTextField } from "vuetify/lib/components/index.mjs";
const props = defineProps({
    startDate: String,
    endDate: String,
    userId: Number,
    boxCount: Number,
    cartId: Number
})
const events = ref([
    { status: 'Se connecter', number: '1', icon: 'pi pi-shopping-cart', color: '#9C27B0', image: 'game-controller.jpg' },
    { status: 'Vérification', number: '2', icon: 'pi pi-cog', color: '#673AB7' },
    { status: 'Paiement', number: '3', icon: 'pi pi-shopping-cart', color: '#FF9800' },
    { status: 'Validation', number: '4', icon: 'pi pi-check', color: '#607D8B' },
    { status: 'Terminé', number: '5', icon: 'pi pi-check', color: '#607D8B' }
])
const emailRules = [
    value => {
        if (value) return true
        return 'E-mail is required.'
    },
    value => {
        if (/.+@.+\..+/.test(value)) return true

        return 'E-mail must be valid.'
    },
]
let email = ref(null)
function confirm() {
    Service.assignUserToCart(props.cartId, email.value).then((resp) => {
    console.log("$$$$ resp.data $$$$$ = " + resp.data);
    router.push({
      name: "PaymentPage", params: {
        startDate: props.startDate,
        endDate: props.endDate,
        userId: 952,
        boxCount: props.boxCount,
        cartId: props.cartId
      }
    })
  }).catch((error) => {
    console.log("error when create order: " + error)
  })
    /*
    router.push({name: "PaymentPage",
    params: {
      startDate: props.startDate,
      endDate: props.endDate,
      userId: 952,
      boxCount: props.boxCount
    }})*/
    console.log("cartId="+props.cartId);
    /*axios.post('/reservation/create', { "startDate": props.startDate, "endDate": props.endDate, "userId": props.userId, "boxCount": props.boxCount }).then((resp) => {
        console.log("$$$$ resp.data $$$$$ = " + resp.data);
        router.push({
        name: "PaymentPage", params: {
            startDate: props.startDate,
            endDate: props.endDate,
            userId: props.userId,
            boxCount: props.boxCount
        }
    })
    }).catch((error) => {
        console.log("error when create order: " + error)
    })*/
}
</script>
<style scoped>
.timeline-number {
    font-size: 24;
    color: #333333;
}

.timeline-number-selected {
    font-size: 24;
    color: #3662DC;
}

.timeline-status {
    font-size: 24px;
    color: #333333;
}

.timeline-status-selected {
    font-size: 24px;
    font-weight: 800;
    color: #515151;
}


.coordonnes {
    position: absolute;
    top: 320px;
    left: calc(50% - 445px);
    font-size: 48px;
    display: inline-block;
    width: 465px;
    height: 60px;
}

.votre-adresse-e-mail {
    margin-block-start: 0;
    margin-block-end: 14px;
}

.de-votre-commande {
    margin: 0;
}

.votre-adresse-e-mail-container {
    position: absolute;
    top: 398px;
    left: calc(50% - 445px);
    font-weight: 500;
    color: #373737;
    display: inline-block;
    width: 890px;
    height: 32px;
}

.mail-adresse-child {
    position: absolute;
    top: 0px;
    left: calc(50% - 385px);
    border-radius: 27px;
    border: 2px solid #959595;
    box-sizing: border-box;
    width: 770px;
    height: 62px;
    outline: none;
}

.testgmailcom {
    position: absolute;
    top: 2px;
    left: calc(50% - 383px);
    width: 765px;
    height: 33px;
}

.mail-adresse {
    position: absolute;
    top: 510px;
    left: calc(50% - 445px);
    width: 770px;
    height: 70px;
    font-size: 24px;
    color: #373737;
}

.bouton-continuer-child {
    position: absolute;
    top: 0px;
    left: calc(50% - 385px);
    background-color: #3fdcfc;
    width: 770px;
    height: 70px;
    cursor: pointer;
}

.continuer {
    position: absolute;
    top: 17px;
    left: calc(50% - 85px);
    font-weight: 600;
    display: inline-block;
    width: 170px;
    height: 36px;
    cursor: pointer;
}

.bouton-continuer {
    position: absolute;
    top: 611px;
    left: calc(50% - 445px);
    width: 770px;
    height: 70px;
    color: #fff;
}

.frame-child {
    position: absolute;
    top: 37.5px;
    left: 107px;
    width: 1290px;
    height: 3px;
}

.group-child {
    position: absolute;
    top: 0px;
    left: 0px;
    border-radius: 50%;
    border: 2px solid #b8b8b8;
    box-sizing: border-box;
    width: 68px;
    height: 68.5px;
}

.div1 {
    position: absolute;
    top: 15px;
    left: 29px;
    font-weight: 500;
    display: inline-block;
    width: 10.58px;
    height: 25.12px;
}

.ellipse-parent {
    position: relative;
    width: 68px;
    height: 68.5px;
}

.se-connecter {
    position: relative;
    font-size: 22px;
    font-weight: 500;
    color: #515151;
}

.group-parent {
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: 24px;
}

.div {
    position: absolute;
    top: 5px;
    left: 0px;
    overflow: hidden;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
}

.group-item {
    position: absolute;
    top: 0px;
    left: 0px;
    border-radius: 50%;
    background-color: #eff6ff;
    border: 2px solid #b8b8b8;
    box-sizing: border-box;
    width: 68px;
    height: 68px;
}

.div3 {
    position: absolute;
    top: 16px;
    left: 24px;
    font-weight: 500;
    display: inline-block;
    width: 20px;
    height: 35px;
}

.ellipse-group {
    position: relative;
    width: 68px;
    height: 68px;
}

.vrification {
    position: relative;
    font-size: 22px;
    font-weight: 600;
    color: #000;
}

.group-container {
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: 29px;
}

.div2 {
    position: absolute;
    top: 0px;
    left: 345px;
    overflow: hidden;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    color: #3662dc;
}

.group-inner {
    position: absolute;
    top: 0px;
    left: 0px;
    border-radius: 50%;
    background-color: #fff;
    border: 2px solid #b8b8b8;
    box-sizing: border-box;
    width: 68px;
    height: 68px;
}

.frame-div {
    position: absolute;
    top: 0px;
    left: 695px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 29px;
}

.div6 {
    position: absolute;
    top: 16px;
    left: 23.5px;
    font-weight: 500;
    display: inline-block;
    width: 20px;
    height: 35px;
}

.div5 {
    position: absolute;
    top: 0px;
    left: 1033px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: 29px;
}

.group-child1 {
    position: absolute;
    top: 0px;
    left: 0px;
    border-radius: 50%;
    border: 2px solid #b8b8b8;
    box-sizing: border-box;
    width: 68px;
    height: 68px;
}

.div7 {
    position: absolute;
    top: 0px;
    left: 1384px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: 29px;
}

.vector-parent {
    position: absolute;
    top: 60px;
    left: calc(50% - 743px);
    width: 1485px;
    height: 148px;
    overflow: hidden;
    font-size: 32px;
}

.vrification-layout {
    position: relative;
    width: 100%;
    height: 770px;
    overflow: hidden;
    text-align: left;
    font-size: 28px;
    color: #000;
    font-family: Montserrat;
}
</style>
  