<template>
  <ion-menu class="bg-blue" content-id="main-content">
    <ion-header>
      <ion-toolbar>
        <ion-title>            <ion-menu-toggle router-link="/">
          <svg width="116" height="29" viewBox="0 0 116 29" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="87.9927" y1="20.7736" x2="105.993" y2="15.7736" stroke="#FDF429" stroke-width="15"/>
            <path d="M92.9496 27.9855C92.6378 27.779 93.7355 26.1752 93.9468 25.8513L104.525 9.02549C105.135 8.09018 105.759 8.10417 106.312 8.47104C106.867 8.83777 107.114 9.40032 106.462 10.3077L94.4855 26.4579C94.2592 26.772 93.2608 28.1921 92.9496 27.9855Z" fill="#090909"/>
            <path d="M106.312 8.47103C105.758 8.1043 105.135 8.09077 104.525 9.02549L102.388 12.4251C102.551 12.972 103.596 13.5183 104.139 13.441L106.462 10.3075C107.114 9.40032 106.867 8.83776 106.312 8.47103Z" fill="#94989B"/>
            <path d="M99.7922 21.0709L96.4591 17.7378C95.4656 16.7443 96.3309 14.2124 93.7029 11.5844C91.8441 9.7256 88.7995 8.70004 87.5496 9.94994C86.2997 11.1998 87.3252 14.2445 89.184 16.1033C91.812 18.7313 94.3118 17.866 95.3374 18.8595L98.6705 22.1926C100.049 23.5707 100.145 24.0514 102.292 26.9358C103.35 28.378 104.375 29.2753 105.625 28.0254C106.907 26.7435 105.978 25.75 104.535 24.6924C101.651 22.5451 101.202 22.4489 99.7922 21.0709Z" fill="black"/>
            <path d="M91.3634 10.655C93.094 12.8664 93.6709 15.4303 92.7735 17.0968C92.8376 17.0968 92.9017 17.1289 92.9338 17.1289C93.5427 17.1289 94.0875 16.9686 94.4721 16.584C94.8567 16.1994 95.1131 15.6546 95.0169 15.0457C94.8887 14.1483 94.408 13.1228 93.3504 12.0652C92.7735 11.4562 92.0684 10.9755 91.3634 10.655Z" fill="white"/>
            <path d="M90.5942 16.3597C88.3828 14.1483 87.6457 11.296 88.8315 9.82174C88.4149 9.85379 88.0944 9.98199 87.838 10.2384C86.8445 11.2319 87.6457 13.9881 89.4725 15.8149C90.2096 16.552 90.9467 17.0007 91.6198 17.2891C91.6198 17.2891 91.6198 17.2571 91.5877 17.2571C91.2352 17.0007 90.9147 16.6802 90.5942 16.3597Z" fill="#94989B"/>
            <path d="M10.08 26L6.576 19.64L5.592 19.64L5.592 26L1.488 26L1.488 9.152L8.376 9.152C9.704 9.152 10.832 9.384 11.76 9.848C12.704 10.312 13.408 10.952 13.872 11.768C14.336 12.568 14.568 13.464 14.568 14.456C14.568 15.576 14.248 16.576 13.608 17.456C12.984 18.336 12.056 18.96 10.824 19.328L14.712 26L10.08 26ZM5.592 16.736L8.136 16.736C8.888 16.736 9.448 16.552 9.816 16.184C10.2 15.816 10.392 15.296 10.392 14.624C10.392 13.984 10.2 13.48 9.816 13.112C9.448 12.744 8.888 12.56 8.136 12.56L5.592 12.56L5.592 16.736ZM27.6323 23.024L21.3443 23.024L20.3363 26L16.0403 26L22.1363 9.152L26.8883 9.152L32.9843 26L28.6403 26L27.6323 23.024ZM26.5763 19.856L24.4883 13.688L22.4243 19.856L26.5763 19.856ZM49.9116 26L45.8076 26L38.9436 15.608L38.9436 26L34.8396 26L34.8396 9.152L38.9436 9.152L45.8076 19.592L45.8076 9.152L49.9116 9.152L49.9116 26ZM59.1984 9.152C60.9744 9.152 62.5264 9.504 63.8544 10.208C65.1824 10.912 66.2064 11.904 66.9264 13.184C67.6624 14.448 68.0304 15.912 68.0304 17.576C68.0304 19.224 67.6624 20.688 66.9264 21.968C66.2064 23.248 65.1744 24.24 63.8304 24.944C62.5024 25.648 60.9584 26 59.1984 26L52.8864 26L52.8864 9.152L59.1984 9.152ZM58.9344 22.448C60.4864 22.448 61.6944 22.024 62.5584 21.176C63.4224 20.328 63.8544 19.128 63.8544 17.576C63.8544 16.024 63.4224 14.816 62.5584 13.952C61.6944 13.088 60.4864 12.656 58.9344 12.656L56.9904 12.656L56.9904 22.448L58.9344 22.448ZM78.2919 26.168C76.7079 26.168 75.2519 25.8 73.9239 25.064C72.6119 24.328 71.5639 23.304 70.7799 21.992C70.0119 20.664 69.6279 19.176 69.6279 17.528C69.6279 15.88 70.0119 14.4 70.7799 13.088C71.5639 11.776 72.6119 10.752 73.9239 10.016C75.2519 9.28 76.7079 8.912 78.2919 8.912C79.8759 8.912 81.3239 9.28 82.6359 10.016C83.9639 10.752 85.0039 11.776 85.7559 13.088C86.5239 14.4 86.9079 15.88 86.9079 17.528C86.9079 19.176 86.5239 20.664 85.7559 21.992C84.9879 23.304 83.9479 24.328 82.6359 25.064C81.3239 25.8 79.8759 26.168 78.2919 26.168ZM78.2919 22.424C79.6359 22.424 80.7079 21.976 81.5079 21.08C82.3239 20.184 82.7319 19 82.7319 17.528C82.7319 16.04 82.3239 14.856 81.5079 13.976C80.7079 13.08 79.6359 12.632 78.2919 12.632C76.9319 12.632 75.8439 13.072 75.0279 13.952C74.2279 14.832 73.8279 16.024 73.8279 17.528C73.8279 19.016 74.2279 20.208 75.0279 21.104C75.8439 21.984 76.9319 22.424 78.2919 22.424Z" fill="black"/>
          </svg>
        </ion-menu-toggle>
        </ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <div class="wrapper-cta" v-if="!loggedIn">

        <ion-menu-toggle router-link="/inscription" class="cta cta-nav">Inscription</ion-menu-toggle>
        <ion-menu-toggle router-link="/connexion" class="cta cta-nav" >Connexion</ion-menu-toggle>
      </div>
      <div class="wrapper-cta" v-else>
        <ion-menu-toggle class="cta cta-nav" style="width: 100%;" router-link="/mon-compte">Mon compte</ion-menu-toggle>
      </div>


      <ion-list>

        <ion-item>
          <ion-label>
            <ion-menu-toggle router-link="/articles">Liste des articles</ion-menu-toggle>
          </ion-label>
        </ion-item>
        <ion-item>
          <ion-label>
            <ion-menu-toggle router-link="/abonnements">Nos abonnements</ion-menu-toggle>
          </ion-label>
        </ion-item>

        <ion-item>
          <ion-label>
            <ion-menu-toggle router-link="/contact">Contact</ion-menu-toggle>
          </ion-label>
        </ion-item>

        <ion-title>À propos</ion-title>

        <ion-item>
          <ion-label>
            <ion-menu-toggle router-link="/legal">Mentions légales</ion-menu-toggle>
          </ion-label>
        </ion-item>

        <ion-item>
          <ion-label>
            <ion-menu-toggle router-link="/cgu">CGU / CGV</ion-menu-toggle>
          </ion-label>
        </ion-item>

        <ion-item>
          <ion-label>
            <ion-menu-toggle router-link="/privacy">Politique de confidentialité</ion-menu-toggle>
          </ion-label>
        </ion-item>


      </ion-list>
    </ion-content>
  </ion-menu>
</template>
<script lang="js">
import { IonHeader, IonToolbar, IonTitle,IonLabel,IonItem,IonList,IonContent,IonMenu, IonMenuToggle } from '@ionic/vue';
import {mapState} from "pinia";
import {useAuthStore} from "@/stores/auth.js";


export default {
  components: {
    IonHeader,
    IonTitle,
    IonToolbar,IonLabel,IonItem,IonList,IonContent,IonMenu, IonMenuToggle
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

ion-title{
  color: white;
}

ion-list{
  margin-top: 50px;
}

ion-list ion-item {
  color: white;
  cursor: pointer;
  text-decoration: none;
  padding: 0 15px;
  border-left: 2px solid transparent;
  transition: border-left-color .3s ease;
  width: 100%;
  display: block;
}

ion-item:hover{
  border-left: 2px solid yellow;
}

.cta-nav{
  border-radius: 0!important;
  width: 49%;
}

</style>