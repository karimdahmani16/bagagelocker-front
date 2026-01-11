<template>
    <div class="validation-layout">
        <b class="vrifiez-votre-rservation">VÉRIFIEZ VOTRE RÉSERVATION</b>
        <div class="commande">COMMANDE</div>
        <div class="validation-layout-child" />
        <div class="mon-panier">
            <div class="mon-panier-child" />
            <div class="mon-panier1">Mon panier</div>
            <div class="prix">
                <div class="prix1">Prix :</div>
                <b class="b">5.00 €</b>
            </div>
            <div class="date-de-dpt">
                <div class="date-de-dpt1">Date de dépôt :</div>
                <div class="div">26/08/2023</div>
            </div>
            <div class="nombre-de-box">
                <div class="nombre-de-box1">Nombre de box :</div>
                <div class="div1">1</div>
            </div>
            <div class="date-de-retrait">
                <div class="date-de-dpt1">Date de retrait :</div>
                <div class="div">27/08/2023</div>
            </div>
            <!--<img class="image-box-icon" alt="" src="../assets/validationpage/image-box@2x.png" />-->
            <b class="x">x</b>
        </div>
        <div class="total">
            <div class="total-child" />
            <b class="total1">Total</b>
            <div class="sous-total">
                <div class="sous-total1">Sous-total</div>
                <div class="div3">€5.00</div>
            </div>
            <div class="total-tva-incluse">
                <div class="total-tva-incluse1">Total (TVA incluse)</div>
                <div class="div4">€5.00</div>
            </div>
            <div class="total-item" />
            <div class="total-inner" />
            <div class="bouton-valider-le-paiement">
                <div class="rectangle-parent">
                    <div class="group-child" />
                    <div class="valider-le-paiement" @click="confirm">VALIDER LE PAIEMENT</div>
                </div>
            </div>
            <div class="par-votre-commande">
                Par votre commande, vous acceptez nos conditions générales de vente et
                notre politique de protection des données personnelles.
            </div>
        </div>
        <div class="vector-parent">
            <VTimeline truncate-line="both" side="end" direction="horizontal" line-inset="0">
                <VTimelineItem v-for="item in events" :key="item.number" fill-dot class="mb-12" dot-color="grey-lighten-4"
                    size="x-large">
                    <template v-slot:icon>
                        <span v-if="item.number == 4" class="timeline-number-selected">{{ item.number }}</span>
                        <span v-else class="timeline-number">{{ item.number }}</span>
                    </template>
                    <div v-if="item.number == 4" class="timeline-status-selected">{{ item.status }}</div>
                    <div v-else class="timeline-status">{{ item.status }}</div>
                </VTimelineItem>
            </VTimeline>
        </div>
    </div>
