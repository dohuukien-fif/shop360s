import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
NakLink.propTypes = {};

function NakLink({ torget }) {
  return (
    <ul className={torget ? 'menulist active ' : 'menulist'}>
      <h3>Menu</h3>
      <li>Giới thiệu</li>
      <li>Áo</li>
      <li>Quần</li>
      <li>Giày</li>
      <li>mũ</li>
      <li>Sneaker</li>
    </ul>
  );
}

export default NakLink;
