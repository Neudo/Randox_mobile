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
        <router-link class="cta big" to="/abonnements">Voir tous nos abonnements</router-link>

      </div>
      <h1>Nos actualités</h1>
      <ion-card v-for="post in latestPost" key="post.id" :style="{ backgroundImage: 'url(' + post.image + ')' }" class="post">
        <router-link :to="`/article/${post.slug}`">{{post.title}}</router-link>
      </ion-card>

      <div class="container">
        <router-link class="cta big" to="/articles">Voir toutes les actualités</router-link>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonButton, IonButtons, IonLabel, IonCard, IonContent, IonHeader, IonMenu, IonMenuButton, IonPage, IonTitle, IonToolbar, IonCardContent, IonCardTitle, IonCardSubtitle, IonItem, IonCardHeader } from '@ionic/vue';
import { defineComponent } from 'vue';
import Menu from "../App.vue";
import {mapState} from "pinia";
import {useAuthStore} from "../stores/auth.js";


export default defineComponent({
  components: {
    Menu,
    IonButton, IonLabel, IonCard,
    IonButtons,
    IonContent,
    IonHeader,
    IonMenu,
    IonMenuButton,
    IonPage,
    IonTitle,
    IonToolbar,
    IonCardContent,
    IonCardTitle,
    IonCardSubtitle,
    IonItem,
    IonCardHeader
  },
  computed: {
    ...mapState(useAuthStore, ['loggedIn', 'user'])
  },
  data(){
    return{
      latestPost: []
    }
  },
  mounted() {
    this.fetchPosts()
  },
  methods:{
    async fetchPosts(){
      const url = `${import.meta.env.VITE_API_URL}/post/`;
      const store = useAuthStore()
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${store.user.token}`
        },
      })
      if (response.ok) {
        const data = await response.json();
        for (let i = 0; i < 3 ; i++) {
          if (data[i]){
          this.latestPost.push(data[i])
          }
        }
      } else {
        console.error('Erreur lors de l\'affichage des articles');
      }
    }
  }
});
</script>

<style>
h1 {
  padding: 50px 15px 0;

}

.post{
  position: relative;
}

.post a:after {
  position: absolute;
  content: '';
  inset: 0;
}

.post a{
  position: absolute;
  bottom: 0;
  left: 20px;
  color: white;
  font-size: 2.4rem;
  padding: 20px 5px;
}
.post:before{
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 50%;
  background-image: linear-gradient(to bottom, rgba(0,0,0,0) 0, rgba(0,0,0,.6) 50%, rgba(0,0,0.9) 100%);
}
.post:not(.first-post){
  border-radius: 20px;
  min-height: 20vh;
  background-size: cover;
  margin-bottom: 20px;

}

.post:not(.first-post) a{
  font-size: 1.2rem;
}

</style>