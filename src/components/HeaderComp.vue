<template>
  <header class="grey lighten-5 w-100">
    <nav class="container">
      <v-row class="align-center justify-space-between">
        <v-col class="order-1" lg="2" md="4" cols="4">
          <router-link :to="{name: 'HomeView'}"><img class="logo" src="../assets/img/logo/majazite-officially-logo.png" alt="logo"></router-link>
        </v-col>
        <v-col lg="5" cols="12" class="d-flex align-start justify-center order-lg-2 pt-0 pt-lg-2 order-3">
          <v-text-field
              color="purple"
              class="pt-6"
              label="جستجو در محصولات"
              outlined
              clearable
          ></v-text-field>
          <button class="purple search-bar-icon-wrapper d-flex justify-center align-center py-4 px-4 mt-6">
            <v-icon color="white">mdi-magnify</v-icon>
          </button>
        </v-col>
        <v-col lg="3" cols="3" class="d-flex justify-end order-2 order-lg-3">
          <v-btn class="radius-1 py-6 px-5"
                 elevation="1"
                 outlined
                 plain
                 text
                 @click="goToCart"
          >
            <v-icon color="purple darken-4" aria-label="My Account" role="img" aria-hidden="false">
              mdi-cart-outline
            </v-icon>
            <span class="btn-content">
    سبد خرید
          </span>
          </v-btn>
        </v-col>
      </v-row>
    </nav>
    <div class="pt-0 w-100 grey lighten-5">
      <div class="container">
          <span class="cursor-pointer" @click="showMegaMenu = !showMegaMenu">
             <v-icon color="purple">mdi-menu</v-icon>
            همه دسته بندی ها
          </span>
        <MegaMenuComp v-bind:show-mega-menu="showMegaMenu"/>
      </div>
    </div>
  </header>
</template>

<script>
import {mdiCartOutline, mdiMagnify, mdiMenu} from '@mdi/js';
import MegaMenuComp from "@/components/MegaMenuComp";

export default {
  name: "HeaderComp",
  components: {MegaMenuComp},
  data: () => ({
    icons: {
      mdiCartOutline, mdiMagnify, mdiMenu,
    },
    showMegaMenu: false,
  }),
  methods:{
    goToCart(){
      this.$router.push({name:'CartView'})
    }
  }
}
</script>

<style lang="scss">
header {
.logo {
  width: 100%;
}

.search-bar-icon-wrapper {
  border-radius: 40% 0 0 40%;
}

.v-input__slot {
  border-radius: 0 1rem 1rem 0 !important;
}

@media only screen and (max-width: 650px) {
  .btn-content {
    display: none !important;
  }
}
}
</style>
