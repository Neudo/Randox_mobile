import{d as c,M as g,I as f,a as I,b as h,c as b,e as w,f as V,g as y,h as v,l as M,m as B,n as C,p as $,u as U,_ as k,r as s,i as L,w as e,o as N,j as n,q as l,k as i,s as T}from"./index-c3178fa5.js";const x=c({components:{Menu:g,IonButtons:f,IonContent:I,IonHeader:h,IonMenu:b,IonMenuButton:w,IonPage:V,IonTitle:y,IonToolbar:v,IonInput:M,IonLabel:B,IonItem:C},data(){return{email:"",password:""}},methods:{...$(U,{signUp:"login"}),async login(){console.log(this.email),console.log(this.password);try{await this.signUp(this.email,this.password),this.$router.push("/")}catch(o){console.log(o)}}}});const A=l("div",{class:"container bg-blue"},[l("h1",null,"Connexion")],-1);function E(o,t,S,j,q,H){const p=s("ion-label"),d=s("ion-input"),u=s("ion-item"),r=s("ion-button"),m=s("ion-content"),_=s("ion-page");return N(),L(_,{id:"main-content",style:{"padding-top":"36px"}},{default:e(()=>[n(m,{class:"ion-no-padding space-header"},{default:e(()=>[A,l("form",{onSubmit:t[2]||(t[2]=T((...a)=>o.login&&o.login(...a),["prevent"])),action:""},[n(u,null,{default:e(()=>[n(p,{position:"floating"},{default:e(()=>[i("Email")]),_:1}),n(d,{modelValue:o.email,"onUpdate:modelValue":t[0]||(t[0]=a=>o.email=a),placeholder:"Votre email"},null,8,["modelValue"])]),_:1}),n(u,null,{default:e(()=>[n(p,{position:"floating"},{default:e(()=>[i("Mot de passe")]),_:1}),n(d,{modelValue:o.password,"onUpdate:modelValue":t[1]||(t[1]=a=>o.password=a),type:"password"},null,8,["modelValue"])]),_:1}),n(r,{type:"submit"},{default:e(()=>[i("Envoyer")]),_:1})],32)]),_:1})]),_:1})}const z=k(x,[["render",E]]);export{z as default};