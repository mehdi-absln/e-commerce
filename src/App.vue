<template>
  <v-app>
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
  data: () => {
    return {
      show: null,
    }
  },
  components: {FooterComp, HeaderComp},
};
</script>
