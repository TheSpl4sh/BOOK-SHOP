import { configureStore } from "@reduxjs/toolkit"
import "@testing-library/jest-dom/extend-expect"
import { favoritesReducer, toggleFavorite } from "./favoriteSlice"

describe ("Favorite test", () => {
    let favorites

    beforeEach(() => {
        favorites = configureStore({
            reducer: favoritesReducer
        })
    })

    it('Object turn favorite', () => {
        favorites.dispatch(toggleFavorite(
            {
            id: 1,
            name: "Final Offer",
            price: 50,
            image_link: "./img/image-1.jpg",
            color: 'green'
        }));
        expect(favorites.getState()).toStrictEqual({"favorites": [{id:1, name:"Final Offer", price: 50, image_link: "./img/image-1.jpg", color: 'green', price: 50}] })
        favorites.dispatch(toggleFavorite({id:1, name:"Final Offer", price: 50, image_link: "./img/image-1.jpg", color: 'green', price: 50}))
        expect(favorites.getState()).toStrictEqual({"favorites": [] })
    })
})