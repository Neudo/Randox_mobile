<template>
  <ion-page id="main-content" style="padding-top:36px" >
    <ion-content class="ion-no-padding space-header">
      <div class="container bg-blue">
        <h1>Mon panier</h1>
      </div>

    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonButtons, IonContent, IonHeader, IonMenu, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
import { defineComponent } from 'vue';
import Menu from "../App.vue";

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
});
</script>

<style>
h1 {
  padding-top: 50px;
}

</style>