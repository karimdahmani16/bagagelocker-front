<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <div class="container-fluid">
            <ToastComponent></ToastComponent>
            <a class="navbar-brand" href="/" @click="homePage">
                <img src="../../../assets/logo.png" width="40" height="40" alt="Logo BagageLocker">
            </a>
            <MenuComponent class="w-full" ref="menu" id="overlay_menu" :model="items" :popup="true" />
            <div class="collapse navbar-collapse">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <a class="nav-link" href="/" @click="homePage">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-font" style="cursor: pointer" href="#horairestravailid"
                            @click="scrollTo('horairestravailid', $event)">{{ store.getters.schedules }}</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-font" style="cursor: pointer" href="#hypothesestockageid"
                            @click="scrollTo('hypothesestockageid', $event)">{{ store.getters.storage_assumptions }}</a>
                    </li>
                    <!--
                        <li class="nav-item">
                            <a class="nav-link text-font" href="#commentcamarcheid" style="cursor: pointer"
                            @click="scrollTo('commentcamarcheid', $event)">{{ store.getters.how_it_works }}</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-font" style="cursor: pointer"
                            @click="scrollTo('quisommenousid', $event)" href="#quisommenousid">{{
                                store.getters.who_are_we }}</a>
                            </li>
                            <li class="nav-item">
                                <a href="/contact-us" class="nav-link text-font">Contact</a>
                            </li>
                            <li class="nav-item">
                                <a href="https://blog.bagagelocker.com" class="nav-link text-font" target="_blank">Blog</a>
                            </li>
                        -->
                            <li class="nav-item">
                                <a href="/faq" class="nav-link text-font">FAQ</a>
                            </li>
                </ul>
                <ul class="nav navbar-nav navbar-right">
                    <li class="nav-item">
                        <v-menu open-on-hover>
                            <template v-slot:activator="{ props }">
                                <button type="button"
                                    class="btn position-relative d-flex align-items-center justify-content-center"
                                    v-bind="props">
                                    <img :src="selectedFlag" alt="icon" class="flag-icon-language-ES">
                                </button>
                            </template>
                            <v-list>
                                <v-list-item @click="english">
                                    <img src="../../../assets/EN.png" alt="British Flag" class="flag-icon-language">
                                </v-list-item>
                                <v-list-item @click="portuguese">
                                    <img src="../../../assets/PT.png" alt="Portuguese Flag" class="flag-icon-language">
                                </v-list-item>
                                <v-list-item @click="french">
                                    <img src="../../../assets/FR.png" alt="French Flag" class="flag-icon-language">
                                </v-list-item>
                                <v-list-item @click="spanish">
                                    <img src="../../../assets/ES.png" alt="Spanish Flag" class="flag-icon-language-ES">
                                </v-list-item>
                            </v-list>
                        </v-menu>
                    </li>
                    <li class="nav-item" v-if="isLoggedIn">
                        <v-menu open-on-hover>
                            <template v-slot:activator="{ props }">
                                <button type="button" class="btn position-relative" v-bind="props">
                                    <span class="bi bi-person h4"></span>
                                </button>
                            </template>
                            <v-list>
                                <v-list-item @click="profile" title="Profile"></v-list-item>
                                <v-list-item @click="myReservations" title="My Reservations"></v-list-item>
                                <v-list-item @click="logout" title="Logout"></v-list-item>
                            </v-list>
                        </v-menu>
                    </li>
                    <ButtonComponent link v-else @click="login" label="Login/register"></ButtonComponent>
                </ul>
            </div>
            <button class="navbar-toggler" type="button" @click="toggle" aria-haspopup="true"
                aria-controls="overlay_menu">
                <span class="navbar-toggler-icon"></span>
            </button>
        </div>
    </nav>
    <DialogComponent v-model:visible="profileVisible" modal header="Edit Profile" :style="{ width: '25rem' }">
        <span class="p-text-secondary block mb-5">Update your information.</span>
        <div class="flex align-items-center gap-3 mb-3">
            <label for="username" class="font-semibold w-6rem">Username *</label>
            <InputText v-model="username" id="username" class="flex-auto" autocomplete="off" />
        </div>
        <div class="flex align-items-center gap-3 mb-3">
            <label for="firstname" class="font-semibold w-6rem">First Name</label>
            <InputText v-model="firstname" id="firstname" class="flex-auto" autocomplete="off" />
        </div>
        <div class="flex align-items-center gap-3 mb-3">
            <label for="lastname" class="font-semibold w-6rem">Last Name</label>
            <InputText v-model="lastname" id="lastname" class="flex-auto" autocomplete="off" />
        </div>
        <div class="flex align-items-center gap-3 mb-5">
            <label for="phone" class="font-semibold w-6rem">Phone</label>
            <InputText v-model="phone" id="phone" class="flex-auto" autocomplete="on" />
        </div>
        <div class="flex justify-content-end gap-2">
            <ButtonComponent class="rectangle-parent" type="button" label="Cancel" severity="secondary"
                @click="profileVisible = false"></ButtonComponent>
            <ButtonComponent class="image-5-parent" type="button" label="Save" outlined raised @click="updateProfile">
            </ButtonComponent>
        </div>
    </DialogComponent>
    <DialogComponent v-model:visible="selectLanguagePopupVisible" modal :header="store.getters.change_language"
        :style="{ width: '25rem' }">
        <div class="flex align-items-center gap-3 mt-3">
            <img src="../../../assets/EN.png" alt="British Flag" class="flag-icon-language">
            <button type="button" class="btn position-relative" @click="english">{{ store.getters.english }}</button>
        </div>
        <div class="flex align-items-center gap-3 mt-3">
            <img src="../../../assets/PT.png" alt="Portuguese Flag" class="flag-icon-language">
            <button type="button" class="btn position-relative" @click="portuguese">{{ store.getters.portuguese
                }}</button>
        </div>
        <div class="flex align-items-center gap-3 mt-3">
            <img src="../../../assets/FR.png" alt="French Flag" class="flag-icon-language">
            <button type="button" class="btn position-relative" @click="french">{{ store.getters.french }}</button>
        </div>
        <div class="flex align-items-center gap-3 mt-3">
            <img src="../../../assets/ES.png" alt="Spanish Flag" class="flag-icon-language">
            <button type="button" class="btn position-relative" @click="spanish">{{ store.getters.spanish }}</button>
        </div>
    </DialogComponent>
