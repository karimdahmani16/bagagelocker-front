<template>
    <div class="row card-container">
        <div class="col-12">
            <span class="nbre-box">boxCount</span>
            <button class="bordered-button" @click="decrement"> - </button>
            <span class="duration-text"> {{ boxCount }} </span>
            <button class="bordered-button" @click="increment"> + </button>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import strings from '@/internationalization/strings'
let boxCount = ref(1)
const decrement = () => {
    if (boxCount.value > 1) boxCount.value = boxCount.value - 1
}
const increment = () => {
    if (boxCount.value < 90) boxCount.value = boxCount.value + 1
}
</script>

<style scoped>
/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
    .nbre-box {
        font-size: 18px;
        font-family: Inter;

    }
    

    .bordered-button {
        width: 30px;
        height: 30px;
        border: 1px solid #33ceff;
        border-radius: 0;
    }

    .duration-text {
        margin-left: 10px;
    }
    .card-container {
        border-radius: 20px;
        background-color: #fff;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        overflow: hidden;
        display: flex;
        width: 320px;
        height: 55px;
        align-items: center;
    }
}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {
    .nbre-box {
        font-size: 16px;
        font-family: Inter;

    }

    .bordered-button {
        width: 30px;
        height: 30px;
        border: 1px solid #33ceff;
        border-radius: 0;
    }

    .duration-text {
        margin-left: 10px;
    }
    .card-container {
        border-radius: 20px;
        background-color: #fff;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        overflow: hidden;
        display: flex;
        width: 320px;
        height: 55px;
        align-items: center;
    }
}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {
    .nbre-box {
        font-size: 16px;
        font-family: Inter;

    }

    .bordered-button {
        width: 30px;
        height: 30px;
        border: 1px solid #33ceff;
        border-radius: 0;
    }

    .duration-text {
        margin-left: 10px;
    }
    .card-container {
        border-radius: 20px;
        background-color: #fff;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        overflow: hidden;
        display: flex;
        width: 320px;
        height: 55px;
        align-items: center;
    }
}

/* Large devices (landscape tablets, 992px and up) */
@media only screen and (min-width: 992px) {
    .nbre-box {
        font-size: 16px;
        font-family: Inter;

    }

    .bordered-button {
        width: 30px;
        height: 30px;
        border: 1px solid #33ceff;
        border-radius: 0;
    }

    .duration-text {
        margin-left: 10px;
    }
    .card-container {
        border-radius: 20px;
        background-color: #fff;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        overflow: hidden;
        display: flex;
        width: 320px;
        height: 55px;
        align-items: center;
    }
}

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
    .nbre-box {
        font-size: 18px;
        font-family: Inter;

    }

    .bordered-button {
        width: 30px;
        height: 30px;
        border: 1px solid #33ceff;
        border-radius: 0;
    }

    .duration-text {
        margin-left: 10px;
    }
    .card-container {
        border-radius: 20px;
        background-color: #fff;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        overflow: hidden;
        display: flex;
        width: 320px;
        height: 55px;
        align-items: center;
    }
}

/* XX large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1600px) {
    .nbre-box {
        font-size: 18px;
        font-family: Inter;
        margin-right: 0px;

    }

    .bordered-button {
        width: 30px;
        height: 30px;
        border: 1px solid #33ceff;
        border-radius: 0;
    }

    .duration-text {
        margin-left: 10px;
        margin-right: 10px;
    }
    .card-container {
        border-radius: 20px;
        background-color: #fff;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        overflow: hidden;
        display: flex;
        width: 310px;
        height: 55px;
        align-items: center;
    }
}
</style>