import { defineStore } from 'pinia';

export const useUserStore = defineStore({
    id: 'user',
    state: () => ({
        user: {
            isAuthenticated: false,
            token: '',
        }
    }),
    actions: {
        /**
         * Initializes the user store by setting the user's authentication status based on the presence of a token in localStorage.
         *
         * @return {void} No return value
         */
        initStore() {
            this.user.isAuthenticated = false

            if (localStorage.getItem('user.token')) {
                const userToken = localStorage.getItem('user.token');
                const userEmail = localStorage.getItem('user.email');
                if (userToken !== null) {
                    this.user.token = userToken;
                    this.user.isAuthenticated = true
                }
            }
        },
        /**
         * Sets the token and email for the user, and marks the user as authenticated.
         *
         * @param {string} token - The token to set for the user
         * @param {string} email - The email to set for the user
         * @return {void} No return value
         */
        setToken(token: string, email: string) {
            this.user.token = token
            this.user.isAuthenticated = true

            localStorage.setItem('user.token', token)
        },

        /**
         * Removes the token, email, and sets isAuthenticated to false.
         *
         * @return {void}
         */
        async removeToken() {
            const logoutLink = `${useRuntimeConfig().public.apiUrl}/api/v1/token/logout/`
            await $fetch(logoutLink, {
                method: 'POST',
                headers: {
                    'Authorization': `token ${localStorage.getItem('user.token')}`,
                }
            }).then(() => {
                this.user.isAuthenticated = false
                this.user.token = ''
                localStorage.removeItem('user.token')
            }).catch((error) => {
                console.log(error)
            })
        },
    }
});