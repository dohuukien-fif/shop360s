import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './styles.scss';
NavLeft.propTypes = {};

function NavLeft({ scrow }) {
  return (
    <div className={scrow ? 'header-left active_image' : 'header-left'}>
      <Link to="/Trang-chu">
        <img
          src="https://360boutique.vn/wp-content/uploads/2021/10/LOGO-360-DUNG-TAM-THOI-MAU-DEN-05.png"
          alt="shop 360"
        />
      </Link>
    </div>
  );
}

export default NavLeft;
