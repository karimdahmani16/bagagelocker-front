import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate"
import auth from "./modules/auth";
import strings from "./modules/strings";
const store = createStore({
    modules: {
        auth,
        strings
    },
    plugins: [createPersistedState()]
})
export default store