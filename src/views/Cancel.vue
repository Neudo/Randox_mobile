<template>
  <ion-page id="main-content" style="padding-top:36px" >
    <ion-content class="ion-no-padding space-header">
      <div class="container bg-blue">
        <h1>Echec lors de l'achat</h1>
      </div>
      <img src="/public/cuisine_asiatique.webp" alt="">
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonButtons, IonContent, IonHeader, IonMenu, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
import { defineComponent } from 'vue';
import Menu from "../App.vue";
import {mapState} from "pinia";
import {useAuthStore} from "../stores/auth.js";


export default defineComponent({
  components: {
    Menu,
    IonButtons,
    IonContent,
    IonHeader,
    IonMenu,
    IonMenuButton,
    IonPage,
    IonTitle,
    IonToolbar,
  },
  computed: {
    ...mapState(useAuthStore, ['loggedIn', 'user'])
  },
});
</script>

<style>
h1 {
  padding-top: 50px;
}

</style>