</template>
<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import { VMenu, VList, VListItem } from 'vuetify/lib/components/index.mjs';
import Service from '@/core/Service';
import { useToast } from "primevue/usetoast";
import { signOut, getAuth, onAuthStateChanged } from 'firebase/auth';
import { computed } from 'vue';
const toast = useToast();
const store = useStore()
const router = useRouter()
const menu = ref();
let selectedFlag = computed(() => {
    if (store.getters.selectedLanguage === 'pt') return require('@/assets/PT.png')
    if (store.getters.selectedLanguage === 'fr') return require('@/assets/FR.png')
    if (store.getters.selectedLanguage === 'es') return require('@/assets/ES.png')
    return require('@/assets/EN.png')
})
// require('@/assets/EN.png')
const english = () => {
    store.dispatch('switchLanguage', 'en')
    selectedFlag = require('@/assets/EN.png')
    selectLanguagePopupVisible.value = false
    router.push({
        name: "Home"
    })
}
const portuguese = () => {
    window.open('https://bagagelocker.pt', '_blank');
}
const french = () => {
    store.dispatch('switchLanguage', 'fr')
    selectedFlag = require('@/assets/FR.png')
    selectLanguagePopupVisible.value = false
    router.push({
        name: "HomeFrench"
    })
}
const spanish = () => {
    store.dispatch('switchLanguage', 'es')
    selectedFlag = require('@/assets/ES.png')
    selectLanguagePopupVisible.value = false
    router.push({
        name: "HomeSpanish"
    })
}
const homePage = (event) => {
    event.preventDefault()
    if (store.getters.selectedLanguage === 'pt') {
        router.push({
            name: "HomePortuguese"
        })
    } else if (store.getters.selectedLanguage === 'fr') {
        router.push({
            name: "HomeFrench"
        })
    } else if (store.getters.selectedLanguage === 'es') {
        router.push({
            name: "HomeSpanish"
        })
    } else {
        router.push({
            name: "Home"
        })
    }

}
const scrollTo = ((id, event) => {
    if (event && typeof event.preventDefault === 'function') {
        event.preventDefault();
    }
    const element = document.getElementById(id);
    if (element == null) {
        router.push({
            name: "Home"
        })
    } else {
        const position = element.offsetTop - 10;
        window.scrollTo({
            top: position,
            behavior: "smooth"
        });
    }
})
const auth = getAuth()
auth.languageCode = 'en';
let isLoggedIn = ref(store.getters.isAuthenticated)
onAuthStateChanged(auth, (user) => {
    if (user) {
        //console.log("onAuthStateChanged: user signed in")
        isLoggedIn.value = true
        store.commit('login', user)
    } else {
        console.log("onAuthStateChanged: user signed out");
        isLoggedIn.value = false
        store.commit('logout')
    }
});
let profileVisible = ref(false)
let username = ref(null)
let firstname = ref(null)
let lastname = ref(null)
let email = ref(null)
let phone = ref(null)

