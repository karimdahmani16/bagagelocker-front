<template>
    <meta name="description" content="Your reservation is confirmed! Thank you for your payment. Get ready for your upcoming experience. Check your email for details and next steps.">
    <div class="container-fluid">
        <div class="row">
            <div class="col">
                <NavBar />
            </div>
        </div>
        <div class="row">
            <div class="col-12 d-none d-sm-block vector-parent margin-top-timeline text-center">
                <VTimeline truncate-line="both" side="end" direction="horizontal" line-inset="0">
                    <VTimelineItem v-for="item in events" :key="item.number" class="mb-32" :dot-color="item.color"
                        size="large">
                        <template v-slot:icon>
                            <span v-if="item.number == 5" class="timeline-number-selected">{{ item.number }}</span>
                            <span v-else class="timeline-number">{{ item.number }}</span>
                        </template>
                        <div v-if="item.number == 5" class="timeline-status-selected">{{ item.status }}</div>
                        <div v-else class="timeline-status">{{ item.status }}</div>
                    </VTimelineItem>
                </VTimeline>
            </div>
            <div class="col-12 reservation-confirmee">
                <b>Reservation Confirmed</b>
            </div>
            <div class="col-12">
                <v-divider class="divider"></v-divider>
            </div>
            <div class="col-12 instructions-reservation">
                <span>Instructions and access codes will be sent to you by email</span>
            </div>
            <div class="col-12">
                <v-divider class="divider"></v-divider>
            </div>
            <div class="col-12 retrait-valises">
                Checkout must be done before 22h
            </div>
            <div class="col-12">
                <div class="location">
                    <img class="location-icon" alt="" src="../assets/terminepage/icon-maps-4@2x.png" />
                    <a class="location-address" href="https://www.google.com/maps/dir/Current+Location/Rua+de+Cimo+de+Vila+18+Porto+bagagelocker">Rua Cimo de Vila n°18
                        4000-169
                        Porto
                        Portugal</a>
                </div>
            </div>
            <div class="row data-card col-12">
                <div class="row">
                    <div class="center-text col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-5">
                        <StartDate :start-date="startDate"></StartDate>
                    </div>
                    <div class="center-text col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-2">
                        <BoxCount :boxCount="boxCount"></BoxCount>
                    </div>
                    <div class="center-text col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-5">
                        <EndDate :endDate="endDate"></EndDate>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-12 merci-message">
            <b class="message-consulter">Please check your email box/spam</b>
        </div>

    </div>
</template>

<script setup>
//xs<576
//576<sm<768
//768<md<992
//992<lg<1200
//1200<xl
import { ref, defineProps, onMounted, onBeforeMount } from "vue";
import NavBar from '../components/base/en/NavBar.vue';
import StartDate from '../components/termine-page/StartDate.vue'
import EndDate from '../components/termine-page/EndDate.vue'
import BoxCount from '../components/termine-page/BoxCount.vue'
import { VTimeline, VTimelineItem, VDivider } from "vuetify/lib/components/index.mjs";
import Service from "@/core/Service";
import moment from 'moment';
const events = ref([
    { status: 'Login', number: '1', icon: 'pi pi-shopping-cart', color: '#fff', image: 'game-controller.jpg' },
    { status: 'Verification', number: '2', icon: 'pi pi-cog', color: '#fff' },
    { status: 'Payment', number: '3', icon: 'pi pi-shopping-cart', color: '#fff' },
    { status: 'Validation', number: '4', icon: 'pi pi-check', color: '#fff' },
    { status: 'Done', number: '5', icon: 'pi pi-check', color: '#EFF6FF' }
])
const props = defineProps({
    cartId: Number
})
function formatDateSlash(value) {
    if (value) {
        return moment(String(value)).format('DD-MM-YYYY')
    }
}
let startDate = ref(null)
let endDate = ref(null)
let boxCount = ref(null)
let cart = ref(null)
onMounted(() => {
    Service.createReservation(props.cartId).then((resp) => {
    //Service.createReservationForTest(props.cartId).then((resp) => {
      console.log("$$$$ resp.data $$$$$ = " + resp.data);
    }).catch((error) => {
      console.log("error when create order: " + error)
    })
})
onBeforeMount(() => {
    Service.getCart(props.cartId).then((response) => {
        cart.value = response.data.cart
        startDate.value = formatDateSlash(cart.value.startDate)
        endDate.value = formatDateSlash(cart.value.endDate)
        boxCount.value = cart.value.boxCount
    }).catch(function (error) {
        console.log("error = " + error);
    })
})
</script>

