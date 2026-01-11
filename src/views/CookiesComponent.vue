<template>
  <div v-if="showCookieConsent" class="cookie-consent">
    <p>This website uses cookies to ensure you get the best experience on our website.</p>
    <div class="cookie-buttons">
      <button type="button" class="accept" @click="acceptCookies">Accept</button>
      <button type="button" class="decline" @click="declineCookies">Decline</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useStore } from 'vuex'
const store = useStore();
const showCookieConsent = ref(!store.getters.cookiesAccepted);

const acceptCookies = () => {
  store.commit('setCookiesAccepted', true);
  showCookieConsent.value = false;
};

const declineCookies = () => {
  store.commit('setCookiesAccepted', false);
  showCookieConsent.value = false;
};
</script>

<style>
.cookie-consent {
  position: fixed;
  bottom: 10px;
  left: 10px;
  right: 10px;
  background: rgba(0, 0, 0, 0.8);
  color: white;
  padding: 15px;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.cookie-buttons {
  display: flex;
  gap: 10px;
}

.cookie-consent button {
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 5px;
  transition: background 0.3s;
}

.cookie-consent button.accept {
  background: #4CAF50;
  color: white;
}

.cookie-consent button.accept:hover {
  background: #45a049;
}

.cookie-consent button.decline {
  background: #f44336;
  color: white;
}

.cookie-consent button.decline:hover {
  background: #e53935;
}
</style>