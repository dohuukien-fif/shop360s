import { configureStore } from '@reduxjs/toolkit';
// import counterSlice from '../features/couter/component/couterSclice';
// import userSlice from '../features/Auth/userSlice/userSlice';
import CartSlice from './../features/cart/cartSlice';
import ChecklSlice from './../features/cart/cartSlice/checkout';
import InforlSlice from './../features/cart/cartSlice/Information';
import TotalSlice from './../features/cart/cartSlice/totalslice';
import SearchSlice from './../features/SearchProduct/Slic/searchSlice';
import ThemeAdmin from './theme';
import SalesSlice from './../admin/page/sliceReducer/index';
const rootReducer = {
  // counter: counterSlice,
  // user: userSlice,
  search: SearchSlice,
  carts: CartSlice,
  total: TotalSlice,
  infor: InforlSlice,
  Check: ChecklSlice,
  theme: ThemeAdmin,
  sales: SalesSlice,
};
const store = configureStore({
  reducer: rootReducer,
});
export default store;
