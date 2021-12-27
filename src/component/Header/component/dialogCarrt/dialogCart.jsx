import React from 'react';
import PropTypes from 'prop-types';
import { AiOutlineClose } from 'react-icons/ai';
import { cartItemSelector, cartItemTotal } from './../../../../features/cart/cartSelector';
import { useSelector, useDispatch } from 'react-redux';
import CartLisst from './cartLisst';
import './styles.scss';
import { formatPrice } from './../../../../utils/index';
import { useHistory } from 'react-router-dom';
import { addTotal } from './../../../../features/cart/cartSlice/totalslice';
DialogCarrt.propTypes = {};

function DialogCarrt({ openCart, setopenCart }) {
  const cartItem = useSelector(cartItemSelector);
  console.log(cartItem);
  const history = useHistory();
  const dispatch = useDispatch();
  const cartTotal = useSelector(cartItemTotal);
  const handleClickLinkCart = () => {
    history.push('/Cart');
  };
  const handleClickCheckout = () => {
    const TotalInformation = {
      sexx: cartItem,
      total: cartTotal,
      discount: 0,
    };
    const action = addTotal(TotalInformation);
    dispatch(action);
    history.push('/Cart/checkout');
  };
  return (
    <>
      <div className={openCart ? 'header_cart2 activecart' : 'header_cart2'}>
        <div className={openCart ? 'cart2_container activeCartModal' : 'cart2_container'}>
          <div className="cart2_block">
            <div className="cart2_title">
              <span>GIỎ HÀNG</span>
              <AiOutlineClose
                onClick={() => setopenCart(false)}
                style={{ fontSize: '30px', cursor: 'pointer' }}
              />
            </div>
            <div className="line">
              <CartLisst item={cartItem} />
              <div className="line_total">
                <span>TỔNG TIỀN :</span>
                <span>{formatPrice(cartTotal)}</span>
              </div>
              <div className="lint_btn">
                <button onClick={handleClickLinkCart}>
                  <span>XEM GIỎ HÀNG</span>
                </button>
                <button onClick={handleClickCheckout}>
                  <span>THANH TOÁN</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DialogCarrt;
