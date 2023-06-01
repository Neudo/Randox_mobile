<template>
  <ion-menu class="bg-blue" content-id="main-content">
    <ion-header>
      <ion-toolbar>
        <ion-title>            <router-link to="/">home</router-link>
        </ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <div class="wrapper-cta">
        <router-link class="cta cta-nav" to="/inscription">Inscription</router-link>
        <router-link class="cta cta-nav" to="/connexion">Connexion</router-link>
      </div>

      <ion-list>
        <ion-item>
          <ion-label>
            <router-link to="/articles">Liste des articles</router-link>
          </ion-label>
        </ion-item>
        <ion-item>
          <ion-label>
            <router-link to="/mon-compte">Mon compte</router-link>
          </ion-label>
        </ion-item>
        <ion-item>
          <ion-label>
            <router-link to="/abonnements">Nos abonnements</router-link>
          </ion-label>
        </ion-item>
        <ion-item>
          <ion-label>
            <router-link to="/panier">Panier</router-link>
          </ion-label>
        </ion-item>
        <ion-item>
          <ion-label>
            <router-link to="/contactez-nous">Contact</router-link>
          </ion-label>
        </ion-item>


      </ion-list>
    </ion-content>
  </ion-menu>
</template>
<script lang="js">
import { IonHeader, IonToolbar, IonTitle } from '@ionic/vue';


export default {
  components: {
    IonHeader,
    IonTitle,
    IonToolbar
  },
  data() {
    return {
    };
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