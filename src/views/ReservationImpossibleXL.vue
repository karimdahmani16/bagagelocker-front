<template>
    <div class="container-fluid">
      <div class="col-12">
        <NavBar />
      </div>
      <div class="col-12">
        <div class="d-xs-block d-xl-none reservation-impossible">
          <img class="d-none d-lg-block icon-size-lg" alt="" src="../assets/searchresults/groupe-74525.svg" />
          <img class="d-none d-md-block d-lg-none icon-size-md" alt="" src="../assets/searchresults/groupe-74525.svg" />
          <img class="d-xs-block d-md-none icon-size-sm" alt="" src="../assets/searchresults/groupe-74525.svg" />
          <p class="reservation-impossible-text d-none d-xl-block text-font-68 top-margin">"Réservation impossible"</p>
          <p class="reservation-impossible-text d-none d-lg-block d-xl-none text-font-48 top-margin">"Réservation
            impossible"</p>
          <p class="reservation-impossible-text d-none d-sm-block d-lg-none text-font-32 top-margin">"Réservation
            impossible"</p>
          <p class="reservation-impossible-text d-xs-block d-sm-none text-font-20 top-margin">"Réservation impossible"</p>
        </div>
        <div class="reservation-impossible-xl">
          <img class="d-none d-xl-block icon-size-lg" alt="" src="../assets/searchresults/groupe-74525.svg" />
          <p class="reservation-impossible-text d-none d-xl-block text-font-68 top-margin">"No box available"</p>
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
            <span class="date-depot margin-bottom-40">Total of box:</span>
            <b class="date-depot-value">{{ props.boxCount }}</b>
          </div>
          <div class="bouton-confimer">
            <ButtonDiv class="ok" label="Retour" severity="success" @click="back"></ButtonDiv>
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
          <NombreDeBox class="d-xs-block d-sm-none margin-top-40" :boxCount="props.boxCount" />
          <NombreDeBox class="d-none d-sm-block" :boxCount="props.boxCount" />
          <div class="bouton-confimer">
            <ButtonDiv class="ok" label="Retour" severity="success" @click="back"></ButtonDiv>
          </div>
        </div>
      </div>
    </div>
  </template>
<script setup>
import StartDate from '@/components/termine-page/StartDate.vue';
import EndDate from '@/components/termine-page/EndDate.vue';
import NombreDeBox from '@/components/landing-page/NombreDeBox.vue';
import { defineProps } from 'vue';
import { useRouter } from 'vue-router'
import NavBar from '../components/base/en/NavBar.vue';
import ButtonDiv from '../components/base/ButtonDiv.vue'
const router = useRouter()
const props = defineProps({
    startDate: String,
    endDate: String,
    boxCount: Number
})
const back = () => {
    router.go(-1)
}
</script>
<style scoped>
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

.date-depot-value {
  font-family: Montserrat;
  font-size: 28px;
  margin-left: 60px;
}

.apartir-de {
  margin-left: 50px;
}

.apartir-de-icon {
  width: 30px;
  height: 30px;
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
  