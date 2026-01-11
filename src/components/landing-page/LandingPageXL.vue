<template>
    <div class="container-fluid background-blue">
        <CookiesComponent style="z-index: 1;" />
        <BlockUI :blocked="blockUI">
            <div v-if="isXLarge" class="row">
                <div class="col-7" style="z-index: 1;">
                    <h1 class="col-12 our-consign left-margin">
                        <b>{{ store.getters.our_consign }} </b>
                    </h1>
                    <div class="col-12 with-lightness left-margin">
                        <span>{{ store.getters.with_lightness }}</span>
                    </div>
                    <div class="row">
                        <div class="row card-container align-items-center left-margin">
                            <div class="calendar nbre-jours-container">
                                <CalendarComponent class="calendar-component" dateFormat="D d M yy" v-model="startDate"
                                    :minDate="today" showIcon :manualInput="false" :pt="{
            input: { class: 'w-16rem' },
            dropdownButton: {
                root: { class: 'bg-transparent border-transparent' }
            }
        }">
                                </CalendarComponent>
                            </div>
                            <div class="nbre-jours-container nbre-jours-left-margin">
                                <div class="nbre-jours">Number of days</div>
                                <button class="bordered-button" @click="minusDuration"> - </button>
                                <span class="duration-text"> {{ duration }} </span>
                                <button class="bordered-button" @click="plusDuration"> + </button>
                            </div>
                            <div class="nbre-jours-container box-count-left-margin">
                                <span class="nbre-jours">Number of boxes</span>
                                <button class="bordered-button" @click="minusBox"> - </button>
                                <span class="duration-text"> {{ boxCount }} </span>
                                <button class="bordered-button" @click="plusBox"> + </button>
                            </div>
                            <ButtonComponent class="recherche recherche-left-margin" label="Search" outlined raised
                                @click="search" />
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-5">
                            <img class="porto-city" alt="Porto city" src="@/assets/landingpage/portocity.png" />
                        </div>
                        <div class="col-3">
                            <img class="valise-rouge" v-if="store.getters.selectedLanguage === 'fr'"
                                alt="Valise dans un casier sécurisé" src="@/assets/landingpage/valise-rouge.gif" />
                            <img class="valise-rouge" v-if="store.getters.selectedLanguage === 'en'"
                                alt="Suitcase in a safe box" src="@/assets/landingpage/valise-rouge.gif" />
                            <img class="valise-rouge" v-if="store.getters.selectedLanguage === 'pt'"
                                alt="Mala num armário seguro" src="@/assets/landingpage/valise-rouge.gif" />
                            <img class="valise-rouge" v-if="store.getters.selectedLanguage === 'es'"
                                alt="Maleta en un casillero seguro" src="@/assets/landingpage/valise-rouge.gif" />
                        </div>
                        <div class="col-4">
                            <div class="col">
                                <img class="information-text" alt="Information"
                                    src="@/assets/landingpage/information.png" />
                            </div>
                            <div class="location">
                                <div class="row">
                                    <img class="location-icon" v-if="store.getters.selectedLanguage === 'fr'"
                                        alt="adresse" src="@/assets/landingpage/maps.png" />
                                    <img class="location-icon" v-if="store.getters.selectedLanguage === 'en'"
                                        alt="Address" src="@/assets/landingpage/maps.png" />
                                    <img class="location-icon" v-if="store.getters.selectedLanguage === 'pt'"
                                        alt="Morada" src="@/assets/landingpage/maps.png" />
                                    <img class="location-icon" v-if="store.getters.selectedLanguage === 'es'"
                                        alt="Morada" src="@/assets/landingpage/maps.png" />
                                    <div class="col">
                                        <a class="location-address"
                                            href="https://www.google.com/maps/dir/Current+Location/Rua+de+Cimo+de+Vila+18+Porto+bagagelocker"><b>Rua
                                                Cimo de Vila
                                                n°18
                                            </b></a>
                                        <a class="location-address"
                                            href="https://www.google.com/maps/dir/Current+Location/Rua+de+Cimo+de+Vila+18+Porto+bagagelocker"><b>Porto
                                                Portugal</b></a>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <img class="transport" alt="transport" src="@/assets/landingpage/transport.png" />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-5">
                    <img class="bagage-azulejo" alt="bagage" src="@/assets/landingpage/bagageazulejo.webp" />
                </div>
            </div>
            <div v-if="isLarge" class="row">
                <div class="col-8" style="z-index: 1;">
                    <h1 class="col-12 our-consign-large left-margin">
                        <b>{{ store.getters.our_consign }} </b>
                    </h1>
                    <div class="col-12 with-lightness-large left-margin">
                        <span>{{ store.getters.with_lightness }}</span>
                    </div>
                    <div class="row">
                        <div class="row card-container-large col-6 align-items-center left-margin-large">
                            <div class="calendar-large nbre-jours-container-large">
                                <CalendarComponent class="calendar-component" dateFormat="D d M yy" v-model="startDate"
                                    :minDate="today" showIcon :manualInput="false" :pt="{
            input: { class: 'w-16rem' },
            dropdownButton: {
                root: { class: 'bg-transparent border-transparent' }
            }
        }">
                                </CalendarComponent>
                            </div>
                            <!--<div class="nbre-jours">
                            <NombreDeJours />
                        </div>-->
                            <div class="nbre-jours-container-large nbre-jours-left-margin">
                                <div class="nbre-jours">Number of days</div>
                                <button class="bordered-button" @click="minusDuration"> - </button>
                                <span class="duration-text"> {{ duration }} </span>
                                <button class="bordered-button" @click="plusDuration"> + </button>
                            </div>
                            <div class="nbre-jours-container-large box-count-left-margin">
                                <span class="nbre-jours">Number of boxes</span>
                                <button class="bordered-button" @click="minusBox"> - </button>
                                <span class="duration-text"> {{ boxCount }} </span>
                                <button class="bordered-button" @click="plusBox"> + </button>
                            </div>
                            <ButtonComponent class="recherche-large recherche-left-margin-large" label="Search" outlined
                                raised @click="search" />
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-5">
                            <img class="porto-city-large" alt="Porto city" src="@/assets/landingpage/portocity.png" />
                        </div>
                        <div class="col-3">
                            <img class="valise-rouge-large" v-if="store.getters.selectedLanguage === 'fr'"
                                alt="Valise dans un casier sécurisé" src="@/assets/landingpage/valise-rouge.gif" />
                            <img class="valise-rouge-large" v-if="store.getters.selectedLanguage === 'en'"
                                alt="Suitcase in a safe box" src="@/assets/landingpage/valise-rouge.gif" />
                            <img class="valise-rouge-large" v-if="store.getters.selectedLanguage === 'pt'"
                                alt="Mala num armário seguro" src="@/assets/landingpage/valise-rouge.gif" />
                            <img class="valise-rouge-large" v-if="store.getters.selectedLanguage === 'es'"
                                alt="Maleta en un casillero seguro" src="@/assets/landingpage/valise-rouge.gif" />
                        </div>
                        <div class="col-4">
                            <div class="col">
                                <img class="information-text-large information-section-margin-left" alt="information"
                                    src="@/assets/landingpage/information.png" />
                            </div>
                            <div class="location-large">
                                <div class="row">
                                    <img class="location-icon-large" v-if="store.getters.selectedLanguage === 'fr'"
                                        alt="adresse" src="@/assets/landingpage/maps.png" />
                                    <img class="location-icon-large" v-if="store.getters.selectedLanguage === 'en'"
                                        alt="Address" src="@/assets/landingpage/maps.png" />
                                    <img class="location-icon-large" v-if="store.getters.selectedLanguage === 'pt'"
                                        alt="Morada" src="@/assets/landingpage/maps.png" />
                                    <img class="location-icon-large" v-if="store.getters.selectedLanguage === 'es'"
                                        alt="Morada" src="@/assets/landingpage/maps.png" />
                                    <div class="col">
                                        <a class="location-address-large"
                                            href="https://www.google.com/maps/dir/Current+Location/Rua+de+Cimo+de+Vila+18+Porto+bagagelocker"><b>Rua
                                                Cimo de Vila
                                                n°18
                                            </b></a>
                                        <a class="location-address-large"
                                            href="https://www.google.com/maps/dir/Current+Location/Rua+de+Cimo+de+Vila+18+Porto+bagagelocker"><b>Porto
                                                Portugal</b></a>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <img class="transport-large" alt="transport" src="@/assets/landingpage/transport.png" />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-4">
                    <img class="bagage-azulejo-large" alt="bagage" src="@/assets/landingpage/bagageazulejo.webp" />
                </div>
            </div>
            <div v-if="isMedium">
                <div class="row">
                    <div class="col-2"></div>
                    <div class="col-8">
                        <h1 class="col-12 our-consign left-margin">
                            <b>{{ store.getters.our_consign }} </b>
                        </h1>
                        <div class="col-12 with-lightness left-margin">
                            <span>{{ store.getters.with_lightness }}</span>
                        </div>
                        <!-- GRANDE VALISE JAUNE-->
                        <div class="col-12">
                            <img class="bagage-azulejo" alt="bagage" src="@/assets/landingpage/bagageazulejo.webp" />
                        </div>
                        <!-- SEARCH COMPONENT-->
                        <div class="col-12 card-container-lg align-items-center left-margin-search-bar ">
                            <div class="calendar-lg nbre-jours-container-medium">
                                <CalendarComponent class="calendar-component" dateFormat="D d M yy" v-model="startDate"
                                    :minDate="today" showIcon :manualInput="false" :pt="{
            input: { class: 'w-18rem' },
            dropdownButton: {
                root: { class: 'bg-transparent border-transparent' }
            }
        }">
                                </CalendarComponent>
                            </div>
                            <!--<div class="nbre-jours">
                          <NombreDeJours />
                      </div>-->
                            <div class="nbre-jours-container-medium nbre-jours-left-margin">
                                <div class="nbre-jours">Number of days</div>
                                <button class="bordered-button" @click="minusDuration"> - </button>
                                <span class="duration-text"> {{ duration }} </span>
                                <button class="bordered-button" @click="plusDuration"> + </button>
                            </div>
                            <div class="nbre-jours-container-medium box-count-left-margin">
                                <span class="nbre-jours">Number of boxes</span>
                                <button class="bordered-button" @click="minusBox"> - </button>
                                <span class="duration-text"> {{ boxCount }} </span>
                                <button class="bordered-button" @click="plusBox"> + </button>
                            </div>
                            <ButtonComponent class="recherche recherche-left-margin" label="Search" outlined raised
                                @click="search" />
                        </div>
                    </div>
                    <div class="col-2"></div>
                </div>
                <!--
                <div class="row justify-content-center">
                    <div class="col-md-6 col-lg-6">
                        <img class="porto-city-medium" alt="Porto city" src="@/assets/landingpage/portocity.png" />
                    </div>
                    <div class="col-md-6 col-lg-6">
                        <div class="col">
                            <img class="information-text" alt="information"
                                src="@/assets/landingpage/information.png" />
                        </div>
                        <div class="location">
                            <div class="row">
                                <img class="col-2 location-icon" v-if="store.getters.selectedLanguage === 'fr'"
                                    alt="adresse" src="@/assets/landingpage/maps.png" />
                                <img class="col-2 location-icon" v-if="store.getters.selectedLanguage === 'en'"
                                    alt="Address" src="@/assets/landingpage/maps.png" />
                                <img class="col-2 location-icon" v-if="store.getters.selectedLanguage === 'pt'"
                                    alt="Morada" src="@/assets/landingpage/maps.png" />
                                <img class="col-2 location-icon" v-if="store.getters.selectedLanguage === 'es'"
                                    alt="Morada" src="@/assets/landingpage/maps.png" />

                                <a class="col-10 location-address"
                                    href="https://www.google.com/maps/dir/Current+Location/Rua+de+Cimo+de+Vila+18+Porto+bagagelocker"><b>Rua
                                        Cimo de Vila
                                        n°18 Porto
                                        Portugal
                                    </b></a>

                            </div>
                        </div>
                        <div class="col">
                            <img class="transport" alt="transport" src="@/assets/landingpage/transport.png" />
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-5"></div>
                    <div class="col-2">
                        <img class="valise-rouge" v-if="store.getters.selectedLanguage === 'fr'"
                            alt="Valise dans un casier sécurisé" src="@/assets/landingpage/valise-rouge.gif" />
                        <img class="valise-rouge" v-if="store.getters.selectedLanguage === 'en'"
                            alt="Suitcase in a safe box" src="@/assets/landingpage/valise-rouge.gif" />
                        <img class="valise-rouge" v-if="store.getters.selectedLanguage === 'pt'"
                            alt="Mala num armário seguro" src="@/assets/landingpage/valise-rouge.gif" />
                        <img class="valise-rouge" v-if="store.getters.selectedLanguage === 'es'"
                            alt="Maleta en un casillero seguro" src="@/assets/landingpage/valise-rouge.gif" />
                    </div>
                    <div class="col-5"></div>
                </div>
            -->
            </div>
            <div v-if="isSmall">
                <div class="col-12">
                    <div class="col-12 text-center">
                        <h1 class="col-12 our-consign">
                            <b>{{ store.getters.our_consign }} </b>
                        </h1>
                        <div class="col-12 with-lightness">
                            <span>{{ store.getters.with_lightness }}</span>
                        </div>
                        <div class="text-center">
                            <img class="bagage-azulejo rounded mx-auto d-block" alt="bagage"
                                src="@/assets/landingpage/bagageazulejo.webp" />
                        </div>
                        <div class="row justify-content-center">
                            <div class="card-container-lg align-items-center">
                                <div class="calendar-lg nbre-jours-container-medium">
                                    <CalendarComponent class="calendar-component" dateFormat="D d M yy"
                                        v-model="startDate" :minDate="today" showIcon :manualInput="false" :pt="{
            input: { class: 'w-16rem' },
            dropdownButton: {
                root: { class: 'bg-transparent border-transparent' }
            }
        }">
                                    </CalendarComponent>
                                </div>
                                <div class="nbre-jours-container-medium nbre-jours-left-margin">
                                    <div class="nbre-jours">Number of days</div>
                                    <button class="bordered-button" @click="minusDuration"> - </button>
                                    <span class="duration-text"> {{ duration }} </span>
                                    <button class="bordered-button" @click="plusDuration"> + </button>
                                </div>
                                <div class="nbre-jours-container-medium box-count-left-margin">
                                    <span class="nbre-jours">Number of boxes</span>
                                    <button class="bordered-button" @click="minusBox"> - </button>
                                    <span class="duration-text"> {{ boxCount }} </span>
                                    <button class="bordered-button" @click="plusBox"> + </button>
                                </div>
                                <ButtonComponent class="recherche recherche-left-margin" label="Search" outlined raised
                                    @click="search" />
                            </div>
                        </div>
                    </div>
                </div><!--
                <div class="col-12">
                    <div class="row justify-content-center">
                        <img class="porto-city rounded mx-auto d-block mt-4" alt="Porto city"
                            src="@/assets/landingpage/portocity.png" />
                    </div>
                </div>
                <div class="col-12">
                    <div class="justify-content-center">
                        <img class="information-text-sm rounded mx-auto d-block" alt="information"
                            src="@/assets/landingpage/information.png" />
                        <div class="text-center justify-content-center col">
                            <div class="row">
                                <img class="location-icon-sm left-margin-icon-sm"
                                    v-if="store.getters.selectedLanguage === 'fr'" alt="adresse"
                                    src="@/assets/landingpage/maps.png" />
                                <img class="location-icon-sm left-margin-icon-sm"
                                    v-if="store.getters.selectedLanguage === 'en'" alt="Address"
                                    src="@/assets/landingpage/maps.png" />
                                <img class="location-icon-sm left-margin-icon-sm"
                                    v-if="store.getters.selectedLanguage === 'pt'" alt="Morada"
                                    src="@/assets/landingpage/maps.png" />
                                <img class="location-icon-sm left-margin-icon-sm"
                                    v-if="store.getters.selectedLanguage === 'es'" alt="Morada"
                                    src="@/assets/landingpage/maps.png" />
                                <a class="location-address-sm left-margin-sm"
                                    href="https://www.google.com/maps/dir/Current+Location/Rua+de+Cimo+de+Vila+18+Porto+bagagelocker"><b>Rua
                                        Cimo de Vila n°18
                                        Porto Portugal</b></a>
                            </div>
                        </div>
                        <div class="col">
                            <img class="transport rounded mx-auto d-block" alt="transport"
                                src="@/assets/landingpage/transport.png" />
                        </div>
                    </div>

                </div>
                <div class="row">
                    <div class="col-12">
                        <img class="valise-rouge rounded mx-auto d-block mt-3"
                            v-if="store.getters.selectedLanguage === 'fr'" alt="Valise dans un casier sécurisé"
                            src="@/assets/landingpage/valise-rouge.gif" />
                        <img class="valise-rouge rounded mx-auto d-block mt-3"
                            v-if="store.getters.selectedLanguage === 'en'" alt="Suitcase in a safe box"
                            src="@/assets/landingpage/valise-rouge.gif" />
                        <img class="valise-rouge rounded mx-auto d-block mt-3"
                            v-if="store.getters.selectedLanguage === 'pt'" alt="Mala num armário seguro"
                            src="@/assets/landingpage/valise-rouge.gif" />
                        <img class="valise-rouge rounded mx-auto d-block mt-3"
                            v-if="store.getters.selectedLanguage === 'es'" alt="Maleta en un casillero seguro"
                            src="@/assets/landingpage/valise-rouge.gif" />
                    </div>
                </div>
                -->
            </div>
            <div v-if="isMobile">
                <div class="col-12">
                    <h1 class="col-12 text-center our-consign-mobile left-margin-mobile">
                        <b>{{ store.getters.our_consign }} </b>
                    </h1>
                    <div class="col-12 with-lightness-mobile left-margin-mobile text-center">
                        <span>{{ store.getters.with_lightness }}</span>
                    </div>
                    <div class="text-center">
                        <img class="bagage-azulejo-mobile rounded mx-auto d-block mb-4" alt="bagage"
                            src="@/assets/landingpage/bagageazulejo.webp" />
                    </div>
                    <div class="row justify-content-center">
                        <div class="card-container-mobile align-items-center">
                            <div class="calendar-lg nbre-jours-container-medium">
                                <CalendarComponent aria-labelledby="Checkin Date" class="calendar-component"
                                    dateFormat="D d M yy" v-model="startDate" :minDate="today" showIcon
                                    :manualInput="false" :pt="{
            input: { class: 'w-16rem' },
            dropdownButton: {
                root: { class: 'bg-transparent border-transparent' }
            }
        }">
                                </CalendarComponent>
                            </div>
                            <!--<div class="nbre-jours">
                          <NombreDeJours />
                      </div>-->
                            <div class="nbre-jours-container-medium nbre-jours-left-margin">
                                <div class="nbre-jours">Number of days</div>
                                <button class="bordered-button" @click="minusDuration"> - </button>
                                <span class="duration-text"> {{ duration }} </span>
                                <button class="bordered-button" @click="plusDuration"> + </button>
                            </div>
                            <div class="nbre-jours-container-medium box-count-left-margin">
                                <span class="nbre-jours">Number of boxes</span>
                                <button class="bordered-button" @click="minusBox"> - </button>
                                <span class="duration-text"> {{ boxCount }} </span>
                                <button class="bordered-button" @click="plusBox"> + </button>
                            </div>
                            <ProgressSpinner class="d-flex justify-content-center loading-spinner-mobile z-index:1"
                                v-if="blockUI" />
                            <ButtonComponent class="recherche recherche-left-margin" v-else label="Search" outlined
                                raised @click="search" />
                            <ButtonComponent class="recherche recherche-left-margin" v-if="blockUI" label="Search"
                                outlined raised disabled @click="search" />
                        </div>
                    </div>
                </div>
                <!--
                <div class="row">
                    <div class="col-3"></div>
                    <div class="col-2">
                        <img class="valise-rouge mt-3" v-if="store.getters.selectedLanguage === 'fr'"
                            alt="Valise dans un casier sécurisé" src="@/assets/landingpage/valise-rouge.gif" />
                        <img class="valise-rouge mt-3" v-if="store.getters.selectedLanguage === 'en'"
                            alt="Suitcase in a safe box" src="@/assets/landingpage/valise-rouge.gif" />
                        <img class="valise-rouge mt-3" v-if="store.getters.selectedLanguage === 'pt'"
                            alt="Mala num armário seguro" src="@/assets/landingpage/valise-rouge.gif" />
                        <img class="valise-rouge mt-3" v-if="store.getters.selectedLanguage === 'es'"
                            alt="Maleta en un casillero seguro" src="@/assets/landingpage/valise-rouge.gif" />
                    </div>
                    <div class="col-5"></div>
                </div>
                <div class="col-12">
                    <div class="row justify-content-center">
                        <img class="porto-city-mobile rounded mx-auto d-block mt-4" alt="Porto city"
                            src="@/assets/landingpage/portocity.png" />
                    </div>
                </div>
                <div class="row justify-content-center mb-5">
                    <div class="col-12">
                        <img class="information-text-mobile rounded mx-auto d-block" alt="information"
                            src="@/assets/landingpage/information.png" />
                        <div class="text-center justify-content-center col">
                            <div class="row">
                                <img class="location-icon-mobile" alt="Adress pin"
                                    src="../../assets/landingpage/maps.png" />
                                <a class="location-address-mobile"
                                    href="https://www.google.com/maps/dir/Current+Location/Rua+de+Cimo+de+Vila+18+Porto+bagagelocker"><b>Rua
                                        Cimo de Vila n°18
                                        Porto Portugal</b></a>
                            </div>
                        </div>
                        <div class="col">
                            <img class="transport rounded mx-auto d-block" alt="transport"
                                src="@/assets/landingpage/transport.png" />
                        </div>
                    </div>

                </div>
            -->
            </div>
        </BlockUI>
    </div>
    <!--
    <CarouselComponent class="mt-5" :showIndicators="false" :value="reviews" :numVisible="2" :numScroll="1" :responsiveOptions="responsiveOptions" circular :autoplayInterval="4000">
            <template #item="slotProps">
                <div class="border border-surface-200 dark:border-surface-700 rounded m-2  p-4">
                    <div class="mb-4">
                        <div class="relative mx-auto text-center">
                            <img src="@/assets/review/five_stars.png" class="review-icon"/>
                        </div>
                    </div>
                    <div class="mb-4 font-medium text-center">{{ slotProps.data.review }}</div>
                    <div class="mt-0 font-semibold text-l text-center">{{ slotProps.data.reviewer }}</div>
                </div>
            </template>
    </CarouselComponent>
    -->
