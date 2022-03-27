import { createSlice } from '@reduxjs/toolkit';
const InforlSlice = createSlice({
  name: 'totalCart',
  initialState: {
    modal: 'theme-mode-light',
  },

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

    addModal(state, action) {
      const newCart = action.payload;
      state.modal = newCart;
      // state.TotalItem.push(newCart.size);
      // localStorage.setItem('passss', JSON.stringify(state.checkout));
    },
    //  addRemoCheckout(state, action) {
    //    const newCart = action.payload;
    //    state.removecheckout.push(newCart);
    //    // state.TotalItem.push(newCart.size);
    //    localStorage.setItem('remocheckssss', JSON.stringify(state.removecheckout));
    //  },
    // canleCheckout(state, action) {
    //get {id}
    //   const idneedRemove = action.payload;
    //   state.removecheckout = state.removecheckout.forEach((element) =>
    //     element.filter((item) => item.id !== idneedRemove)
    //   );
    //   localStorage.setItem('remochecks', JSON.stringify(state.removecheckout));
    // },
    // //  setQuantity(state, action) {
    //    const { id, quantity, size } = action.payload;
    //    const index = state.TotalItem.findIndex((item) => item.id === id);
    //    if (index >= 0) {
    //      state.TotalItem[index].quantity = quantity;

    //      localStorage.setItem('car', JSON.stringify(state.TotalItem));
    //    }
    //  },
    //  removeCheckout(state, action) {
    //    //get {id}
    //    const idneedRemove = action.payload;
    //    state.checkout = state.checkout.filter((item) => item.id !== idneedRemove);
    //    localStorage.setItem('passss', JSON.stringify(state.checkout));
    //    localStorage.setItem('remocheckssss', JSON.stringify(state.removecheckout));
    //  },
  },
});
const { actions, reducer } = InforlSlice;
export const { removeCheckout, addRemoCheckout, addCheckout, canleCheckout, addModal } = actions;
export default reducer;
