<template>
    <div class="container">
        <v-card style="font-family: 'Montserrat', sans-serif;">
            <template v-slot:title>
                <b class="text--primary font-weight-bold display-6">Nous acceptons</b>
            </template>

            <template v-slot:text>
                <img src="../../assets/cart/card-pay-1@2x.png" alt="Sous-total" class="col-4" style="width: 491px; height: 68px;">
            </template>
        </v-card>
    </div>
</template>

<script setup>
import { VCard } from "vuetify/lib/components/index.mjs";
</script>

<style scoped></style>