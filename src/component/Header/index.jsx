import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DehazeIcon from '@mui/icons-material/Dehaze';
import CloseIcon from '@mui/icons-material/Close';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import ProductLink from './component/Link';
import { Link } from 'react-router-dom';
const Header = (props) => {
  const [torget, settorget] = useState(false);
  const handleClickToget = () => {
    settorget((x) => !x);
  };
  return (
    <div>
      <div className="header">
        <div className="header-left">
          <Link to="/product">
            <img
              src="https://360boutique.vn/wp-content/uploads/2021/10/LOGO-360-DUNG-TAM-THOI-MAU-DEN-05.png"
              alt=""
            />
          </Link>
        </div>
        <div className="header-mid">
          <input type="text" placeholder="Tìm kiến sản phẩm..." />
          <SearchIcon />
        </div>
        <div className="header-right">
          <AccountCircleIcon />
          <AddShoppingCartIcon />
          {torget ? (
            <CloseIcon onClick={() => settorget(false)} />
          ) : (
            <DehazeIcon className="header-right_icon" onClick={handleClickToget} />
          )}
        </div>
      </div>

      <ProductLink torget={torget} />
    </div>
  );
};

Header.propTypes = {};

export default Header;
