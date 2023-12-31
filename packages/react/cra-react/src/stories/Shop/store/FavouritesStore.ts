import { Store } from "pullstate";

const FavouritesStore = new Store({
  favourites: [],
});

export default FavouritesStore;

export const checkIfFavourite = (product: never) => {
  const currentFavourites = FavouritesStore.getRawState().favourites;
  const isFavourite = currentFavourites.includes(product);

  return isFavourite;
};

export const addToFavourites = (product: never, category: any) => {
  const currentFavourites = FavouritesStore.getRawState().favourites;
  const added = !currentFavourites.includes(product);

  FavouritesStore.update((s) => {
    if (!added) {
      s.favourites = currentFavourites.filter((current) => current !== product);
    } else {
      s.favourites = [...s.favourites, product];
    }
  });

  return added;
};
