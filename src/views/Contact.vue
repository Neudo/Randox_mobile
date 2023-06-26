<template>
  <ion-page id="main-content" style="padding-top:36px" >
    <ion-content class="ion-no-padding space-header">
      <div class="container bg-blue">
        <h1>Des question ?</h1>
        <p>Cher passionné de cuisine, votre voix compte beaucoup pour nous. Si vous avez des préoccupations, des suggestions ou simplement envie de partager votre amour pour la nourriture, n'hésitez pas à nous contacter. Nous sommes là pour vous écouter.</p>
      </div>
      <form @submit.prevent="sendMail" action="">
        <ion-item>
          <ion-label position="floating">Email</ion-label>
          <ion-input v-model="from"  placeholder="Votre email"></ion-input>
        </ion-item>
        <ion-item>
          <ion-label position="floating">Sujet</ion-label>
          <ion-input v-model="subject" placeholder="Le sujet de votre message"></ion-input>
        </ion-item>
        <ion-item>
          <ion-textarea v-model="message" placeholder="Écrivez votre message ici."></ion-textarea>
        </ion-item>
        <ion-button type="submit" >Envoyer</ion-button>
      </form>

      <ion-item>
        <ion-label>
          19 rue Yves Toudic 75010 Paris <br> 0660170284 - contact@randox.com
        </ion-label>
      </ion-item>

      <GMapMap
          :center="center"
          :zoom="9"
          map-type-id="terrain"
          style="width: 100%; height: 300px"
      >
        <GMapCluster>
          <GMapMarker
              :key="index"
              v-for="(m, index) in markers"
              :position="m.position"
              :clickable="true"
              :draggable="true"
              @click="center=m.position"
          />
        </GMapCluster>
      </GMapMap>

    </ion-content>

  </ion-page>
</template>

<script lang="ts">
import { IonButtons, IonContent, IonHeader, IonMenu, IonMenuButton, IonPage, IonTitle, IonToolbar, IonLabel, IonInput, IonTextarea } from '@ionic/vue';
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
    IonLabel, IonInput, IonTextarea
  },
  data() {
    return {
      center: {lat: 48.870622063039406, lng: 2.363051410981994},
      markers: [
        {
          position: {
            lat: 48.870622063039406, lng: 2.363051410981994
          },
        }
      ],
      from: '',
      subject: '',
      message: ''
    }
  },
  methods:{
    async sendMail(){

      const url = `${import.meta.env.VITE_API_URL}/contact`;
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          subject: this.subject,
          email: this.from,
          content: this.message,
        }),
      });

      if (response.ok) {
        const data = await response.json();
      } else {
        console.error('Erreur lors de l\'envoi du mail');
      }
    }

  }
})
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