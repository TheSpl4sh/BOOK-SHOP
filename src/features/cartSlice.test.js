import "@testing-library/jest-dom/extend-expect"
import { configureStore } from '@reduxjs/toolkit';
import { cartReducer, handleDelete, handleClick, handleCheckout } from "./cartSlice";



describe ("Cart test", () => {
    let store

    beforeEach(() => {
        store = configureStore({
          reducer: cartReducer
        })
      })

    it('Adding object', () => {
        store.dispatch(handleClick(
        {
        id: 1,
        name: "Final Offer",
        price: 50,
        image_link: "./img/image-1.jpg",
        color: 'green'
        }));
        expect(store.getState()).toStrictEqual({"cart": [{id:1, count:1, name:"Final Offer", price: 50, image_link: "./img/image-1.jpg", color: 'green', price: 50}] })
    })

    it('delete object', () => {
      store.dispatch(handleClick(
        {
        id: 1,
        name: "Final Offer",
        price: 50,
        image_link: "./img/image-1.jpg",
        color: 'green'
        }));
      store.dispatch(handleDelete(1))
      expect(store.getState()).toStrictEqual({"cart": [] })
    })

    it('Clear cart in state and local storage', () => {
      const prevState = {
        cart: [
          { id: 1, name: 'Product 1', count: 2 },
          { id: 2, name: 'Product 2', count: 1 },
        ],
      };
  
      const nextState = cartReducer(prevState, handleCheckout());
  
      expect(nextState.cart).toEqual([]);
  
      expect(localStorage.getItem('cart')).toBeNull();
    });
})