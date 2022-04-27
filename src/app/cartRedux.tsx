import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    products: localStorage.getItem('DATACART')
      ? JSON.parse(localStorage.getItem('DATACART') || '')
      : [],
    quantity: 1,
    total: 0,
    note: '',
    order: '' || 'Đặt giao hàng',
    address: '',
  },
  reducers: {
    addProduct: (state: any, action) => {
      const newCart = action.payload;
      const index = state.products.findIndex((x: any) => x.id === newCart.id);
      if (index >= 0) {
        const newCart = action.payload;
        state.products[index].quantity += newCart.quantity;
      } else {
        state.products.push(newCart);
        state.note = newCart.note;
        state.quantity = newCart.quantity;
        localStorage.setItem('DATACART', JSON.stringify(state.products));
      }
    },
    removeProduct: (state: any, action) => {
      const IdnewCart = action.payload;

      state.products = state.products.filter((item: any) => item.id !== IdnewCart);
      localStorage.setItem('DATACART', JSON.stringify(state.products));
    },
    setquantity: (state: any, action) => {
      const newCart = action.payload;
      const index = state.products.findIndex((x: any) => x.id === newCart.id);
      if (index >= 0) {
        state.products[index].quantity = newCart.quantity;
        state.quantity += newCart.quantity;
      }
    },
    setOrder: (state: any, action) => {
      const newCart = action.payload;

      state.order = newCart;
    },
    setAddress: (state: any, action) => {
      const newCart = action.payload;
      state.address = newCart;
    },
  },
});

export const { addProduct, setquantity, setOrder, setAddress, removeProduct } = cartSlice.actions;
export default cartSlice.reducer;
