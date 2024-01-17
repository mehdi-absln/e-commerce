<template>
  <div class="w-100">
    <!--    Tab product category    -->
    <v-col cols="12" class="row gap-row-sm gap-col-sm ">
      <v-btn
          v-for="(link,index) in productCategoriesTitle" :key="link + index"
          outlined
          class="radius-1 tab-category-btn cursor-pointer col-sm-3 col-5 col-lg-2 py-7"
          x-large
          @click="showCategoryData(link.category,index)">
        {{ link.category }}
      </v-btn>
    </v-col>
    <!--     Products   -->
    <v-col cols="12"
           class="d-flex flex-wrap justify-space-between mt-10 gap-row-sm tab-card-product-container pa-0 pe-0">
      <ProductComp class="col-md-3 col-sm-4 col-12" v-for="card in productCategoryCard" :card="card" :key="card.id"/>
    </v-col>
  </div>
</template>

<style lang="scss">
@import "../assets/scss/variable";

.tab-category-btn {
  border: 1px solid $purple;

  &.active {
    background: $purple;
    color: white !important;
  }
}

.tab-card-product-container {
  .tab-card {
    &:first-child {
      margin-top: 0 !important;
    }

    &:hover .tab-card-btn {
      visibility: visible;
    }
  }

  .tab-card-btn {
    visibility: hidden;
  }

  .tab-card-btn-wrapper {
    min-height: 40px;
    width: 100%;
    bottom: 0;
  }
}
</style>


<script>
import ProductComp from "@/components/ProductComp";

export default {
  name: "TabComp",
  components: {ProductComp},
  props: ['showMegaMenu'],
  data() {
    return {
      productCategoryCard: [],
    }
  },
  computed: {
    categories() {
      return this.$store.getters.getCategory;
    },
    productCategoriesTitle() {
      return this.$store.state.productCategoriesTitle;
    },
  },
  methods: {
    showCategoryData(link, i) {
      this.productCategoryCard = this.categories(link).slice(0, 4);
      const tabBtn = document.querySelectorAll('.tab-category-btn');
      tabBtn.forEach(contentBtn => contentBtn.classList.remove('active'));
      tabBtn[i].classList.add('active');
    }
  },
  mounted() {
     this.showCategoryData('لباس های مردانه', 0)
  },
}
</script>
