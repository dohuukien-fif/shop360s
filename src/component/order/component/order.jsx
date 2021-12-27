import React from 'react';
import PropTypes, { object } from 'prop-types';
import { BsCartPlus } from 'react-icons/bs';

import { GiBackwardTime } from 'react-icons/gi';
import { AiOutlineRight } from 'react-icons/ai';
import { FaShuttleVan } from 'react-icons/fa';
import { BsChatSquareText } from 'react-icons/bs';
import { MdCardMembership } from 'react-icons/md';
import { Link, useHistory } from 'react-router-dom';
import { fontSize } from '@mui/system';
import { useSelector } from 'react-redux';
import { cartCheckout, Checout } from './../../../features/cart/cartSelector';
// import { Link } from 'react-router-dom';
Order.propTypes = {
  handleClick: PropTypes.func,
};

function Order({ handleClicks }) {
  const cartCheckouts = useSelector(cartCheckout);
  // const Checouts = useSelector(Checout);
  // const handleckic = () => {
  //   console.log('kien dep trai');
  // };
  // console.log('ss', cartCheckouts);
  const LengthEven = JSON.parse(localStorage.getItem('onesss'));
  console.log(LengthEven?.length);
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
        <div className={cartCheckouts.length === 0 ? 'icon_order  activeOrder' : 'icon_order '}>
          <FaShuttleVan style={{ fontSize: '35px', marginBottom: '1rem' }} />
          <span>Chờ giao hàng</span>
          {cartCheckouts.length > 5 && <div className="icon_count">8</div>}
        </div>
        <div className="icon_order">
          <BsChatSquareText
            onClick={handleClicks}
            style={{ fontSize: '35px', marginBottom: '1rem' }}
          />
          <span>Đánh giá</span>
          {LengthEven?.length > 0 && <div className="icon_count">{LengthEven?.length}</div>}
        </div>
      </div>
    </div>
  );
}

export default Order;
