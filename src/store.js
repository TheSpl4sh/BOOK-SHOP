import { configureStore } from "@reduxjs/toolkit";
import productReducer from './features/productSlice'
import { cartReducer } from "./features/cartSlice";
import { favoritesReducer } from "./features/favoriteSlice";


export const store = configureStore({
    reducer: {
        products: productReducer,
        cart: cartReducer,
        favorites: favoritesReducer
    }
})