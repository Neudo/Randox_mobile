<template>
  <ion-page id="main-content" style="padding-top:36px" >
    <ion-content class="ion-no-padding space-header">
      <div class="container bg-blue">
        <h1>Mentions légales</h1>
        <h3>Identité de l'entreprise</h3>
        <ul>
          <li>Webstart, 19 rue Yves Toudic 75010, PARIS</li>
          <li>contact@webstart.com</li>
          <li>Hébergeur : netifly.com </li>
        </ul>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonButton, IonButtons, IonLabel, IonCard, IonContent, IonHeader, IonMenu, IonMenuButton, IonPage, IonTitle, IonToolbar, IonCardContent, IonCardTitle, IonCardSubtitle, IonItem, IonCardHeader } from '@ionic/vue';
import { defineComponent } from 'vue';
import Menu from "../App.vue";


export default defineComponent({
  components: {
    Menu,
    IonButton, IonLabel, IonCard,
    IonButtons,
    IonContent,
    IonHeader,
    IonMenu,
    IonMenuButton,
    IonPage,
    IonTitle,
    IonToolbar,
    IonCardContent,
    IonCardTitle,
    IonCardSubtitle,
    IonItem,
    IonCardHeader
  },
});
</script>

<style>
h1 {
  padding: 50px 15px 0;
}


</style>