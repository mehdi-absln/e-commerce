<template>
  <v-row class="d-flex justify-end col-sm-6 col-12">
    <v-col cols="2" class="text-center deep-purple lighten-3 radius-1">
      <h3>{{ this.second }}</h3>
      <p class="font-weight-light">ثانیه</p>
    </v-col>
    <v-col cols="2" class="text-center deep-purple lighten-3 radius-1 mr-2">
      <h3>{{ this.minute }}</h3>
      <p class="font-weight-light">دقیقه</p>
    </v-col>
    <v-col cols="2" class="text-center deep-purple lighten-3 radius-1 mr-2">
      <h3>{{ this.hour }}</h3>
      <p class="font-weight-light">ساعت</p>
    </v-col>
    <v-col cols="2" class="text-center deep-purple lighten-3 radius-1 mr-2">
      <h3>{{ this.day }}</h3>
      <p class="font-weight-light">روز</p>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "CountDownComp",
  data() {
    return {
      second: null,
      minute: null,
      hour: null,
      day: null,
    }
  },
  mounted() {
    const countdown = () => {
      const countDate = new Date('nov 17, 2024 00:00:00').getTime();
      const now = new Date().getTime();
      const gap = countDate - now;

      const second = 1000;
      const minute = second * 60;
      const hour = minute * 60;
      const day = hour * 24;

      const textDay = Math.floor(gap / day);
      const textHour = Math.floor((gap % day) / hour);
      const textMinute = Math.floor((gap % hour) / minute);
      const textSecond = Math.floor((gap % minute) / second);

      this.day = textDay;
      this.hour = textHour;
      this.minute = textMinute;
      this.second = textSecond;
    };
    setInterval(countdown, 1000);
  },
}
</script>

<style lang="scss" scoped>
h3{
  color:#AB47BC;
}
</style>
