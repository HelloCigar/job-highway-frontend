import { defineStore } from 'pinia';

export const useUserStore = defineStore({
    id: 'user',
    state: () => ({
        user: {
            isAuthenticated: true,
            email: '',
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
            this.user.isAuthenticated = true

            if (localStorage.getItem('user.token')) {
                const userToken = localStorage.getItem('user.token');
                const userEmail = localStorage.getItem('user.email');
                if (userToken !== null) {
                    this.user.token = userToken;
                }
                if (userEmail !== null) {
                    this.user.email = userEmail;
                }
                this.user.isAuthenticated = true

                console.log('Initialized user', this.user)
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
            this.user.email = email
            this.user.isAuthenticated = true

            localStorage.setItem('user.token', token)
            localStorage.setItem('user.email', email)
        },

        /**
         * Removes the token, email, and sets isAuthenticated to false.
         *
         * @return {void}
         */
        removeToken() {
            this.user.token = ''
            this.user.email = ''
            this.user.isAuthenticated = false
        },
    }
});