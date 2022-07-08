import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { BsChatSquareText } from 'react-icons/bs';
import { FaShuttleVan } from 'react-icons/fa';
import { MdCardMembership } from 'react-icons/md';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import OrderApi from './../../../api/OrderApi';
import { cartCheckout } from './../../../features/cart/cartSelector';
// import { Link } from 'react-router-dom';
Order.propTypes = {
  handleClick: PropTypes.func,
};

function Order({ handleClicks }) {
  const cartCheckouts = useSelector(cartCheckout);
  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await OrderApi.getAll();
      setData(res.filter((e) => e.status === 'Shipping'));
    })();
  }, []);
  // const Checouts = useSelector(Checout);
  // const handleckic = () => {
  //   console.log('kien dep trai');
  // };
  // console.log('ss', cartCheckouts);
  let LengthEven = Array.isArray(JSON.parse(localStorage.getItem('onessss')))
    ? JSON.parse(localStorage.getItem('onessss'))
    : [];

  return (
    <div className="information_top">
      <div className="icon_container">
        <Link to="/Thongtin/check">
          <div className={cartCheckouts.length === 0 ? 'icon_order  activeOrder' : 'icon_order '}>
            <MdCardMembership style={{ fontSize: '35px', marginBottom: '1rem' }} />
            <span>Chờ vận chuyển</span>
            <div className="icon_count">{cartCheckouts.length}</div>
          </div>
        </Link>
        <Link to="/Thongtin/shipping">
          {' '}
          <div className={data.length === 0 ? 'icon_order  activeOrder' : 'icon_order '}>
            <FaShuttleVan style={{ fontSize: '35px', marginBottom: '1rem' }} />
            <span>Chờ giao hàng</span>
            {cartCheckouts.length > 5 && <div className="icon_count">8</div>}
          </div>
        </Link>

        <div className="icon_order">
          <BsChatSquareText
            onClick={handleClicks}
            style={{ fontSize: '35px', marginBottom: '1rem' }}
          />
          <span>Đánh giá</span>
          {LengthEven?.length > 0 && (
            <div className="icon_count">
              {LengthEven.filter((e) => typeof e === 'object')?.length}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Order;
