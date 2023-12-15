<template>
  <v-app v-if="show">
  <HeaderComp/>
    <router-view/>
    <FooterComp/>
  </v-app>
</template>
<script>
import HeaderComp from "@/components/HeaderComp";
import FooterComp from "@/components/FooterComp";

export default {
  name: 'App',
  data: ()=> {
    return {
      show:null,
    }
  },
  async mounted() {
    await this.$store.dispatch('getProducts');
    await this.$store.commit('uniqueCategory');
    this.show=true;
  },
  components: {FooterComp, HeaderComp},
};
</script>
