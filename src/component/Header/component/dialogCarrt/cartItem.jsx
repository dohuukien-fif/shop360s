import React from 'react';
import PropTypes from 'prop-types';
import { formatPrice } from './../../../../utils/index';
import { RiCloseLine } from 'react-icons/ri';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, setQuantity } from './../../../../features/cart/cartSlice';
CartItem.propTypes = {
  items: PropTypes.object,
};

function CartItem({ items }) {
  const dispatch = useDispatch();
  const { quantity, size, product, id } = items;
  const { name, Araray, price } = product;
  const handleRemoveItem = (id) => {
    const action = removeFromCart(id);
    dispatch(action);
  };
  return (
    <div className="line_item">
      <div className="line_adside">
        <img src={Araray[0]} alt="" />
      </div>
      <div className="line_body">
        <div className="line_name">
          <span>{name}</span>
        </div>
        <div className="line_quantity-price">
          <div className="line_quantity">
            <span>{quantity}</span>
          </div>
          <div className="line_price">
            <span>{formatPrice(price)}</span>
          </div>
        </div>
      </div>
      <div className="line_delete">
        <button onClick={() => handleRemoveItem(id)}>
          <RiCloseLine />
        </button>
      </div>
    </div>
  );
}

export default CartItem;
