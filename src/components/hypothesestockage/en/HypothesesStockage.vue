<template>
    <meta name="description" content="Know the dimensions of our boxes and learn about their luggage capacity and so how many suitcases/bags you can store inside.">
    <div id="hypothesestockageid" class="container overall-container">
        <h2 class="col-12 d-none d-lg-block horaires horaires-text-size-lg">
            <b>{{ store.getters.storage_assumptions }}</b>
        </h2>
        <h2 class="col-12 d-none d-md-block d-lg-none horaires horaires-text-size-md">
            <b>{{ store.getters.storage_assumptions }}</b>
        </h2>
        <h2 class="col-12 d-none d-sm-block d-md-none horaires horaires-text-size-sm">
            <b>{{ store.getters.storage_assumptions }}</b>
        </h2>
        <h2 class="col-12 d-xs-block d-sm-none horaires fs-4">
            <b>{{ store.getters.storage_assumptions }}</b>
        </h2>
        <div class="col-12">
            <h3 class="center-text">
                <b class="dimension-text-size-lg d-none d-md-block">{{ store.getters.box_size }}</b>
                <b class="dimension-text-size-sm d-none d-sm-block d-md-none">{{ store.getters.box_size }}</b>
                <b class="dimension-text-size-xs d-xs-block d-sm-none">{{ store.getters.box_size }}</b>
                <p class="dimension-text-size-lg d-none d-md-block">Bagage Locker</p>
                <p class="dimension-text-size-sm d-none d-sm-block d-md-none">Bagage Locker</p>
                <p class="dimension-text-size-xs d-xs-block d-sm-none">Bagage Locker</p>
            </h3>
        </div>
        <div class="col-12">
            <div class="text-center justify-content-center">
                <img v-if="store.getters.selectedLanguage === 'fr'" class="box-image" alt="Dimensions d'un casier vide" src="../../../assets/stockage/box-vide-1@2x.png" />
                <img v-if="store.getters.selectedLanguage === 'pt'" class="box-image" alt="Dimensões de um cacifo vazio" src="../../../assets/stockage/box-vide-1@2x.png" />
                <img v-if="store.getters.selectedLanguage === 'es'" class="box-image" alt="Dimensiones de un casillero vacío" src="../../../assets/stockage/box-vide-1@2x.png" />
                <img v-if="store.getters.selectedLanguage === 'en'" class="box-image" alt="Dimensions of an empty locker" src="../../../assets/stockage/box-vide-1@2x.png" />
            </div>
        </div>
        <h3
            class="col-12 d-none d-lg-block horaires type-bagage-text-size-lg type-bagage-margin-top type-bagage-margin-bottom">
            <b>{{ store.getters.type_of_baggage }}</b>
        </h3>
        <h3
            class="col-12 d-none d-md-block d-lg-none horaires type-bagage-text-size-md type-bagage-margin-top type-bagage-margin-bottom">
            <b>{{ store.getters.type_of_baggage }}</b>
        </h3>
        <h3
            class="col-12 d-none d-sm-block d-md-none horaires type-bagage-text-size-sm type-bagage-margin-top type-bagage-margin-bottom">
            <b>{{ store.getters.type_of_baggage }}</b>
        </h3>
        <h3
            class="col-12 d-xs-block d-sm-none horaires type-bagage-text-size-xs type-bagage-margin-top type-bagage-margin-bottom">
            <b>{{ store.getters.type_of_baggage }}</b>
        </h3>
        <div class="col-12 d-none d-lg-block">
            <div class="center-text">
                <img v-if="store.getters.selectedLanguage === 'fr'" class="box-image" alt="Les différents types de bagages" src="../../../assets/stockage/types-bagages-fr.png" />
                <img v-if="store.getters.selectedLanguage === 'pt'" class="box-image" alt="Os diferentes tipos de bagagem" src="../../../assets/stockage/types-bagages-pt.png" />
                <img v-if="store.getters.selectedLanguage === 'en'" class="box-image" alt="The different types of luggage" src="../../../assets/stockage/types-bagages-en.png" />
                <img v-if="store.getters.selectedLanguage === 'es'" class="box-image" alt="Los diferentes tipos de equipaje" src="../../../assets/stockage/types-bagages-es.png" />
            </div>
        </div>
        <div class="col-12 d-xs-block d-lg-none">
            <div class="center-text col-12">
                <img v-if="store.getters.selectedLanguage === 'fr'" class="box-image" alt="Valise XL" src="../../../assets/stockage/valise-XL-fr.png" />
                <img v-if="store.getters.selectedLanguage === 'en'" class="box-image" alt="Suitcase XL" src="../../../assets/stockage/valise-XL-en.png" />
                <img v-if="store.getters.selectedLanguage === 'pt'" class="box-image" alt="Mala XL" src="../../../assets/stockage/valise-XL-pt.png" />
                <img v-if="store.getters.selectedLanguage === 'es'" class="box-image" alt="Maleta XL" src="../../../assets/stockage/valise-XL-es.png" />
            </div>
            <div class="center-text col-12">
                <img v-if="store.getters.selectedLanguage === 'fr'" class="box-image neg-margin-left" alt="Valise L" src="../../../assets/stockage/valise-L-fr.png" />
                <img v-if="store.getters.selectedLanguage === 'en'" class="box-image neg-margin-left" alt="Suitcase L" src="../../../assets/stockage/valise-L-en.png" />
                <img v-if="store.getters.selectedLanguage === 'pt'" class="box-image neg-margin-left" alt="Mala L" src="../../../assets/stockage/valise-L-pt.png" />
                <img v-if="store.getters.selectedLanguage === 'es'" class="box-image neg-margin-left" alt="Maleta L" src="../../../assets/stockage/valise-L-es.png" />
            </div>
            <div class="center-text col-12">
                <img v-if="store.getters.selectedLanguage === 'fr'" class="box-image more-neg-margin-left" alt="Valise cabine" src="../../../assets/stockage/valise-cabine-fr.png" />
                <img v-if="store.getters.selectedLanguage === 'en'" class="box-image more-neg-margin-left" alt="Cabin suitcase" src="../../../assets/stockage/valise-cabine-en.png" />
                <img v-if="store.getters.selectedLanguage === 'pt'" class="box-image more-neg-margin-left" alt="Mala de cabine" src="../../../assets/stockage/valise-cabine-pt.png" />
                <img v-if="store.getters.selectedLanguage === 'es'" class="box-image more-neg-margin-left" alt="Maleta de cabine" src="../../../assets/stockage/valise-cabine-es.png" />
            </div>
            <div class="center-text col-12">
                <img v-if="store.getters.selectedLanguage === 'fr'" class="box-image more-neg-margin-left" alt="Sac à dos" src="../../../assets/stockage/sac-a-dos-fr.png" />
                <img v-if="store.getters.selectedLanguage === 'en'" class="box-image more-neg-margin-left" alt="Backpack" src="../../../assets/stockage/sac-a-dos-en.png" />
                <img v-if="store.getters.selectedLanguage === 'pt'" class="box-image more-neg-margin-left" alt="Mochila" src="../../../assets/stockage/sac-a-dos-pt.png" />
                <img v-if="store.getters.selectedLanguage === 'es'" class="box-image more-neg-margin-left" alt="Mochila" src="../../../assets/stockage/sac-a-dos-es.png" />
            </div>
        </div>
        <h3
            class="col-12 d-none d-lg-block horaires type-bagage-text-size-lg type-bagage-margin-top type-bagage-margin-bottom">
            <b>{{ store.getters.storage_assumptions }} :</b>
        </h3>
        <h3
            class="col-12 d-none d-md-block d-lg-none horaires type-bagage-text-size-md type-bagage-margin-top type-bagage-margin-bottom">
            <b>{{ store.getters.storage_assumptions }} :</b>
        </h3>
        <h3
            class="col-12 d-none d-sm-block d-md-none horaires type-bagage-text-size-sm type-bagage-margin-top type-bagage-margin-bottom">
            <b>{{ store.getters.storage_assumptions }} :</b>
        </h3>
        <h3
            class="col-12 d-xs-block d-sm-none horaires type-bagage-text-size-xs type-bagage-margin-top type-bagage-margin-bottom">
            <b>{{ store.getters.storage_assumptions }} :</b>
        </h3>
        <div class="col-12">
            <div class="center-text">
                <img class="box-image" v-if="store.getters.selectedLanguage === 'fr'" alt="Hyptohèses de stockage" src="../../../assets/stockage/les-hypothses-de-stockage-possible-1@2x.png" />
                <img class="box-image" v-if="store.getters.selectedLanguage === 'en'" alt="Storage assumptions" src="../../../assets/stockage/les-hypothses-de-stockage-possible-1@2x.png" />
                <img class="box-image" v-if="store.getters.selectedLanguage === 'pt'" alt="Hipóteses de armazenamento" src="../../../assets/stockage/les-hypothses-de-stockage-possible-1@2x.png" />
                <img class="box-image" v-if="store.getters.selectedLanguage === 'es'" alt="Supuestos de almacenamiento" src="../../../assets/stockage/les-hypothses-de-stockage-possible-1@2x.png" />
            </div>
        </div>
        <p
            class="col-12 d-none d-lg-block horaires prix-casier-text-size-lg type-bagage-margin-top type-bagage-margin-bottom font-weight">
            {{ prix }} {{ store.getters.euros_per_box }}
        </p>
        <p
            class="col-12 d-none d-md-block d-lg-none horaires prix-casier-text-size-md type-bagage-margin-top type-bagage-margin-bottom">
            <b>{{ prix }} {{ store.getters.euros_per_box }}</b>
        </p>
        <p
            class="col-12 d-none d-sm-block d-md-none horaires prix-casier-text-size-sm type-bagage-margin-top type-bagage-margin-bottom">
            <b>{{ prix }} {{ store.getters.euros_per_box }}</b>
        </p>
        <p
            class="col-12 d-xs-block d-sm-none horaires prix-casier-text-size-xs type-bagage-margin-top type-bagage-margin-bottom">
            <b>{{ prix }} {{ store.getters.euros_per_box }}</b>
        </p>
        <p
            class="col-12 d-none d-lg-block horaires prix-casier-text-size-lg type-bagage-margin-top type-bagage-margin-bottom">
            <b>{{ store.getters.the_box_can_hold }}</b>
        </p>
        <p
            class="col-12 d-none d-md-block d-lg-none horaires prix-casier-text-size-md type-bagage-margin-top type-bagage-margin-bottom">
            <b>{{ store.getters.the_box_can_hold }}</b>
        </p>
        <p
            class="col-12 d-none d-sm-block d-md-none horaires prix-casier-text-size-sm type-bagage-margin-top type-bagage-margin-bottom">
            <b>{{ store.getters.the_box_can_hold }}</b>
        </p>
        <p
            class="col-12 d-xs-block d-sm-none horaires prix-casier-text-size-xs type-bagage-margin-top type-bagage-margin-bottom">
            <b>{{ store.getters.the_box_can_hold }}</b>
        </p>
        <div class="col-12">
            <div class="center-text">
                <img class="mesure-image mesure-margin-top" v-if="store.getters.selectedLanguage === 'fr'" alt="Mesure des dimensions du bagage" src="../../../assets/stockage/size-1@2x.png" />
                <img class="mesure-image mesure-margin-top" v-if="store.getters.selectedLanguage === 'en'" alt="Measurement of baggage dimensions" src="../../../assets/stockage/size-1@2x.png" />
                <img class="mesure-image mesure-margin-top" v-if="store.getters.selectedLanguage === 'pt'" alt="Medição das dimensões da bagagem" src="../../../assets/stockage/size-1@2x.png" />
                <img class="mesure-image mesure-margin-top" v-if="store.getters.selectedLanguage === 'es'" alt="Medición de las dimensiones del equipaje" src="../../../assets/stockage/size-1@2x.png" />
            </div>
        </div>
        <p class="col-12 d-none d-lg-block merci prix-casier-text-size-lg merci-margin-top type-bagage-margin-bottom">
            <b>{{ store.getters.please_check_dimensions }}</b>
        </p>
        <p
            class="col-12 d-none d-md-block d-lg-none merci prix-casier-text-size-md merci-margin-top type-bagage-margin-bottom">
            <b>{{ store.getters.please_check_dimensions }}</b>
        </p>
        <p
            class="col-12 d-none d-sm-block d-md-none merci prix-casier-text-size-sm merci-margin-top type-bagage-margin-bottom">
            <b>{{ store.getters.please_check_dimensions }}</b>
        </p>
        <p
            class="col-12 d-xs-block d-sm-none merci prix-casier-text-size-xs merci-margin-top type-bagage-margin-bottom">
            <b>{{ store.getters.please_check_dimensions }}</b>
        </p>
    </div>
