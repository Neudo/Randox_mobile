<template>
  <ion-menu class="bg-blue" content-id="main-content">
    <ion-header>
      <ion-toolbar>
        <ion-title>            <router-link to="/">home</router-link>
        </ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <div class="wrapper-cta" v-if="!loggedIn">
        <router-link class="cta cta-nav" to="/inscription">Inscription</router-link>
        <router-link class="cta cta-nav" to="/connexion">Connexion</router-link>
      </div>
      <div class="wrapper-cta" v-else>
        <router-link class="cta cta-nav" to="/mon-compte">Mon compte</router-link>
        <router-link class="cta cta-nav" to="/panier">Panier</router-link>
      </div>


      <ion-list>

        <ion-item>
          <ion-label>
            <router-link to="/articles">Liste des articles</router-link>
          </ion-label>
        </ion-item>
        <ion-item>
          <ion-label>
            <router-link to="/abonnements">Nos abonnements</router-link>
          </ion-label>
        </ion-item>

        <ion-item>
          <ion-label>
            <router-link to="/contact">Contact</router-link>
          </ion-label>
        </ion-item>


      </ion-list>
    </ion-content>
  </ion-menu>
</template>
<script lang="js">
import { IonHeader, IonToolbar, IonTitle,IonLabel,IonItem,IonList,IonContent,IonMenu } from '@ionic/vue';
import {mapState} from "pinia";
import {useAuthStore} from "@/stores/auth.js";


export default {
  components: {
    IonHeader,
    IonTitle,
    IonToolbar,IonLabel,IonItem,IonList,IonContent,IonMenu
  },
  computed: {
    ...mapState(useAuthStore, ['loggedIn', 'user'])
  },
};
</script>

<style>

.wrapper-cta{
  display: flex;
  justify-content: space-between;
}

ion-menu {
  --ion-background-color: var(--ion-color-primay-blue);
}

ion-list{
  margin-top: 50px;
}

ion-item a{
  color: white;
  text-decoration: none;
  padding: 0 15px;
  border-left: 2px solid transparent;
  transition: border-left-color .3s ease;
  width: 100%;
  display: block;
}

ion-item a:hover{
  border-left: 2px solid yellow;
}

.cta-nav{
  border-radius: 0!important;
  width: 49%;
}

</style>