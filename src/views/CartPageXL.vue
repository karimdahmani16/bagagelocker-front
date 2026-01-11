<template>
  <div class="fullscreen-div">
    <div class="row">
      <NavBar />
      <div class="col-xs-12 col-sm-12 col-lg-8 col-md-12 col-xl-8">
        <MonPanierCard class="container mb-5 mt-10 ml-20" :startDate="startDate" :endDate="endDate"
          :boxCount="boxCount" />
        <PaymentsAcceptedCard class="container mb-5 ml-20"></PaymentsAcceptedCard>
      </div>
      <div class="col-xs-12 col-sm-12 col-lg-4 col-md-12 col-xl-4">
        <TotalCard :price="price" :startDate="startDate" :endDate="endDate" :cartId="cartId" :userId="userId"
          :boxCount="boxCount" :duration="duration" class="mt-10 container mb-5 ml-20" />
      </div>
    </div>
  </div>
</template>
<script setup>
//import { VCardTitle, VCardText, VCard} from "vuetify/lib/components/index.mjs";
import NavBar from '@/components/base/en/NavBar.vue';
import TotalCard from '../components/cartpage/en/TotalCard.vue'
import MonPanierCard from '../components/cartpage/en/MonPanierCard.vue'
import PaymentsAcceptedCard from '../components/cartpage/en/PaymentsAcceptedCard.vue'
import Service from '@/core/Service';
import store from '@/store';
import { ref, onBeforeMount, onMounted } from 'vue'
import moment from 'moment';
import router from '@/router';
function formatDateSlash(value) {
  console.log("formatting date")
  if (value) {
    return moment(String(value)).format('YYYY-MM-DD')
  }
}
let cart = ref(null)
let boxCount = ref(0)
let duration = ref(0)
let startDate = ref(null)
let endDate = ref(null)
let unitPrice = store.getters.unitPrice
let price = ref(12.5)
let userId = ref(0)
let cartId = ref(0)
onMounted(() => {
  Service.getCart(store.getters.cartId).then((response) => {
    if (response.data.error) {
      router.push({ name: 'EmptyCart' })
    } else {
      cart.value = response.data.cart
      boxCount.value = cart.value.boxCount
      duration.value = cart.value.duration
      userId.value = cart.value.user === null ? store.getters.userId : cart.value.user.id
      cartId.value = cart.value.id
      price.value = boxCount.value * unitPrice * duration.value
      startDate.value = formatDateSlash(cart.value.startDate)
      endDate.value = formatDateSlash(cart.value.endDate)
    }
  }).catch(function (error) {
    console.log("error = " + error);
  })
})
onBeforeMount(() => {
  Service.getCart(store.getters.cartId).then((response) => {
    if (response.data.error) {
      router.push({ name: 'EmptyCart' })
    } else {
      cart.value = response.data.cart
      boxCount.value = cart.value.boxCount
      duration.value = cart.value.duration
      userId.value = cart.value.user === null ? store.getters.userId : cart.value.user.id
      if (userId.value != null && cart.value.user === null) {
        Service.updateCart(cart.value.id, userId.value).then(response => {
          console.log("cart updated: " + response.data)
        }).catch(error => {
          console.log("error = " + error);
        })
      }
      cartId.value = cart.value.id
      price.value = boxCount.value * unitPrice * duration.value
      startDate.value = formatDateSlash(cart.value.startDate)
      endDate.value = formatDateSlash(cart.value.endDate)
    }
  }).catch(function (error) {
    console.log("error = " + error);
  })
})
</script>
<style scoped>
.reservationscard {
  align-items: center;
  /* Vertically center items */
  justify-content: center;
  /* Horizontally center items */
  height: 30vh;
  width: 10%px;
}

.date-tab {
  color: #000000;
  font-size: 12px;
}

.tabs {
  width: 140%;
  border-radius: 10px;
}

.fullscreen-div {
  width: 100%;
  height: 100%;
  margin-top: 50px;
  background-color: #e9e9e9
    /* Set your desired background color */
}
</style>
