<template>
  <meta name="description" content="Explore alternative options if your desired number of storage boxes is unavailable.">
    <div class="container-fluid">
      <div class="col-12">
        <NavBar />
      </div>
      <div class="col-12">
        <div class="d-xs-block d-xl-none reservation-impossible">
          <img class="d-none d-lg-block icon-size-lg" alt="" src="../assets/searchresults/groupe-74525.svg" />
          <img class="d-none d-md-block d-lg-none icon-size-md" alt="" src="../assets/searchresults/groupe-74525.svg" />
          <img class="d-xs-block d-md-none icon-size-sm" alt="" src="../assets/searchresults/groupe-74525.svg" />
          <p class="reservation-impossible-text d-none d-xl-block text-font-68 top-margin">Bagage Locker Suggestion</p>
          <p class="reservation-impossible-text d-none d-lg-block d-xl-none text-font-48 top-margin">Bagage Locker Suggestion</p>
          <p class="reservation-impossible-text d-none d-sm-block d-lg-none text-font-32 top-margin">Bagage Locker Suggestion</p>
          <p class="reservation-impossible-text d-xs-block d-sm-none text-font-20 top-margin">Bagage Locker Suggestion</p>
        </div>
        <div class="reservation-impossible-xl">
          <img class="d-none d-xl-block icon-size-lg" alt="" src="../assets/searchresults/groupe-74525.svg" />
          <p class="reservation-impossible-text d-none d-xl-block text-font-68 top-margin">Bagage Locker Suggestion</p>
        </div>
      </div>
      <div class="row d-none d-xl-flex">
        <div class="col-7 information-container information-container-margin-top">
          <div class="col-12">
            <span class="date-depot">Start date:</span>
            <b class="date-depot-value">{{ props.startDate }}</b>
          </div>
          <div class="apartir-de col-12">
            <img class="apartir-de-icon" alt="" src="../assets/terminepage/vector.svg" />
            <i class="apartir-de-text">Check-in start at 08:00</i>
          </div>
          <div class="col-12">
            <span class="date-depot">End date:</span>
            <b class="date-depot-value">{{ props.endDate }}</b>
          </div>
          <div class="apartir-de col-12">
            <img class="apartir-de-icon" alt="" src="../assets/terminepage/vector1.svg" />
            <i class="apartir-de-text">Checkout before 22:00</i>
          </div>
          <div class="col-12">
            <span class="date-depot">Total of box:</span>
            <b class="date-depot-value box-count-value">{{ props.boxCount }}</b>
          </div>
          <div class="apartir-de col-12 mb-5">
            <img class="apartir-de-icon star-icon" alt="" src="../assets/proposition/star.png" />
            <i class="date-depot" style="font-family: Montserrat;">Only {{ boxCount }} {{ boxCount == 1 ? "box is" : "boxes are" }} available! Reserve now</i>
          </div>
          <div class="bouton-confimer">
              <ButtonDiv class="ok mr-3" label="OK" severity="success" @click="goToCart"></ButtonDiv>
              <ButtonDiv class="ok" label="Back" severity="danger" @click="back"></ButtonDiv>
          </div>
        </div>
        <div class="col-5">
          <img class="image" alt="Box availability" src="../assets/searchresults/illustration-resultats-de-recherche@2x.webp" />
        </div>
      </div>
      <div class="d-xs-block d-xl-none">
        <div class="col-12 information-container information-container-margin-top-xs">
          <div class="col-4 d-none d-sm-block">
            <img class="image-sm" alt="Box availability" src="../assets/searchresults/illustration-resultats-de-recherche@2x.webp" />
          </div>
          <StartDate :startDate="props.startDate" />
          <EndDate :endDate="props.endDate" />
          <NombreDeBoxProp class="d-xs-block d-sm-none margin-top-40" :boxCount="props.boxCount" />
          <NombreDeBoxProp class="d-none d-sm-block" :boxCount="props.boxCount" />
          <div class="col-12 mb-5">
            <img class="apartir-de-icon star-icon" alt="" src="../assets/proposition/star.png" />
            <i class="only-message" style="font-family: Montserrat;">Only {{ boxCount }} {{ boxCount == 1 ? "box is" : "boxes are" }} available! Reserve now</i>
          </div>
          <div class="bouton-confimer">
            <ButtonDiv class="ok mr-3" label="OK" severity="success" @click="goToCart"></ButtonDiv>
              <ButtonDiv class="ok" label="Back" severity="danger" @click="back"></ButtonDiv>
          </div>
        </div>
      </div>
    </div>
  </template>
