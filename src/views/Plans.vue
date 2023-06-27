<template>
  <ion-page id="main-content" style="padding-top:36px" >
    <ion-content class="ion-no-padding space-header">
      <div class="container bg-blue form-intro">
        <h1>Un choix international</h1>
        <p>Il y en a forcément pour tous les goûts ! Choisissez vos régions du monde préférés et degustez de nouveaux plats.</p>
      </div>
      <div class="container swiper-container" >
        <swiper
            :slides-per-view="1.1"
            :space-between="10"
            @swiper="onSwiper"
            @slideChange="onSlideChange"
        >
          <swiper-slide v-for="plan in plans" key="plan.id">
            <ion-card>
              <div class="card-image" :style="{ backgroundImage: 'url(' + plan.image + ')' } "></div>
              <ion-card-header>
                <ion-card-title>{{plan.title}}</ion-card-title>
                <ion-card-subtitle>{{plan.price}}€/mois</ion-card-subtitle>
                <a href="/checkout/" class="cta">S'abonner</a>
                <form @submit.prevent="openStripe(plan.stripe_id)" action="">
                  <ion-button type="submit">S'abonner</ion-button>
                  <input type="hidden" name="lookup_key" :value="plan.stripe_id" />
                </form>
              </ion-card-header>
            </ion-card>
          </swiper-slide>

        </swiper>


      </div>

    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonInput,IonButtons, IonContent, IonHeader, IonMenu, IonMenuButton, IonPage, IonTitle, IonToolbar,IonCardTitle,IonCardSubtitle, IonCard, IonCardHeader } from '@ionic/vue';
import { defineComponent } from 'vue';
import Menu from "../App.vue";
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';


export default defineComponent({
  components: {
    Swiper,
    SwiperSlide,
    Menu,
    IonInput,
    IonButtons,
    IonContent,
    IonHeader,
    IonMenu,
    IonMenuButton,
    IonPage,
    IonTitle,
    IonToolbar,
    IonCardTitle,IonCardSubtitle, IonCard, IonCardHeader
  },
  setup() {
    const onSwiper = (swiper) => {
    };
    const onSlideChange = () => {
    };
    return {
      onSwiper,
      onSlideChange,
    };
  },
  data(){
    return{
      plans: [],
      stripe: ""
    }
  },
  mounted() {
    this.fetchPlans()
  },
  methods:{
    async fetchPlans(){
      const url = `${import.meta.env.VITE_API_URL}/plan/`;
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
      this.plans = []
      if (response.ok) {
        const data = await response.json();
        this.plans = data
      } else {
        console.error('Erreur lors de l\'affichage des abonnements');
      }
    },
    async openStripe(s_id){
      console.log('clicked cta stripe')
      const url = `${import.meta.env.VITE_API_URL}/checkout/`
      const response = await fetch(url,{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ stripe_id: s_id })
      })
      if (response.ok){
        console.log('res ok')
      }
    }
  }
});
</script>

<style>
.form-intro{
  padding: 30px 20px 250px;
}
.swiper-container{
  position: relative;
  top: -195px;
  padding: 0;
}
h1 {
  padding-top: 50px;
}

.card-image{
  height: 550px;
  background-size: cover;
  background-repeat: no-repeat;
}


</style>