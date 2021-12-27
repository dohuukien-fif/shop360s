import { createSlice } from '@reduxjs/toolkit';
const TotalSlice = createSlice({
  name: 'totalCart',
  initialState: {
    TotalItem: JSON.parse(localStorage.getItem('totalcattss')) || [],
  },

  reducers: {
    //  showMiniCart(state) {
    //    state.showMiniCart = true;
    //  },
    //  hideMiniCart(state) {
    //    state.showMiniCart = false;
    //  },
    addTotal(state, action) {
      const newCart = action.payload;
      state.TotalItem.push(newCart);
      // state.TotalItem.push(newCart.size);
      localStorage.setItem('totalcattss', JSON.stringify(state.TotalItem));
    },

    // addCheckout(state, action) {
    //   const newCart = action.payload;
    //   state.checout.push(newCart);
    //   // state.TotalItem.push(newCart.size);
    //   localStorage.setItem('checkout', JSON.stringify(state.TotalItem));
    // },
    // //  setQuantity(state, action) {
    //    const { id, quantity, size } = action.payload;
    //    const index = state.TotalItem.findIndex((item) => item.id === id);
    //    if (index >= 0) {
    //      state.TotalItem[index].quantity = quantity;

    //      localStorage.setItem('car', JSON.stringify(state.TotalItem));
    //    }
    //  },
    removeTotalCart(state, action) {
      //get {id}
      const idneedRemove = action.payload;
      state.TotalItem = state.TotalItem.filter((item) => item.id !== idneedRemove);
      localStorage.removeItem('totalcatt');
      // localStorage.setItem('shoping', JSON.stringify(state.TotalItem));
    },
  },
});
const { actions, reducer } = TotalSlice;
export const { addTotal, removeTotalCart } = actions;
export default reducer;
