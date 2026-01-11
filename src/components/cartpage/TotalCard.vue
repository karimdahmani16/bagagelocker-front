<template>
  <v-card style="font-family: 'Montserrat', sans-serif;">
    <template v-slot:title>
      <b class="text--primary font-weight-bold display-6">Total</b>
    </template>

    <template v-slot:text>
      <div class="mt-5 mb-2 sous-total">
        <div>Sous-total</div>
        <div>{{ props.price }} €</div>
      </div>
      <v-divider></v-divider>
      <div class="total">
        <div><b>Total (TVA incluse)</b></div>
        <div><b>{{ props.price }} €</b></div>
      </div>
      <v-divider></v-divider>
      <div class="form-check">
        <input type="checkbox" @click="acceptConditions" class="form-check-input" id="exampleCheck1">
        <div class="label">
          <div class="form-check-label" for="exampleCheck1">J'ai lu les <router-link to="/cgv">conditions générales de
              vente</router-link> et la <router-link to="/politique-confidentialite">politique de confidentialité</router-link>; j'y adhère sans réserve</div>
        </div>
      </div>
      <v-card-actions class="d-flex justify-content-center align-items-center">
        <ButtonComponent class="mt-5 mb-5 commander-button" v-if="accepted" label="COMMANDER" outlined raised
          @click="commander" />
        <ButtonComponent class="mt-5 mb-5 commander-button" v-else label="COMMANDER" outlined raised disabled />
      </v-card-actions>
    </template>
  </v-card>
</template>

<script setup>
import { VCard, VCardActions, VDivider } from "vuetify/lib/components/index.mjs";
import { useRouter } from 'vue-router'
import { defineProps } from 'vue'
import { ref } from "vue";
import { getAuth } from "firebase/auth";
import Service from "@/core/Service";
import { useToast } from "primevue/usetoast";
const toast = useToast();
const router = useRouter()
const props = defineProps({
  startDate: String,
  endDate: String,
  boxCount: Number,
  cartId: Number,
  userId: Number,
  price: Number,
  duration: Number
})
let accepted = ref(false)
function acceptConditions() {
  accepted.value = !accepted.value;
}
const goToPaymentPage = () => {
  router.push({
      name: "PaymentPage", params: {
        startDate: props.startDate,
        endDate: props.endDate,
        userId: props.userId,
        boxCount: props.boxCount,
        duration: props.duration,
        cartId: props.cartId
      }
    })
}
function commander() {
  const auth =  getAuth()
  const user = auth.currentUser;
  if (user) {
    console.log("userId.value=" + props.userId);
    Service.canCreateReservation(props.cartId).then((response) => {
      if (response.data) {
        goToPaymentPage()
      } else {
        toast.add({
          severity: "error",
          summary: "Erreur",
          detail: "Impossible de créer la réservation. Veuillez réessayer plus tard."
        });
      }
    }).catch(function (error) {
      console.log("error = " + error);
    })
  } else {
    router.push({
      name: "Login"
    })
  }
}
</script>
<style scoped>
.commander-button {
  background-color: #00cff4;
  color: #ffffff;
  border-radius: 20px;
  width: 319px;
  height: 90px;
  font-size: 20px;
  border-width: 0px;
}

.sous-total {
  display: flex;
  justify-content: space-between;
  font-size: 20px;
  font-weight: 500;
}

.total {
  display: flex;
  justify-content: space-between;
  font-size: 20px;
  font-weight: 500;
}
</style>