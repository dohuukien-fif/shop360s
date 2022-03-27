import { createSlice } from '@reduxjs/toolkit';
const InforlSlice = createSlice({
  name: 'totalCart',
  initialState: {},

  reducers: {
    //  showMiniCart(state) {
    //    state.showMiniCart = true;
    //  },
    //  hideMiniCart(state) {
    //    state.showMiniCart = false;
    //  },
    //  addTotal(state, action) {
    //    const newCart = action.payload;
    //    state.TotalItem.push(newCart);
    //    // state.TotalItem.push(newCart.size);
    //    localStorage.setItem('sexx', JSON.stringify(state.TotalItem));
    //  },
    addInformation(state, action) {
      const newCarts = action.payload;
      return { ...state, ...newCarts };
      // state.information.push(newCart.size);
    },
    //  addCheckout(state, action) {
    //    const newCart = action.payload;
    //    state.checout.push(newCart);
    //    // state.TotalItem.push(newCart.size);
    //    localStorage.setItem('checkout', JSON.stringify(state.TotalItem));
    //  },
    // //  setQuantity(state, action) {
    //    const { id, quantity, size } = action.payload;
    //    const index = state.TotalItem.findIndex((item) => item.id === id);
    //    if (index >= 0) {
    //      state.TotalItem[index].quantity = quantity;

    //      localStorage.setItem('car', JSON.stringify(state.TotalItem));
    //    }
    //  },
    //   removeinformation(state, action) {
    //     //get {id}
    //     const idneedRemove = action.payload;
    //     state.TotalItem = state.TotalItem.filter((item) => item.id !== idneedRemove);
    //     localStorage.removeItem("total")
    //     // localStorage.setItem('total', JSON.stringify(state.TotalItem));
    //   },
    // },
  },
});
const { actions, reducer } = InforlSlice;
export const { removeFromCart, addInformation } = actions;
export default reducer;
