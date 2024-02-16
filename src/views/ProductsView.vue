<template>
  <v-container>
    <v-row class="mt-5">
      <div class="col-12 d-flex align-center filter-feature-container py-13">
        <div class="d-flex">
          <a class="d-flex align-center d-md-none filter-link" @click="selectedCategorySidebar = !selectedCategorySidebar">
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="20"
                 height="256" viewBox="0 0 256 256" xml:space="preserve">

          <defs>
          </defs>
              <g style="stroke: none; stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: none; fill-rule: nonzero; opacity: 1;"
                 transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)">
            <path
                d="M 37.882 90 c -0.338 0 -0.676 -0.086 -0.981 -0.258 c -0.629 -0.354 -1.019 -1.02 -1.019 -1.742 V 45.354 L 3.923 3.208 C 3.464 2.604 3.388 1.791 3.726 1.11 S 4.758 0 5.517 0 h 78.966 c 0.76 0 1.453 0.43 1.791 1.11 s 0.262 1.493 -0.197 2.098 L 54.118 45.354 V 79.37 c 0 0.699 -0.365 1.348 -0.963 1.71 l -14.237 8.63 C 38.601 89.903 38.241 90 37.882 90 z M 9.543 4 l 29.932 39.474 c 0.264 0.348 0.406 0.772 0.406 1.208 v 39.767 l 10.236 -6.205 V 44.682 c 0 -0.437 0.143 -0.861 0.406 -1.208 L 80.457 4 H 9.543 z M 52.118 79.37 h 0.01 H 52.118 z"
                style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;"
                transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round"/>
          </g>
          </svg>
           فیلتر کردن
          </a>
        </div>
        <div class="select-wrapper ms-4 ms-md-0">
          <select v-model="sortItems">
            <option value="def">مرتب سازی پیشفرض</option>
            <option value="asc">مرتب سازی بر اساس هزینه: از ارزان به گران</option>
            <option value="desc">مرتب سازی بر اساس هزینه: از گران به ارزان</option>
            <option selected value="pop">مرتب سازی بر اساس محبوبیت</option>
          </select>
          <span class="custom-arrow"></span>
        </div>
      </div>
      <aside class="col-md-3" v-if="selectedCategorySidebar">
        <div>
          <h3>دسته بندی محصولات</h3>
          <div class="mt-3">
            <input
                type="radio"
                value=""
                v-model="selectedCategory"
                name="categoryFilter"
                class="styled-radio-button pt-3"
            />
            <label class="ps-1">همه محصولات</label>
          </div>
          <div v-for="category in uniqueCategories" :key="category" class="pt-3">
            <input
                type="radio"
                :value="category"
                v-model="selectedCategory"
                name="categoryFilter"
                class="styled-radio-button"
            />
            <label class="ps-1">{{ category }}</label>
          </div>
        </div>
      </aside>
      <v-row class="col-md-9 col-12 justify-space-between justify-lg-start">
        <ProductComp class="col-lg-4 col-sm-6 col-12" :card="product" v-for="product in filteredProducts"
                     :key="product.id"/>
        <v-btn
            class="radius-1 mt-4 w-100 content-btn"
            color="purple"
            x-large
            ref="showMore"
            v-if="showMoreButton"
            @click="showMore"
        >
          نمایش بیشتر
        </v-btn>
      </v-row>
    </v-row>
  </v-container>
</template>


<style lang="scss" scoped>
@import "../assets/scss/variable";
.filter-feature-container{
  height: 0;

  select:focus,
  select:active {
    outline: none;
    border-color: transparent;
  }
  select:focus option,
  select:active option {
    outline: none;
    border-color: transparent;
  }
  svg{
    height: 20px;
  }
  .filter-link{
    color: black;
    font-size: 14px;
    height: 0;
    &:hover, &:hover svg path{
      color: $purple;
      fill: $purple!important;
      transition: all 0.3s;
    }
  }
}
.styled-radio-button {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border-radius: 50%;
  width: 18px;
  height: 18px;
  border: 3px solid #403D3B;
  transition: 0.2s all linear;
  cursor: pointer;
  position: relative;
  top: 3px;


  &:checked {
    border-color: $purple;
  }

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 8px;
    height: 8px;
    transition: 0.2s all linear;
    background-color: transparent;
    border-radius: 50%;
  }

  &:checked::before, &:hover::before {
    background-color: $purple;
  }

  &:checked::after {
    content: '';
    position: absolute;
    top: -3px;
    left: -3px;
    width: calc(100% + 6px);
    height: calc(100% + 6px);
    border-radius: 50%;
    box-shadow: inset 0 0 1px 1px $purple;
  }
}

.select-wrapper {
  position: relative;
  width: 200px;

   select {
    width: 100%;
    font-size: 16px;
    border-radius: 5px;
    appearance: none;
  }

  &::after {
    content: "\25BC";
    font-size: 16px;
    color: #555;
    position: absolute;
    top: 50%;
    left: 10px;
    transform: translateY(-50%);
  }

  select option {
    padding: 10px;
  }
}

</style>


<script>
import ProductComp from "@/components/ProductComp.vue";

export default {
  name: "ProductsView",
  components: {ProductComp},
  data() {
    return {
      visibleProductCount: 6,
      selectedCategory: '',
      sortItems: 'def',
      selectedCategorySidebar: false
    };
  },
  mounted() {
    window.addEventListener('resize', this.handleResize);
    this.handleResize();
  },
  destroyed() {
    window.removeEventListener('resize', this.handleResize);
  },
  computed: {
    filteredProducts() {
      let filtered = this.products;
      if (this.sortItems === 'asc') {
        filtered = filtered.sort((a, b) => a.price - b.price);
      } else if (this.sortItems === 'desc') {
        filtered = filtered.sort((a, b) => b.price - a.price);
      } else if (this.sortItems === 'pop') {
        filtered = filtered.sort((a, b) => b.rating.rate - a.rating.rate);
      } else if (this.sortItems === 'def') {
        filtered = this.products
      }
      if (this.selectedCategory !== '') {
        filtered = filtered.filter(product => product.category === this.selectedCategory);
      }
      return filtered.slice(0, this.visibleProductCount);
    },
    filteredProductsCount() {
      let filteredCount = this.products.length;
      if (this.selectedCategory !== '') {
        filteredCount = this.products.filter(product => product.category === this.selectedCategory).length;
      }
      return filteredCount;
    },
    products() {
      return this.$store.state.products;
    },
    showMoreButton() {
      return this.visibleProductCount < this.filteredProductsCount;
    },
    uniqueCategories() {
      return this.$store.state.uniqueCategories
    },
  },
  methods: {
    showMore() {
      this.visibleProductCount += 4;
    },
    handleResize() {
      this.selectedCategorySidebar = window.innerWidth > 959;
    },
  },
};
</script>