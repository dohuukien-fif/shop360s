import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import { Link } from 'react-router-dom';
NakLink.propTypes = {};

function NakLink({ torget }) {
  return (
    <ul className={torget ? 'menulist actves active ' : 'menulist'}>
      <h3>Menu</h3>
      <li>Giới thiệu</li>
      <li>
        <Link to="/Ao">Áo</Link>
      </li>
      <li>
        <Link to="/Quan">Quần</Link>
      </li>
      <li>
        {' '}
        <Link to="/Kinh">Kính</Link>
      </li>
      <li>
        {' '}
        <Link to="/Mu">mũ</Link>
      </li>
      <li>
        <Link to="/Giay">Sneaker</Link>
      </li>
    </ul>
  );
}

export default NakLink;
