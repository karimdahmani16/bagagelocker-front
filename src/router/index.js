import { createWebHistory, createRouter } from "vue-router";
import HomePage from '../views/HomePage.vue'
import FAQ from '../components/FAQ/en/FaqView.vue'
import LoginPage from '../views/LoginPage.vue'
import LogoutPage from '../views/LogoutPage.vue'
import VerificationPage from '../views/VerificationPage.vue'
import SignupPage from '../views/SignupPage.vue'
import PaymentPage from '../views/PaymentPage.vue'
import CartPage from '../views/CartPageXL.vue'
import EmptyCart from '../views/EmptyCart.vue'
import ValidationPage from '../views/ValidationPage.vue'
import TerminePage from '../views/TerminePage.vue'
import ForgotPassword from '../views/ForgotPasswordPageXL.vue'
import ReservationImpossible from '../views/ReservationImpossibleXL.vue'
import PropositionReservation from '../views/PropositionReservation.vue'
import MyReservations from '../views/MyReservations.vue'
import ContactPage from "@/views/ContactPage.vue";
import CGVPage from "@/views/CGVPage.vue";
import PolitiqueConfidentialite from "@/views/PolitiqueConfidentialite.vue";
const routes = [
  {
    path: '/',
    component: HomePage,
    name: "Home"
  },
  {
    path: '/fr',
    component: HomePage,
    name: "HomeFrench"
  },
  {
    path: '/pt',
    component: HomePage,
    name: "HomePortuguese"
  },
  {
    path: '/sp',
    component: HomePage,
    name: "HomeSpanish"
  },
  {
    path: '/forgotpassword',
    component: ForgotPassword,
    name: "ForgotPassword"
  },
  {
    path: '/no-boxes-availablere/:startDate/:endDate/:boxCount/',
    component: ReservationImpossible,
    name: "Reservation-Impossible",
    props: true
  },
  {
    path: '/fewer-boxes-available/:startDate/:endDate/:boxCount/:duration/',
    component: PropositionReservation,
    name: "Proposition-Reservation",
    props: true
  },
  {
    path: '/faq',
    component: FAQ,
    name: "FAQ"
  },
  {
    path: '/login',
    component: LoginPage,
    name: "Login"
  },
  {
    path: '/logout',
    component: LogoutPage,
    name: "Logout"
  },
  {
    path: '/signup',
    component: SignupPage,
    name: "SignupPage"
  },
  {
    path: '/verification-page/:startDate/:endDate/:userId/:boxCount/:cartId/',
    component: VerificationPage,
    name: "VerificationPage",
    props: true
  },
  {
    path: '/payment-page/:startDate/:endDate/:userId/:boxCount/:duration/:cartId/',
    component: PaymentPage,
    name: "PaymentPage",
    props: true
  },
  {
    path: '/search-results',
    component: CartPage,
    name: "CartPage"
  },
  {
    path: '/search-results-empty',
    component: EmptyCart,
    name: "EmptyCart"
  },
  {
    path: '/validation-page/:startDate/:endDate/:userId/:boxCount/',
    component: ValidationPage,
    name: "ValidationPage",
    props: true
  },
  {
    path: '/reservation-confirmed/:cartId/',
    component: TerminePage,
    name: "TerminePage",
    props: true
  },
  {
    path: '/contact-us',
    component: ContactPage,
    name: "Contact"
  },
  {
    path: '/terms-and-conditions',
    component: CGVPage,
    name: "CGVPage"
  },
  {
    path: '/privacy-policy',
    component: PolitiqueConfidentialite,
    name: "PolitiqueConfidentialite"
  },
  {
    path: '/my-reservations',
    component: MyReservations,
    name: "MyReservations"
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes, // short for `routes: routes`
  scrollBehavior() {
    // return desired position
    return { top: 0 }
  }
})

export default router 