import PropTypes from 'prop-types';
import React, { Fragment } from 'react';
import { FaRegUserCircle } from 'react-icons/fa';
import { MdOutlineDeleteOutline } from 'react-icons/md';
import { RiCheckboxBlankCircleFill } from 'react-icons/ri';
import { useHistory } from 'react-router-dom';
import HourGlassLoading from '../../../component/loading/hourglassLoadig';
import { formatPrice } from '../../../utils';

import OrderApi from './../../../api/OrderApi';
CompletedItem.propTypes = {
  items: PropTypes.object,
};

function CompletedItem({ items, handleDeleteData }) {
  const [Loading, setLoading] = React.useState(false);
  const history = useHistory();
  const handleClickId = (id) => {
    return new Promise((resole) => {
      setLoading(true);
      setTimeout(() => {
        history.push(`/admin/Order/${id}`);
        setLoading(false);
        resole(true);
      }, 2000);
    });
  };
  const handleIdDeleteApi = (id) => {
    if (handleDeleteData) {
      handleDeleteData(id);
    }
  };

  const handleChangeSeletedStatus = async (e) => {
    const { value, name } = e.target;

    const UpdateStatus = {
      id: name,
      status: value,
    };
    await OrderApi.update(UpdateStatus);

    window.location.reload();
  };

  const DISCOUNT = 200000;
  return (
    <>
      {Loading ? (
        <HourGlassLoading />
      ) : (
        <>
          {' '}
          <div className="products_item-order">
            <div className="products_left-order">
              <div className="products_code">{`# ${items.code}`}</div>
              {/* <div className="products_adside">
                <img src={items?.Araray.length > 0 && items?.Araray[0]} alt="" />
              </div> */}
              <div className="products_name">
                <FaRegUserCircle />
                <span>{items.infor.fullName}</span>
              </div>
              <div className="products_address">
                <span>{items.infor.address}</span>
              </div>
            </div>
            <div className="products_right-order">
              <div className="product_total">
                {items.cartTotalss.map((itemss, index) => (
                  <Fragment key={index}>
                    {formatPrice(
                      itemss.sexx.reduce(
                        (total, item) => total + item.product.price * item.quantity,
                        0
                      )
                    )}
                  </Fragment>
                ))}{' '}
              </div>

              <div className="product_status">
                {items.status === 'Pending' && (
                  <button className="order_handling active__pending ">
                    <RiCheckboxBlankCircleFill />
                    {items.status}
                  </button>
                )}
                {items.status === 'Refund' && (
                  <button className="order_handling active__reject">
                    <RiCheckboxBlankCircleFill />
                    {items.status}
                  </button>
                )}
                {items.status === 'Shipping' && (
                  <button className="order_handling active__delivered ">
                    <RiCheckboxBlankCircleFill />
                    {items.status}
                  </button>
                )}
                {items.status === 'Success' && (
                  <button className="order_handling active__success">
                    <RiCheckboxBlankCircleFill />
                    {items.status}
                  </button>
                )}
              </div>

              <div className="product_setCompleted">
                <select name={items.id} onChange={handleChangeSeletedStatus}>
                  <option>Chọn</option>
                  <option value="Pending">Chờ xử lý</option>
                  <option value="Refund">hủy đơn</option>
                  <option value="Shipping">Đang giao</option>
                  <option value="Success">Đã giao</option>
                </select>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default CompletedItem;
