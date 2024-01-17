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
        totalPrice(state) {
            return state.cart.reduce((count, curItem) => {
                return count + (curItem.quantity * curItem.price);
            }, 0);
        }
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
            console.log(state.cart)
        },
        incrementCartItemQuantity (state, id) {
            const cartItemIndex =   state.cart.findIndex(item => item.id === id);
            if(state.cart[cartItemIndex].quantity === 10) return 0;
            state.cart[cartItemIndex].quantity++;
        },
        decrementCartItemQuantity (state, id) {
            const cartItemIndex =   state.cart.findIndex(item => item.id === id);
            if(state.cart[cartItemIndex].quantity === 1) return  0;
            state.cart[cartItemIndex].quantity--;
        },
        removeCartProductItem(state,id){
          state.cart = state.cart.filter(product=> product.id !== id);
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
    },
    modules: {}
})
