import { createSlice } from '@reduxjs/toolkit';

const couterSlice = createSlice({
  name: 'sales',
  initialState: {
    dataSales: JSON.parse(localStorage.getItem('TITOAL__SLAES')) || [],

    loading: false,
  },

  reducers: {
    addSales(state, action) {
      const newData = action.payload;
      const salesId = state.dataSales.findIndex((items) => items.OrderId === newData.OrderId);

      if (salesId >= 0) {
        state.dataSales[salesId].order = state.dataSales[salesId].order + 1;
        state.dataSales[salesId].spending = state.dataSales[salesId].spending + newData.spending;
        localStorage.setItem('TITOAL__SLAES', JSON.stringify(state.dataSales));
      } else {
        state.dataSales.push(newData);
        localStorage.setItem('TITOAL__SLAES', JSON.stringify(state.dataSales));
      }
    },
    logout(state) {
      //clear local

      state.current = {};
    },
  },
});
const { reducer, actions } = couterSlice;
export const { logout, addSales } = actions;
export default reducer;
