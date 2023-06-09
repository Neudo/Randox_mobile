<template>
  <ion-page id="main-content" style="padding-top:36px" >
    <ion-content class="ion-no-padding space-header">
      <div class="container bg-blue">
        <h1>Connexion</h1>
      </div>

      <Error :error="error" :errors="errors" />

      <form @submit.prevent="login" action="">
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
import {useVuelidate} from "@vuelidate/core";
import Error from '../components/Error.vue'
import {email, minLength, required} from "@vuelidate/validators";


export default defineComponent({
  name: "Login",
  setup() {
    return { v$: useVuelidate() }
  },
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
    IonItem,
    Error
  },
  validations () {
    return {
      // form: {
      //   email: {required, email},
      //   password: {required},
      // }
      email:'',
      password:''
    }
  },
  data(){
    return{
     form: {},
      error: false,
      errors: []
    }
  },
  methods:{
    ...mapActions(useAuthStore, { signIn: 'login'}),
    async login() {
      // this.v$.$touch()

      // this.error = this.v$.error
      // this.errors = this.v$.errors
      // if(this.v$.$error){
      //   console.log('errors ok')
      //   return
      // }
      try {
        await this.signIn(this.email, this.password)
        this.$router.push('/');
      } catch(error) {
        console.log(error)
        this.error = true
        this.errors.push({
          $property: error.name,
          $message: error.message
        })
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