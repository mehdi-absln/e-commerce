import Vue from 'vue';
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        products: [],
        product: null,
        uniqueCategories: [],
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
        totalPrice(state) {
            return state.cart.reduce((count, curItem) => {
                return count + (curItem.quantity * curItem.price);
            }, 0);
        },
    },
    mutations: {
        setProducts(state, products) {
            state.products = products;
        },
        setProduct(state, product) {
            state.product = product;
        },
        setCart(state,cart){
            const cartItemIndex = state.cart.findIndex(item => item.id === cart.id);

            if(cartItemIndex < 0) {
                state.cart.push({...cart, quantity: 1});
            } else {
                if(state.cart[cartItemIndex].quantity === 10) return  0;
                state.cart[cartItemIndex].quantity++;
            }
            localStorage.setItem('cart', JSON.stringify(state.cart));
        },
        incrementCartItemQuantity (state, id) {
            const cartItemIndex =   state.cart.findIndex(item => item.id === id);
            if(state.cart[cartItemIndex].quantity === 10) return 0;
            state.cart[cartItemIndex].quantity++;
            localStorage.setItem('cart', JSON.stringify(state.cart));
        },
        decrementCartItemQuantity (state, id) {
            const cartItemIndex =   state.cart.findIndex(item => item.id === id);
            if(state.cart[cartItemIndex].quantity === 1) return  0;
            state.cart[cartItemIndex].quantity--;
            localStorage.setItem('cart', JSON.stringify(state.cart));
        },
        removeCartProductItem(state,id){
            state.cart = state.cart.filter(product=> product.id !== id);
            localStorage.setItem('cart', JSON.stringify(state.cart));
        },
        initializeCart(state) {
            const savedCart = localStorage.getItem('cart');
            state.cart = JSON.parse(savedCart);
        },
        uniqueCategory: (state) => {
          state.products.filter(element => {
                const isDuplicate = state.uniqueCategories.includes(element.category);
                if (!isDuplicate) {
                    state.uniqueCategories.push(element.category);
                    return true;
                }
                return false;
            })
        },
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
        initializeCart({ commit }) {
            commit('initializeCart');
        }
    },
    modules: {}
})
