import { createRouter, createWebHistory } from "@ionic/vue-router";
import HomePage from "../views/HomePage.vue";

const routes = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    name: "Home",
    component: HomePage,
  },
  {
    path: "/articles",
    name: "Posts",
    component: () => import("../views/Posts.vue"),
  },
  {
    path: "/connexion",
    name: "Login",
    component: () => import("../views/Login.vue"),
  },
  {
    path: "/inscription",
    name: "Register",
    component: () => import("../views/Register.vue"),
  },
  {
    path: "/mon-compte",
    name: "Account",
    component: () => import("../views/Account.vue"),
  },
  {
    path: "/mon-compte/mot-de-passe-oublie",
    name: "Password",
    component: () => import("../views/Password.vue"),
  },
  {
    path: "/article/:slug",
    name: "Post",
    component: () => import("../views/Post.vue"),
  },
  {
    path: "/abonnements",
    name: "Plans",
    component: () => import("../views/Plans.vue"),
  },
  {
    path: "/panier",
    name: "Checkout",
    component: () => import("../views/Checkout.vue"),
  },
  {
    path: "/contact",
    name: "Contact",
    component: () => import("../views/Contact.vue"),
  },
  {
    path: "/panier/succes",
    name: "Succes",
    component: () => import("../views/Succes.vue"),
  },
  {
    path: "/panier/cancel",
    name: "Cancel",
    component: () => import("../views/Cancel.vue"),
  },
  {
    path: "/legal",
    name: "Legal",
    component: () => import("../views/Legal.vue"),
  },
  {
    path: "/cgu",
    name: "Cgu",
    component: () => import("../views/Cgu.vue"),
  },
  {
    path: "/privacy",
    name: "Privacy",
    component: () => import("../views/Privacy.vue"),
  },

];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
