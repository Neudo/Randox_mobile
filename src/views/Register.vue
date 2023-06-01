<template>
  <ion-page id="main-content" style="padding-top:36px" >
    <ion-content class="ion-no-padding space-header">
      <div class="container bg-blue">
        <h1>Inscription</h1>
        <p>Créez votre compte afin de gérer votre abonnements.</p>
      </div>

      <form action="">
        <ion-item>
          <ion-label position="floating">Email</ion-label>
          <ion-input placeholder="Votre email"></ion-input>
        </ion-item>
        <ion-item>
          <ion-label position="floating">Nom</ion-label>
          <ion-input placeholder="Votre nom"></ion-input>
        </ion-item>
        <ion-item>
          <ion-label position="floating">Mot de passe</ion-label>
          <ion-input type="password"></ion-input>
        </ion-item>
        <ion-button>Envoyer</ion-button>
      </form>

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
ion-button{
  margin: 15px;
  --background: #e9c203;
}


</style>