import { createSlice, createSelector } from '@reduxjs/toolkit';
const CartSlice = createSlice({
  name: 'carts',
  initialState: {
    showMiniCart: false,
    cartItem: JSON.parse(localStorage.getItem('newItem')) || [],
  },
  reducers: {
    showMiniCart(state) {
      state.showMiniCart = true;
    },
    hideMiniCart(state) {
      state.showMiniCart = false;
    },
    addTocart(state, action) {
      const newCart = action.payload;
      const index = state.cartItem.findIndex((item) => item.id === newCart.id);
      if (index >= 0) {
        const newCart = action.payload;
        state.cartItem[index].quantity += newCart.quantity;

        state.cartItem[index].size = newCart.size;
        localStorage.setItem('newItem', JSON.stringify(state.cartItem));
      } else {
        state.cartItem.push(newCart);
        // state.cartItem.push(newCart.size);
        localStorage.setItem('newItem', JSON.stringify(state.cartItem));
      }
    },
    setQuantity(state, action) {
      const { id, quantity, size } = action.payload;
      const index = state.cartItem.findIndex((item) => item.id === id);
      if (index >= 0) {
        state.cartItem[index].quantity = quantity;

        localStorage.setItem('newItem', JSON.stringify(state.cartItem));
      }
    },
    // setSize(state, action) {
    //   const { id, quantity, size } = action.payload;
    //   const index = state.cartItem.findIndex((item) => item.id === id);
    //   if (index >= 0) {
    //     state.cartItem[index].quantity = quantity;

    //     localStorage.setItem('newItem', JSON.stringify(state.cartItem));
    //   }
    // },
    removeFromCart(state, action) {
      //get {id}
      const idneedRemove = action.payload;
      state.cartItem = state.cartItem.filter((item) => item.id !== idneedRemove);
      localStorage.setItem('newItem', JSON.stringify(state.cartItem));
    },
    removeCart(state, action) {
      //get {id}
      // const idneedRemove = action.payload;
      state.cartItem = [];
      localStorage.removeItem('newItem');
      // localStorage.setItem('car', JSON.stringify(state.cartItem));
    },
  },
});
const { actions, reducer } = CartSlice;
export const { showMiniCart, hideMiniCart, addTocart, setQuantity, removeFromCart, removeCart } =
  actions;
export default reducer;
