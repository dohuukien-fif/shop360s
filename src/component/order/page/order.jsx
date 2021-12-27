import React from 'react';
import PropTypes from 'prop-types';
import { NavLink, useRouteMatch } from 'react-router-dom';
import { CgNotes } from 'react-icons/cg';
import { FiBell } from 'react-icons/fi';
import { GiBackwardTime } from 'react-icons/gi';
import { AiOutlineRight } from 'react-icons/ai';
import { FaShuttleVan, FaRegAddressCard, FaHome } from 'react-icons/fa';
// import { IoHome } from 'react-icons/io';
import { MdCardMembership, MdSpeakerNotesOff } from 'react-icons/md';

import { fontSize } from '@mui/system';
import { Link, useHistory, Switch, Route } from 'react-router-dom';
OrderAccount.propTypes = {};

function OrderAccount(props) {
  const { url } = useRouteMatch();
  console.log('ccc', url);
  return (
    <>
      <div className="information_content">
        <div className="information_icons">
          <NavLink
            activeStyle={{
              fontWeight: 'bold',
              color: 'black',
              // background: 'black',
            }}
            to={`${url}`}
          >
            <CgNotes style={{ fontSize: '18px' }} /> <span> Đơn mua hàng </span>
          </NavLink>
        </div>
        <AiOutlineRight style={{ fontSize: '20px', marginTop: '-10px' }} />
      </div>
      <div className="information_content">
        <div className="information_icons">
          <NavLink
            activeStyle={{
              fontWeight: 'bold',
              color: 'black',
            }}
            to={`${url}/thong-bao`}
          >
            <FiBell style={{ fontSize: '18px' }} /> <span>Thông báo của bạn</span>
          </NavLink>
        </div>
        <AiOutlineRight style={{ fontSize: '20px', marginTop: '-10px' }} />
      </div>
      <div className="information_content">
        <div className="information_icons">
          <NavLink
            activeStyle={{
              fontWeight: 'bold',
              color: 'black',
            }}
            to={`${url}/dia-chi`}
          >
            <FaHome style={{ fontSize: '18px' }} /> <span>Địa chỉ</span>
          </NavLink>
        </div>
        <AiOutlineRight style={{ fontSize: '20px', marginTop: '-10px' }} />
      </div>
      <div className="information_content">
        <div className="information_icons">
          <NavLink
            activeStyle={{
              fontWeight: 'bold',
              color: 'black',
            }}
            to={`${url}/don-huy`}
          >
            <MdSpeakerNotesOff style={{ fontSize: '18px' }} /> <span>Đơn hàng đã hủy</span>
          </NavLink>
        </div>
        <AiOutlineRight style={{ fontSize: '20px', marginTop: '-10px' }} />
      </div>
    </>

    // <div>
    //   <ul>
    //     <li>
    //       <NavLink exact to={url}>
    //         Description
    //       </NavLink>
    //     </li>
    //     <li>
    //       <NavLink exact to={`${url}/bell `}>
    //         Additionnal information
    //       </NavLink>
    //     </li>
    //     <li>
    //       <NavLink exact to={`${url}/exit`}>
    //         Review
    //       </NavLink>
    //     </li>
    //   </ul>
    // </div>
  );
}

export default OrderAccount;
