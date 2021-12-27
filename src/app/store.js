import { configureStore } from '@reduxjs/toolkit';
// import counterSlice from '../features/couter/component/couterSclice';
// import userSlice from '../features/Auth/userSlice/userSlice';
import CartSlice from './../features/cart/cartSlice';
import TotalSlice from './../features/cart/cartSlice/totalslice';
import InforlSlice from './../features/cart/cartSlice/Information';
import ChecklSlice from './../features/cart/cartSlice/checkout';
import SearchSlice from './../features/SearchProduct/Slic/searchSlice';
const rootReducer = {
  // counter: counterSlice,
  // user: userSlice,
  search: SearchSlice,
  carts: CartSlice,
  total: TotalSlice,
  infor: InforlSlice,
  Check: ChecklSlice,
};
const store = configureStore({
  reducer: rootReducer,
});
export default store;
