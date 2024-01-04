import { Store } from "pullstate";

const CartStore: any = new Store({
  cart: [],
});

export default CartStore;

export const addToCart = (product: never) => {
  const currentCart = CartStore.getRawState().cart;
  const added = !currentCart.includes(product);

  CartStore.update((s: any) => {
    if (currentCart.includes(product)) {
      s.cart = currentCart.filter((current: any) => current !== product);
    } else {
      s.cart = [...s.cart, product];
    }
  });

  return added;
};