</template>

<script setup>
//import { useI18n } from 'vue-i18n';
//const { t } = useI18n();
import { ref, computed, onMounted, onUnmounted } from 'vue';
import { useRouter } from 'vue-router'
import moment from 'moment';
import { useStore } from 'vuex'
import Service from '@/core/Service'
import { useToast } from "primevue/usetoast";
import CookiesComponent from '@/views/CookiesComponent.vue';
let isMobile = ref(false)
let isSmall = ref(false)
let isMedium = ref(false)
let isLarge = ref(false)
let isXLarge = ref(false)
const toast = useToast();
const store = useStore()
const router = useRouter()
let startDate = ref("Check in date")
let blockUI = ref(false)
let duration = ref(1)
let boxCount = ref(1)
const MOBILE = 600
const SMALL = 768
const LARGE = 1439
const XLARGE = 1681
/*
const reviews = ref([
    {
        review: 'Agréablement surprise d’avoir découvert la devanture en me promenant à quelques minutes de la gares de porto. Nos codes nous ont été envoyé par mail rapidement, l’interface afin de déposer et retirer nos bagages est intuitive. Très bonne expérience, je recommande.',
        reviewer: 'Salomé BOUIN'
    },
    {
        review: 'Super pratique pour se balader dans la ville de Porto sans ses valises et son sac à dos ! J\'ai effectué une réservation pour le jour même j\'ai reçu les codes de la porte d\'entrée et du casier par email, tout a parfaitement fonctionné. J\'ai pu profiter d\'une belle après-midi à Porto! Sans hésiter je recommande ! 😉',
        reviewer: 'Pedro Moreira'
    },
    {
        review: 'Les casiers sont abordables et spacieux. Très pratiques pour visiter la ville en attendant notre réservation.',
        reviewer: 'Victor MORICE'
    },
    {
        review: 'Très réactif et Disponible pour les moindres questions',
        reviewer: 'Eve-marie Hay'
    },
    {
        review: 'Quick and friendly assistance via Whatsapp when we could not get into the facility when booked through stasher.com. Spacious lockers and secure.',
        reviewer: 'N Amin'
    },
    {
        review: 'Todo el sistema es online y automático, tanto la reserva, como pago y los códigos de acceso. Esto lo vuelve muy cómodo y seguro. El espacio interno el locker que me tocó era suficiente como para una valija gigante, si tienes alguna más pequeña probablemente entran 2 o 3 en el mismo locker!',
        reviewer: 'Andres Checa'
    },
    {
        review: 'Service pratique, sécurisé et rapide. Le processus de dépôt et de retrait des bagages est simple et rapide, ce qui m\'a permis de profiter de ma journée sans être encombré de valises. En plus, la localisation idéale de cette consigne à bagages, proche des principales attractions touristiques et des transports en commun. Cela rend vraiment facile de récupérer ses affaires juste avant de repartir. Je recommande sans hésitation !',
        reviewer: 'Karim Dahmani'
    },
    {
        review: 'Perfect',
        reviewer: 'Cesar Penafiel'
    },
    {
        review: 'Super handy.',
        reviewer: 'Mariana Santos'
    },
    {
        review: 'Good service',
        reviewer: 'Tom Guerriero-Davies'
    },
    {
        review: '',
        reviewer: 'Kamonchanok M.'
    },
    {
        review: '',
        reviewer: 'Claudia Buffarini'
    },
    {
        review: '',
        reviewer: 'David Emery'
    },
    {
        review: '',
        reviewer: 'Veronica Presas Sanchez'
    }
]);

const responsiveOptions = ref([
    {
        breakpoint: '1400px',
        numVisible: 3,
        numScroll: 1
    },
    {
        breakpoint: '1199px',
        numVisible: 1,
        numScroll: 1
    },
    {
        breakpoint: '767px',
        numVisible: 1,
        numScroll: 1
    },
    {
        breakpoint: '575px',
        numVisible: 1,
        numScroll: 1
    }
]);
*/
let today = computed(() => {
    let todayDate = new Date()
    if (todayDate.getHours() >= 21) {
        // If it's past 21 PM, get the date of tomorrow
        todayDate.setDate(todayDate.getDate() + 1);
    }
    return todayDate
})
let endDate = computed(() => {
    return moment(startDate.value, "DD-MM-YYYY").add(duration.value - 1, 'days').toDate()
})
function formatDateSlash(value) {
    if (value) {
        return moment(String(value)).format('YYYY-MM-DD')
    }
}
function minusDuration() {
    duration.value = duration.value === 1 ? 1 : duration.value - 1
}
async function plusDuration() {
    duration.value = duration.value + 1
}
function plusBox() {
    boxCount.value = boxCount.value + 1
}
function minusBox() {
    boxCount.value = boxCount.value === 1 ? 1 : boxCount.value - 1
}
async function search() {
    Service.getIsSiteActivated().then(response => {
        console.log("IsSiteActivated="+response.data);
        if (response.data) {
            const bearerToken = "Bearer " + store.getters.accessToken
            if (startDate.value === null || startDate.value === "Check in date") {
                toast.add({ severity: 'warn', summary: 'Empty check in date', detail: "Please select a check in date!", life: 3500 });
            } else {
                blockUI.value = true
                Service.checkAvailability(formatDateSlash(startDate.value), formatDateSlash(endDate.value), boxCount.value, bearerToken).then((response) => {
                    if (response.data >= boxCount.value) {
                        Service.createCart(formatDateSlash(startDate.value), formatDateSlash(endDate.value), store.getters.userId, boxCount.value, duration.value, store.getters.accessToken).then((response) => {
                            if (response.data === -1) {
                                blockUI.value = true
                                console.log('Error when creating the cart')
                                toast.add({ severity: 'error', summary: 'Internal Error', detail: "An error occurred when creating a cart!", life: 3500 });
                            }
                            else {
                                blockUI.value = true
                                store.commit('setCartId', response.data)
                                router.push({
                                    name: "CartPage"
                                })
                            }
                        }).catch(function (error) {
                            console.log("error = " + error);
                        })
                    } else if (response.data === 0) {
                        blockUI.value = true
                        router.push({
                            name: "Reservation-Impossible",
                            params: {
                                startDate: formatDateSlash(startDate.value),
                                endDate: formatDateSlash(endDate.value),
                                boxCount: boxCount.value
                            }
                        })
                    } else {
                        blockUI.value = true
                        router.push({
                            name: "Proposition-Reservation",
                            params: {
                                startDate: formatDateSlash(startDate.value),
                                endDate: formatDateSlash(endDate.value),
                                boxCount: response.data,
                                duration: duration.value
                            }
                        })
                    }
                }).catch(function (error) {
                    blockUI.value = false
                    toast.add({ severity: 'error', summary: 'Error', detail: error, life: 3500 });
                    console.log("error = " + error);
                })
            }
        } else {
            toast.add({ severity: 'info', summary: 'Site Temporarily Unavailable', detail: "This website is currently undergoing essential maintenance. We expect it to be back online shortly. Please check back later, and thank you for your patience and understanding.", life: 3500 });
        }
    })
}
onMounted(() => {
    window.addEventListener('resize', updateWindowSize);
    updateWindowSize()
});
onUnmounted(() => {
    window.removeEventListener('resize', updateWindowSize);
});
const updateWindowSize = () => {
    if (window.innerWidth > XLARGE) {
        isMobile.value = false
        isSmall.value = false
        isLarge.value = false
        isMedium.value = false
        isXLarge.value = true
    } else if (window.innerWidth > LARGE) {
        isMobile.value = false
        isSmall.value = false
        isMedium.value = false
        isLarge.value = true
        isXLarge.value = false
    } else if (window.innerWidth > SMALL) {
        isMobile.value = false
        isSmall.value = false
        isMedium.value = true
        isLarge.value = false
        isXLarge.value = false
    } else if (window.innerWidth > MOBILE) {
        isMobile.value = false
        isSmall.value = true
        isMedium.value = false
        isLarge.value = false
        isXLarge.value = false
    } else {
        isMobile.value = true
        isSmall.value = false
        isMedium.value = false
        isLarge.value = false
        isXLarge.value = false
    }
};
</script>

