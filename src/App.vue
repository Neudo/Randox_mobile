<template>
  <ion-app>
    <Header/>
    <Menu/>
    <ion-router-outlet />
<!--    <Footer/>-->
  </ion-app>
</template>

<script>
import { IonApp, IonRouterOutlet } from '@ionic/vue';
import Header from "@/components/layout/Header.vue";
import Menu from "@/components/layout/Menu.vue";
import Footer from "@/components/layout/Footer.vue";

export default {
  components: {Footer, Menu, Header, IonApp, IonRouterOutlet }
}
</script>
<style>
.inner-scroll{
  padding: 0;
  background-color: #2F2E41;
}
</style>