<script setup>
import StartDate from '@/components/termine-page/StartDate.vue';
import EndDate from '@/components/termine-page/EndDate.vue';
import NombreDeBoxProp from '@/components/proposition/NombreDeBoxProp.vue';
import { defineProps } from 'vue';
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import NavBar from '../components/base/en/NavBar.vue';
import ButtonDiv from '../components/base/ButtonDiv.vue'
import Service from '../core/Service';
import moment from 'moment';
const router = useRouter()
const store = useStore()
const props = defineProps({
    startDate: String,
    endDate: String,
    boxCount: Number,
    duration: Number
})
const back = () => {
    router.go(-1)
}
function formatDateSlash(value) {
    if (value) {
        return moment(String(value)).format('YYYY-MM-DD')
    }
}
const goToCart = () => {
    Service.createCart(formatDateSlash(props.startDate), formatDateSlash(props.endDate), store.getters.userId, props.boxCount, props.duration, store.getters.accessToken).then((response) => {
        if (response.data === -1) {
            console.log('Error when creating the cart')
            //toast.add({ severity: 'error', summary: 'Internal Error', detail: "An error occurred when creating a cart!", life: 3500 });
        }
        else {
            store.commit('setCartId', response.data)
            router.push({
                name: "CartPage"
            })
        }
    }).catch(function (error) {
        console.log("error = " + error);
    })
}
</script>
<style scoped>
.ok {
    height: 40px;
}
.reservation-impossible {
  margin-top: 70px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  align-items: center;
  justify-content: center;
}

.reservation-impossible-xl {
  margin-top: 70px;
  display: flex;
  flex-direction: row;
  gap: 14px;
  align-items: center;
  justify-content: center;
}

.reservation-impossible-text {
  font-size: 68px;
  font-family: Montserrat;
  color: #000;
}

.text-font-68 {
  font-size: 68px;
}

.text-font-48 {
  font-size: 48px;
}

.text-font-32 {
  font-size: 32px;
}

.text-font-24 {
  font-size: 24px;
}

.text-font-20 {
  font-size: 20px;
}

.image {
  width: 95%;
  text-align: end;
  height: 100%;
  object-fit: cover;
}

.image-sm {
  width: 90%;
  text-align: center;
  height: 100%;
  object-fit: cover;
}

.nombre-box-style {
  font-size: 26px;
  color: #373737;
  font-weight: 500;
  display: inline-block;
  font-family: Montserrat;
  text-align: center;
}

.nombre-box-position {
  margin-top: 20px;
  margin-left: 240px;
}

.box-count-position {
  margin-top: 20px;
  margin-left: 100px;
}

.font-bold {
  font-weight: bold;
}

.information-container {
  display: flex;
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 0px;
}

.information-container-margin-top {
  margin-top: 0px;
}

.information-container-margin-top-xs {
  margin-top: -60px;
}

.bouton-confimer {

  text-align: center;

}

.icon-size-lg {
  width: 70px;
  height: 70px;
}

.icon-size-md {
  width: 45px;
  height: 45px;
}

.icon-size-sm {
  width: 40px;
  height: 40px;
}

.top-margin {
  padding-top: 10px;
}

.date-depot {
  font-weight: 500;
  display: inline-block;
  text-align: center;
  font-family: Montserrat;
  font-size: 28px;
  margin-top: 20px;
  margin-left: 50px;
  color: #373737;
}
.only-message {
  font-weight: 100;
  display: inline-block;
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 24px;
  margin-top: 20px;
  margin-left: 50px;
  color: #373737;
}

.date-depot-value {
  font-family: Montserrat;
  font-size: 28px;
  margin-left: 60px;
}
.box-count-value {
  font-size: 1.2rem;
  font-weight: bold;
  color: #fff; /* White text color */
  background-color: #4fbf7a; /* Green background color */
  padding: 5px 10px;
  border-radius: 5px; /* Rounded corners */
}

.apartir-de {
  margin-left: 50px;
}

.apartir-de-icon {
  width: 30px;
  height: 30px;
}
.star-icon {
    margin-left: 25px;
    margin-right: -30px;
    margin-bottom: 10px;
}

.apartir-de-text {
  display: inline-block;
  margin-left: 20px;
  font-weight: 800;
  font-family: Montserrat;
  font-size: 22px;
  color: #ff0000;
}
.margin-top-40 {
  margin-top: 40px;
}
.margin-bottom-40 {
  margin-bottom: 40px;
}
</style>
  