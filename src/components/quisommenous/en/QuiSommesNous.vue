<template>
    <meta name="description" content="Learn about BagageLocker, our mission and values. Discover who we are and what we stand for.">
    <div id="quisommenousid" class="container-fluid">
        <h2
            class="margin-bottom-xl margin-left-xl col-12 d-none d-xl-block comment-ca-marche-text comment-ca-marche-text-xl text-align-left">
            <b class="blue">{{ getFirstWord(store.getters.who_are_we) }}</b> <b>{{
                getOtherWords(store.getters.who_are_we) }}</b>
        </h2>
        <h2
            class="col-12 margin-bottom-lg margin-left-lg d-none d-md-block d-xl-none comment-ca-marche-text comment-ca-marche-text-md text-align-left">
            <b class="blue">{{ getFirstWord(store.getters.who_are_we) }}</b> <b>{{
                getOtherWords(store.getters.who_are_we) }}</b>
        </h2>
        <h2
            class="col-12 margin-bottom-sm d-none d-sm-block d-md-none comment-ca-marche-text comment-ca-marche-text-sm text-align-center">
            <b class="blue">{{ getFirstWord(store.getters.who_are_we) }}</b> <b>{{
                getOtherWords(store.getters.who_are_we) }}</b>
        </h2>
        <h2 class="col-12 margin-bottom-xs d-xs-block d-sm-none comment-ca-marche-text fs-2 text-align-center">
            <b class="blue">{{ getFirstWord(store.getters.who_are_we) }}</b> <b>{{
                getOtherWords(store.getters.who_are_we) }}</b>
        </h2>
        <div class="background-gris">
            <div class="col-12 row">
                <h3 class="d-none d-lg-block d-xl-none fs-1 text-center"><b>Bagage Locker</b></h3>
                <h3 class="d-none d-sm-block d-lg-none fs-2 text-center"><b>Bagage Locker</b></h3>
                <h3 class="d-xs-block d-sm-none fs-4 text-center"><b>Bagage Locker</b></h3>
                <div class="col-6 d-none d-xl-block mr-5">
                    <img class="image" alt="" src="../../../assets/quisommenous/cassier-1@2x.png" />
                </div>
                <div class="col-12 d-xs-block d-xl-none text-center">
                    <img class="image-smaller rounded" alt="" src="../../../assets/quisommenous/cassier-1@2x.png" />
                </div>
                <div class="d-none d-xl-block col-5 titre-text mt-xl-3 ml-5">
                    <h3 class="titre-text-xl"><b>Bagage Locker</b></h3>
                    <br>
                    <p class="detail-width-max fs-4"><b>Bagage Locker</b> {{ store.getters.is_an_automated }} {{
                store.getters.this_way }}
                    </p>
                </div>
                <div class="d-none d-sm-block d-xl-none col-12 titre-text text-center">
                    <p class="detail-width-max fs-4"><b>Bagage Locker</b> {{ store.getters.is_an_automated }} {{
                store.getters.this_way }}
                    </p>
                </div>
                <div class="d-xs-block d-sm-none col-12 titre-text text-center">
                    <p class="detail-width-max fs-4"><b>Bagage Locker</b> {{ store.getters.is_an_automated }} {{
                store.getters.this_way }}
                    </p>
                </div>
            </div>
        </div>
        <div class="col-12 d-none d-lg-block horaires prix-casier-text-size-lg mb-5 mx-5">
            {{ store.getters.a_reservation_with_us }}
        </div>
        <div class="col-12 d-none d-md-block d-lg-none horaires prix-casier-text-size-md mb-5">
            {{ store.getters.a_reservation_with_us }}
        </div>
        <div class="col-12 d-none d-sm-block d-md-none horaires prix-casier-text-size-sm mb-5">
            {{ store.getters.a_reservation_with_us }}
        </div>
        <div class="col-12 d-xs-block d-sm-none horaires prix-casier-text-size-xs mt-2 text-align-center mb-2">
            {{ store.getters.a_reservation_with_us }}
        </div>
        <div class="background-gris">
            <div class="col-12 row">
                <h3 class="d-none d-lg-block d-xl-none fs-1 text-center"><b>{{ store.getters.security }}</b></h3>
                <h3 class="d-none d-sm-block d-lg-none fs-2 text-center"><b>{{ store.getters.security }}</b></h3>
                <h3 class="d-xs-block d-sm-none fs-3 text-center"><b>{{ store.getters.security }}</b></h3>
                <div class="d-none d-xl-block col-5 titre-text mt-xl-3 ml-5">
                    <h3 class="titre-text-xl"><b>{{ store.getters.security }}</b></h3>
                    <br>
                    <p class="fs-4">{{ store.getters.our_automated_is_equipped }} {{ store.getters.this_ensures }}
                    </p>
                </div>
                <div class="col-12 d-xs-block d-xl-none text-center">
                    <img class="image-smaller rounded" alt=""
                        src="../../../assets/quisommenous/ecran-security-1@2x.png" />
                </div>
                <div class="d-none d-sm-block d-xl-none col-12 titre-text text-center">
                    <p class="fs-4">{{ store.getters.our_automated_is_equipped }} {{ store.getters.this_ensures }}
                    </p>
                </div>
                <div class="d-xs-block d-sm-none col-12 titre-text text-center">
                    <p class="fs-4">{{ store.getters.our_automated_is_equipped }} {{ store.getters.this_ensures }}
                    </p>
                </div>
                <div class="col-6 d-none d-xl-block margin-left">
                    <img class="image" alt="" src="../../../assets/quisommenous/ecran-security-1@2x.png" />
                </div>
            </div>
        </div>
        <div class="background-gris mt-2">
            <div class="col-12 row">
                <h3 class="d-none d-lg-block d-xl-none fs-1 text-center"><b>{{ store.getters.accessibility_days }}</b>
                </h3>
                <h3 class="d-none d-sm-block d-lg-none fs-2 text-center"><b>{{ store.getters.accessibility_days }}</b>
                </h3>
                <h3 class="d-xs-block d-sm-none fs-3 text-center"><b>{{ store.getters.accessibility_days }}</b></h3>
                <div class="d-none d-xl-block col-5 titre-text mt-xl-3 ml-5">
                    <h3 class="titre-text-xl"><b>{{ store.getters.accessibility_days }}</b></h3>
                    <br>
                    <p class="fs-4">{{ store.getters.our_automated_is_avail }}
                    </p>
                </div>
                <div class="col-12 d-xs-block d-xl-none text-center">
                    <img class="image-accessibilite-smaller rounded" alt=""
                        src="../../../assets/quisommenous/accessibilit-8@2x.png" />
                </div>
                <div class="d-none d-sm-block d-xl-none col-12 titre-text text-center">
                    <p class="detail-width">{{ store.getters.our_automated_is_avail }}
                    </p>
                </div>
                <div class="d-xs-block d-sm-none col-12 titre-text text-center">
                    <p>{{ store.getters.our_automated_is_avail }}
                    </p>
                </div>
                <div class="col-6 d-none d-xl-block margin-left-lg">
                    <img class="image-accessibilite" alt="" src="../../../assets/quisommenous/accessibilit-8@2x.png" />
                </div>
            </div>
        </div>
        <div class="background-gris mt-2">
            <div class="col-12 row">
                <h3 class="d-none d-lg-block d-xl-none fs-1 text-center"><b>{{ store.getters.convenience }}</b></h3>
                <h3 class="d-none d-sm-block d-lg-none fs-2 text-center"><b>{{ store.getters.convenience }}</b></h3>
                <h3 class="d-xs-block d-sm-none fs-3 text-center"><b>{{ store.getters.convenience }}</b></h3>
                <div class="d-none d-xl-block col-5 titre-text mt-xl-3 ml-5">
                    <h3 class="titre-text-xl"><b>{{ store.getters.convenience }}</b></h3>
                    <br>
                    <p class="fs-4">{{ store.getters.by_reserving_a_box }}
                        {{ store.getters.place_to_store }} {{ store.getters.this_allows }} {{
                store.getters.considerable_saving }}
                    </p>
                </div>
                <div class="col-12 d-xs-block d-xl-none text-center">
                    <img class="image-accessibilite-smaller rounded" alt=""
                        src="../../../assets/quisommenous/commodit-1@2x.png" />
                </div>
                <div class="d-none d-sm-block d-xl-none col-12 titre-text text-center">
                    <p class="detail-width">{{ store.getters.by_reserving_a_box }}
                        {{ store.getters.place_to_store }} {{ store.getters.this_allows }} {{
                store.getters.considerable_saving }}
                    </p>
                </div>
                <div class="d-xs-block d-sm-none col-12 titre-text text-center">
                    <p>{{ store.getters.by_reserving_a_box }}
                        {{ store.getters.place_to_store }} {{ store.getters.this_allows }} {{
                        store.getters.considerable_saving }}
                    </p>
                </div>
                <div class="col-6 d-none d-xl-block margin-left-lg">
                    <img class="image-accessibilite" alt="" src="../../../assets/quisommenous/commodit-1@2x.png" />
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { useStore } from 'vuex';
const store = useStore();
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
.horaires {
    margin-top: 70px;
    color: #000;
    font-family: Montserrat;
}

