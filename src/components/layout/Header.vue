<template>

  <ion-header>
    <ion-toolbar>
      <ion-buttons slot="start">
        <ion-menu-button></ion-menu-button>
      </ion-buttons>
      <ion-title>Menu</ion-title>
    </ion-toolbar>
  </ion-header>
</template>
<script lang="js">
import { IonHeader, IonToolbar, IonTitle } from '@ionic/vue';


export default {
  components: {
    IonHeader,
    IonTitle,
    IonToolbar
  },
  data() {
    return {
    };
  },
};
</script>