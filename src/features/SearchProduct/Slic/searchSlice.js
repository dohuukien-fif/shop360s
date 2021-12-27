import { createSlice, createSelector, createAsyncThunk } from '@reduxjs/toolkit';
import SearchApi from './../../../api/Searchapi';
export const Searchss = createAsyncThunk('users/register', async (payload) => {
  //call api resgister
  const data = await SearchApi.getAll();

  const searchData = data.filter((items) =>
    items.SearchTerm.toLowerCase().includes(payload.toLowerCase())
  );
  //save data local
  // localStorage.setItem(StorageKey.TOKEN, data.jwt);
  // localStorage.setItem(StorageKey.USER, JSON.stringify(data.user));

  return searchData;
});
const InforlSlice = createSlice({
  name: 'search',
  initialState: {
    filterPrice: {
      price: '',
      Search: '',
    },
    searchData: [],
    loading: false,
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

    // addSearch(state, action) {
    //   const newData = action.payload;
    //   state.searchData = newData;
    //   // localStorage.setItem('searchdataaa', JSON.stringify(state.searchData));
    //   // state.searchData = pagination;
    //   // state.searchData.push(pagination);
    //   // state.TotalItem.push(newCart.size);
    // },
    addFilterPrice(state, action) {
      const newData = action.payload;
      state.filterPrice.price = newData;
      // localStorage.setItem('search', JSON.stringify(state.searchData));
      // state.searchData = pagination;
      // state.searchData.push(pagination);
      // state.TotalItem.push(newCart.size);
    },
    addSearchs(state, action) {
      const newData = action.payload;
      state.filterPrice.Search = newData;
      // localStorage.setItem('search', JSON.stringify(state.searchData));
      // state.searchData = pagination;
      // state.searchData.push(pagination);
      // state.TotalItem.push(newCart.size);
    },
    // addSearchItem(state, action) {
    //   const SeatchsItem = action.payload;
    //   state.searchData = state.searchData.filter((item) =>
    //     item.categoryName.toLowerCase().includes(SeatchsItem.toLowerCase())
    //   );
    //   // state.TotalItem.push(newCart.size);
    // },
    // addRemoCheckout(state, action) {
    //   const { data } = action.payload;
    //   state.removecheckout.push(newCart);
    //   // state.TotalItem.push(newCart.size);
    //   localStorage.setItem('remocheckssss', JSON.stringify(state.removecheckout));
    // },
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
    removeCheckout(state, action) {
      //get {id}
      const idneedRemove = action.payload;
      state.checkout = state.checkout.filter((item) => item.id !== idneedRemove);
      localStorage.setItem('pass', JSON.stringify(state.checkout));
      localStorage.setItem('remochecks', JSON.stringify(state.removecheckout));
    },
  },
  extraReducers: {
    [Searchss.pending]: (state, action) => {
      state.loading = true;
    },
    [Searchss.fulfilled]: (state, action) => {
      state.loading = false;
      state.searchData = action.payload;
    },
    [Searchss.rejected]: (state, action) => {
      state.loading = true;
    },
    // [Searchss.fulfilled]: (state, action) => {
    //   state.current = action.payload;
    // },
  },
});
const { actions, reducer } = InforlSlice;
export const {
  addSearchItem,
  addSearchs,
  addRemoCheckout,
  addSearch,
  canleCheckout,
  addFilterPrice,
} = actions;
export default reducer;
