import { createSelector } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';
export const cartItemSelector = (state) => state.carts.cartItem;
export const cartTotalSelector = (state) => state.total.TotalItem;
export const cartInformationSelector = (state) => state.infor;
export const cartCheckout = (state) => state.Check.checkout;
export const remoCheckout = (state) => state.Check.removecheckout;
//count Number of product
// export const Checout = createSelector(cartCheckout, (checkout) =>
//   checkout.reduce((count, item) => count + item, 0)
// );
export const cartItemCount = createSelector(cartItemSelector, (cartItem) =>
  cartItem.reduce((count, item) => count + item.quantity, 0)
);
export const cartItemTotal = createSelector(cartItemSelector, (cartItem) =>
  cartItem.reduce((total, item) => total + item.product.price * item.quantity, 0)
);
