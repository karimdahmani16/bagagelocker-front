<template>
    <div class="box-count">
        <div class="col-12 nombre-box">Total of Box: </div>
        <div class="col-12 card-boxCount">
            <span class="boxCount-text">{{ props.boxCount }}</span>
        </div>
    </div>
</template>
<script setup>
import { defineProps } from 'vue'
const props = defineProps({
    boxCount: Number
})
</script>

<style scoped>
/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
    .box-count {
        background-color: #e9e9e9;
        width: 220px;
        display: inline-block;
        text-align: center;
    }

    .card-boxCount {
        width: 40px;
        height: 40px;
        display: inline-block;
        text-align: center;
        border-radius: 10px;
        border: none;
        background-color: white;
    }

    .boxCount-text {
        font-weight: 600;
        color: #000;
        font-family: Montserrat;
        font-size: 18px;
    }

    .nombre-box {
        font-weight: 500;
        display: inline-block;
        font-family: Montserrat;
        font-size: 18px;
    }
}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {
    .box-count {
        background-color: #e9e9e9;
        width: 220px;
        display: inline-block;
        text-align: center;
    }

    .card-boxCount {
        width: 40px;
        height: 40px;
        display: inline-block;
        text-align: center;
        border-radius: 10px;
        border: none;
        background-color: white;
    }

    .boxCount-text {
        font-weight: 600;
        color: #000;
        font-family: Montserrat;
        font-size: 18px;
    }

    .nombre-box {
        font-weight: 500;
        display: inline-block;
        font-family: Montserrat;
        font-size: 20px;
    }
}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {
    .box-count {
        background-color: #e9e9e9;
        width: 220px;
        display: inline-block;
        text-align: center;
    }

    .card-boxCount {
        width: 40px;
        height: 40px;
        padding-bottom: 30px;
        display: inline-block;
        text-align: center;
        border-radius: 10px;
        border: none;
        background-color: white;
    }

    .boxCount-text {
        font-weight: 600;
        color: #000;
        font-family: Montserrat;
        font-size: 20px;
    }

    .nombre-box {
        font-weight: 500;
        display: inline-block;
        font-family: Montserrat;
        font-size: 22px;
    }
}

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
    .box-count {
        background-color: #e9e9e9;
        width: 220px;
        display: inline-block;
        text-align: center;
    }

    .card-boxCount {
        width: 40px;
        height: 40px;
        padding-bottom: 40px;
        display: inline-block;
        text-align: center;
        border-radius: 10px;
        border: none;
        background-color: white;
    }

    .boxCount-text {
        font-weight: 600;
        color: #000;
        font-family: Montserrat;
        font-size: 22px;
    }

    .nombre-box {
        font-weight: 500;
        margin-top: 30px;
        display: inline-block;
        width: 200px;
        font-family: Montserrat;
        font-size: 24px;
        text-align: center;
        color: #373737;
    }

}

/* XX large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1600px) {
    .box-count {
        background-color: #e9e9e9;
        width: 90%;
        display: inline-block;
        text-align: center;
    }

    .card-boxCount {
        width: 40px;
        height: 40px;
        padding-bottom: 45px;
        display: inline-block;
        text-align: center;
        border-radius: 10px;
        border: none;
        background-color: white;
    }

    .nombre-box {
        font-size: 26px;
        color: #373737;
        font-weight: 500;
        display: inline-block;
        font-family: Montserrat;
    }

    .boxCount-text {
        font-weight: 600;
        color: #000;
        font-family: Montserrat;
        font-size: 24px;
    }
}
</style>