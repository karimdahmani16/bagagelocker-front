<template>
    <div class="moins">
        <div class="plusmoins" />
        <div class="div noselect">{{ text }}</div>
    </div>
</template>

<script setup>

import { defineProps, toRefs } from 'vue';
const props = defineProps({
  text: String, 
});

const { text } = toRefs(props);

</script>

<style scoped>
.moins {
  position: absolute;
  top: 0px;
  left: 0px;
  width: 30px;
  height: 30px;
  cursor: pointer;
}
.plusmoins {
  position: absolute;
  top: 0px;
  left: 0px;
  border: 2px solid #33ceff;
  box-sizing: border-box;
  width: 30px;
  height: 30px;
}

.div {
  position: absolute;
  top: calc(50% - 16px);
  left: calc(50% - 6px);
  display: inline-block;
  width: auto;
  font-size: 22px;
}
.noselect {
  -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
     -khtml-user-select: none; /* Konqueror HTML */
       -moz-user-select: none; /* Old versions of Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
            user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome, Edge, Opera and Firefox */
}
</style>