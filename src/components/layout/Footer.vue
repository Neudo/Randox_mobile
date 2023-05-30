<template>

  <ion-footer>
    <ion-toolbar>
      <ion-title>Footer</ion-title>
      <router-link to="/post">Mentions légales</router-link>
      <router-link to="/post">CGU/CGV</router-link>
      <router-link to="/post">Politique de confidentialité</router-link>

    </ion-toolbar>
  </ion-footer>
</template>

<script lang="ts">
import { IonContent, IonFooter, IonTitle, IonToolbar } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  components: { IonContent, IonFooter, IonTitle, IonToolbar },
});
</script>