</template>
<script setup>
import { ref } from 'vue'
import { useStore } from 'vuex'
const store = useStore()
const prix = ref("12,50")
</script>
<style scoped>
.overall-container {
    text-align: center;
    justify-content: center;
    align-items: center;
}

.horaires-text-size-lg {
    font-size: 62px;
}

.horaires-text-size-md {
    font-size: 48px;
}

.horaires-text-size-sm {
    font-size: 32px;
}

.horaires-text-size-xs {
    font-size: 20px;
}

.type-bagage-margin-top {
    margin-top: 30px;
}

.type-bagage-margin-bottom {
    margin-bottom: 30px;
}

.type-bagage-text-size-lg {
    font-size: 52px;
}

.type-bagage-text-size-md {
    font-size: 42px;
}

.type-bagage-text-size-sm {
    font-size: 28px;
}

.type-bagage-text-size-xs {
    font-size: 18px;
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

.horaires {
    color: #5a5858;
    font-family: Montserrat;
}

.merci {
    color: #000;
    font-family: Montserrat;
}

.center-text {
    display: flex;
    justify-content: center;
    gap: 10px;
}

.dimension-text-size-lg {
    font-size: 24px;
}

.dimension-text-size-sm {
    font-size: 18px;
}

.dimension-text-size-xs {
    font-size: 14px;
}

.box-image {
    width: 100%;
}

.mesure-image {
    width: 50%;
}

.font-weight {
    font-weight: 500;
}

.merci-margin-top {
    margin-top: 80px;
}

.mesure-margin-top {
    margin-top: 60px;
}
.neg-margin-left {
    margin-left: -20px;
}
.more-neg-margin-left {
    margin-left: -30px;
}
</style>