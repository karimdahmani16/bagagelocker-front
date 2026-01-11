<template>
    <div class="date-debut">
        <div class="col-12">
            <span class="date-depot">Start date:</span>
            <b class="date-depot-value">{{ props.startDate }}</b>
        </div>
        <div class="apartir-de col-12">
            <img class="apartir-de-icon" alt="" src="../../assets/terminepage/vector.svg" />
            <i class="apartir-de-text">Check-in start at 08:00</i>
        </div>
    </div>
</template>

<script setup>
import { defineProps } from 'vue'
const props = defineProps({
    startDate: String
})
</script>

<style scoped>
/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
    .date-debut {
        background-color: rgb(255, 255, 255);
        border-radius: 20px;
        height: 135px;
        width: 90%;
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
        margin-left: -100px;
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
    .date-debut {
        background-color: rgb(255, 255, 255);
        border-radius: 20px;
        width: 90%;
        height: 135px;
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
        margin-left: -110px;
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
    .date-debut {
        background-color: rgb(255, 255, 255);
        border-radius: 20px;
        height: 135px;
        width: 80%;
        display: inline-block;
        text-align: center;
    }
    .date-depot {
        font-weight: 500;
        font-family: Montserrat;
        font-size: 24px;
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
    .apartir-de-icon {
        width: 30px;
        height: 30px;
        margin-left: -110px;
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
    .date-debut {
        background-color: rgb(255, 255, 255);
        border-radius: 20px;
        height: 145px;
        margin-top: 20px;
        margin-left: 30px;
        width: 80%;
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
    .apartir-de-icon {
        width: 30px;
        height: 30px;
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

/* XX large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1600px) {
    .date-debut {
        background-color: rgb(255, 255, 255);
        margin-top: 20px;
        margin-left: 10px;
        width: 85%;
        border-radius: 20px;
        height: 145px;
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
    .apartir-de-icon {
        width: 30px;
        height: 30px;
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