.prix-casier-text-size-lg {
    font-size: 42px;
}

.prix-casier-text-size-md {
    font-size: 32px;
}

.prix-casier-text-size-sm {
    font-size: 22px;
}

.prix-casier-text-size-xs {
    font-size: 16px;
}

.blue {
    color: #00eeff;
}

.background-gris {
    width: 100%;
    height: 100%;
    overflow: hidden;
    background: #d7d7d7;
    font-family: Montserrat;
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

.titre-text-xl {
    font-size: 52px;
}

.titre-text-md {
    font-size: 44px;
}

.titre-text-sm {
    font-size: 32px;
}

.titre-text-xs {
    font-size: 24px;
}

.titre-text {
    color: #000;
    font-family: Montserrat;
}

.image {
    width: 100%;
}

.image-smaller {
    width: 75%;
}

.image-accessibilite {
    width: 75%;
}

.image-accessibilite-smaller {
    width: 65%;
}

.margin-left-xl {
    margin-left: 150px;
}

.margin-bottom-xl {
    margin-bottom: 30px;
}

.margin-bottom-lg {
    margin-bottom: 20px;
}

.margin-left-lg {
    margin-left: 100px;
}

.margin-bottom-sm {
    margin-bottom: 15px;
}

.margin-bottom-xs {
    margin-bottom: 10px;
}

.detail-width {
    margin-left: 10%;
    margin-right: 10%;
}

.detail-width-max {
    margin-right: -80px;
}

.margin-left {
    margin-left: 60px;
}
</style>