<template>
  <ion-page id="main-content" style="padding-top:36px" >
    <ion-content class="ion-no-padding space-header">
      <div class="container bg-blue">
        <h1>Inscription</h1>
        <p>Créez votre compte afin de gérer votre abonnements.</p>
      </div>

      <Error :error="error" :errors="errors" />

      <form @submit.prevent="register" autocomplete="off" action="">
        <ion-item>
          <ion-label position="floating">Email</ion-label>
          <ion-input v-model="form.email" type="email" placeholder="Votre email"></ion-input>
        </ion-item>
        <ion-item>
          <ion-label position="floating">Nom</ion-label>
          <ion-input v-model="form.name" type="text" placeholder="Votre nom"></ion-input>
        </ion-item>
        <ion-item>
          <ion-label position="floating">Mot de passe</ion-label>
          <ion-input v-model="form.password" type="password"></ion-input>
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
import  {useVuelidate} from '@vuelidate/core'
import {email, required} from '@vuelidate/validators'
import Error from "../components/Error.vue";



export default defineComponent({
  name: "Register",
  setup() {
    return { v$: useVuelidate() }
  },
  validations(){
    return {
      form: {
        email: {required, email},
        name: {required},
        password:{required}
      }
    }
  },
  data(){
    return{
      form: {
        email: '',
        name: '',
        password: ''
      },
      error: false,
      errors: []
    }
  },
  components: {
    Error,
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

  methods:{
    ...mapActions(useAuthStore, { signUp: 'register'}),
    async register() {
      this.v$.$touch()

      this.error = this.v$.$error
      this.errors = this.v$.$errors


      try {
        await this.signUp(this.form.name, this.form.email, this.form.password)
        this.$router.push('/');
      } catch (error) {
        this.error = true
        this.errors.push({
          $property: error.name,
          $message: error.message
        })
      }
    }
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