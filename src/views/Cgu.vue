<template>
  <ion-page id="main-content" style="padding-top:36px" >
    <ion-content class="ion-no-padding space-header">
      <div class="container bg-blue">
        <h1>Conditions Générales de Vente de d'Utilisation</h1>
        <p>Lorem ipsum dolor sit amet, consectetur  beatae consequatur culpa cum <br> dolor dolorem ea excepturi expedita explicabo fuga fugit, laborum magnam molestias necessitatibus neque nisi non nostrum odit optio praesentium quaerat soluta sunt ut velit vero voluptate! Aspernatur autem, beatae debitis doloremque dolorum ea earum error eum explicabo itaque laboriosam laudantium molestiae nihil nulla numquam odio pariatur perferendis tempora, voluptas voluptatibus? Ab dolores expedita iure necessitatibus saepe tempore, ullam unde?</p>
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