</template>
<script setup>
import { defineProps, ref } from "vue";
import { VTimeline, VTimelineItem } from "vuetify/lib/components/index.mjs";
import { useRouter } from 'vue-router'
//import Service from "@/core/Service";
import axios from 'axios';
axios.defaults.baseURL = 'https://bagagelocker-api.onrender.com/api/v1';
const router = useRouter()
const props = defineProps({
    startDate: String,
    endDate: String,
    userId: Number,
    boxCount: Number
})
const events = ref([
    { status: 'Se connecter', number: '1', icon: 'pi pi-shopping-cart', color: '#9C27B0', image: 'game-controller.jpg' },
    { status: 'Vérification', number: '2', icon: 'pi pi-cog', color: '#673AB7' },
    { status: 'Paiement', number: '3', icon: 'pi pi-shopping-cart', color: '#FF9800' },
    { status: 'Validation', number: '4', icon: 'pi pi-check', color: '#607D8B' },
    { status: 'Terminé', number: '5', icon: 'pi pi-check', color: '#607D8B' }
])
async function confirm() {
    try {
        const resp = await axios.post('/reservation/create', { "startDate": props.startDate, "endDate": props.endDate, "userId": props.userId, "boxCount": props.boxCount })
        //Service.createOrder(props.startDate, props.endDate, props.userId, props.boxCount)
        console.log("$$$$ resp $$$$$ = " + resp.reservations);
        router.push({ name: "TerminePage" })
    } catch(error) {
        console.log("error when create order: " + error)
    }
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

.vrifiez-votre-rservation {
    position: absolute;
    top: 288px;
    left: calc(50% - 850px);
    font-size: 40px;
    display: inline-block;
    width: 788px;
    height: 43px;
}

.commande {
    position: absolute;
    top: 373px;
    left: calc(50% - 850px);
    font-size: 28px;
    font-weight: 500;
    display: inline-block;
    width: 270px;
    height: 37px;
}

.validation-layout-child {
    position: absolute;
    top: 349.5px;
    left: calc(50% - 845.5px);
    border-top: 1px solid #aeaeae;
    box-sizing: border-box;
    width: 784px;
    height: 1px;
}

.mon-panier-child {
    position: absolute;
    top: 0px;
    left: calc(50% - 497.5px);
    background-color: #fff;
    border: 1px solid #707070;
    box-sizing: border-box;
    width: 995px;
    height: 410px;
}

.mon-panier1 {
    position: absolute;
    top: 22.22px;
    left: calc(50% - 473.5px);
    font-size: 40px;
    font-weight: 600;
    display: inline-block;
    width: 301px;
    height: 66.67px;
}

.prix1 {
    position: absolute;
    top: 0px;
    left: calc(50% - 84px);
    font-weight: 500;
    display: inline-block;
    width: 73px;
    height: 40px;
}

.b {
    position: absolute;
    top: 0px;
    left: calc(50% - 11px);
    display: inline-block;
    color: #ff0000;
    width: 95px;
    height: 40px;
}

.prix {
    position: absolute;
    top: 281.11px;
    left: calc(50% - 82.5px);
    width: 168px;
    height: 40px;
}

.date-de-dpt1 {
    position: absolute;
    top: 0px;
    left: calc(50% - 201.5px);
    font-weight: 500;
    display: inline-block;
    width: 215px;
    height: 43.33px;
}

.div {
    position: absolute;
    top: 0px;
    left: calc(50% + 28.5px);
    font-weight: 600;
    color: #000;
    display: inline-block;
    width: 173px;
    height: 43.33px;
}

.date-de-dpt {
    position: absolute;
    top: 147.78px;
    left: calc(50% - 82.5px);
    width: 403px;
    height: 43.33px;
    color: #373737;
}

.nombre-de-box1 {
    position: absolute;
    top: 0px;
    left: calc(50% - 130px);
    font-weight: 500;
    display: inline-block;
    width: 230px;
    height: 43.33px;
}

.div1 {
    position: absolute;
    top: 0px;
    left: calc(50% + 100px);
    font-weight: 600;
    color: #000;
    display: inline-block;
    width: 30px;
    height: 43.33px;
}

.nombre-de-box {
    position: absolute;
    top: 81.11px;
    left: calc(50% - 82.5px);
    width: 260px;
    height: 43.33px;
    color: #373737;
}

.date-de-retrait {
    position: absolute;
    top: 214.44px;
    left: calc(50% - 82.5px);
    width: 403px;
    height: 43.33px;
    color: #373737;
}

.image-box-icon {
    position: absolute;
    top: 120px;
    left: calc(50% - 486.5px);
    width: 344px;
    height: 195.56px;
    object-fit: cover;
}

.x {
    position: absolute;
    top: 28.89px;
    left: calc(50% + 446.5px);
    font-size: 34px;
    display: inline-block;
    width: 21px;
    height: 45.56px;
}

.mon-panier {
    position: absolute;
    top: 450px;
    left: calc(50% - 850px);
    width: 995px;
    height: 410px;
}

.total-child {
    position: absolute;
    top: 0px;
    left: calc(50% - 335px);
    background-color: #f2f2f2;
    border: 1px solid #707070;
    box-sizing: border-box;
    width: 670px;
    height: 572px;
}

.total1 {
    position: absolute;
    top: 20px;
    left: calc(50% - 305px);
    font-size: 40px;
    display: inline-block;
    width: 301px;
    height: 60px;
}

.sous-total1 {
    position: absolute;
    top: 0px;
    left: calc(50% - 312.5px);
    font-weight: 500;
    display: inline-block;
    width: 152px;
    height: 23px;
}

.div3 {
    position: absolute;
    top: 0px;
    left: calc(50% + 232.5px);
    font-weight: 500;
    display: inline-block;
    width: 80px;
    height: 23px;
}

.sous-total {
    position: absolute;
    top: 112px;
    left: calc(50% - 310px);
    width: 625px;
    height: 23px;
    color: #373737;
}

.total-tva-incluse1 {
    position: absolute;
    top: 0px;
    left: calc(50% - 312.5px);
    font-weight: 600;
    display: inline-block;
    width: 249px;
    height: 23px;
}

.div4 {
    position: absolute;
    top: 2px;
    left: calc(50% + 232.5px);
    font-weight: 600;
    display: inline-block;
    width: 80px;
    height: 20px;
}

.total-tva-incluse {
    position: absolute;
    top: 175px;
    left: calc(50% - 310px);
    width: 625px;
    height: 23px;
}

.total-item {
    position: absolute;
    top: 155.5px;
    left: calc(50% - 310.5px);
    border-top: 1px solid #aeaeae;
    box-sizing: border-box;
    width: 626px;
    height: 1px;
}

.total-inner {
    position: absolute;
    top: 219.5px;
    left: calc(50% - 310.5px);
    border-top: 1px solid #aeaeae;
    box-sizing: border-box;
    width: 626px;
    height: 1px;
}

.group-child {
    position: absolute;
    top: 0px;
    left: calc(50% - 222px);
    background-color: #000;
    width: 444px;
    height: 76px;
}

.valider-le-paiement {
    position: absolute;
    top: 22px;
    left: calc(50% - 172px);
    font-weight: 600;
    display: inline-block;
    width: 344px;
    height: 32px;
    cursor: pointer;
}

.rectangle-parent {
    position: absolute;
    top: 0px;
    left: calc(50% - 222px);
    width: 444px;
    height: 76px;
    cursor: pointer;
}

.bouton-valider-le-paiement {
    position: absolute;
    top: 311px;
    left: calc(50% - 222px);
    width: 444px;
    height: 76px;
    font-size: 28px;
    color: #fff;
    cursor: pointer;
}

.par-votre-commande {
    position: absolute;
    top: 429px;
    left: calc(50% - 268px);
    font-size: 20px;
    font-weight: 500;
    color: #373737;
    display: inline-block;
    width: 536px;
    height: 30px;
}

.total {
    position: absolute;
    top: 288px;
    left: calc(50% + 180px);
    width: 670px;
    height: 572px;
}

.frame-child {
    position: absolute;
    top: 37.5px;
    left: 107px;
    width: 1290px;
    height: 3px;
}

.group-item {
    position: absolute;
    top: 0px;
    left: 0px;
    border-radius: 50%;
    border: 2px solid #b8b8b8;
    box-sizing: border-box;
    width: 68px;
    height: 68.5px;
}

.div6 {
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

.div5 {
    position: absolute;
    top: 5px;
    left: 0px;
    overflow: hidden;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
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

.div8 {
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

.group-container {
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: 29px;
}

.div7 {
    position: absolute;
    top: 0px;
    left: 345px;
    overflow: hidden;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
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

.group-child1 {
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

.div11 {
    position: absolute;
    top: 16px;
    left: 23.5px;
    font-weight: 500;
    display: inline-block;
    width: 20px;
    height: 35px;
}

.validation {
    position: relative;
    font-size: 22px;
    font-weight: 600;
    color: #000;
}

.div10 {
    position: absolute;
    top: 0px;
    left: 1033px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: 29px;
    color: #3662dc;
}

.group-child2 {
    position: absolute;
    top: 0px;
    left: 0px;
    border-radius: 50%;
    border: 2px solid #b8b8b8;
    box-sizing: border-box;
    width: 68px;
    height: 68px;
}

.div12 {
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
    top: 55px;
    left: calc(50% - 742px);
    width: 1485px;
    height: 148px;
    overflow: hidden;
    font-size: 32px;
}

.validation-layout {
    position: relative;
    width: 100%;
    height: 953px;
    overflow: hidden;
    text-align: left;
    font-size: 24px;
    color: #000;
    font-family: Montserrat;
}
</style>
  