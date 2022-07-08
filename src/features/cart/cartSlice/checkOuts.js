import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import OrderApi from './../../../api/OrderApi';

export const AddOrder = createAsyncThunk('totalSales/Sales', async (payload) => {
  //call api resgister
  console.log(['payload'], payload);
  const data = await OrderApi.add(payload);
  //save data local
  console.log(['data'], data);
  return data;
});

const couterSlice = createSlice({
  name: 'order',
  initialState: {
    current: [],

    loading: false,
  },
  reducers: {
    logout(state) {
      //clear local

      state.current = {};
    },
  },
  extraReducers: {
    [AddOrder.pending]: (state, action) => {
      state.loading = true;
    },
    [AddOrder.fulfilled]: (state, action) => {
      state.loading = false;
      state.current = action.payload;
    },
    [AddOrder.rejected]: (state, action) => {
      state.loading = true;
    },
  },
});
const { reducer, actions } = couterSlice;
export const { logout } = actions;
export default reducer;
