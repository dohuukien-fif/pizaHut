import { createSlice } from '@reduxjs/toolkit';

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

export const { setOrder, setAddress, addCheckOut, setAddressOld, setStore } = cartSlice.actions;
export default cartSlice.reducer;
