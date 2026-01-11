<template>
    <div class="row card-container">
        <div class="col-12">
            <CalendarComponent class="calendar-component" dateFormat="D d M yy" v-model="startDate" :minDate="today"
                showIcon iconDisplay="input">
            </CalendarComponent>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
let startDate = ref("Date de dépôt")
let today = new Date()
/*
let endDate = computed(() => {
    return moment(startDate.value, "DD-MM-YYYY").add(duration.value - 1, 'days').toDate()
})
*/
</script>

<style scoped>
/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
    .card-container {
        border-radius: 20px;
        background-color: #fff;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        overflow: hidden;
        display: flex;
        width: 290px;
        height: 55px;
    }

}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {
    .card-container {
        border-radius: 20px;
        background-color: #fff;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        overflow: hidden;
        display: flex;
        width: 290px;
        height: 55px;
    }

}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {
    .card-container {
        border-radius: 20px;
        background-color: #fff;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        overflow: hidden;
        display: flex;
        width: 290px;
        height: 55px;
    }

}

/* Large devices (landscape tablets, 992px and up) */
@media only screen and (min-width: 992px) {
    .card-container {
        border-radius: 20px;
        background-color: #fff;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        overflow: hidden;
        display: flex;
        width: 290px;
        height: 55px;
    }

}

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
    .card-container {
        border-radius: 20px;
        background-color: #fff;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        overflow: hidden;
        display: flex;
        width: 290px;
        height: 55px;
    }

}

/* XX large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1600px) {
    .card-container {
        border-radius: 20px;
        background-color: #fff;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        overflow: hidden;
        display: flex;
        width: 290px;
        height: 55px;
    }

    .calendar-component {
        margin-top: -5px;
    }
}
</style>