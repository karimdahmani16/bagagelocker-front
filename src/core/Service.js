import { formatDateDash } from '@/core/helpers'
import axios from 'axios';
import { inject } from 'vue'
class Service {
    async checkAvailability(startDate, endDate, boxCount, accessToken) {
        const instance = axios.create({
            baseURL: inject('baseURL')
        });
        instance.defaults.headers.common['Authorization'] = accessToken;
        return await instance.get('/reservation/checkAvailability/' + formatDateDash(startDate) + '/' + formatDateDash(endDate) + '/' + boxCount);
    }
    /*
    async forgotPassword(email) {
        const instance = axios.create({
            baseURL: inject('baseURL')
        });
        return await instance.post('/auth/forgotPassword', { "email": email, "link": process.env.VUE_APP_BAGAGE_LOCKER_URL + "/resetPassword/" })
    }*/
    /*async register(email, password) {
        const instance = axios.create({
            baseURL: inject('baseURL')
        });
        return await instance.post('/auth/register', { "email": email, "password": password, "link": process.env.VUE_APP_BAGAGE_LOCKER_URL + "/verify/" })
    }*/
    async register(email, username, enabled, photo, telephone) {
        const instance = axios.create({
            baseURL: inject('baseURL')
        });
        return await instance.post('/auth/register', { "email": email, "enabled": enabled, "username": username, "photo": photo, "telephone": telephone})
    }
    async registerByEmail(accessToken, email, username, enabled, photo, telephone) {
        const instance = axios.create({
            baseURL: inject('baseURL')
        });
        return await instance.post('/auth/register-by-email', { "email": email, "enabled": enabled, "username": username, "photo": photo, "telephone": telephone, accessToken: accessToken})
    }
    async registerByGoogle(accessToken, email, username, enabled, photo, telephone) {
        const instance = axios.create({
            baseURL: inject('baseURL')
        });
        return await instance.post('/auth/register-by-google', { "email": email, "enabled": enabled, "username": username, "photo": photo, "telephone": telephone, accessToken: accessToken})
    }
    async registerByFacebook(accessToken, email, username, enabled, photo, telephone) {
        const instance = axios.create({
            baseURL: inject('baseURL')
        });
        return await instance.post('/auth/register-by-facebook', { "email": email, "enabled": enabled, "username": username, "photo": photo, "telephone": telephone, accessToken: accessToken})
    }
    async registerUsingGoogle(email) {
        const instance = axios.create({
            baseURL: inject('baseURL')
        });
        return await instance.post('/auth/registerUsingGoogle', { "email": email })
    }
    async login(email, password) {
        const instance = axios.create({
            baseURL: inject('baseURL')
        });
        return await instance.post('/auth/authenticate', { "email": email, "password": password })
    }
    async loginGmail(email) {
        const instance = axios.create({
            baseURL: inject('baseURL')
        });
        return await instance.post('/auth/authenticateGmail', { "email": email })
    }
    
    async logout(accessToken) {
        const instance = axios.create({
            baseURL: inject('baseURL')
        });
        instance.defaults.headers.common['Authorization'] = accessToken;
        return await instance.get('/auth/logout')
    }
    async canCreateReservation(cartId) {
        const instance = axios.create({
            baseURL: inject('baseURL')
        });
        return await instance.post('/reservation/canCreateReservation', { "cartId": cartId })
    }
    async createReservation(cartId) {
        const instance = axios.create({
            baseURL: inject('baseURL')
        });
        //instance.defaults.headers.common['Authorization'] = accessToken;
        return await instance.post('/reservation/create', { "cartId": cartId })
    }
    async createReservationForTest(cartId) {
        const instance = axios.create({
            baseURL: inject('baseURL')
        });
        //instance.defaults.headers.common['Authorization'] = accessToken;
        return await instance.post('/reservation/createForTest', { "cartId": cartId })
    }
    async createCart(startDate, endDate, userId, boxCount, duration, accessToken) {
        const instance = axios.create({
            baseURL: inject('baseURL')
        });
        instance.defaults.headers.common['Authorization'] = accessToken;
        return await instance.post('/cart/create', { "startDate": startDate, "endDate": endDate, "userId": userId, "boxCount": boxCount, "duration": duration })
    }
    async getCart(cartId) {
        const instance = axios.create({
            baseURL: inject('baseURL')
        });
        //instance.defaults.headers.common['Authorization'] = accessToken;
        return await instance.get('/cart/get/' + cartId);
    }
    async getUserDetails(userId) {
        const instance = axios.create({
            baseURL: inject('baseURL')
        });
        return await instance.get('auth/getUser/' + userId)
    }
    async deleteCart(cartId) {
        const instance = axios.create({
            baseURL: inject('baseURL')
        });
        return await instance.delete('/cart/delete/' + cartId);
    }
    /*
    async resetPassword(token, password) {
        const instance = axios.create({
            baseURL: inject('baseURL')
        });
        return await instance.post('/auth/resetPassword', { "token": token, "password": password })
    }
    */
    async assignUserToCart(cartId, email) {
        const instance = axios.create({
            baseURL: inject('baseURL')
        });
        return await instance.post('/cart/updateUserEmail', { "id": cartId, "userEmail": email })
    }
    async verifyEmail(verificationCode) {
        return await axios.post('/auth/verifyEmail', { "verificationCode": verificationCode, "username": process.env.VUE_APP_BAGAGE_LOCKER_URL + "/login" })
    }
    async updateCartUser(cartId, userId) {
        return await axios.post('cart/updateUser', {"id": cartId, "userId": userId})
    }
    async updateUser(userId, username, firstName, lastName, phone) {
        return await axios.post('/auth/updateUser', {"id": userId, "username": username, "firstName": firstName, "lastName": lastName, "telephone": phone})
    }
    async getReservations(userId) {
        return await axios.get('/reservation/get/' + userId)
    }
    async getLatestCart(userId) {
        return await axios.get('/cart/getByUser/' + userId)
    }
    async getUserByEmail(email) {
        return await axios.get('/auth/getUserByEmail/' + email)
    }
    async sendEmailToSupport(email, message) {
        const instance = axios.create({
            baseURL: inject('baseURL')
        });
        return await instance.post('/user/sendEmailToSupport', { "email": email, "message": message })
    }

    async getIsSiteActivated() {
        return await axios.get('/admin/setting/isSiteActive')
    }
    //********** STRINGS **************//
    async switchLanguage(language) {
        const instance = axios.create({
            baseURL: inject('baseURL')
        });
        return await instance.get('/strings/' + language)
    }
    //********** PAYMENT **************//
    async createPaymentIntent() {
        const instance = axios.create({
            baseURL: inject('baseURL')
        });
        return await instance.get('/pay-stripe/create-payment-intent')
    }
}

export default new Service()