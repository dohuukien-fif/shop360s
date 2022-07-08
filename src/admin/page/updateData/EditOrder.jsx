import React, { Fragment, useState } from 'react';
import { useRouteMatch } from 'react-router-dom';
import { formatPrice } from '../../../utils';
import useShowOrder from '../../hooks/useShowOrder';
import './EditOrder.scss';
EditOrderFeatures.propTypes = {};

function EditOrderFeatures(props) {
  const {
    params: { orderId },
  } = useRouteMatch();

  const [imagess, setimagess] = useState([]);
  const [input, setinput] = useState({});

  console.log('orderId', orderId);

  const { product, loading } = useShowOrder(orderId);

  console.log(product);

  const handleChange = (e) => {
    const { value, name } = e.target;

    setimagess((prev) => ({ ...prev, [name]: value }));
  };

  const handleChangeInput = (e) => {
    const { value, name } = e.target;

    setinput((prev) => ({ ...prev, [name]: value }));
  };
  // const setImage = imagess.length > 0 && imagess.split(',');

  return (
    <div className="editOrder">
      <div className="editOrder_title">
        <div className="editOrder_title-left">
          <span>Code</span>
          <span>Sản phẩm</span>
        </div>
        <div className="editOrder_title-left-mobile">
          <span>Sản phẩm</span>
        </div>
        <div className="editOrder_title-right-mobile">
          <span>Thanh toán</span>
        </div>
        <div className="editOrder_title-right">
          <span>Số lượng</span>
          <span>Tạm tính</span>

          <span>Thanh toán</span>
        </div>
      </div>
      <div className="editOrder_list">
        {product?.cartTotalss?.map((items, idx) => (
          <Fragment key={idx}>
            {items?.sexx?.map((itemsss, idex) => (
              <Fragment key={idex}>
                {' '}
                <div className="editOrder_item">
                  <div className="editOrder_left">
                    <div className="editOrder_code">
                      <span>{`# ${product.code}`}</span>
                    </div>
                    <div className="editOrder_product">
                      <div className="editOrder_adside">
                        <img src={itemsss.product.Araray[0]} alt="" />
                      </div>
                      <div className="editOrder_name">
                        <span>{itemsss.product.name}</span>
                      </div>
                    </div>
                  </div>
                  <div className="editOrder_right">
                    <div className="editOrder_quantity">
                      <span>{`${formatPrice(itemsss.product.price)} x ${itemsss.quantity}`}</span>
                    </div>
                    <div className="editOrder_total">
                      {formatPrice(itemsss.product.price * itemsss.quantity)}
                    </div>
                    <div className="editOrder_pay">
                      {formatPrice(itemsss.product.price * itemsss.quantity)}
                    </div>
                  </div>
                </div>
              </Fragment>
            ))}
          </Fragment>
        ))}
      </div>
      {product?.cartTotalss?.map((itemss, index) => (
        <div className=" product_item-order-total" key={index}>
          <div className="product_item-order-total-swapper">
            <div className="product_item-total-top">
              <div className="product_item-order-group">
                <span>Tạm tính </span>
                <span>{formatPrice(itemss.total)}</span>
              </div>
              <div className="product_item-order-group">
                <span>Giảm giá</span>
                <span>{`- ${formatPrice(itemss.total * (Number(itemss.discount) / 100))}`}</span>
              </div>
            </div>
            <div className="product_item-total-bottom">
              <div className="product_item-order-group">
                <span>Tổng tiền</span>
                <span className="">
                  {formatPrice(itemss.total - itemss.total * (Number(itemss.discount) / 100))}
                </span>
              </div>
            </div>
          </div>
        </div>
      ))}{' '}
    </div>
  );
}

export default EditOrderFeatures;