auth.languageCode = 'en'
onMounted(() => {
    const userId = store.getters.userId
    if (userId != null) {
        Service.getUserDetails(userId).then(response => {
            username.value = response.data.username
            firstname.value = response.data.firstName
            lastname.value = response.data.lastName
            email.value = response.data.email
            phone.value = response.data.telephone
        })
    }
    if (store.getters.selectedLanguage === null) {
        english()
    }
})
const profile = () => {
    const userId = store.getters.userId
    if (userId != null) {
        Service.getUserDetails(userId).then(response => {
            firstname.value = response.data.firstName
            lastname.value = response.data.lastName
            email.value = response.data.email
            phone.value = response.data.telephone
            username.value = response.data.username
            profileVisible.value = true
        })
    }
}
const myReservations = () => {
    router.push({
        name: "MyReservations"
    })
}
const faq = () => {
    router.push({
        name: "FAQ"
    })
}
/*
const blog = () => {
    window.open('https://blog.bagagelocker.com', '_blank');
}
const contact = () => {
    router.push({
        name: "Contact"
    })
}
*/
const updateProfile = () => {
    if (username.value === null || username.value === "") toast.add({ severity: 'error', summary: 'Error', detail: "Username cannot be empty!", life: 3500 })
    else {
        Service.updateUser(store.getters.userId, username.value, firstname.value, lastname.value, phone.value).then(response => {
            if (response.data.error != null) toast.add({ severity: 'error', summary: 'Error', detail: response.data.error, life: 3500 });
            else toast.add({ severity: 'success', summary: 'User updated', detail: 'User profile successfully updated!', life: 3500 });
            profileVisible.value = false
        })
    }
}
let selectLanguagePopupVisible = ref(false)
const logout = () => {
    /*
    const bearerToken = "Bearer " + store.getters.accessToken
    Service.logout(bearerToken).then(response => {
        console.log(response.data);
        store.commit('logout')
    }).catch(error => {
        if (error.response.status === 410) store.commit('logout')
    })
*/
    signOut(auth).then(() => {
        store.commit('setCartId', null)
        toast.add({ severity: 'success', summary: 'Success', detail: 'User signed out successfully!', life: 3500 });
        console.log('user signed out manually');
    }).catch(error => {
        console.log('error signing out' + error);
    })
}
const items = ref([
    {
        separator: true
    },
    {
        label: 'Baggage Locker',
        items: [
            {
                label: 'Home',
                command: () => {
                    if (store.getters.selectedLanguage === 'pt') {
                        router.push({
                            name: "HomePortuguese"
                        })
                    } else if (store.getters.selectedLanguage === 'fr') {
                        router.push({
                            name: "HomeFrench"
                        })
                    } else if (store.getters.selectedLanguage === 'es') {
                        router.push({
                            name: "HomeSpanish"
                        })
                    } else {
                        router.push({
                            name: "Home"
                        })
                    }
                }
            },
            {
                label: 'Schedules',
                command: (event) => {
                    scrollTo('horairestravailid', event)
                }
            },
            {
                label: store.getters.storage_assumptions,
                command: (event) => {
                    scrollTo('hypothesestockageid', event)
                }
            },
            {
                label: 'FAQ',
                command: () => {
                    faq()
                }
            },
            /*
            {
                label: store.getters.how_it_works,
                command: (event) => {
                    scrollTo('commentcamarcheid', event)
                }
            },
            {
                label: store.getters.who_are_we,
                command: (event) => {
                    scrollTo('quisommenousid', event)
                }
            },
            {
                label: 'Contact',
                command: () => {
                    contact()
                }
            },
            {
                label: 'Blog',
                command: () => {
                    blog()
                }
            },
            */
            {
                separator: true
            },
            {
                label: store.getters.selectedLanguage === 'en' ? 'English' : store.getters.selectedLanguage === 'pt' ? 'Português' : store.getters.selectedLanguage === 'fr' ? 'Français' : 'Español',
                command: () => {
                    selectLanguagePopupVisible.value = true
                }
            },
            {
                separator: true
            }
        ]
    },
    {
        label: 'Profile',
        items: [
            {
                label: 'Edit profile',
                visible: isLoggedIn.value,
                command: () => {
                    profile()
                }
            },
            {
                label: 'My Reservations',
                visible: isLoggedIn.value,
                command: () => {
                    myReservations()
                }
            },
            {
                label: 'Logout',
                visible: isLoggedIn.value,
                command: () => {
                    logout()
                }
            },
            {
                label: 'Login/register',
                visible: !isLoggedIn.value,
                // q: how to display this item only if the user is not authenticated 
                // a: https://vuetifyjs.com/en/components/menus/#usage
                // q: this is primevue, not vuetify
                // a: https://primefaces.org/primevue/showcase/#/menu
                // q: thank you
                // a: you're welcome

                command: () => {
                    router.push({
                        name: "Login"
                    })
                }
            }
        ]
    }
]);
function login() {
    router.push({
        name: "Login"
    })
}
const toggle = (event) => {
    menu.value.toggle(event);
};

</script>
<style scoped>
.flag-icon-language {
    width: 35px;
    height: 25px;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
    /* Add a subtle shadow */
    display: inline-block;
    object-fit: contain;
}

.flag-icon-language-ES {
    width: 35px;
    height: 25px;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
    /* Add a subtle shadow */
    display: inline-block;
    object-fit: contain;
}

.nav-content {
    display: flex;
    justify-content: space-between;
    padding: 10px 30px;
    align-items: center;
}

i {
    display: none;
}

@media screen and (max-width: 768px) {


    .closed-menu {
        opacity: 0;
        height: 0;
        padding: 0;
    }

    .nav-content {
        flex-direction: column;
        z-index: 100;
        position: relative;
        transition: all 0.2s ease-out;
    }


    i {
        display: block;
        text-align: right;
        padding: 0 10px 10px 0;
    }

    .closed-menu {
        opacity: 1;
        height: 0;
        padding: 0;
    }

    .text-font {
        font-family: Montserrat;
    }
}
</style>
