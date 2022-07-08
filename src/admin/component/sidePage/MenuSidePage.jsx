import React from 'react';
import { AiFillHome, AiOutlineShoppingCart } from 'react-icons/ai';
import { BsNewspaper, BsWallet } from 'react-icons/bs';
import { FaRegUser, FaWallet } from 'react-icons/fa';
import { ImPointRight } from 'react-icons/im';
import { IoMdTrendingUp } from 'react-icons/io';
import { MdManageAccounts } from 'react-icons/md';
import { SiSimpleanalytics } from 'react-icons/si';
import { NavLink, useLocation } from 'react-router-dom';
import Dropdow from '../dropdow';
import './styles.scss';

MenuSidePage.propTypes = {};

function MenuSidePage({ setisopens }) {
  const [isopen, setisopen] = React.useState(false);

  const [isactive, setisactive] = React.useState(false);

  const location = useLocation();

  const path = location.pathname.split('/')[2];

  const handleIsopen = () => {
    setisopen((x) => !x);
  };

  const handleclick = (e) => {
    setisactive(e.target.innerHTML === path);
    setisopens(false);
  };
  return (
    <div className="sidePage__menu">
      <div className="sidePage_store">
        <img
          src="https://360boutique.vn/wp-content/uploads/2021/10/LOGO-360-DUNG-TAM-THOI-MAU-DEN-05.png"
          alt=""
        />
        <span>
          <strong> Admin </strong>Shop360
        </span>
      </div>
      <div className="sidePage__dashboard">
        <div className="sidePage__dashboard-title">
          <p>Dashboard</p>
        </div>
        <div className="sidePage__dashboard-group" onClick={handleclick}>
          <NavLink to="/admin">
            <AiFillHome />
            <span>Dashboard</span>
          </NavLink>
        </div>
        <div className="sidePage__dashboard-group">
          <NavLink to="/admin/Customers" onClick={handleclick}>
            <SiSimpleanalytics />
            <span>Customers</span>
          </NavLink>
        </div>
      </div>
      <div className="sidePage__QuickMenu">
        <div className="sidePage__QuickMenu-title">
          <span>Quick Menu</span>
        </div>
        <div className="sidePage__QuickMenu-group" onClick={handleclick}>
          <NavLink to="/admin/User">
            <FaRegUser />
            <span>User</span>
          </NavLink>
        </div>
        <Dropdow
          path={path}
          handleclick={handleclick}
          isopen={isopen}
          handleIsopen={handleIsopen}
        />
        <div className="sidePage__QuickMenu-group" onClick={handleclick}>
          <NavLink to="/admin/Order">
            <BsWallet />
            <span>Order</span>
          </NavLink>
        </div>
      </div>
      <div className="sidePage__notifications">
        <div className="sidePage__notifications-title">
          <span>otifications</span>
        </div>
        <div className="sidePage__notifications-group" onClick={handleclick}>
          <NavLink to="/admin">
            <ImPointRight />
            <span>FeedBack</span>
          </NavLink>
        </div>
        {/* <div className="sidePage__notifications-group">
          <NavLink to="/admin">
            <ImPointRight />
            <span>introduce</span>
          </NavLink>
        </div> */}
        <div className="sidePage__notifications-group" onClick={handleclick}>
          <NavLink to="/admin/News">
            <BsNewspaper />
            <span>news</span>
          </NavLink>
        </div>
      </div>
      <div className="sidePage__staff">
        <div className="sidePage__staff-title">
          <span>Staff</span>
        </div>
        <div className="sidePage__staff-group" onClick={handleclick}>
          <NavLink to="/admin/manager">
            <MdManageAccounts />
            <span>Manage</span>
          </NavLink>
        </div>
        <div className="sidePage__staff-group" onClick={handleclick}>
          <NavLink to="/admin">
            <IoMdTrendingUp />
            <span>analytics</span>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default MenuSidePage;