<style scoped>
/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 575px) {

    .data-card {
        height: 400px;
        background-color: #e9e9e9;
    }

    .divider {
        margin-left: 20px;
        margin-right: 20px;
        color: #000000;
    }

    .location-address {
        font-weight: 500;
        display: inline-block;
        text-align: center;
        font-size: 14px;
        flex-shrink: 0;
    }

    .location-icon {
        object-fit: fill;
        display: inline-block;
        margin-right: 20px;
        text-align: center;
        width: 6%;
    }

    .retrait-valises {
        font-weight: 600;
        color: #eb0000;
        display: inline-block;
        text-align: center;
        font-size: 18px;
        margin-top: -17px;
        font-family: Montserrat;
    }

    .merci-message {
        font-weight: 600;
        color: #eb0000;
        display: inline-block;
        text-align: center;
        font-size: 26px;
        margin-top: 10px;
        font-family: Montserrat;
    }

    .instructions-reservation {
        margin-top: -30px;
        margin-bottom: -30px;
        font-weight: 500;
        display: inline-block;
        text-align: center;
        font-size: 19px;
        color: #373737;
        font-family: Montserrat;
    }

    .reservation-confirmee {
        text-align: center;
        margin-top: 60px;
        margin-bottom: -20px;
        font-size: 28px;
        color: #000000;
        font-family: Montserrat;
    }

    .vector-parent {
        position: absolute;
        width: 100%;
        font-size: 12px;
        color: #000;
    }

    .timeline-number-selected {
        color: #3662dc;
    }

    .timeline-number {
        color: #333333;
    }

    .timeline-status {
        font-size: 16px;
        color: #333333;
    }

    .timeline-status-selected {
        font-size: 16px;
        font-weight: 800;
        color: #000;
    }

    .message-consulter {
        font-size: 28px;
        color: #eb0000;
    }

    .location {
        display: inline-block;
        text-align: center;
        width: 100%;
    }

    .center-text {
        text-align: center;
    }

}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 575px) {

    .instructions-reservation {
        margin-top: -30px;
        margin-bottom: -30px;
        font-weight: 500;
        display: inline-block;
        text-align: center;
        font-size: 20px;
        color: #373737;
        font-family: Montserrat;
    }

    .location-address {
        font-weight: 500;
        display: inline-block;
        text-align: center;
        font-size: 16px;
        flex-shrink: 0;

        .apartir-de-icon {
            width: 30px;
            height: 30px;
            margin-right: -5px;
        }
    }

    .reservation-confirmee {
        text-align: center;
        margin-top: 20px;
        margin-bottom: -20px;
        font-size: 48px;
        color: #000;
        font-family: Montserrat;
    }

    .divider {
        margin-left: 20px;
        margin-right: 20px;
        color: #000000;
    }

    .timeline-number-selected {
        color: #3662dc;
        font-size: 15px;
    }

    .timeline-number {
        color: #333333;
        font-size: 15px;
    }

    .timeline-status {
        font-size: 18px;
        color: #333333;
    }

    .timeline-status-selected {
        font-size: 18px;
        font-weight: 800;
        color: #000;
    }

    .retrait-valises {
        font-weight: 600;
        color: #eb0000;
        display: inline-block;
        text-align: center;
        font-size: 20px;
        margin-top: -27px;
        font-family: Montserrat;
    }

    .merci-message {
        font-weight: 600;
        color: #eb0000;
        display: inline-block;
        text-align: center;
        font-size: 26px;
        margin-top: 10px;
        font-family: Montserrat;
    }

    .location-icon {
        object-fit: fill;
        display: inline-block;
        margin-right: 20px;
        text-align: center;
        width: 30px;
        height: 44px;
    }

    .data-card {
        height: 400px;
        background-color: #e9e9e9;
    }

    .message-consulter {
        font-size: 30px;
        color: #eb0000;
    }

    .location {
        display: inline-block;
        text-align: center;
        width: 100%;
    }

    .center-text {
        text-align: center;
    }
}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {

    .instructions-reservation {
        margin-top: -27px;
        margin-bottom: -27px;
        font-weight: 500;
        display: inline-block;
        text-align: center;
        font-size: 22px;
        color: #373737;
        font-family: Montserrat;
    }

    .location-address {
        font-weight: 500;
        display: inline-block;
        text-align: center;
        font-size: 18px;
        flex-shrink: 0;
    }

    .reservation-confirmee {
        text-align: center;
        margin-top: 20px;
        margin-bottom: -20px;
        font-size: 48px;
        color: #000;
        font-family: Montserrat;
    }

    .divider {
        margin-left: 50px;
        margin-right: 50px;
        color: #000000;
    }


    .timeline-number-selected {
        color: #3662dc;
    }

    .timeline-number {
        color: #333333
    }

    .timeline-status {
        font-size: 20px;
        color: #333333;
    }

    .timeline-status-selected {
        font-size: 20px;
        font-weight: 800;
        color: #000;
    }

    .retrait-valises {
        font-weight: 600;
        color: #eb0000;
        display: inline-block;
        text-align: center;
        font-size: 22px;
        margin-top: -25px;
        font-family: Montserrat;
    }

    .merci-message {
        font-weight: 600;
        color: #eb0000;
        display: inline-block;
        text-align: center;
        font-size: 26px;
        margin-top: 20px;
        font-family: Montserrat;
    }

    .location-icon {
        object-fit: fill;
        display: inline-block;
        margin-right: 20px;
        text-align: center;
        width: 37px;
        height: 50px;
    }

    .data-card {
        height: 400px;
        background-color: #e9e9e9;
    }

    .message-consulter {
        font-size: 32px;
        color: #eb0000;
    }

    .location {
        display: inline-block;
        text-align: center;
        width: 100%;
    }

    .center-text {
        text-align: center;
    }

    .start-date {
        display: inline-block;
        text-align: center;
    }
}

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
    .instructions-reservation {
        margin-top: -25px;
        margin-bottom: -25px;
        font-weight: 500;
        text-align: center;
        font-size: 26px;
        color: #373737;
        font-family: Montserrat;
    }

    .location-address {
        font-weight: 500;
        display: inline-block;
        text-align: center;
        font-size: 22px;
        flex-shrink: 0;
    }

    .divider {
        margin-left: 270px;
        margin-right: 270px;
        color: #000000;
    }

    .reservation-confirmee {
        text-align: center;
        margin-top: 20px;
        margin-bottom: -25px;
        font-size: 58px;
        color: #000;
        font-family: Montserrat;
    }


    .timeline-number-selected {
        color: #3662dc;
        font-size: 18px;
    }

    .timeline-number {
        color: #333333;
        font-size: 18px;
    }

    .timeline-status {
        font-size: 24px;
        color: #333333;
    }

    .timeline-status-selected {
        font-size: 24px;
        font-weight: 800;
        color: #000;
    }

    .retrait-valises {
        font-weight: 600;
        color: #eb0000;
        display: inline-block;
        text-align: center;
        font-size: 26px;
        margin-top: -20px;
        font-family: Montserrat;
    }

    .merci-message {
        font-weight: 600;
        color: #eb0000;
        display: inline-block;
        text-align: center;
        font-size: 26px;
        margin-top: 20px;
        font-family: Montserrat;
    }

    .location-icon {
        object-fit: fill;
        display: inline-block;
        margin-right: 20px;
        text-align: center;
        width: 36px;
        height: 50px;
    }

    .data-card {

        height: 200px;
        background-color: #e9e9e9;
    }

    .message-consulter {
        font-size: 34px;
        color: #eb0000;
    }

    .location {
        display: inline-block;
        text-align: center;
        width: 100%;
    }
}

