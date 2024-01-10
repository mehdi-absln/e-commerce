<template>
  <v-container class="">
        <h2>سبد خرید</h2>
    <div v-for="product in cart" :key="product.id" class="w-100">
      <v-row class="align-center">
        <v-col cols="4">
          <img class="w-100" :src="product.image" :alt="product.title"/>
        </v-col>
        <v-col cols="4">
          <h3>{{product.title}}</h3>
          <p>{{product.description}}</p>
        </v-col>
        <v-col cols="4" class="d-flex align-center justify-space-between">
          <span>{{product.price}}</span>
          <form>
            <div class="value-button" id="decrease" @click="decreaseValue">-</div>
            <input type="number" disabled id="number" v-model="value"/>
            <div class="value-button" id="increase" @click="increaseValue">+</div>
          </form>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<style scoped lang="scss">
form {
  width: 300px;
  margin: 0 auto;
  text-align: center;
  padding-top: 50px;
  display:flex;
  flex-direction:column-reverse;
}

.value-button {
  display: inline-block;
  border: 1px solid #ddd;
  margin: 0px;
  width: 40px;
  height: 20px;
  text-align: center;
  vertical-align: middle;
  padding: 11px 0;
  background: #eee;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -html-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.value-button:hover {
  cursor: pointer;
}

form #decrease {
  border-radius: 0 0 8px 8px;
}

form #increase {
  border-radius: 8px 8px 0 0;
}

form #input-wrap {
  margin: 0px;
  padding: 0px;
}

input#number {
  text-align: center;
  border: none;
  border-left: 1px solid #ddd;
  border-right: 1px solid #ddd;
  margin: 0px;
  width: 36px;
  height: 40px;
}

input[type=number]::-webkit-inner-spin-button,
input[type=number]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>

<script>
export default {
  name: "CartView",
  data() {
    return {
      value: 1,
    }
  },
  computed: {
    cart() {
      return this.$store.state.cart;
    }
  },
  methods: {
    increaseValue() {
      this.value++;
    },
    decreaseValue() {
      if (this.value < 2){
        this.value = 2;
      }
      this.value--;
    },
  },
}
</script>