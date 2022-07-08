import React, { Fragment, useState, useEffect } from 'react';
import { BsCheckCircle } from 'react-icons/bs';
import { MdOutlineLocalShipping, MdOutlinePayment, MdOutlinePlace } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { cartCheckout } from './../../../features/cart/cartSelector';
import { addRemoCheckout, removeCheckout } from './../../../features/cart/cartSlice/checkout';
import { formatPrice } from './../../../utils/index';
import LodingComponent from './../../loading/index';
import './productOrder.scss';
import OrderApi from './../../../api/OrderApi';
ShippingOrder.propTypes = {};

function ShippingOrder(props) {
  const cartCheckouts = useSelector(cartCheckout);

  console.log('cartCheckouts', ...cartCheckouts);
  const dispatch = useDispatch();
  const [Loading, setLoading] = useState(false);
  const [dataOrder, setDataOrder] = useState([]);
  const handleDeleteCheckout = (id) => {
    setLoading(true);
    return new Promise((resolve) => {
      setTimeout(() => {
        //delete   api order
        OrderApi.delete(id);
        //redux   item  checkout
        const action = removeCheckout(id);
        dispatch(action);
        //add   refuil
        const actions = addRemoCheckout(cartCheckouts);
        dispatch(actions);
        //promise   bolean  true
        resolve(true);
        setLoading(false);
      }, 3000);
    });
  };

  useEffect(() => {
    (async () => {
      const res = await OrderApi.getAll();

      setDataOrder(res.filter((e) => e.status === 'Shipping'));
      console.log('order', res);
    })();
  }, []);
  // const pass = cartCheckouts.forEach.cartTotals.map((item) => item);
  // console.log(pass);
  // const lastAddCheckOut = cartCheckouts.map((items) => items.cartTotals);
  return (
    <div className="order">
      <div className="order_banner">
        <p>ĐƠN HÀNG</p>
      </div>
      {dataOrder.length === 0 ? (
        <div className="order_error">
          {' '}
          <BsCheckCircle /> <h3>vui lòng mua hàng</h3>
        </div>
      ) : (
        <>
          <div className="order_list">
            {dataOrder.map((items, index) => (
              <div className="order_item" key={items.id}>
                <div className="order_code">
                  <span>{`# ${items?.code}`}</span>
                </div>
                <div className="order_information">
                  <div className="order_address">
                    {/* <h1>{items.infor.value.address}</h1> */}
                    <div className="order_title">
                      <MdOutlinePlace style={{ fontSize: '20px' }} /> <span>Địa chỉ nhận hàng</span>
                    </div>
                    <div className="order_adressName">
                      <span>
                        <strong>Họ và Tên </strong> {items?.infor?.fullName}
                      </span>
                    </div>
                    <div className="order_adressPhone">
                      <span>
                        <strong>Số Điện Thoại </strong> {items.infor.phone}
                      </span>
                    </div>
                    <div className="order_adresss">
                      <span>
                        <strong>Địa Chỉ </strong> {items.infor.address}
                      </span>
                    </div>
                  </div>

                  <div className="order_address">
                    {/* <h1>{items.infor.value.address}</h1> */}
                    <div className="order_title">
                      <MdOutlineLocalShipping style={{ fontSize: '20px' }} />{' '}
                      <span>Hình Thức Đặt Hàng</span>
                    </div>
                    <div className="order_adressName">
                      <span>
                        <strong>Phương thức đặt hàng</strong> Đặt hàng tại nhà
                      </span>
                    </div>
                  </div>

                  <div className="order_address">
                    {/* <h1>{items.infor.value.address}</h1> */}
                    <div className="order_title">
                      <MdOutlinePayment style={{ fontSize: '20px' }} />
                      <span> Hình Thức Thanh Toán</span>
                    </div>
                    <div className="order_adressName">
                      <span>
                        <strong>Thanh toán khi nhận hàng</strong>
                      </span>
                      {items.status === 'pending' && (
                        <span
                          className="order_handling"
                          style={{ color: 'green', fontWeight: '600' }}
                        >
                          Đang chờ xử lý...
                        </span>
                      )}
                      {items.status === 'reject' && (
                        <span
                          className="order_handling"
                          style={{ color: 'red', fontWeight: '600' }}
                        >
                          Đã hủy...
                        </span>
                      )}
                      {items.status === 'success' && (
                        <span
                          className="order_handling"
                          style={{ color: 'green', fontWeight: '600' }}
                        >
                          Đang giao hàng...
                        </span>
                      )}
                      {items.status === 'delivered' && (
                        <span
                          className="order_handling"
                          style={{ color: 'blue', fontWeight: '600' }}
                        >
                          Đã giao...
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                <div className="order_product">
                  {items.cartTotalss.map((itemss, index) => (
                    <Fragment key={index}>
                      {itemss.sexx.map((itenss, index) => (
                        <Fragment key={index}>
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
                        </Fragment>
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
                    </Fragment>
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

      {Loading && <LodingComponent />}
    </div>
  );
}

export default ShippingOrder;
