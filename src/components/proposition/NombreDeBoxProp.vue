<template>
    <div class="date-debut">
        <div class="col-12">
            <span class="date-depot">Nombre de Box :</span>
            <b class="date-depot-value box-count-value">{{ props.boxCount }}</b>
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
.box-count-value {
  font-size: 1.2rem;
  font-weight: bold;
  color: #fff; /* White text color */
  background-color: #4fbf7a; /* Green background color */
  padding: 5px 10px;
  border-radius: 5px; /* Rounded corners */
}
/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
    .date-debut {
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

}
</style>