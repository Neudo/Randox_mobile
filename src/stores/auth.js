import { defineStore } from "pinia";
import axios from "axios";

export const useAuthStore = defineStore("auth", {
    state: () => ({
        user: {},
        loggedIn: false,
    }),
    actions: {
        async register(name, email, password) {
            try {
                const response = await axios.post(`${import.meta.env.VITE_API_URL}/auth/signup`,
                  {
                        email: email,
                        password: password,
                        name: name,
                    },
                );
                const user = response.data;
                this.loggedIn = true;

                this.user = user;
                localStorage.setItem("token", user.token);
            } catch (error) {
                console.log(error)
                throw error;
            }
        },
        async login(email, password) {
            console.log('majok')
            try {

                const response = await axios.post(`${import.meta.env.VITE_API_URL}/auth/login`,
                    {
                        email: email,
                        password: password,
                    },
                );

                const user = response.data;

                this.loggedIn = true;
                this.user = user;
                localStorage.setItem("token", user.token);
            } catch (error) {
                console.log(error)
                throw error;
            }
        },
        async logout() {
            if (!this.user.token) {
                throw new Error("Token does not exist");
            }

            try {
                await axios.post(
                    `${import.meta.env.VITE_API_URL}/auth/logout`,
                    {},
                    {
                        headers: {
                            Authorization: `Bearer ${this.user.token}`,
                        },
                    }
                );
                this.loggedIn = false;
                this.user = {};
                localStorage.removeItem("token");
            } catch (error) {
                throw new Error(error.message);
            }
        },
    },
});