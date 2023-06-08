<template>
  <ion-page id="main-content" style="padding-top:36px" >
    <ion-content class="ion-no-padding space-header">
      <div class="container bg-blue">
        <h1>Connexion</h1>
      </div>

      <form @submit.prevent="resetPassword" action="">
        <ion-item>
          <ion-label position="floating">Email</ion-label>
          <ion-input v-model="email" placeholder="Votre email"></ion-input>
        </ion-item>
        <ion-item>
          <ion-label position="floating">Mot de passe</ion-label>
          <ion-input v-model="password" type="password"></ion-input>
          <span>Mot de passe oublié ?</span>
        </ion-item>
        <ion-button type="submit">Envoyer</ion-button>
      </form>

    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonItem, IonButtons, IonContent, IonHeader, IonMenu, IonMenuButton, IonPage, IonTitle, IonToolbar, IonInput, IonLabel } from '@ionic/vue';
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
    IonInput,
    IonLabel,
    IonItem
  },
  data(){
    return{
      email: '',
      password:''
    }
  },
  methods:{
    ...mapActions(useAuthStore, { signUp: 'resetPassword'}),
    async resetPassword() {
      console.log(this.email)
      console.log(this.password)
      try {
        await this.signUp(this.email, this.password)
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