<template>
  <ion-page id="main-content" style="padding-top:36px" >
    <ion-content class="ion-no-padding space-header">
      <div class="container bg-blue">
        <h1>Découvrez le goût du voyage, tout en gardant le confort de votre foyer.</h1>
        <p>Notre concept est simple : vous souscrivez à un abonnement et nous vous envoyons chaque mois une boîte surprise remplie de délices culinaires authentiques de différentes régions du monde.</p>
        <router-link class="cta big" to="#offers">Découvrir nos offres</router-link>
      </div>
      <img src="/public/cuisine_asiatique.webp" alt="">

      <div class="container">
<h2 id="offers">Des formules adaptées à vos envies ...</h2>
        <p style="margin-bottom: 50px">
          Chez nous, l'aventure culinaire commence dès que vous ouvrez votre boîte. Laissez-vous surprendre, émerveiller et inspirer par la richesse gastronomique du monde entier. En plus de la nourriture, vous recevrez également des informations sur les origines des plats, des astuces de dégustation et des recettes exclusives pour mettre en valeur chaque ingrédient.
        </p>

        <ion-card>
          <ion-card-header>
            <ion-card-title>Formule MONDE</ion-card-title>
            <ion-card-subtitle>24,99€/mois</ion-card-subtitle>
          </ion-card-header>
          <ion-card-content>
            Pour découvrir des recettes du monde entier.
          </ion-card-content>
        </ion-card>
        <ion-card>
          <ion-card-header>
            <ion-card-title>Formule Europe</ion-card-title>
            <ion-card-subtitle>13,99€/mois</ion-card-subtitle>
          </ion-card-header>
        </ion-card>
        <ion-card>
          <ion-card-header>
            <ion-card-title>Formule Afrique</ion-card-title>
            <ion-card-subtitle>13,99€/mois</ion-card-subtitle>
          </ion-card-header>
        </ion-card>
        <ion-card>
          <ion-card-header>
            <ion-card-title>Formule Asie</ion-card-title>
            <ion-card-subtitle>17,99€/mois</ion-card-subtitle>
          </ion-card-header>
        </ion-card>
        <ion-card>
          <ion-card-header>
            <ion-card-title>Formule Amérique du nord</ion-card-title>
            <ion-card-subtitle>13,99€/mois</ion-card-subtitle>
          </ion-card-header>
        </ion-card>
        <ion-card>
          <ion-card-header>
            <ion-card-title>Formule Amérique du sud</ion-card-title>
            <ion-card-subtitle>13,99€/mois</ion-card-subtitle>
          </ion-card-header>
        </ion-card>
        <router-link class="cta big" to="/abonnements">Voir tous nos abonnements</router-link>



      </div>
      <div class="container">
        <h1>Nos actualités</h1>
        <ion-card>
          <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/card-media.png" />
          <ion-card-header>
            <ion-card-title>Actu numéro 1</ion-card-title>
          </ion-card-header>

          <ion-card-content>
            Here's a small text description for the card content. Nothing more, nothing less.
          </ion-card-content>
        </ion-card>
        <ion-card>
          <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/card-media.png" />
          <ion-card-header>
            <ion-card-title>Actu numéro 1</ion-card-title>
          </ion-card-header>

          <ion-card-content>
            Here's a small text description for the card content. Nothing more, nothing less.
          </ion-card-content>
        </ion-card>
        <ion-card>
          <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/card-media.png" />
          <ion-card-header>
            <ion-card-title>Actu numéro 1</ion-card-title>
          </ion-card-header>

          <ion-card-content>
            Here's a small text description for the card content. Nothing more, nothing less.
          </ion-card-content>
        </ion-card>

        <router-link class="cta big" to="/articles">Voir toutes les actualités</router-link>

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