
const state = {
    user: null,
    userEmail: null,
    userId: null,
    accessToken: null,
    refreshToken: null,
    cartId: null,
    unitPrice: 12.5,
    cookiesAccepted: false
};
const getters = {
    isAuthenticated: state => !!state.accessToken,
    StateUser: state => state.user,
    userEmail: state => state.userEmail,
    userId: state => state.userId,
    cartId: state => state.cartId,
    accessToken: state => state.accessToken,
    refreshToken: state => state.refreshToken,
    unitPrice: state => state.unitPrice,
    cookiesAccepted: state => state.cookiesAccepted
};
const actions = {
    /*async Register({ dispatch }, email, password) {
        await axios.post('register', email)
        let UserForm = new FormData()
        UserForm.append('username', email)
        UserForm.append('password', password)
        await dispatch('login', UserForm)
    },*/
    async LogOut({ commit }) {
        commit('logout')
    }
};
const mutations = {
    setUser(state, username){
        state.user = username
    },
    login(state, user){
        state.userEmail = user.email
        state.accessToken = user.accessToken
        state.isAuthenticated = true
    },
    logout(state){
        state.user = null
        state.accessToken = null
        state.userEmail = null
        state.userId = null
        state.isAuthenticated = false
    },
    setUserEmail(state, userEmail) {
        state.userEmail = userEmail
    },
    setUserId(state, userId) {
        state.userId = userId
    },
    setCartId(state, cartId) {
        state.cartId = cartId
    },
    deleteCartId(state) {
        state.cartId = null
    },
    setAccessToken(state, accessToken) {
        state.accessToken = accessToken
    },
    setIsAuthenticated(state, isAuthenticated) {
        state.isAuthenticated = isAuthenticated
    },
    setCookiesAccepted(state, cookiesAccepted) {
        state.cookiesAccepted = cookiesAccepted
    }
};
export default {
    state,
    getters,
    actions,
    mutations
};