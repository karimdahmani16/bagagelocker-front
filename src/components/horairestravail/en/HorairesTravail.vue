<template>
    <meta name="description" content="Know about our working hours so that you can organize your checkin and checkout hours.">
    <div id="horairestravailid" class="container overall-container">
        <h2 class="col-12 d-none d-lg-block horaires horaires-text-size-lg">
            <b>{{ store.getters.schedules }}</b>
        </h2>
        <h2 class="col-12 d-none d-md-block d-lg-none horaires horaires-text-size-md">
            <b>{{ store.getters.schedules }}</b>
        </h2>
        <h2 class="col-12 d-none d-sm-block d-md-none horaires horaires-text-size-sm">
            <b>{{ store.getters.schedules }}</b>
        </h2>
        <h2 class="col-12 d-xs-block d-sm-none horaires horaires-text-size-xs">
            <b>{{ store.getters.schedules }}</b>
        </h2>
        <div class="row">
            <div class="col-3"></div>
            <div class="col-6 row d-xs-block d-xl-none">
                <img class="image-small" v-if="store.getters.selectedLanguage === 'fr'" alt="Horaires de travail" src="../../../assets/horaires/time-1@2x.png" />
                <img class="image-small" v-if="store.getters.selectedLanguage === 'en'" alt="Working hours" src="../../../assets/horaires/time-1@2x.png" />
                <img class="image-small" v-if="store.getters.selectedLanguage === 'pt'" alt="Horários de trabalho" src="../../../assets/horaires/time-1@2x.png" />
                <img class="image-small" v-if="store.getters.selectedLanguage === 'es'" alt="Horarios de trabajo" src="../../../assets/horaires/time-1@2x.png" />
            </div>
            <div class="col-3"></div>
        </div>
        <div class="col-12 row">
            <div class="d-none d-xl-block col-8">
                <b class="acces-libre-text-top-margin acces-libre-text acces-libre-text-size">{{ store.getters.free_access }}</b>
                <b class="total-autonomy-text-top-margin acces-libre-text acces-libre-text-size">{{ store.getters.total_autonomy }}</b>
                <DividerComponent />
                <ul class="list-text list-text-size text-margin">
                    <li class="text-element">{{ store.getters.monday_to_sunday }}</li>
                    <li class="text-element">{{ store.getters.open_on }}</li>
                    <li class="text-element red-text"><b>{{ store.getters.mandatory_departure }}</b></li>
                </ul>
            </div>
            <div class="d-none d-sm-block d-xl-none col-12 justify-content-center">
                <b class="acces-libre-text">{{ store.getters.free_access }}</b>
                <b class="acces-libre-text">{{ store.getters.total_autonomy }}</b>
                <DividerComponent />
                <ul class="list-text list-text-size text-margin">
                    <li class="text-element">{{ store.getters.monday_to_sunday }}</li>
                    <li class="text-element">{{ store.getters.open_on }}</li>
                    <li class="text-element red-text"><b>{{ store.getters.mandatory_departure }}</b></li>
                </ul>
            </div>
            <div class="d-xs-block d-sm-none col-12 justify-content-center">
                <b class="acces-libre-text-xs">{{ store.getters.free_access }}</b><br>
                <b class="acces-libre-text-xs">{{ store.getters.total_autonomy }}</b>
                <DividerComponent />
                <ul class="list-text list-text-size text-margin">
                    <li class="text-element-xs">{{ store.getters.monday_to_sunday }}</li>
                    <li class="text-element-xs">{{ store.getters.open_on }}</li>
                    <li class="text-element-xs red-text"><b>{{ store.getters.mandatory_departure }}</b></li>
                </ul>
            </div>
            <div class="col-4 d-none d-xl-block">
                <img class="image" v-if="store.getters.selectedLanguage === 'fr'" alt="Horaires de travail" src="../../../assets/horaires/time-1@2x.png" />
                <img class="image" v-if="store.getters.selectedLanguage === 'en'" alt="Working hours" src="../../../assets/horaires/time-1@2x.png" />
                <img class="image" v-if="store.getters.selectedLanguage === 'pt'" alt="Horários de trabalho" src="../../../assets/horaires/time-1@2x.png" />
                <img class="image" v-if="store.getters.selectedLanguage === 'es'" alt="Horarios de trabajo" src="../../../assets/horaires/time-1@2x.png" />
            </div>
        </div>
    </div>
</template>
<script setup>
import { useStore } from 'vuex';
const store = useStore();
</script>
<style scoped>
.image {
    width: 100%;
}

.overall-container {
    text-align: center;
    justify-content: center;
    align-items: center;
}

.horaires-text-size-lg {
    font-size: 68px;
}

.horaires-text-size-md {
    font-size: 54px;
}

.horaires-text-size-sm {
    font-size: 36px;
}

.horaires-text-size-xs {
    font-size: 24px;
}

.horaires {
    color: #5a5858;
    white-space: nowrap;
    font-family: Montserrat;
}

.acces-libre-text {
    font-weight: 600;
    color: #000;
    white-space: nowrap;
    font-family: Montserrat;
    text-align: start;
    display: flex;
}
.acces-libre-text-xs {
    font-weight: 600;
    color: #000;
    white-space: nowrap;
    font-family: Montserrat;
}
.acces-libre-text-size {
    font-size: 24px;
}

.acces-libre-text-top-margin {
    margin-top: 80px;
}

.total-autonomy-text-top-margin {
    margin-top: 5px;
}

.list-text {
    font-family: Montserrat;
    text-align: start;

}

.text-margin {
    margin-left: 10px;
}

.list-text-size {
    font-size: 20px;
}

.text-element {
    margin-top: 10px;
    font-weight: 500;
    padding-left: 20px;
}

.text-element-xs {
    margin-top: 10px;
    font-weight: 500;
    padding-left: 20px;
    font-size: 18px;
}

.red-text {
    color: red;
}
</style>