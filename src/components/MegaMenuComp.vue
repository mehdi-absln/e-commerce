<template>
  <div class="py-10 mega-menu-container w-100 p-absolute right-0 grey lighten-4 mt-3" v-if="showMegaMenu">
    <v-container class="p-relative">
      <v-row>
        <v-col class="col-12 col-md-2">
          <p v-for="(link,index) in uniqueCategories" :key="link + index" @mouseover="showCategoryData(link)"
             class="pt-10 cursor-pointer d-block">
            <router-link class="mega-menu-category-title" :to="link">{{ link }}</router-link>
          </p>
        </v-col>
        <v-col class="d-flex flex-wrap justify-space-between gap-row-sm tab-card-product-container pa-0 pe-0" cols="10">
          <ProductComp class="col-md-3 col-sm-4 col-12" v-for="card in productCategoryCard" :card="card" :key="card.id"/>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style lang="scss" scoped>
@import "../assets/scss/variable";

@media only screen and (max-width: 991px){
  .mega-menu-card{
    display: none!important;
  }
}
.mega-menu-container {
  z-index: 3;
  .mega-menu-category-title {
    color: black;
    font-weight: 300;

    &:first-child {
      padding: 0 !important;
    }

    &:hover {
      color: $purple;
    }
  }

  .mega-menu-card {
    &:first-child {
      margin-top: 0 !important;
    }

    &:hover .mega-menu-card-btn {
      visibility: visible;
    }
  }

  .mega-menu-card-btn {
    visibility: hidden;
  }
  .mega-menu-card-btn-wrapper{
    min-height: 40px;
    width: 100%;
    bottom: 0;
  }
  .mega-menu-card-text{
    min-height:180px;
  }
}
</style>

<script>
import ProductComp from "@/components/ProductComp.vue";

export default {
  name: "MegaMenu",
  components: {ProductComp},
  props:['showMegaMenu'],
  data() {
    return {
      productCategoryCard: [],
    }
  },
  computed: {
    categories() {
      return this.$store.getters.getCategory;
    },
    uniqueCategories() {
      return this.$store.state.uniqueCategories
    },
  },
  methods: {
    showCategoryData(link) {
      this.productCategoryCard = this.categories(link).slice(0,3);
    },
  },
}
</script>
