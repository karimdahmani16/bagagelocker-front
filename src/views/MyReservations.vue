<template>
  <meta name="description" content="Find all your ongoing reservations as well as your finished reservations. For each reservation, you'll find your building access code, your email and your passcode to be used inside the BagageLocker store to open your boxes.">
  <div class="container">
    <div class="row">
      <div class="col-12">
        <NavBar />
      </div>
    </div>
    <div class="row">
      <div class="hidden-xs hidden-sm col-md-2 col-lg-2 col-xl-2 col-xxl-3"></div>
      <div class="col-xs-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 col-xxl-6">
        <v-tabs style="margin-top: 80px;" bg-color=#f3f3f3 color="black" align-tabs="center" density="comfortable"
          height="50px" v-model="tab">
          <v-tab value="inprogressTab">
            Réservations
          </v-tab>
          <v-tab value="finishedTab">
            Finished
          </v-tab>
        </v-tabs>
        <v-window v-model="tab">
          <v-window-item value="inprogressTab">
            <VCard>
              <AccordionComponent v-if="!isInProgressListEmpty.value">
                <AccordionTab v-for="reservation in inprogressReservations" :key="reservation.id">
                  <template #header>
                    <span class="flex align-items-center gap-2 w-full">
                      <p class="date-tab">
                        {{ formatDateSlash(reservation.startDate) + " -- " + formatDateSlash(reservation.endDate) }}
                        <br>
                        Order ID: {{ reservation.orderId }}
                      </p>
                      <p class="ml-auto">
                        {{ reservation.status }}
                      </p>
                    </span>
                  </template>
                  <span class="flex align-items-center gap-2 w-full small">
                    <p>
                      Email: {{ reservation.user.email }}
                    </p>
                    <p class="ml-auto">
                      Building Code: {{ reservation.passcode }}<br>
                      Box Code: {{ reservation.code }}<br>
                    </p>
                  </span>
                </AccordionTab>
              </AccordionComponent>
            </VCard>
          </v-window-item>
          <v-window-item value="finishedTab">
            <VCard>
              <AccordionComponent v-if="!isFinishedListEmpty.value">
                <AccordionTab v-for="reservation in finishedReservations" :key="reservation.id">
                  <template #header>
                    <span class="flex align-items-center gap-2 w-full">
                      <p class="date-tab">
                        {{ formatDateSlash(reservation.startDate) + " -- " + formatDateSlash(reservation.endDate) }}
                        <br>
                        Order ID: {{ reservation.orderId }}
                      </p>
                      <p class="ml-auto">
                        {{ reservation.status }}
                      </p>
                    </span>
                  </template>
                  <span class="flex align-items-center gap-2 w-full small">
                    <p>
                      Username: {{ reservation.username }}
                    </p>
                    <p class="ml-auto">
                      Building Code: {{ reservation.passcode }}<br>
                      Box Code: {{ reservation.code }}<br>
                      {{ reservation.boxName }}
                    </p>
                  </span>
                </AccordionTab>
              </AccordionComponent>
            </VCard>
          </v-window-item>
        </v-window>
      </div>
      <div class="hidden-xs hidden-sm col-md-2 col-lg-2 col-xl-2 col-xxl-3"></div>
    </div>
  </div>
</template>
<script setup>
import { VTabs, VTab, VCard, VWindow, VWindowItem } from "vuetify/lib/components/index.mjs";
import NavBar from "../components/base/en/NavBar.vue";
import Service from '../core/Service'
import store from '@/store';
import moment from 'moment';
import { ref, onMounted } from "vue";
let tab = ref("inprogressTab")
let inprogressReservations = ref(null)
let isInProgressListEmpty = inprogressReservations.value === null || inprogressReservations.value.length === 0
let finishedReservations = ref(null)
let isFinishedListEmpty = finishedReservations.value === null || finishedReservations.value.length === 0
let reservations = ref(null)
onMounted(() => {
  fetchReservations()
})
const fetchReservations = () => {
  Service.getReservations(store.getters.userId).then(response => {
    reservations.value = response.data;
    inprogressReservations.value = reservations.value.filter((reservation) => reservation.status === "CONFIRMED" || reservation.status === "INPROGRESS" || reservation.status === "ONGOING" || reservation.status === "CHECKIN")
    finishedReservations.value = reservations.value.filter((reservation) => reservation.status === "FINISHED" || reservation.status === "CHECKOUT")
  })
}
function formatDateSlash(value) {
  if (value) {
    return moment(String(value)).format('dddd DD MMM YYYY')
  }
}
</script>
<style scoped>
.date-tab {
  color: #000000;
  font-size: 12px;
}
</style>
