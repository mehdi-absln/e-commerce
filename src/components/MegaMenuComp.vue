<template>
  <div class="py-10 mega-menu-container w-100 p-absolute right-0 grey lighten-4 mt-3" v-if="showMegaMenu">
    <v-container class="p-relative">
      <v-row>
        <v-col class="col-12 col-md-2">
          <p v-for="(link,index) in productCategoriesTitle" :key="link + index" @mouseover="showCategoryData(link.category)"
             class="pt-10 cursor-pointer d-block">
            <router-link class="mega-menu-category-title" :to="link.category">{{ link.category }}</router-link>
          </p>
        </v-col>
        <v-col class="d-flex flex-wrap col-md-10 justify-space-around">
          <v-card v-for="card in productCategoryCard" :key="card.id" class="mega-menu-card"
                  max-width="200"
          >
            <v-img
                height="150"
                max-width="200"
                :src="card.image"
            ></v-img>
            <v-card-title>{{ card.title.substring(0, 20).concat('...') }}</v-card-title>
            <v-card-text class="mega-menu-card-text">
              <v-row
                  align="center"
                  class="mx-0"
              >
                <v-rating
                    :value="card.rating.rate"
                    color="amber"
                    dense
                    half-increments
                    readonly
                    size="14"
                ></v-rating>

                <div class="grey--text ms-4">
                  4.5 (413)
                </div>
              </v-row>

              <div class="my-4 text-subtitle-1">
                {{ card.category }}
              </div>

              <div class="card-description d-flex">
                {{ card.description.substring(0, 40).concat('...') }}
              </div>
            </v-card-text>
          </v-card>
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
export default {
  name: "MegaMenu",
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
    productCategoriesTitle() {
      return this.$store.state.productCategoriesTitle
    },
  },
  methods: {
    showCategoryData(link) {
      this.productCategoryCard = this.categories(link).slice(0,3);
    },
  },
}
</script>
