<template>
  <meta name="description" content="Find answers to common questions about our services, policies, and more. Visit our FAQ page for quick and helpful information.">
  <div class="card container background-gris">
    <div class="row">
          <div class="col">
              <NavBar />
              <button type="button" class="btn btn-primary mt-3 bg-black fg-white font-bold border-black ml-5" @click="router.go(-1)"><i class="bi bi-arrow-return-left mr-2 font-bold"></i> Back</button>
          </div>
      </div>
    <b class="faq1">FAQ</b>
    <div>
      <VExpansionPanels class="my-4">
        <VExpansionPanel v-for="i in 18" :key="i" :title="questions[i]" class="mt-1"
          :text="answers[i]">
        </VExpansionPanel>
      </VExpansionPanels>
    </div>
  </div>
</template>
<script setup>
import NavBar from "@/components/base/en/NavBar.vue";
import { VExpansionPanel, VExpansionPanels } from "vuetify/lib/components/index.mjs";
import { useRouter } from 'vue-router'
import { useStore } from "vuex";
const store = useStore();
const router = useRouter()
const questions = [
  "",
  "1) " + store.getters.how_can_i_check_avail,
  "2) " + store.getters.how_can_i_book,
  "3) " + store.getters.what_are_pay_meth,
  "4) " + store.getters.book_in_advance,
  "5) " + store.getters.reservation_duration,
  "6) " + store.getters.opening_days,
  "7) " + store.getters.receive_codes,
  "8) " + store.getters.did_not_receive_code,
  "9) " + store.getters.lose_my_code,
  "10) " + store.getters.refund_resa,
  "11) " + store.getters.luggage_insured,
  "12) " + store.getters.when_box_access,
  "13) " + store.getters.checkout_time,
  "14) " + store.getters.keep_inside_box,
  "15) " + store.getters.prohibited_inside_box,
  "16) " + store.getters.another_person_pick,
  "17) " + store.getters.stay_on_premises,
  "18) " + store.getters.take_photos
]
const answers = [
  "",
  store.getters.to_check_avail,
  store.getters.reserving_a_locker,
  store.getters.we_accept_apy_meth,
  store.getters.advance_booking,
  store.getters.price_based_on, 
  store.getters.open_365_days,
  store.getters.receive_code_after_resa,
  store.getters.did_not_receive_code_reply,
  store.getters.lose_my_code_reply,
  store.getters.refund_resa_reply,
  store.getters.luggage_insured_reply,
  store.getters.when_box_access_reply,
  store.getters.checkout_time_reply,
  store.getters.keep_inside_box_reply, 
  store.getters.prohibited_inside_box_reply + " " + store.getters.prohibited_inside_box_reply_1,
  store.getters.another_person_pick_reply,
  store.getters.stay_on_premises_reply + " " + store.getters.stay_on_premises_reply_1,
  store.getters.take_photos_reply
]
</script>
<style scoped>
.footer-desktop-child {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  text-align: left;
  font-size: 60px;
  color: #000;
  font-family: Montserrat;
}

.app-container {
  padding-top: 50px;
}

.faq1 {
  font-size: 68px;
  margin: auto;
}
.background-gris {
    width: 100%;
    height: 100%;
    margin-top: 60px;
    overflow: hidden;
    background: #ededed;
    font-family: Montserrat;
}
</style>
