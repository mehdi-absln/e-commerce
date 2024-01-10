<template>
  <router-link  :to="{ name: 'ProductDetailView', params: { id: card.id } }">
  <v-card class="tab-card cursor-pointer"
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
  </v-card>
  </router-link>
</template>

<style scoped lang="scss">
.tab-card:hover{
  filter: drop-shadow(0 1px 5px rgba(0,0,0,.2));
  transition: all 0.3s;
}
</style>

<script>

export default {
  name: "ProductComp",
  props:['card'],
}
</script>