<style scoped>
.review-icon {
    width: 150px;
    height: auto;
}

.porto-city-medium {
    margin-top: 45px;
    margin-left: 70px;
    width: 70%;
    height: 80%;
}

.left-margin-sm {
    margin-left: 120px;
}

.left-margin-icon-sm {
    margin-left: 50px;
}

.location-icon-sm {
    width: 10%;
    object-fit: fill;
}

.location-address-sm {
    font-weight: 500;
    display: flex;
    text-align: start;
    color: #000;
    font-family: Montserrat;
    flex-shrink: 0;
    font-size: 18px;
    margin-top: -40px;
}

.information-text-sm {
    width: 70%;
    height: 80px;
    margin-top: 20px;
}

/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
    .calendar {
        margin-right: 5px;
        margin-left: 0px;
        width: 27%;
    }

    .calendar-lg {
        justify-content: center;
        margin-left: 0px;
        width: 27%;
    }

    .nbre-jours {
        margin-left: 0px;
        margin-right: 0px;
        display: inline-block;
        width: 58%;
    }

    .box-count {
        margin-left: 0px;
        margin-right: 0px;
        width: 75%;
    }

    .loading-spinner-mobile {
        margin-top: 50%;
        margin-left: 50%;
        transform: translate(-50%, -50%);
        position: absolute;
    }


    .recherche {
        font-weight: 600;
        background-color: #00eeff;
        color: #000;
        font-size: 15px;
        border-width: 0px;
        font-family: Montserrat;
        margin-top: 30px;
        margin-left: 0px;
        width: 250px;

    }

    .background-blue {
        background: linear-gradient(180deg, #152c63, #00eeff);
        width: 100%;
        height: 100%;
        overflow: hidden;
        margin-top: 55px;
    }

    .portocity {
        margin-top: 30px;
        width: 30%;
        height: 55%;
    }

    .our-consign {
        overflow: hidden;
        display: flex;
        flex-direction: row;
        align-items: center;
        color: #fff;
        font-family: Montserrat;
        font-size: 24px;
        margin-top: 25px;
    }

    .our-consign-mobile {
        overflow: hidden;
        color: #fff;
        font-family: Montserrat;
        font-size: 22px;
        white-space: nowrap;
        margin-top: 25px;
    }

    .with-lightness {
        margin-top: -15px;
        margin-bottom: 20px;
        white-space: nowrap;
        color: #fff;
        font-family: Montserrat;
        font-size: 24px;
    }

    .with-lightness-mobile {
        margin-top: -15px;
        margin-bottom: 20px;
        white-space: nowrap;
        color: #fff;
        font-family: Montserrat;
        font-size: 22px;
    }

    .left-margin {
        margin-left: 56px;
    }

    .left-margin-mobile {
        margin-left: 0px;
    }

    .porto-city {
        margin-top: 30px;
        margin-left: 100px;
        width: 54%;
        height: 100%;
    }

    .porto-city-mobile {
        width: 90%;
        height: 100%;
    }

    .valise-rouge {
        width: 278px;
        height: 364px;
        object-fit: cover;
        margin-top: 80px;
        margin-left: -40px;
    }

    .location {
        display: inline-block;
        text-align: center;
        width: 100%;
        margin-left: -10px;
    }

    .location-icon {
        object-fit: fill;
        display: inline-block;
        margin-right: 0px;
        margin-left: 35px;
        text-align: center;
        width: 50px;
        height: 65px;
    }

    .location-address {
        font-weight: 500;
        display: flexbox;
        text-align: start;
        font-size: 18px;
        color: #000;
        font-family: Montserrat;
        flex-shrink: 0;
        margin-top: 6px;
    }

    .location-mobile {}

    .location-icon-mobile {
        object-fit: fill;
        margin-right: 0px;
        margin-left: 30px;
        width: 16%;
        height: 18%;
    }

    .location-address-mobile {
        font-weight: 500;
        display: flex;
        text-align: start;
        color: #000;
        font-family: Montserrat;
        flex-shrink: 0;
        font-size: 14px;
        margin-top: -40px;
        margin-left: 85px;
    }

    .transport {
        width: 240px;
        margin-left: 20px;
        margin-top: 10px;
    }

    .information-text {
        width: 340px;
        height: 60px;
        margin-left: 0px;
        margin-top: 40px;
    }

    .information-text-mobile {
        width: 280px;
        height: 60px;
        margin-left: 0px;
        margin-top: 40px;
    }

    .image-container {
        width: 100%;
        height: 1300px;
        /* Set height as needed */
        background-size: cover;
        background-position: center;
        margin-left: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .card-container-lg {
        border-radius: 20px;
        background-color: #fbfbfb;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        margin-top: 30px;
        height: 385px;
        width: 322px;
        text-align: center;
        display: flex;
        flex-direction: column;
        margin-left: 75px;
    }

    .card-container-mobile {
        border-radius: 20px;
        background-color: #fbfbfb;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        height: 385px;
        width: 322px;
        display: flex;
        text-align: center;
        flex-direction: column;
    }

    .bagage-azulejo {
        object-fit: fill;
        display: flex;
        justify-content: center;
        width: 322.02px;
        height: 473px;
        margin-top: 0px;
        margin-left: 70px;
        border-width: 30px;
    }

    .bagage-azulejo-mobile {
        object-fit: fill;
        width: 100%;
        height: 100%;
    }

    .nbre-jours {
        font-size: 15px;
        font-family: Inter;
        display: inline-block;
    }

    .bordered-button {
        width: 30px;
        height: 30px;
        border: 1px solid #33ceff;
        border-radius: 0;
    }

    .duration-text {
        margin-left: 11px;
        margin-right: 11px;
    }

    .nbre-jours-left-margin {
        margin-left: 0px;
    }

    .box-count-left-margin {
        margin-left: 5px;
    }

    .recherche-left-margin {
        margin-left: 17px;
    }

    .nbre-jours-container {
        border-radius: 20px;
        background-color: #fff;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        overflow: hidden;
        display: flex;
        align-items: center;
        width: 360px;
        height: 55px;
    }

    .nbre-jours-container-medium {
        border-radius: 20px;
        background-color: #fff;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        overflow: hidden;
        display: flex;
        align-items: center;
        width: 250px;
        height: 55px;
        margin-top: 30px;
    }
}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {
    .calendar {
        margin-right: 5px;
        margin-left: 0px;
        width: 27%;
    }

    .calendar-lg {
        justify-content: center;
        margin-left: 0px;
        width: 27%;
    }

    .nbre-jours {
        margin-left: 0px;
        margin-right: 0px;
        display: inline-block;
        width: 58%;
    }

    .box-count {
        margin-left: 0px;
        margin-right: 0px;
        width: 75%;
    }



    .recherche {
        font-weight: 600;
        background-color: #00eeff;
        color: #000;
        font-size: 15px;
        border-width: 0px;
        font-family: Montserrat;
        margin-top: 30px;
        margin-left: 0px;
        width: 240px;

    }

    .background-blue {
        background: linear-gradient(180deg, #152c63, #00eeff);
        width: 100%;
        height: 100%;
        overflow: hidden;
        margin-top: 55px;
    }

    .portocity {
        margin-top: 30px;
        width: 30%;
        height: 55%;
    }

    .our-consign {
        overflow: hidden;
        color: #fff;
        font-family: Montserrat;
        font-size: 24px;
        margin-top: 25px;
    }

    .with-lightness {
        margin-top: -15px;
        margin-bottom: 20px;
        white-space: nowrap;
        color: #fff;
        font-family: Montserrat;
        font-size: 24px;
    }

    .left-margin {
        margin-left: 56px;
    }

    .porto-city {
        margin-top: 30px;
        margin-left: 100px;
        width: 54%;
        height: 100%;
    }

    .valise-rouge {
        width: 278px;
        height: 364px;
        object-fit: cover;
        margin-top: 80px;
        margin-left: -40px;
    }

    .location {
        display: inline-block;
        text-align: center;
        width: 100%;
        margin-left: -10px;
    }

    .location-icon {
        object-fit: fill;
        display: inline-block;
        margin-right: 0px;
        margin-left: 35px;
        text-align: center;
        width: 50px;
        height: 65px;
    }

    .location-address {
        font-weight: 500;
        display: flexbox;
        text-align: start;
        font-size: 18px;
        color: #000;
        font-family: Montserrat;
        flex-shrink: 0;
        margin-top: 6px;
    }

    .transport {
        width: 240px;
        margin-left: 20px;
        margin-top: 10px;
    }

    .information-text {
        width: 340px;
        height: 60px;
        margin-left: 0px;
        margin-top: 40px;
    }

    .image-container {
        width: 100%;
        height: 1300px;
        /* Set height as needed */
        background-size: cover;
        background-position: center;
        margin-left: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .card-container-lg {
        border-radius: 20px;
        background-color: #fbfbfb;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        margin-top: 30px;
        height: 385px;
        width: 322px;
        text-align: center;
        display: flex;
        flex-direction: column;
    }

    .bagage-azulejo {
        object-fit: fill;
        display: flex;
        justify-content: center;
        width: 322.02px;
        height: 473px;
        margin-top: 0px;
        margin-left: 70px;
        border-width: 30px;
    }

    .nbre-jours {
        font-size: 15px;
        font-family: Inter;
        display: inline-block;
    }

    .bordered-button {
        width: 30px;
        height: 30px;
        border: 1px solid #33ceff;
        border-radius: 0;
    }

    .duration-text {
        margin-left: 11px;
        margin-right: 11px;
    }

    .nbre-jours-left-margin {
        margin-left: 0px;
    }

    .box-count-left-margin {
        margin-left: 5px;
    }

    .recherche-left-margin {
        margin-left: 17px;
    }

    .nbre-jours-container {
        border-radius: 20px;
        background-color: #fff;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        overflow: hidden;
        display: flex;
        align-items: center;
        width: 360px;
        height: 55px;
    }

    .nbre-jours-container-medium {
        border-radius: 20px;
        background-color: #fff;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        overflow: hidden;
        display: flex;
        align-items: center;
        width: 240px;
        height: 55px;
        margin-top: 30px;
    }
}



/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {
    .calendar {
        margin-right: 5px;
        margin-left: 0px;
        width: 27%;
    }

    .calendar-lg {
        justify-content: center;
        margin-left: 0px;
        width: 27%;
    }

    .nbre-jours {
        margin-left: 0px;
        margin-right: 0px;
        display: inline-block;
        width: 63%;
    }

    .box-count {
        margin-left: 0px;
        margin-right: 0px;
        width: 75%;
    }



    .recherche {
        font-weight: 600;
        background-color: #00eeff;
        color: #000;
        font-size: 15px;
        border-width: 0px;
        font-family: Montserrat;
        margin-top: 30px;
        margin-left: 0px;
        width: 280px;

    }

    .background-blue {
        background: linear-gradient(180deg, #152c63, #00eeff);
        width: 100%;
        height: 100%;
        overflow: hidden;
        margin-top: 55px;
    }

    .portocity {
        margin-top: 30px;
        width: 30%;
        height: 55%;
    }

    .our-consign {
        overflow: hidden;
        white-space: nowrap;
        display: flex;
        flex-direction: row;
        align-items: center;
        color: #fff;
        font-family: Montserrat;
        font-size: 36px;
        margin-top: 25px;
    }

    .with-lightness {
        margin-top: -15px;
        margin-bottom: 20px;
        white-space: nowrap;
        color: #fff;
        font-family: Montserrat;
        font-size: 36px;
    }

    .left-margin {
        margin-left: 56px;
    }

    .porto-city {
        margin-top: 30px;
        margin-left: 100px;
        width: 54%;
        height: 100%;
    }

    .valise-rouge {
        width: 278px;
        height: 364px;
        object-fit: cover;
        margin-top: 80px;
        margin-left: -40px;
    }

    .location {
        display: inline-block;
        text-align: center;
        width: 100%;
        margin-left: -10px;
    }

    .location-icon {
        object-fit: fill;
        display: inline-block;
        margin-right: 0px;
        margin-left: 35px;
        text-align: center;
        width: 50px;
        height: 65px;
    }

    .location-address {
        font-weight: 500;
        display: flexbox;
        text-align: start;
        font-size: 18px;
        color: #000;
        font-family: Montserrat;
        flex-shrink: 0;
        margin-top: 6px;
    }

    .transport {
        width: 240px;
        margin-left: 20px;
        margin-top: 10px;
    }

    .information-text {
        width: 340px;
        height: 50px;
        margin-left: 0px;
        margin-top: 40px;
    }

    .image-container {
        width: 100%;
        height: 1300px;
        /* Set height as needed */
        background-size: cover;
        background-position: center;
        margin-left: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .card-container-lg {
        border-radius: 20px;
        background-color: #fbfbfb;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        margin-top: 30px;
        height: 385px;
        width: 362px;
        text-align: center;
        display: flex;
        flex-direction: column;
        margin-left: 145px;
    }

    .bagage-azulejo {
        object-fit: fill;
        display: flex;
        justify-content: center;
        width: 362.02px;
        height: 503px;
        margin-top: 0px;
        margin-left: 140px;
        border-width: 30px;
    }

    .nbre-jours {
        font-size: 18px;
        font-family: Inter;
        display: inline-block;
    }

    .bordered-button {
        width: 30px;
        height: 30px;
        border: 1px solid #33ceff;
        border-radius: 0;
    }

    .duration-text {
        margin-left: 11px;
        margin-right: 11px;
    }

    .nbre-jours-left-margin {
        margin-left: 0px;
    }

    .box-count-left-margin {
        margin-left: 5px;
    }

    .recherche-left-margin {
        margin-left: 17px;
    }

    .nbre-jours-container {
        border-radius: 20px;
        background-color: #fff;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        overflow: hidden;
        display: flex;
        align-items: center;
        width: 360px;
        height: 55px;
    }

    .nbre-jours-container-medium {
        border-radius: 20px;
        background-color: #fff;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        overflow: hidden;
        display: flex;
        align-items: center;
        width: 280px;
        height: 55px;
        margin-top: 30px;
    }
}

/* Large devices (landscape tablets, 992px and up) */
@media only screen and (min-width: 992px) {
    .calendar {
        margin-right: 5px;
        margin-left: 0px;
        width: 27%;
    }

    .calendar-lg {
        justify-content: center;
        margin-left: 0px;
        width: 27%;
    }

    .nbre-jours {
        margin-left: 0px;
        margin-right: 0px;
        display: inline-block;
        width: 70%;
    }

    .box-count {
        margin-left: 0px;
        margin-right: 0px;
        width: 75%;
    }



    .recherche {
        font-weight: 600;
        background-color: #00eeff;
        color: #000;
        font-size: 15px;
        border-width: 0px;
        font-family: Montserrat;
        margin-top: 30px;
        margin-left: 0px;
        width: 360px;

    }

    .background-blue {
        background: linear-gradient(180deg, #152c63, #00eeff);
        width: 100%;
        height: 100%;
        overflow: hidden;
        margin-top: 55px;
    }

    .portocity {
        margin-top: 30px;
        width: 30%;
        height: 55%;
    }

    .our-consign {
        overflow: hidden;
        display: flex;
        flex-direction: row;
        align-items: center;
        color: #fff;
        font-family: Montserrat;
        font-size: 42px;
        margin-top: 25px;
    }

    .with-lightness {
        margin-top: -15px;
        margin-bottom: 20px;
        white-space: nowrap;
        color: #fff;
        font-family: Montserrat;
        font-size: 42px;
    }

    .left-margin {
        margin-left: 6px;
    }

    .porto-city {
        margin-top: 30px;
        margin-left: 100px;
        width: 54%;
        height: 100%;
    }

    .valise-rouge {
        width: 278px;
        height: 364px;
        object-fit: cover;
        margin-top: 80px;
        margin-left: -40px;
    }

    .location {
        display: inline-block;
        text-align: center;
        width: 100%;
        margin-left: -10px;
    }

    .location-icon {
        object-fit: fill;
        display: inline-block;
        margin-right: 0px;
        margin-left: 35px;
        text-align: center;
        width: 50px;
        height: 65px;
    }

    .location-address {
        font-weight: 500;
        display: flexbox;
        text-align: start;
        font-size: 18px;
        color: #000;
        font-family: Montserrat;
        flex-shrink: 0;
        margin-top: 6px;
    }

    .transport {
        width: 220px;
        margin-left: 20px;
        margin-top: 10px;
    }

    .information-text {
        width: 330px;
        height: 60px;
        object-fit: fill;
        margin-left: 0px;
        margin-top: 40px;
    }

    .image-container {
        width: 100%;
        height: 1300px;
        /* Set height as needed */
        background-size: cover;
        background-position: center;
        margin-left: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .card-container-lg {
        border-radius: 20px;
        background-color: #fbfbfb;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        margin-top: 30px;
        height: 385px;
        width: 442px;
        text-align: center;
        display: flex;
        flex-direction: column;
        margin-left: 105px;
    }

    .bagage-azulejo {
        object-fit: fill;
        display: flex;
        justify-content: center;
        width: 442.02px;
        height: 653px;
        margin-top: 0px;
        margin-left: 100px;
    }

    .nbre-jours {
        font-size: 18px;
        font-family: Inter;
        display: inline-block;
    }

    .bordered-button {
        width: 30px;
        height: 30px;
        border: 1px solid #33ceff;
        border-radius: 0;
    }

    .duration-text {
        margin-left: 11px;
        margin-right: 11px;
    }

    .nbre-jours-left-margin {
        margin-left: 0px;
    }

    .box-count-left-margin {
        margin-left: 5px;
    }

    .recherche-left-margin {
        margin-left: 17px;
    }

    .nbre-jours-container {
        border-radius: 20px;
        background-color: #fff;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        overflow: hidden;
        display: flex;
        align-items: center;
        width: 360px;
        height: 55px;
    }

    .nbre-jours-container-medium {
        border-radius: 20px;
        background-color: #fff;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        overflow: hidden;
        display: flex;
        align-items: center;
        width: 360px;
        height: 55px;
        margin-top: 30px;
    }
}

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
    .calendar {
        margin-right: 5px;
        margin-left: 0px;
        width: 27%;
    }

    .calendar-large {
        margin-right: 5px;
        margin-left: 0px;
        width: 27%;
    }

    .calendar-lg {
        justify-content: center;
        margin-left: 0px;
        width: 27%;
    }

    .nbre-jours {
        margin-left: 0px;
        margin-right: 0px;
        display: inline-block;
        width: 70%;
    }

    .box-count {
        margin-left: 0px;
        margin-right: 0px;
        width: 75%;
    }




    .background-blue {
        background: linear-gradient(180deg, #152c63, #00eeff);
        width: 100%;
        height: 100%;
        overflow: hidden;
        margin-top: 55px;
    }

    .portocity {
        margin-top: 30px;
        width: 30%;
        height: 55%;
    }

    .our-consign {
        overflow: hidden;
        display: flex;
        flex-direction: row;
        align-items: center;
        color: #fff;
        font-family: Montserrat;
        font-size: 48px;
        margin-top: 25px;
    }

    .our-consign-large {
        overflow: hidden;
        display: flex;
        flex-direction: row;
        align-items: center;
        color: #fff;
        font-family: Montserrat;
        font-size: 48px;
        margin-top: 25px;
    }

    .with-lightness {
        margin-top: -15px;
        margin-bottom: 20px;
        white-space: nowrap;
        color: #fff;
        font-family: Montserrat;
        font-size: 48px;
    }

    .with-lightness-large {
        margin-top: -15px;
        margin-bottom: 20px;
        white-space: nowrap;
        color: #fff;
        font-family: Montserrat;
        font-size: 48px;
    }

    .left-margin {
        margin-left: 56px;
    }

    .left-margin-large {
        margin-left: 16px;
    }

    .porto-city {
        margin-top: 30px;
        margin-left: 100px;
        width: 54%;
        height: 100%;
    }

    .porto-city-large {
        margin-top: 20px;
        margin-left: 20px;
        width: 70%;
        height: 100%;
    }

    .valise-rouge {
        width: 278px;
        height: 364px;
        object-fit: cover;
        margin-top: 80px;
        margin-left: -40px;
    }

    .valise-rouge-large {
        width: 238px;
        height: 324px;
        object-fit: fill;
        margin-top: 80px;
        margin-left: -80px;
    }

    .location {
        display: inline-block;
        text-align: center;
        width: 100%;
        margin-left: -10px;
    }

    .location-icon {
        object-fit: fill;
        display: inline-block;
        margin-right: 0px;
        margin-left: 35px;
        text-align: center;
        width: 50px;
        height: 65px;
    }

    .location-address {
        font-weight: 500;
        display: flexbox;
        text-align: start;
        font-size: 18px;
        color: #000;
        font-family: Montserrat;
        flex-shrink: 0;
        margin-top: 6px;
    }

    .location-large {
        display: inline-block;
        text-align: center;
        width: 100%;
    }

    .location-icon-large {
        object-fit: fill;
        display: inline-block;
        margin-right: 0px;
        margin-left: 0px;
        text-align: center;
        width: 58px;
        height: 50px;
    }

    .location-address-large {
        font-weight: 500;
        display: flexbox;
        text-align: start;
        font-size: 18px;
        color: #000;
        font-family: Montserrat;
        flex-shrink: 0;
        margin-top: 6px;
    }

    .transport {
        width: 240px;
        margin-left: 20px;
        margin-top: 10px;
    }

    .transport-large {
        width: 225px;
        margin-left: 0px;
        margin-top: 10px;
    }

    .information-text {
        width: 340px;
        height: 60px;
        margin-left: 0px;
        margin-top: 40px;
    }

    .information-text-large {
        width: 280px;
        height: 60px;
        margin-top: 15px;
    }

    .information-section-margin-left {
        margin-left: -25px;
    }

    .image-container {
        width: 100%;
        height: 1300px;
        /* Set height as needed */
        background-size: cover;
        background-position: center;
        margin-left: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .card-container-lg {
        border-radius: 20px;
        background-color: #fbfbfb;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        margin-top: 30px;
        height: 385px;
        width: 502px;
        text-align: center;
        display: flex;
        flex-direction: column;
        margin-left: 145px;
    }

    .card-container-large {
        border-radius: 20px;
        background-color: #fbfbfb;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        margin-top: 10px;
        height: 85px;
        width: 98%;
    }

    .bagage-azulejo {
        object-fit: fill;
        display: flex;
        justify-content: center;
        width: 502.02px;
        height: 753px;
        margin-top: 0px;
        margin-left: 140px;
    }

    .bagage-azulejo-large {
        object-fit: fill;
        display: flex;
        justify-content: center;
        width: 522.02px;
        height: 763px;
        margin-top: 0px;
        margin-left: 20px;
    }

    .nbre-jours {
        font-size: 18px;
        font-family: Inter;
        display: inline-block;
    }

    .bordered-button {
        width: 30px;
        height: 30px;
        border: 1px solid #33ceff;
        border-radius: 0;
    }

    .duration-text {
        margin-left: 11px;
        margin-right: 11px;
    }

    .nbre-jours-left-margin {
        margin-left: 0px;
    }

    .box-count-left-margin {
        margin-left: 5px;
    }

    .recherche {
        font-weight: 600;
        background-color: #00eeff;
        color: #000;
        font-size: 15px;
        border-width: 0px;
        font-family: Montserrat;
        margin-top: 30px;
        margin-left: 0px;
        width: 360px;

    }

    .recherche-left-margin {
        margin-left: 17px;
    }

    .recherche-large {
        font-weight: 600;
        background-color: #00eeff;
        color: #000;
        font-size: 14px;
        border-width: 0px;
        font-family: Montserrat;
        margin-top: 8px;
        margin-left: 0px;
        width: 10%;

    }

    .recherche-left-margin-large {
        margin-left: 2%;
    }

    .nbre-jours-container {
        border-radius: 20px;
        background-color: #fff;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        overflow: hidden;
        display: flex;
        align-items: center;
        width: 360px;
        height: 55px;
    }

    .nbre-jours-container-medium {
        border-radius: 20px;
        background-color: #fff;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        overflow: hidden;
        display: flex;
        align-items: center;
        width: 360px;
        height: 55px;
        margin-top: 30px;
    }

    .nbre-jours-container-large {
        border-radius: 20px;
        background-color: #fff;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        overflow: hidden;
        display: flex;
        align-items: center;
        width: 260px;
        height: 55px;
        font-size: 18px;
    }
}

/* XX large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1600px) {
    .calendar {
        margin-right: 5px;
        margin-left: 0px;
        width: 27%;
    }

    .nbre-jours {
        margin-left: 0px;
        margin-right: 0px;
        display: inline-block;
        width: 75%;
    }

    .box-count {
        margin-left: 0px;
        margin-right: 0px;
        width: 75%;
    }

    .card-container {
        border-radius: 20px;
        background-color: #fbfbfb;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        margin-top: 0px;
        height: 85px;
        width: 100%;
    }

    .recherche {
        font-weight: 600;
        background-color: #00eeff;
        color: #000;
        font-size: 15px;
        border-width: 0px;
        font-family: Montserrat;
        margin-top: 0px;
        margin-left: 0px;
        width: 14%;

    }

    .background-blue {
        background: linear-gradient(180deg, #152c63, #00eeff);
        width: 100%;
        height: 100%;
        overflow: hidden;
        margin-top: 55px;
    }

    .portocity {
        margin-top: 30px;
        width: 30%;
        height: 55%;
    }

    .our-consign {
        overflow: hidden;
        display: flex;
        flex-direction: row;
        align-items: center;
        color: #fff;
        font-family: Montserrat;
        font-size: 50px;
        margin-top: 10px;
    }

    .with-lightness {
        margin-top: -15px;
        margin-bottom: 20px;
        white-space: nowrap;
        color: #fff;
        font-family: Montserrat;
        font-size: 55px;
    }

    .left-margin {
        margin-left: 56px;
    }

    .porto-city {
        margin-top: 30px;
        margin-left: -20px;
        width: 84%;
        height: 100%;
    }



    .valise-rouge {
        width: 278px;
        height: 364px;
        object-fit: cover;
        margin-top: 80px;
        margin-left: -40px;
    }

    .location {
        display: inline-block;
        text-align: center;
        width: 100%;
        margin-left: -10px;
    }

    .location-icon {
        object-fit: cover;
        display: inline-block;
        margin-right: 0px;
        margin-left: 35px;
        text-align: center;
        width: 65px;
        height: 60px;
    }

    .location-address {
        font-weight: 500;
        display: flexbox;
        text-align: start;
        font-size: 20px;
        color: #000;
        font-family: Montserrat;
        flex-shrink: 0;
    }

    .transport {
        width: 240px;
        margin-left: 20px;
        margin-top: 10px;
    }

    .information-text {
        width: 340px;
        height: 60px;
        margin-left: 0px;
        margin-top: 40px;
    }

    .image-container {
        width: 100%;
        height: 1300px;
        /* Set height as needed */
        background-size: cover;
        background-position: center;
        margin-left: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .bagage-azulejo {
        object-fit: cover;
        text-align: end;
        width: 672.02px;
        height: 863px;
        margin-top: -14px;
    }

    .nbre-jours {
        font-size: 18px;
        font-family: Inter;
        display: inline-block;
    }

    .bordered-button {
        width: 30px;
        height: 30px;
        border: 1px solid #33ceff;
        border-radius: 0;
    }

    .duration-text {
        margin-left: 11px;
        margin-right: 11px;
    }

    .nbre-jours-left-margin {
        margin-left: 0px;
    }

    .box-count-left-margin {
        margin-left: 5px;
    }

    .recherche-left-margin {
        margin-left: 17px;
    }

    .nbre-jours-container {
        border-radius: 20px;
        background-color: #fff;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        overflow: hidden;
        display: flex;
        align-items: center;
        width: 260px;
        height: 55px;
    }
}
</style>