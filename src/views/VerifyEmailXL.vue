<template>
<div>
    <h4 v-if="errorOccurred">An error occurred!</h4>
    <h4 v-else>Your email is verified!</h4>
</div>    
</template>
<script setup>
import { onMounted, defineProps, ref } from "vue";
import Service from "@/core/Service";
let errorOccurred = ref(false)
const props = defineProps({
    verificationCode: String
})
onMounted(() => {
    Service.verifyEmail(props.verificationCode).then(response => {
        console.log('response:' + response.data);
        errorOccurred.value = false
    }).catch(error => {
        console.log('error:' + error);
        errorOccurred.value = true
    })
})
</script>