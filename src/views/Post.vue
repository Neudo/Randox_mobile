<template>
  <ion-page id=" main-content">
    <ion-content class="ion-no-padding">

      <div v-if="post.length >= 1" class="single-post">
      <h1>{{ post[0].title }}</h1>
      <span>{{post[0].author}} {{post[0].created_at}}</span>

      <div class="cover-img" style="height: 300px; width: 100%;" :style="{ backgroundImage: 'url(' + post[0].image + ')' }"></div>
      <div class="content">{{post[0].content}}</div>
      </div>
        <div v-else>
          <h2>Problème lors de l'affichage du post</h2>
          <h2>Problème lors de l'affichage du post</h2>
          <h2>Problème lors de l'affichage du post</h2>
          <h2>Problème lors de l'affichage du post</h2>
          <h2>Problème lors de l'affichage du post</h2>
          <h2>Problème lors de l'affichage du post</h2>
          <h2>Problème lors de l'affichage du post</h2>
        </div>

    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonButtons, IonContent, IonHeader, IonMenu, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
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
  },
  mounted() {
    this.fetchSinglePost()
  },
  data() {
    return{
      post: {}
    }
  },
  methods:{
    async fetchSinglePost(){
      const slug = this.$route.params.slug ;
      const url = `http://localhost:3005/post/${slug}`;
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
      if (response.ok) {
        const data = await response.json();
        this.post = data
        console.log("post =====", this.post)
        console.log(this.post.length)
      } else {
        console.error('Erreur lors de l\'affichage des articles');
      }
    }
  }
});
</script>
<style>
h1{
  background-color: whitesmoke;
  padding: 50px;
}

.cover-img{
  background-size: cover;

}

.content{
  margin-top: 40px;
  padding: 20px 20px 60px;
}
</style>