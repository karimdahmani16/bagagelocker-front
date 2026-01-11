<template>
    <meta name="description" content="Learn more about how our BagageLocker boxes work.">
    <div id="commentcamarcheid" class="container overall-container">
        <h2 class="col-12 d-none d-xl-block comment-ca-marche-text comment-ca-marche-text-xl text-align-left">
            <b> {{ getFirstWord(store.getters.how_it_works) }}</b> {{ getOtherWords(store.getters.how_it_works) }}
        </h2>
        <h2
            class="col-12 d-none d-md-block d-xl-none comment-ca-marche-text comment-ca-marche-text-md text-align-left">
            <b> {{ getFirstWord(store.getters.how_it_works) }}</b> {{ getOtherWords(store.getters.how_it_works) }}
        </h2>
        <h2
            class="col-12 d-none d-sm-block d-md-none comment-ca-marche-text comment-ca-marche-text-sm text-align-center">
            <b> {{ getFirstWord(store.getters.how_it_works) }}</b> {{ getOtherWords(store.getters.how_it_works) }}
        </h2>
        <h2 class="col-12 d-xs-block d-sm-none comment-ca-marche-text comment-ca-marche-text-xs text-align-center">
            <b> {{ getFirstWord(store.getters.how_it_works) }}</b> {{ getOtherWords(store.getters.how_it_works) }}
        </h2>
        <div class="row comment-container">
            <ReserverElement class="mt-xs-0 mt-md-5 mr-xs-0 mr-md-5" />
            <CodeAcces class="mr-xs-0 mr-md-5" />
            <EntreposerBagages class="mr-xs-0 mr-md-5" />
            <ProfiterElement class="mt-xs-0 mt-md-4 mr-xs-0 mr-md-5" />
        </div>
    </div>
</template>

<script setup>
import ReserverElement from './ReserverElement.vue'
import CodeAcces from './CodeAcces.vue'
import EntreposerBagages from './EntreposerBagages.vue'
import ProfiterElement from './ProfiterElement.vue'
import { useStore } from 'vuex'
const store = useStore()
const getFirstWord = (text) => {
    if (!text) return ''; // Handle case where text might be empty or undefined
    const words = text.split(' ');
    if (words.length > 0) {
        return words.shift(); // Get the first word
    }
    return text; // If there's no first word, return the original text
}
const getOtherWords = (text) => {
    if (!text) return ''; // Handle case where text might be empty or undefined
    const words = text.split(' ');
    if (words.length > 0) {
        const firstWord = words.shift(); // Get the first word
        console.log(firstWord);
        return words.join(' '); // Join the remaining words
    }
    return text; // If there's no first word, return the original text
}
</script>
<style scoped>
.comment-container {
    margin-top: 50px;
    justify-content: center;

}

.overall-container {

    text-align: start;
}

.margin-right-50 {
    margin-right: 50px;
}

.comment-ca-marche-text {
    overflow: hidden;
    color: #000;
    white-space: nowrap;
    font-family: Montserrat;
}

.text-align-left {
    text-align: left;
}

.text-align-center {
    text-align: center;
}

.comment-ca-marche-text-xl {
    font-size: 68px;
}

.comment-ca-marche-text-md {
    font-size: 54px;
}

.comment-ca-marche-text-sm {
    font-size: 36px;
}

.comment-ca-marche-text-xs {
    font-size: 24px;
}

.margin-top-profiter {
    margin-top: 30px;
}

.margin-top-reserver {
    margin-top: 30px;
}
</style>