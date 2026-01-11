<template>
    <div class="card center-text" style="width: 18rem;">
        <img src="../../../assets/commentcamarche/reserver-1@2x.png" class="card-img-top" alt="...">
        <div class="card-body">
            <h3 class="card-title mt-4 small-font">{{ store.getters.reserve }}</h3>
            <p class="card-text">{{ store.getters.online_reservation }}</p>
        </div>
    </div>
</template>
<script setup>
import { useStore } from 'vuex';
const store = useStore();
</script>
<style scoped>
.center-text {
    text-align: center;
    border-width: 0px;
}
.small-font {
    font-size: 21px;
}
</style>