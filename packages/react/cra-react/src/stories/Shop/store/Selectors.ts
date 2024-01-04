import { createSelector } from "reselect";

const getState = (state: any) => state;

//  General getters
export const getFavourites = createSelector(
  getState,
  (state) => state.favourites
);
export const checkFavourites = (product: any) =>
  createSelector(getState, (state) => state.favourites.includes(product));
export const getCart = createSelector(getState, (state) => state.cart);
export const getCartCount = createSelector(
  getState,
  (state) => state.cart.length
);
