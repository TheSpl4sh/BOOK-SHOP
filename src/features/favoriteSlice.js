import { createSlice } from "@reduxjs/toolkit";

const initialFavorites = JSON.parse(localStorage.getItem('favorites')) || [];

const initialState = {
    favorites: initialFavorites
}

const favoriteSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        toggleFavorite: (state, action) => {
            const item = action.payload
            const arr = state.favorites
            const isAlreadyFavorite = arr.some((el) => el.id === item.id) 

            if (isAlreadyFavorite) {
                state.favorites = arr.filter((el) => el.id !== item.id);
              } else {
                state.favorites.push({ ...item });
              }
        }
    }
})

export const {toggleFavorite} = favoriteSlice.actions
export const favoritesReducer = favoriteSlice.reducer