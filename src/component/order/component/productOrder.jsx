import React, { useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { cartCheckout } from './../../../features/cart/cartSelector';
import { removeCheckout, addRemoCheckout } from './../../../features/cart/cartSlice/checkout';
import { MdOutlinePlace } from 'react-icons/md';
import './productOrder.scss';
import { formatPrice } from './../../../utils/index';
import Loadings from './../../loading/index';
ProductOrder.propTypes = {};

function ProductOrder(props) {
  const cartCheckouts = useSelector(cartCheckout);
  const dispatch = useDispatch();
  const [Loading, setLoading] = useState(false);
  const handleDeleteCheckout = (id) => {
    setLoading(true);
    return new Promise((resolve) => {
      setTimeout(() => {
        const action = removeCheckout(id);
        dispatch(action);
        const actions = addRemoCheckout(cartCheckouts);
        dispatch(actions);
        resolve(true);
        setLoading(false);
      }, 3000);
    });
  };
  // const pass = cartCheckouts.forEach.cartTotals.map((item) => item);
  // console.log(pass);
  // const lastAddCheckOut = cartCheckouts.map((items) => items.cartTotals);
  return (
    <div className="order">
      {cartCheckouts.length === 0 ? (
        <h3>vui lòng mua hàng</h3>
      ) : (
        <>
          <div className="order_list">
            {cartCheckouts.map((items, index) => (
              <div className="order_item" key={items.id}>
                <div className="order_address">
                  {/* <h1>{items.infor.value.address}</h1> */}
                  <div className="order_title">
                    <MdOutlinePlace style={{ fontSize: '20px' }} /> Địa chỉ nhận hàng
                  </div>
                  <div className="order_adressName">
                    <span>{items.infor.value.fullName}</span>
                  </div>
                  <div className="order_adressPhone">
                    <span>{items.infor.value.phone}</span>
                  </div>
                  <div className="order_adresss">
                    <span>{items.infor.value.address}</span>
                  </div>
                </div>
                <div className="order_product">
                  {items.cartTotalss.map((itemss, index) => (
                    <>
                      {itemss.sexx.map((itenss, index) => (
                        <>
                          <div className="order_flex">
                            <div className="order_image">
                              <img src={itenss.product.Araray[0]} />
                            </div>
                            <div className="order_content">
                              <div className="order_productName">
                                <span>{itenss.product.name}</span>
                              </div>
                              <div className="order_productPrice">
                                <div className="order_productQuantity">
                                  <span>{`${formatPrice(itenss.product.price)} x ${
                                    itenss.quantity
                                  }`}</span>
                                </div>
                                <div className="order_producPrices">
                                  <span>{formatPrice(itenss.product.price * itenss.quantity)}</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </>
                      ))}
                      <div style={{ paddingTop: '1rem' }} className="order_total">
                        <span>Tổng tiền</span>
                        <span>
                          {formatPrice(
                            itemss.sexx.reduce(
                              (total, item) => total + item.product.price * item.quantity,
                              0
                            )
                          )}
                        </span>
                      </div>
                      <div className="order_discountl">
                        <span>Giảm giá</span>
                        <span>{`- ${itemss.discount || 0} %`}</span>
                      </div>
                      <div className="order_totalMoney">
                        <span>Thành tiền</span>
                        <span style={{ color: 'red', fontSize: '19px', fontWeight: '600' }}>
                          {formatPrice(itemss.total)}
                        </span>
                      </div>
                    </>
                  ))}
                </div>

                <button onClick={() => handleDeleteCheckout(items.id)}>
                  {' '}
                  <span>xóa</span>
                </button>
              </div>
            ))}
          </div>
        </>
      )}

      {Loading && (
        <div className="loading_order">
          <div className="lds-ellipsis">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductOrder;
