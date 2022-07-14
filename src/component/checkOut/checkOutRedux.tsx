import { createSlice } from '@reduxjs/toolkit';
import { Navigate, useNavigate } from 'react-router-dom';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    products: localStorage.getItem('DATAOUT')
      ? JSON.parse(localStorage.getItem('DATAOUT') || '')
      : [],

    note: '',
    code: undefined,
    order: '' || 'Đặt giao hàng',
    store: '' || {},
    address: '',
    addressOld: localStorage.getItem('GOGO')
      ? JSON.parse(localStorage.getItem('GOGO') || '')
      : undefined,
    checked: false,
    updateCart: [],
  },

  reducers: {
    addCheckOut: (state: any, action) => {
      const newCart = action.payload;
      // const index = state.products.findIndex((x: any) => x.id === newCart.id);
      // if (index >= 0) {
      //   const newCart = action.payload;
      //   state.products[index].quantity += newCart.quantity;
      // } else {
      state.products.push(newCart);

      localStorage.setItem('DATAOUT', JSON.stringify(state.products));

      state.code = newCart.code;
    },

    setOrder: (state: any, action) => {
      const newCart = action.payload;

      state.order = newCart;
    },
    deleteCode: (state: any, action) => {
      const newCart = action.payload;
      const index = state.products.findIndex((x: any) => x.code === newCart);

      if (index >= 0) {
        state.products = state.products.filter((item: any) => item.code !== newCart);
        localStorage.setItem('DATAOUT', JSON.stringify(state.products));
      }
    },
    setAddress: (state: any, action) => {
      const newCart = action.payload;
      state.address = newCart;
      state.checked = true;
    },
    setStore: (state: any, action) => {
      const newCart = action.payload;
      state.store = newCart;
    },
    setAddressOld: (state: any, action) => {
      const newCart = action.payload;
      state.addressOld = newCart;
      localStorage.setItem('GOGO', JSON.stringify(state.addressOld));
    },
  },
});

export const { deleteCode, setAddress, addCheckOut, setAddressOld, setStore, setOrder } =
  cartSlice.actions;
export default cartSlice.reducer;
