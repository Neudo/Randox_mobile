<template>
  <ion-page id=" main-content">
    <ion-content class="ion-no-padding">
      <ion-card v-for="(post, index) in posts" key="post.id" :style="{ backgroundImage: 'url(' + post.image + ')' }" :class="{'first-post' : index === 0}" class="post">
        <router-link :to="`/article/${post.slug}`">{{ post.title }}</router-link>
      </ion-card>
    </ion-content>
  </ion-page>
</template>
<script lang="ts">
import { IonButtons, IonContent, IonHeader, IonMenu, IonMenuButton, IonPage, IonTitle, IonToolbar, IonCard } from '@ionic/vue';
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
    IonCard
  },
  data(){
    return{
      posts:[]
    }
  },
  mounted() {
    this.fetchPosts()
  },
  methods:{
    async fetchPosts(){
      const url = `${import.meta.env.VITE_API_URL}/post/`;
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
      if (response.ok) {
        const data = await response.json();
        this.posts = data
        console.log(data)
        this.posts = this.posts.filter((post) => post.publied);

      } else {
        console.error('Erreur lors de l\'affichage des articles');
      }
    }

  }
});
</script>
<style>
.first-post{
  min-height: 50vh;
  margin: 0;
  background-size: cover;
  border-radius: unset;
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