<template>
  <div>
    <h2>{{selectedProduct.title}}</h2>
    <h2>{{selectedProduct.id}}</h2>
  </div>
</template>

<style scoped lang="scss">

</style>

<script>
export default {
  name: "ProductDetailView",
  computed: {
      selectedProduct () {
        return this.$store.state.products.find((item) =>item.id === this.$route.params.id)
    },
  },
}
</script>