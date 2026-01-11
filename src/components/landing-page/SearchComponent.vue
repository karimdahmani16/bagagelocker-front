<template>
    <div class="row card-container d-flex justify-content-between align-items-center">
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-3 calendar">
            <StartDate />
        </div>
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-3 nbre-jours">
            <NombreDeJours />
        </div>
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-3 box-count">
            <NombreDeBox />
        </div>
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-2 col-xl-2">
            <ButtonComponent class="recherche" label="Recherche" outlined raised @click="search" />
        </div>
    </div>
</template>
<script setup>
import NombreDeJours from '@/components/landing-page/NbreDeJours.vue';
import NombreDeBox from '@/components/landing-page/NbreDeBox.vue';
import StartDate from '@/components/landing-page/StartDate.vue';
const search = () => {
    console.log("searching");
}
</script>
<style scoped>
/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {}

/* Large devices (landscape tablets, 992px and up) */
@media only screen and (min-width: 992px) {}

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {}

@media only screen and (min-width: 1600px) {
    .calendar {
        margin-right: 0px;
        margin-left: 40px;
    }

    .nbre-jours {
        margin-left: -10px;
        margin-right: 20px;
    }

    .box-count {
        margin-left: 20px;
        margin-right: 23px;
    }

    .card-container {
        border-radius: 20px;
        background-color: #fbfbfb;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        height: fit-content;
    }

    .recherche {
        font-weight: 600;
        background-color: #00eeff;
        color: #000;
        font-size: 15px;
        border-width: 0px;
        font-family: Montserrat;
        margin-top: 0px;
        margin-left: 13px;
    }
}
</style>