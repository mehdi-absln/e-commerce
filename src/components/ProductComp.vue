<template>
  <v-card class="tab-card"
          max-width="270"
  >
    <v-img
        height="150"
        :src="card.image"
    ></v-img>
    <v-card-title>{{ card.title.substring(0, 20).concat('...') }}</v-card-title>
    <v-card-text class="tab-card-text">
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
      <div class="tab-description d-flex">
        {{ card.description.substring(0, 40).concat('...') }}
      </div>
    </v-card-text>
    <v-card-actions class="tab-card-btn-wrapper p-absolute mt-4">
      <v-btn
          text
          color="purple"
          class="tab-card-btn w-100"
      >
        <v-icon aria-label="My Account" role="img" aria-hidden="false">
          mdi-cart-outline
        </v-icon>
        سبد خرید
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "ProductComp",
  props:['card']
}
</script>

<style scoped lang="scss">
</style>
