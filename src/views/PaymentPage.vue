<template>
    <div>
      <stripe-checkout
        ref="checkoutRef"
        mode="payment"
        :pk="publishableKey"
        :line-items="lineItems"
        :success-url="successURL"
        :cancel-url="cancelURL"
        @loading="v => loading = v"
      />
      <button @click="submit">Pay now!</button>
    </div>
  </template>
  
  <script>
  import { StripeCheckout } from '@vue-stripe/vue-stripe';
  export default {
    components: {
      StripeCheckout,
    },
    props: [
      'startDate',
      'endDate',
      'boxCount',
      'duration',
      'userId',
      'cartId'
    ],
    data () {
      this.publishableKey = process.env.VUE_APP_STRIPE_KEY
      return {
        loading: false,
        lineItems: [
          {
            price: process.env.VUE_APP_STRIPE_PRICE, // The id of the one-time price you created in your Stripe dashboard
            quantity: parseInt(this.boxCount * this.duration),
          },
        ],
        successURL: process.env.VUE_APP_SUCCESS_PAGE + '/reservation-confirmed/' + parseInt(this.cartId) + '/',
        cancelURL: process.env.VUE_APP_BAGAGE_LOCKER_URL +  '/reservation-confirmed/' + this.startDate + '/' + this.endDate + '/' + this.userId + '/' + parseInt(this.boxCount) + '/',
      };
    },
    mounted() {
      this.$refs.checkoutRef.redirectToCheckout();
    },
    methods: {
      submit () {
        // You will be redirected to Stripe's secure checkout page
        this.$refs.checkoutRef.redirectToCheckout();
      },
    },
  };
  </script>