import { createSelector } from '@reduxjs/toolkit';
import { CheckOutFeaturesProps } from '../checkOut/page/CheckOut';
import { cartFeaturesProps } from './page/interface';

export const dataUser = (state) => state.user.current;

//count Number of product
// export const Checout = createSelector(cartCheckout, (checkout) =>
//   checkout.reduce((count, item) => count + item, 0)
// );
