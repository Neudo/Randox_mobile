<template>
  <ion-page id="main-content" style="padding-top:36px" >
    <ion-content class="ion-no-padding space-header">
      <div class="container bg-blue form-intro">
        <h1>Un choix international</h1>
        <p>Il y en a forcément pour tous les goûts ! Choisissez vos régions du monde préférés et degustez de nouveaux plats.</p>
      </div>
      <div class="container swiper-container ">
        <swiper
            :slides-per-view="1.1"
            :space-between="10"
            @swiper="onSwiper"
            @slideChange="onSlideChange"
        >

          <swiper-slide>
            <ion-card>
              <div class="card-image" style="background-image:url('/plans/world.jpg') "></div>
              <ion-card-header>
                <ion-card-title>Formule MONDE</ion-card-title>
                <ion-card-subtitle>24,99€/mois</ion-card-subtitle>
              </ion-card-header>
            </ion-card>
          </swiper-slide>
          <swiper-slide>
            <ion-card>
              <div class="card-image" style="background-image:url('/plans/europe.jpg') "></div>

              <ion-card-header>
              <ion-card-title>Formule Europe</ion-card-title>
              <ion-card-subtitle>13,99€/mois</ion-card-subtitle>
            </ion-card-header>
          </ion-card>
          </swiper-slide>
          <swiper-slide>
            <ion-card>
              <div class="card-image" style="background-image:url('/plans/afrique.jpg') "></div>

              <ion-card-header>
              <ion-card-title>Formule Afrique</ion-card-title>
              <ion-card-subtitle>13,99€/mois</ion-card-subtitle>
            </ion-card-header>
          </ion-card></swiper-slide>
          <swiper-slide>
            <ion-card>
              <div class="card-image" style="background-image:url('/plans/asie.jpg') "></div>

              <ion-card-header>
              <ion-card-title>Formule Afrique</ion-card-title>
              <ion-card-subtitle>13,99€/mois</ion-card-subtitle>
            </ion-card-header>
          </ion-card></swiper-slide>
          <swiper-slide>
            <ion-card>
              <div class="card-image" style="background-image:url('/plans/amerique-nord.jpg') "></div>

              <ion-card-header>
              <ion-card-title>Formule Amérique du nord</ion-card-title>
              <ion-card-subtitle>13,99€/mois</ion-card-subtitle>
            </ion-card-header>
          </ion-card>
          </swiper-slide>
          <swiper-slide>
            <ion-card>
              <div class="card-image" style="background-image:url('/plans/amerique-sud.jpg') "></div>
              <ion-card-header>
              <ion-card-title>Formule Amérique du sud</ion-card-title>
              <ion-card-subtitle>13,99€/mois</ion-card-subtitle>
            </ion-card-header>
          </ion-card></swiper-slide>
        </swiper>


      </div>

    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonButtons, IonContent, IonHeader, IonMenu, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
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
    IonButtons,
    IonContent,
    IonHeader,
    IonMenu,
    IonMenuButton,
    IonPage,
    IonTitle,
    IonToolbar,
  },
  setup() {
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log('slide change');
    };
    return {
      onSwiper,
      onSlideChange,
    };
  },
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
  height: 400px;
  background-size: cover;
  background-repeat: no-repeat;
}


</style>