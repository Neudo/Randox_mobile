<template>
  <ion-page id="main-content" style="padding-top:36px" >
    <ion-content class="ion-no-padding space-header">
      <div class="container bg-blue">
        <h1>Mon compte</h1>
        <a @click="logout" href="/">Déconnexion</a>
      </div>
      <h2>Mes informations</h2>
      <div class="container" style="z-index: 0">
        <div @click="showEditArea" class="cta">Modifier mes infos</div>
        <div class="container-edit-infos" :class="{open: isOpen}" >

          <div class="wrapper-item">
            <ion-label>Adresse e-mail</ion-label>
            <ion-input type="email" placeholder="admin@admin.fr"></ion-input>
          </div>
          <div class="wrapper-item">
            <ion-label>Nom</ion-label>
            <ion-input placeholder="Admin" ></ion-input>
          </div>
          <div class="wrapper-item">
            <ion-label>Mot de passe</ion-label>
            <ion-input type="password" placeholder="*******" ></ion-input>
          </div>
          <div class="cta">Modifier</div>
        </div>
      </div>

      <div class="container container-plans" :class="{open: isOpen}">
        <h2 id="offers">Mon abonnement</h2>
        <ion-card>
          <div class="card-image" style="background-image:url('/plans/europe.jpg') "></div>

          <ion-card-header>
            <ion-card-title>Formule Europe</ion-card-title>
            <ion-card-subtitle>13,99€/mois
              <ion-button color="danger">Supprimer</ion-button>
            </ion-card-subtitle>
          </ion-card-header>
        </ion-card>
        <div class="cta">Voir les autres abonnements</div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonButtons, IonContent, IonHeader, IonMenu, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
import { defineComponent } from 'vue';
import Menu from "../App.vue";
import {mapActions} from "pinia";
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
  data(){
    return{
      isOpen: false
    }
  },
  methods:{
    showEditArea(){
      this.isOpen = true
      console.log(this.isOpen)
    },
    ...mapActions(useAuthStore, { singOut: 'logout' }),
          async userLogout() {
        try {
          await this.singOut();
        } catch (error) {
          console.error(error);
        }
      },
    }
});
</script>

<style>
h1 {
  padding-top: 50px;
}
.card-image{
  height: 200px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
}

.cta-edit{
  padding: 4px 15px;
  border-radius: 15px;
  border: 1px solid black;
  display: inline-block;
  cursor: pointer;
  font-size: 12px;
}

h2 {
  padding: 0 20px;
}

.container-edit-infos{
  position: absolute;
  top: -50vh;
  z-index: 1;
  left: 0;
  width: 100%;
  transition: top .6s ease-in-out;
  padding: 20px 15px 20px;
  background-color: whitesmoke;
}

.container-edit-infos.open {
  top: 0;
}

.container{
  position: relative;
  z-index: 3;
}

.container-plans{
  position: relative;
  top: 0;
  transition: top .4s ease-in-out;
}

.container-plans.open {
  top: 29vh;
}

.wrapper-item{
  display: flex;
  flex-direction: column;
}

ion-label{
  font-size: 20px;
}

ion-input{
  border-bottom-color: transparent;
}
</style>