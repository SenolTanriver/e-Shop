import { createSlice } from "@reduxjs/toolkit";

const fetchFromLocalStorage = () => {
  let favorites = localStorage.getItem("favorites");
  if (favorites) {
    return JSON.parse(localStorage.getItem("favorites"));
  } else {
    return [];
  }
};

const storeInLocalStorage = (data) => {
  localStorage.setItem("favorites", JSON.stringify(data));
};

const initialState = {
  favorites: fetchFromLocalStorage(),
  favoritesCount: 0,
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addToFavorites: (state, action) => {
      const isItemInFavorites = state.favorites.find(
        (item) => item.id === action.payload.id
      );

      if (!isItemInFavorites) {
        state.favorites.push(action.payload);
        storeInLocalStorage(state.favorites);
      }
    },
    removeFromFavorites: (state, action) => {
      const tempFavorites = state.favorites.filter(
        (item) => item.id !== action.payload
      );
      state.favorites = tempFavorites;
      storeInLocalStorage(state.favorites);
    },
    getFavoritesCount: (state) => {
      state.favoritesCount = state.favorites.length;
    },
  },
});

export const {
  addToFavorites,
  removeFromFavorites,
  getFavoritesCount,
} = favoritesSlice.actions;
export const getAllFavorites = (state) => state.favorites.favorites;
export const getFavoritesItemsCount = (state) => state.favorites.favoritesCount;

export default favoritesSlice.reducer;
