import { createSelector } from '@reduxjs/toolkit';
import { cartFeaturesProps } from './page/interface';

export const cartItemSelector = (state: cartFeaturesProps) => state.cart.products;
export const cartAddress = (state: cartFeaturesProps) => state.cart.address;
export const cartOrder = (state: cartFeaturesProps) => state.cart.order;
//count Number of product
// export const Checout = createSelector(cartCheckout, (checkout) =>
//   checkout.reduce((count, item) => count + item, 0)
// );
export const cartItemCount = createSelector(cartItemSelector, (cartItem) =>
  cartItem.reduce((count: number, item: cartFeaturesProps) => count + item.quantity, 0)
);
export const cartItemTotal = createSelector(cartItemSelector, (cartItem) =>
  cartItem.reduce(
    (total: number, item: cartFeaturesProps) => total + item.product.price * item.quantity,
    0
  )
);
export const Cartitem = createSelector(cartItemSelector, (cartItem) =>
  cartItem.reduce(
    (total: number, item: any) =>
      total +
      (item.product?.price + item.product.size.price + item.product.more.price) * item.quantity,
    0
  )
);
