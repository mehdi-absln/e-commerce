import Vue from 'vue';
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        products: [],
        product: null,
        uniqueIds: [],
        productCategoriesTitle: [],
        cart: [],
    },
    getters: {
        getCategory: (state) => (category) => {
            return state.products.filter(product => product.category === category)
        },
        specialProduct(state) {
            return state.products.filter(product => product.special )
        },
    },
    mutations: {
        setProducts(state, products) {
            state.products = products;
        },
        setProduct(state, product) {
            state.product = product;
        },
        uniqueCategory: (state) => {
            state.productCategoriesTitle = state.products.filter(element => {
                const isDuplicate = state.uniqueIds.includes(element.category);
                if (!isDuplicate) {
                    state.uniqueIds.push(element.category);
                    return true;
                }
                return false;
            })
        }
    },
    actions: {
        async getProducts({commit}) {
            const data = await fetch('http://localhost:3000/products');
            let products = await data.json();
            commit('setProducts', products);
        },
        async getProduct({commit}, id) {
            const data = await fetch(`http://localhost:3000/products/${id}`);
            let product = await data.json();
            commit("setProduct", product);
        },
    },
    modules: {}
})
