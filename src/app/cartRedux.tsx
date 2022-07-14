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
      const index = state.products.findIndex((x: any) => x.orderId === newCart.id);
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
    updateProduct: (state: any, action) => {
      const updateCart = action.payload;

      console.log('cartreduccer');
      state.products.push(...updateCart);
      localStorage.setItem('DATACART', JSON.stringify(state.products));
    },
    removeCart: (state: any) => {
      state.products = [];
      localStorage.removeItem('DATACART');
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

export const {
  addProduct,
  updateProduct,
  removeCart,
  setquantity,
  setOrder,
  setAddress,
  removeProduct,
} = cartSlice.actions;
export default cartSlice.reducer;
