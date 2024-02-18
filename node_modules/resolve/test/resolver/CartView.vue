<template v-if="show">
  <v-container class="h-100" v-if="totalPrice===0"><h2 class="d-flex justify-center align-center display-2 font-weight-bold h-100">سبد خالی است</h2></v-container>
  <v-container v-else class="py-10">
    <h2>سبد خرید ({{this.cart.length}})</h2>
    <div v-for="product in cart" :key="product.id" class="w-100 mt-9">
      <v-row class="align-center justify-space-between">
        <v-col md="3" xl="2" cols="12"  class="d-flex justify-center">
          <img class="product-image" :src="product.image" :alt="product.title"/>
        </v-col>
        <v-col md="5" xl="6" cols="12">
          <h3 class="display-1 font-weight-bold">{{ product.title }}</h3>
          <p class="pt-5">{{ product.description }}</p>
        </v-col>
        <v-col md="3" xl="2" cols="12" class="d-flex align-center justify-center">
          <span>{{ product.price }}</span>
          <form class="ms-6">
            <div class="value-button" id="decrease" @click="decreaseCartQuantity(product.id)">-</div>
            <input type="number" disabled id="number" v-model="product.quantity"/>
            <div class="value-button" id="increase" @click="increaseCartQuantity(product.id)">+</div>
          </form>
          <v-btn @click="removeCartProduct(product.id)" color="error" class="delete-btn ms-6"
                 outlined><img src="../assets/img/delete.png" alt="delete"></v-btn>
        </v-col>
      </v-row>
    </div>
    <hr class="mt-5"/>
    <div class="pt-5"><h5 class="total-price-text">جمع سبد خرید: <span>{{totalPrice}}</span></h5></div>
  </v-container>
</template>

<style scoped lang="scss">
form {
  text-align: center;
  display: flex;
  flex-direction: column-reverse;

  .value-button {
    display: inline-block;
    border: 1px solid #ddd;
    margin: 0px;
    width: 40px;
    height: 40px;
    text-align: center;
    vertical-align: middle;
    padding: 11px 0;
    background: #eee;
    user-select: none;
    &:hover{
      cursor: pointer;
    }
  }

  & #decrease {
    border-radius: 0 0 8px 8px;
  }

  & #increase {
    border-radius: 8px 8px 0 0;
  }

  & #input-wrap {
    margin: 0px;
    padding: 0px;
  }

  input#number {
    text-align: center;
    border: none;
    border-left: 1px solid #ddd;
    border-right: 1px solid #ddd;
    width: 40px;
    height: 40px;
  }

  input[type=number]::-webkit-inner-spin-button,
  input[type=number]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  .total-price-text {
    font-size: 1.3rem;

    span {
      font-weight: 500;
    }
  }
}
.delete-btn {
  color: #DC3545 !important;
  caret-color: #DC3545 !important;
  height: 40px !important;
  min-width: 50px !important;
  padding: 0 0 !important;

  img {
    width: 18px;
  }
}
.h-100{
  height: 100%;
}
@media only screen and (max-width: 960px) {
  .product-image {
    width: 40%;
  }
}
@media (min-width: 960px), (max-width: 320px) {
  .product-image {
    width: 100%;
  }
}
</style>

<script>
export default {
  name: "CartView",
  computed: {
    cart() {
      return this.$store.state.cart;
    },
    totalPrice() {
      return this.$store.getters.totalPrice;
    }
  },
  methods: {
    increaseCartQuantity(id) {
      this.$store.commit('incrementCartItemQuantity',id)
    },
    decreaseCartQuantity(id) {
      this.$store.commit('decrementCartItemQuantity',id)
    },
    removeCartProduct(id){
      this.$store.commit('removeCartProductItem',id)
    }
  },
}
</script>