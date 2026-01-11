<template>
  <meta name="description" content="Discover convenient and secure smart luggage storage in Porto. Store your bags safely with BagageLocker while you explore the city. Book now for hassle-free travel!">
  <div>
    <NavBar />
    <LandingPageXL />
    <!--
      <CommentCaMarche class="mt-4" />
      <SecuritySection />
      <QuiSommesNous />
      -->
    <HorairesTravail class="mt-5" />
    <HypothesesStockage class="mt-5" />
    
    
  </div>
</template>

<script setup>
import LandingPageXL from '../components/landing-page/LandingPageXL.vue'
/*
import PageFooter from '../components/base/PageFooter.vue'
import CommentCaMarche from '../components/commentcamarche/en/CommentCaMarche.vue'
import SecuritySection from '../components/securitysection/en/SecuritySection.vue'
import QuiSommesNous from '../components/quisommenous/en/QuiSommesNous.vue'
*/
import HorairesTravail from '../components/horairestravail/en/HorairesTravail.vue'
import HypothesesStockage from '../components/hypothesestockage/en/HypothesesStockage.vue'
import NavBar from '@/components/base/en/NavBar.vue'
</script>

<style></style>