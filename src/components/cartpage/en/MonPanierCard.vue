<template>
    <div>
        <v-card style="font-family: 'Montserrat', sans-serif;">
            <template v-slot:title>
                <b class="text--primary font-weight-bold display-6 ml-10">My cart</b>
            </template>
            <template v-slot:text>
                <div class="container">
                    <div class="row">
                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 mb-2">
                            <img src="../../../assets/cart/image-box@2x.png" alt="Sous-total" class="col-4"
                                style="width: 90%; height: auto;">
                        </div>
                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 mt-13 cart-data">
                            <div class="total">
                                <div>Total of box:</div>
                                <div><b style="text-align: right;">{{ props.boxCount }}</b></div>
                            </div>
                            <div class="mt-6 total">
                                <div>Start date:</div>
                                <div><b>{{ props.startDate }}</b></div>
                            </div>
                            <div class="mt-6 total">
                                <div>End date:</div>
                                <div><b>{{ props.endDate }}</b></div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12 mt-10">
                            <img class="delete-icon" alt="" src="../../../assets/cart/Icon_delete.svg" />
                            <v-btn variant="plain" @click="deleteCart"> Delete</v-btn>
                        </div>
                        <div class="col-12 mb-2">
                            <div class="total">
                                <div>
                                    <img class="info-icon mb-1" alt="" src="../../../assets/cart/icons8-info.svg" />
                                    <span class="info-text"> Boxes in the cart are not reserved.</span>
                                </div>
                                <span class="unit-price"> Price: <b>12,50 €</b></span>
                            </div>
                        </div>
                    </div>
                </div>
            </template>
        </v-card>
    </div>
</template>

<script setup>
import { VCard, VBtn } from "vuetify/lib/components/index.mjs";
import { defineProps } from 'vue'
import Service from '@/core/Service';
import store from '@/store';
import { useRouter } from 'vue-router'
const props = defineProps({
    startDate: String,
    endDate: String,
    boxCount: Number
});
const router = useRouter()
const deleteCart = () => {
    Service.deleteCart(store.getters.cartId).then((response) => {
        console.log('response:' + response.data)
        store.commit('deleteCartId')
        router.push({
            name: "EmptyCart"
        })
    }).catch(error => {
        console.log('error deleting cart ' + store.getters.cartId + " :" + error);
    })
}
</script>
<style scoped>
/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
    .unit-price {
        color: #ff0000;
        font-size: 16px;
    }

    .commander-button {
        background-color: #00cff4;
        color: #ffffff;
        border-radius: 20px;
        width: 319px;
        height: 90px;
        font-size: 20px;
        border-width: 0px;
    }

    .info-text {
        font-weight: 500;
        font-size: 20px;
        color: #828282;
    }

    .cart-data {
        font-size: 20px;
        font-weight: 500;

    }

    .total {
        display: flex;
        justify-content: space-between;
        font-size: 20px;

    }

    .info-icon {
        width: 22px;
        height: 27.71px;
    }

    .delete-icon {
        width: 22px;
        height: 27.71px;
    }

}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {
    .unit-price {
        color: #ff0000;
        font-size: 16px;
    }

    .commander-button {
        background-color: #00cff4;
        color: #ffffff;
        border-radius: 20px;
        width: 319px;
        height: 90px;
        font-size: 20px;
        border-width: 0px;
    }

    .info-text {
        font-weight: 500;
        font-size: 20px;
        color: #828282;
    }

    .cart-data {
        font-size: 20px;
        font-weight: 500;

    }

    .total {
        display: flex;
        justify-content: space-between;
        font-size: 20px;

    }

    .info-icon {
        width: 22px;
        height: 27.71px;
    }

    .delete-icon {
        width: 22px;
        height: 27.71px;
    }

}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {
    .unit-price {
        color: #ff0000;
        font-size: 18px;
    }

    .commander-button {
        background-color: #00cff4;
        color: #ffffff;
        border-radius: 20px;
        width: 319px;
        height: 90px;
        font-size: 20px;
        border-width: 0px;
    }

    .info-text {
        font-weight: 500;
        font-size: 20px;
        color: #828282;
    }

    .cart-data {
        font-size: 20px;
        font-weight: 500;

    }

    .total {
        display: flex;
        justify-content: space-between;
        font-size: 20px;

    }

    .info-icon {
        width: 22px;
        height: 27.71px;
    }

    .delete-icon {
        width: 22px;
        height: 27.71px;
    }

}

/* Large devices (landscape tablets, 992px and up) */
@media only screen and (min-width: 992px) {
    .unit-price {
        color: #ff0000;
        font-size: 18px;
    }

    .commander-button {
        background-color: #00cff4;
        color: #ffffff;
        border-radius: 20px;
        width: 319px;
        height: 90px;
        font-size: 20px;
        border-width: 0px;
    }

    .info-text {
        font-weight: 500;
        font-size: 20px;
        color: #828282;
    }

    .cart-data {
        font-size: 20px;
        font-weight: 500;

    }

    .total {
        display: flex;
        justify-content: space-between;
        font-size: 20px;

    }

    .info-icon {
        width: 22px;
        height: 27.71px;
    }

    .delete-icon {
        width: 22px;
        height: 27.71px;
    }

}

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
    .unit-price {
        color: #ff0000;
        font-size: 20px;
    }

    .commander-button {
        background-color: #00cff4;
        color: #ffffff;
        border-radius: 20px;
        width: 319px;
        height: 90px;
        font-size: 20px;
        border-width: 0px;
    }

    .info-text {
        font-weight: 500;
        font-size: 20px;
        color: #828282;
    }

    .cart-data {
        font-size: 20px;
        font-weight: 500;

    }

    .total {
        display: flex;
        justify-content: space-between;
        font-size: 20px;

    }

    .info-icon {
        width: 22px;
        height: 27.71px;
    }

    .delete-icon {
        width: 22px;
        height: 27.71px;
    }

}

/* XX large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1600px) {
    .unit-price {
        color: #ff0000;
    }

    .commander-button {
        background-color: #00cff4;
        color: #ffffff;
        border-radius: 20px;
        width: 319px;
        height: 90px;
        font-size: 20px;
        border-width: 0px;
    }

    .info-text {
        font-weight: 500;
        font-size: 20px;
        color: #828282;
    }

    .cart-data {
        font-size: 20px;
        font-weight: 500;

    }

    .total {
        display: flex;
        justify-content: space-between;
        font-size: 20px;

    }

    .info-icon {
        width: 22px;
        height: 27.71px;
    }

    .delete-icon {
        width: 22px;
        height: 27.71px;
    }
}
</style>