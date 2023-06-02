<template>
  <ion-page id="main-content" style="padding-top:36px" >
    <ion-content class="ion-no-padding space-header">
      <div class="container bg-blue">
        <h1>Inscription</h1>
        <p>Créez votre compte afin de gérer votre abonnements.</p>
      </div>

      <form @submit.prevent="register" action="">
        <ion-item>
          <ion-label position="floating">Email</ion-label>
          <ion-input v-model="email" placeholder="Votre email"></ion-input>
        </ion-item>
        <ion-item>
          <ion-label position="floating">Nom</ion-label>
          <ion-input v-model="name" placeholder="Votre nom"></ion-input>
        </ion-item>
        <ion-item>
          <ion-label position="floating">Mot de passe</ion-label>
          <ion-input v-model="password" type="password"></ion-input>
        </ion-item>
        <ion-button type="submit" >Envoyer</ion-button>
      </form>

    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonButtons, IonContent, IonPage, IonTitle, IonToolbar, IonLabel, IonInput, IonItem } from '@ionic/vue';
import { defineComponent } from 'vue';
import Menu from "../App.vue";
import {mapActions} from "pinia";
import {useAuthStore} from "../stores/auth.js";

export default defineComponent({
  components: {
    Menu,
    IonButtons,
    IonContent,
    IonPage,
    IonTitle,
    IonToolbar,
    IonLabel,
    IonInput,
    IonItem
  },
  data(){
    return{
      email: '',
      name: '',
      password:''
    }
  },
  methods:{
    ...mapActions(useAuthStore, { signUp: 'register'}),
    async register() {
      try {
        await this.signUp(this.name, this.email, this.password)
        this.$router.push('/');
      } catch(error) {
        console.log(error)
      }
    }
  }
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