<template>
    <div class="date-fin">
        <div class="col-12">
            <span class="date-depot">End date:</span>
            <b class="date-depot-value">{{ props.endDate }}</b>
        </div>
        <div class="col-12">
            <img class="apartir-de-icon" alt="" src="../../assets/terminepage/vector1.svg" />
            <i class="apartir-de-text">Checkout before 22:00</i>
        </div>
    </div>
</template>

<script setup>
import { defineProps } from 'vue'
const props = defineProps({
    endDate: String
})
</script>

<style scoped>
.apartir-de-icon {
  width: 30px;
  height: 30px;
}
/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
    .date-fin {
        background-color: rgb(255, 255, 255);
        border-radius: 20px;
        width: 90%;
        height: 145px;
        display: inline-block;
        text-align: center;
    }

    .date-depot {
        font-weight: 500;
        display: inline-block;
        text-align: center;
        font-family: Montserrat;
        font-size: 20px;
        margin-top: 20px;
        margin-left: 50px;
        color: #373737;
    }

    .date-depot-value {
        font-family: Montserrat;
        font-size: 20px;
        margin-left: 30px;
    }

    .apartir-de {
        margin-left: 50px;
    }

    .apartir-de-icon {
        width: 25px;
        height: 25px;
        margin-right: -5px;
    }

    .apartir-de-text {
        display: inline-block;
        margin-left: 20px;
        font-weight: 600;
        font-family: Montserrat;
        font-size: 18px;
        color: #ff0000;
    }
}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {
    .date-fin {
        background-color: rgb(255, 255, 255);
        border-radius: 20px;
        height: 145px;
        width: 90%;
        display: inline-block;
        text-align: center;
    }

    .date-depot {
        font-weight: 500;
        display: inline-block;
        text-align: center;
        font-family: Montserrat;
        font-size: 22px;
        margin-top: 20px;
        margin-left: 50px;
        color: #373737;
    }

    .date-depot-value {
        font-family: Montserrat;
        font-size: 22px;
        margin-left: 30px;
    }

    .apartir-de {
        margin-left: 50px;
    }

    .apartir-de-icon {
        width: 30px;
        height: 30px;
        margin-right: -5px;
    }

    .apartir-de-text {
        display: inline-block;
        margin-left: 20px;
        font-weight: 800;
        font-family: Montserrat;
        font-size: 20px;
        color: #ff0000;
    }
}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {
    .date-fin {
        background-color: rgb(255, 255, 255);
        border-radius: 20px;
        height: 145px;
        width: 80%;
        margin-top: 10px;
        display: inline-block;
        text-align: center;
    }

    .date-depot {
        font-weight: 500;
        display: inline-block;
        text-align: center;
        font-family: Montserrat;
        font-size: 24px;
        margin-top: 20px;
        margin-left: 50px;
        color: #373737;
    }

    .date-depot-value {
        font-family: Montserrat;
        font-size: 24px;
        margin-left: 30px;
    }

    .apartir-de {
        margin-left: 50px;
    }

    .apartir-de-text {
        display: inline-block;
        margin-left: 20px;
        font-weight: 800;
        font-family: Montserrat;
        font-size: 20px;
        color: #ff0000;
    }
}

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
    .date-fin {
        background-color: rgb(255, 255, 255);
        border-radius: 20px;
        height: 145px;
        width: 85%;
        margin-top: 20px;
        margin-left: 30px;
    }

    .date-depot {
        font-weight: 500;
        display: inline-block;
        text-align: center;
        font-family: Montserrat;
        font-size: 26px;
        margin-top: 20px;
        margin-left: 50px;
        color: #373737;
    }

    .date-depot-value {
        font-family: Montserrat;
        font-size: 26px;
        margin-left: 40px;
    }

    .apartir-de {
        margin-left: 50px;
    }

    .apartir-de-text {
        display: inline-block;
        margin-left: 20px;
        font-weight: 800;
        font-family: Montserrat;
        font-size: 21px;
        color: #ff0000;
    }
}

/* XX large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1600px) {
    .date-fin {
        background-color: rgb(255, 255, 255);
        border-radius: 20px;
        height: 145px;
        width: 85%;
        margin-top: 20px;
        margin-left: 10px;
    }

    .date-depot {
        font-weight: 500;
        display: inline-block;
        text-align: center;
        font-family: Montserrat;
        font-size: 28px;
        margin-top: 20px;
        margin-left: 50px;
        color: #373737;
    }

    .date-depot-value {
        font-family: Montserrat;
        font-size: 28px;
        margin-left: 60px;
    }

    .apartir-de {
        margin-left: 50px;
    }

    .apartir-de-text {
        display: inline-block;
        margin-left: 20px;
        font-weight: 800;
        font-family: Montserrat;
        font-size: 22px;
        color: #ff0000;
    }
}
</style>