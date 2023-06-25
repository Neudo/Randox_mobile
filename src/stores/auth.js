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
                const response = await axios.post(`${process.env.VUE_APP_SITE_URL}/signup`,
                    JSON.stringify({
                        email: email,
                        password: password,
                        name: name,
                    }),
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
            try {
                const response = await axios.post("http://localhost:3005/auth/login",
                    JSON.stringify({
                        email: email,
                        password: password,
                    }),
                );

                const user = response.data;

                this.loggedIn = true;
                this.user = user;
                localStorage.setItem("token", user.token);
            } catch (error) {
                throw error;
            }
        },
        async logout() {
            if (!this.user.token) {
                throw new Error("Token does not exist");
            }

            try {
                await axios.post(
                    "http://localhost:3005/auth/logout",
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