import { createSelector } from '@reduxjs/toolkit';
import { CheckOutFeaturesProps } from '../checkOut/page/CheckOut';
import { cartFeaturesProps } from './page/interface';

export const cartItemSelector = (state: cartFeaturesProps) => state.cart.products;
export const quantity = (state: cartFeaturesProps) => state.cart.quantity;
export const cartAddress = (state: any) => state.checkout.address;
export const cartAddressOld = (state: any) => state.checkout.addressOld;
export const cartOrder = (state: any) => state.checkout.order;
export const cartchecked = (state: any) => state.checkout.checked;
export const cartStore = (state: any) => state.checkout.store;
export const cartcode = (state: any) => state.checkout.code;
export const checkProducts = (state: any) => state.checkout.products;
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
