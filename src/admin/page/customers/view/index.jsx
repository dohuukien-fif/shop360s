import * as React from 'react';
import { useRouteMatch } from 'react-router-dom';
import { formatPrice } from '../../../../utils';
import useSales from '../hooks/useSales';
import LoadingFeatures from './../../../../component/loading/index';
import './styles.scss';
export default function ViewCustomers(props) {
  const {
    params: { customerId },
  } = useRouteMatch();

  console.log('[customerId]', customerId);
  const { products, Loading } = useSales(customerId);

  console.log('[product]', products);
  return (
    <div className="viewCustomers">
      {Loading ? (
        <LoadingFeatures />
      ) : (
        <>
          {' '}
          <div className="viewCustomers__swapper">
            <div className="viewCustomers__top">
              <div className="viewCustomers__figust">
                <img
                  src={
                    products.photoURL ||
                    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOPJ5dTrQSe3mDwAx13Igby0nTFuGN6ovTyg&usqp=CAU'
                  }
                  alt=""
                />
              </div>
              <div className="viewCustomers__information">
                <div className="viewCustomers__name">
                  <span>
                    Tên <strong>*</strong>:
                  </span>
                  <span>{products.user}</span>
                </div>
                <div className="viewCustomers__email">
                  <span>
                    email <strong>*</strong>:
                  </span>
                  <span>{products.email}</span>
                </div>
                <div className="viewCustomers__order">
                  <span>
                    tổng đơn hàng <strong>*</strong>:
                  </span>
                  <span>{products.order}</span>
                </div>
                <div className="viewCustomers__spend">
                  <span>
                    tổng tiền <strong>*</strong>:
                  </span>
                  <span>{formatPrice(products.spending)}</span>
                </div>
              </div>
            </div>
            <div className="viewCustomers__table">
              <div className="viewCustomers__title">
                <h3>Đơn hàng đã mua</h3>
              </div>
              <div className="viewCustomers__top--title">
                <div className="viewCustomers__top--left">
                  <span>Code </span>
                  <span>Sản phẩm </span>
                </div>
                <div className="viewCustomers__top--right">
                  <span>Ngày đặt hàng</span>

                  <span>Size</span>
                  <span>Tạm tính</span>
                  <span>Thành tiền</span>
                </div>
              </div>
              <div className="viewCustomers__list">
                {products?.product?.length >= 0 &&
                  products?.product?.map((item, index) => (
                    <React.Fragment key={index}>
                      {item.cartTotalss.map((items, index) => (
                        <React.Fragment key={index}>
                          {items.sexx.map((itemss, inx) => (
                            <div className="viewCustomers__item" key={inx}>
                              <div className="viewCustomers__left">
                                <div className="viewCustomers__code">
                                  <span>{`# ${item.code}`}</span>
                                </div>
                                <div className="viewCustomers__product">
                                  <div className="viewCustomers__adside">
                                    <img src={itemss.product.Araray[0]} alt="" />
                                  </div>
                                  <div className="viewCustomers__name">
                                    <span>{itemss.product.name}</span>
                                  </div>
                                </div>
                              </div>
                              <div className="viewCustomers__right">
                                <div className="viewCustomers__date">
                                  <span>{item.day}</span>
                                </div>
                                <div className="viewCustomers__newSize">
                                  {itemss.newSize.length >= 0 ? (
                                    itemss.newSize.map((sizes, idx) => (
                                      <div className="viewCustomers__sizeItem" key={idx}>
                                        <div className="viewCustomers__sizeName">
                                          <span>{sizes.size}</span>
                                        </div>
                                        <span>X</span>
                                        <div className="viewCustomers__sizequantity">
                                          <span>{sizes.quantity}</span>
                                        </div>
                                      </div>
                                    ))
                                  ) : (
                                    <div className="viewCustomers__sizeItem">
                                      <div className="viewCustomers__sizeName">
                                        <span>Không có size</span>
                                      </div>
                                    </div>
                                  )}
                                </div>

                                <div className="viewCustomers__provisional">
                                  <span>{`${formatPrice(itemss.product.price)} X ${
                                    itemss.quantity
                                  }`}</span>
                                </div>
                                <div className="viewCustomers__total">
                                  <span>{`${formatPrice(
                                    itemss.product.price * itemss.quantity
                                  )}`}</span>
                                </div>
                              </div>
                            </div>
                          ))}
                        </React.Fragment>
                      ))}
                    </React.Fragment>
                  ))}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