/* XX large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1600px) {
    .instructions-reservation {
        margin-top: -20px;
        margin-bottom: -20px;
        font-weight: 500;
        display: inline-block;
        text-align: center;
        font-size: 28px;
        color: #373737;
        font-family: Montserrat;
    }

    .divider {
        margin-left: 250px;
        margin-right: 250px;
        color: #000000;
    }


    .vector-parent {
        font-size: 24px;
        color: #000;
        margin-top: 50px;
    }

    .timeline-number-selected {
        color: #3662dc;
        font-size: 18px;
    }

    .timeline-number {
        color: #333333;
        font-size: 18px;
    }

    .timeline-status {
        font-size: 24px;
        color: #333333;
    }

    .timeline-status-selected {
        font-size: 24px;
        font-weight: 800;
        color: #000;
    }

    .retrait-valises {
        font-weight: 600;
        color: #eb0000;
        display: inline-block;
        text-align: center;
        font-size: 28px;
        font-family: Montserrat;
    }

    .merci-message {
        font-weight: 600;
        color: #eb0000;
        display: inline-block;
        text-align: center;
        font-size: 28px;
        margin-top: 20px;
        font-family: Montserrat;
    }

    .location {
        display: inline-block;
        text-align: center;
        width: 100%;
    }

    .location-icon {
        object-fit: fill;
        display: inline-block;
        margin-right: 20px;
        text-align: center;
        width: 36px;
        height: 50px;
    }

    .location-address {
        font-weight: 500;
        display: inline-block;
        text-align: center;
        font-size: 22px;
        flex-shrink: 0;
    }

    .data-card {
        height: 200px;
        background-color: #e9e9e9;
    }

    .message-consulter {
        font-size: 36px;
        color: #eb0000;
    }


}

.margin-top-timeline {
    margin-top: 50px;
}
</style>
