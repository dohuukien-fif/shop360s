import React from 'react';
import { BsCartPlus } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import { cartItemSelector, cartItemTotal } from '../cartSelector';
import { removeFromCart, setQuantity } from '../cartSlice';
import { addTotal } from '../cartSlice/totalslice';
import CartList from '../component/cartLisst';
// import { BsFillTrashFill } from 'react-icons/bs';
import CartTotal from '../component/CartTotal';
import './cartFeature.scss';

CartFeture.propTypes = {};

function CartFeture(props) {
  const cartTotal = useSelector(cartItemTotal);

  const dispatch = useDispatch();

  const history = useHistory();
  const cartItem = useSelector(cartItemSelector);

  //const { id, originalPrice, promotionPercent, shortDescription } = cartItem;
  // console.log(cartItem);
  //dispatch id up reduxSlice remove item
  console.log('cartItemsize', cartItem);
  const handleRemoveItem = (id) => {
    const action = removeFromCart(id);
    dispatch(action);
  };
  //dispatch quantity up reduxSlice update quantity
  const handleQuantity = (newquantity) => {
    console.log(newquantity);
    const action = setQuantity({
      id: newquantity.id,
      quantity: newquantity.quantity,
    });
    dispatch(action);
  };
  console.log(cartItem);

  console.log('carts', cartItem);
  //dispatch checkOut product {total , discount , product}
  const hadleSubmitCheckout = (newvalue) => {
    // const addItem = cartItem[cartItem.length - 1];

    const TotalInformation = {
      sexx: cartItem,
      total: newvalue.Checout,
      discount: newvalue.discount.value,
    };
    const action = addTotal(TotalInformation);
    dispatch(action);

    history.push('/cart/checkout');
    console.log('kien', newvalue);
  };

  return (
    <div className="cart">
      <p>
        {' '}
        <Link to="/"> Trang chủ</Link> / giỏ hàng
      </p>{' '}
      <h2>
        GIỎ HÀNG <BsCartPlus />
      </h2>
      <div className="cart_title">
        <div className="cart_left">
          <span>sản phẩm</span>
        </div>
        <div className="cart_right">
          <span>Số Lượng</span>
          <span>Giá</span>
          <span>Tạm tính</span>
          <span>Xóa</span>
        </div>
      </div>
      {cartItem.length === 0 && <h1>không có sản phẩm nào </h1>}
      {cartItem.length > 0 && (
        <>
          <CartList item={cartItem} remove={handleRemoveItem} setQuantity={handleQuantity} />

          <div className="cart_total">
            <CartTotal cartTotal={cartTotal} onSubmits={hadleSubmitCheckout} />

            {/* <FormInformation cartTotal={cartTotal} onSubmits={hadleSubmit} /> */}
          </div>
        </>
      )}
    </div>
  );
}

export default CartFeture;
