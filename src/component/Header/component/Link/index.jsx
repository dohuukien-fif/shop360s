import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
NakLink.propTypes = {};

function NakLink({ torget }) {
  return (
    <ul className={torget ? 'menulist active' : 'menulist'}>
      <li>kien dep trai</li>
      <li>kien dep trai</li>
      <li>kien dep trai</li>
      <li>kien dep trai</li>
      <li>kien dep trai</li>
    </ul>
  );
}

export default NakLink;
