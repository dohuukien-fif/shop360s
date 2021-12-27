import React from 'react';

import { useSelector } from 'react-redux';
import { remoCheckout } from './../../../features/cart/cartSelector';

import { MdOutlinePlace } from 'react-icons/md';
import './productOrder.scss';
import { formatPrice } from './../../../utils/index';
ProductOrder.propTypes = {};

function ProductOrder(props) {
  const cartCheckouts = useSelector(remoCheckout);
  console.log(cartCheckouts);

  // const handleDeleteCheckout = (id) => {
  //   const action = canleCheckout(id);
  //   dispatch(action);
  // console.log(id);
  // };
  //   const actions = RemoCheckout(cartCheckouts);
  //   dispatch(actions);
  // };
  // const pass = cartCheckouts.forEach.cartTotals.map((item) => item);
  // console.log(pass);
  console.log(cartCheckouts);
  return (
    <div className="order">
      <div className="order_title-Cacel">
        <h2>Đơn hàng đã hủy</h2>
      </div>
      {cartCheckouts.length === 0 ? (
        <h3>không có đơn hàng hủy nào</h3>
      ) : (
        <>
          <div className="order_list">
            {cartCheckouts.map((items, index) => (
              <>
                {items?.map((itemsss, index) => (
                  <div className="order_item ">
                    <div className="order_address">
                      {/* <h1>{items.infor.value.address}</h1> */}
                      <div className="order_title">
                        <MdOutlinePlace style={{ fontSize: '20px' }} /> Địa chỉ nhận hàng
                      </div>
                      <div className="order_adressName">
                        <span>{itemsss?.infor?.value?.fullName}</span>
                      </div>
                      <div className="order_adressPhone">
                        <span>{itemsss.infor.value.phone}</span>
                      </div>
                      <div className="order_adresss">
                        <span>{itemsss.infor.value.address}</span>
                      </div>
                    </div>
                    <div className="order_product">
                      {itemsss.cartTotalss.map((itemss, index) => (
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
                                      <span>
                                        {formatPrice(itenss.product.price * itenss.quantity)}
                                      </span>
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
                    {/* <button onClick={() => handleDeleteCheckout(itemsss.id)}>
                  {' '}
                  <span>xóa</span>
                </button> */}
                  </div>
                ))}
              </>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default ProductOrder;
