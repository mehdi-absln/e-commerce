<template>
  <v-container>
    <div class="w-100 d-flex justify-end mt-9">
      <router-link class="product-detail-link text-center" to="/"> بازگشت
        <v-icon
            dark
            right
            class="pl-3"
            color="black"
        >
          mdi-chevron-left
        </v-icon>
      </router-link>
    </div>
    <v-card
        class="mx-auto my-12"
    >
      <v-img
          :src="selectedProduct.image"
          class="product-image mx-auto"
      ></v-img>
      <v-card-title>{{ selectedProduct.title }}</v-card-title>

      <v-card-text>
        <v-row
            align="center"
            class="mx-0"
        >
          <v-rating
              :value="selectedProduct.rating.rate"
              color="amber"
              dense
              half-increments
              readonly
              size="14"
          ></v-rating>

          <div class="grey--text ms-4">
            {{ selectedProduct.rating.rate }} ({{ selectedProduct.rating.count }})
          </div>
        </v-row>

        <div class="my-4 text-subtitle-1">
          {{ selectedProduct.category }}
        </div>

        <div>{{ selectedProduct.description }}</div>
      </v-card-text>

      <v-divider class="mx-4"></v-divider>

      <v-card-title>${{ selectedProduct.price }}</v-card-title>
      <v-card-actions>
        <v-btn
            @click="addToCart"
            x-large
            class="w-100"
            color="purple white--text"
        >
          افزودن به سبد
        </v-btn>
      </v-card-actions>
      <v-alert
          transition="scale-transition"
          color="green"
          type="success"
          v-if="showAlert"
      >با موفقیت به سبد خرید اضافه شد</v-alert>
    </v-card>
  </v-container>
</template>

<style scoped lang="scss">
.product-detail-link {
  color: black;
}
@media only screen and (min-width: 500px) {
  .product-image {
    width: 40%;
  }
}
</style>

<script>
export default {
  name: "ProductDetailView",
  data(){
    return{
    showAlert:null,
    }
  },
  computed: {
    selectedProduct() {
      return this.$store.state.product
    },
  },
  methods:{
    async addToCart(){
      this.$store.commit('setCart',this.selectedProduct);
      this.showAlert = true;
      setTimeout(() => {
        this.showAlert = false;
      }, 1000);
    },
    makeRequest(){
      this.$store.dispatch('getProduct',this.$route.params.id)
    },
  },
  mounted() {
   this.makeRequest();
  }
}
</script>