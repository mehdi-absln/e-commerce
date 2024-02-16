<template>
  <header class="grey lighten-5 w-100">
    <nav class="container">
      <v-row class="align-center justify-space-between">
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
        <v-col class="order-1" lg="2" md="4" cols="4">
          <router-link :to="{name: 'HomeView'}"><img class="logo" src="../assets/img/logo/majazite-officially-logo.png"
                                                     alt="logo"></router-link>
        </v-col>
        <v-col lg="5" cols="12" class="flex-column order-lg-2 pt-0 pt-lg-2 order-3">
          <div class="d-flex align-start justify-center">
            <v-text-field
                color="purple"
                v-model="search"
                class="pt-6 searchbar"
                label="جستجو در محصولات"
                outlined
                placeholder="پرنسس با روکش طلا سفید"
                clearable
            >
            </v-text-field>
          </div>
          <div class="p-relative w-100" v-if="showSearchbarResult">
            <div class="searchbar-result-products p-absolute grey lighten-5 p-absolute w-100">
              <div v-for="product in filteredList" :key="product.id" class="searchbar-product cursor-pointer">
                <router-link  @click.native="goToProductDetail" class="searchbar-link"
                             :to="{ name: 'ProductDetailView', params: { id: product.id }}"><h3
                    class="py-5 px-3">{{ product.title }}</h3></router-link>
              </div>
            </div>
          </div>
        </v-col>
      </v-row>
    </nav>
    <div class="pt-0 grey lighten-5">
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
<style lang="scss">
@import "src/assets/scss/variable";
header {
  .logo {
    width: 100%;
  }

  .searchbar-result-products {
    top: 0;
    z-index: 2;
  }

  .searchbar {
    border-radius: 1rem !important;
  }
  .searchbar-link{
    color: $purple!important;
  }

  @media only screen and (max-width: 650px) {
    .btn-content {
      display: none !important;
    }
  }
}
</style>
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
    search: '',
    showSearchbarResult: false,
  }),
  computed: {
    products() {
      return this.$store.state.products;
    },
    filteredList() {
      return this.products.filter((person) => {
        const searchResultObj = {
          ...person,
          title: person.title,
          description: ''
        }
        return Object.keys(searchResultObj)
            .some(key => ('' + searchResultObj[key]).toLowerCase().includes(this.search.toLowerCase()))
      })
    },
  },
  methods: {
    goToCart() {
      this.$router.push({name: 'CartView'})
    },
    goToProductDetail() {
      this.search = ''
    }
  },
  watch: {
    search() {
      this.showSearchbarResult = this.search.length > 2 ? true : false;
    }
  },
}
</script>