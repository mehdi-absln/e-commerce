<template>
  <v-app v-if="show">
    <HeaderComp/>
    <v-main>
      <router-view/>
    </v-main>
    <FooterComp/>
  </v-app>
</template>
<script>
import HeaderComp from "@/components/HeaderComp";
import FooterComp from "@/components/FooterComp";

export default {
  name: 'App',
  components: {FooterComp, HeaderComp},
  data(){
    return{
      show: null
    }
  },
  async mounted() {
    await this.$store.dispatch('getProducts');
    await this.$store.commit('uniqueCategory');
    this.show = true;
  },
};
</script>
