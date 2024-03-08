import { createSlice } from "@reduxjs/toolkit";

const initialCart = JSON.parse(localStorage.getItem('cart')) || [];

const initialState = {
    cart: initialCart
}


const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        handleClick: (state, action) => {
            const item = action.payload;
            const arr = state.cart
            const findEl = arr.find((product) => item.id === product.id);
            if (findEl) {
                findEl.count += 1;
            } else {
                arr.push({ ...item, count: 1 });
            }
        },
        handleDelete: (state, action) => {
            const itemId = action.payload;
            const arr = state.cart
      
            arr.forEach((item) => {
              if (item.id === itemId) {
                item.count = Math.max(item.count - 1, 0);
              }
            });
             state.cart = arr.filter((item) => item.count !== 0)
        },
        handleCheckout: (state) => {
            localStorage.removeItem('cart');

            state.cart = [];
        }
    }
})

export const { handleClick, handleDelete, handleCheckout } = cartSlice.actions
export const cartReducer = cartSlice.reducer