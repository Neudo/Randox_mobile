<template>
  <ion-page id="main-content" style="padding-top:36px" >
    <ion-content class="ion-no-padding space-header">
      <div class="container bg-blue">
        <h1>Des question ?</h1>
        <p>Cher passionné de cuisine, votre voix compte beaucoup pour nous. Si vous avez des préoccupations, des suggestions ou simplement envie de partager votre amour pour la nourriture, n'hésitez pas à nous contacter. Nous sommes là pour vous écouter.</p>
      </div>
      <form action="">
        <ion-item>
          <ion-label position="floating">Email</ion-label>
          <ion-input placeholder="Votre email"></ion-input>
        </ion-item>
        <ion-item>
          <ion-label position="floating">Sujet</ion-label>
          <ion-input placeholder="Le sujet de votre message"></ion-input>
        </ion-item>
        <ion-item>
          <ion-textarea placeholder="Écrivez votre message ici."></ion-textarea>
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