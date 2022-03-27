import React from 'react';
import './styles.scss';
index.propTypes = {};

function index(props) {
  return (
    <div className="loading_order">
      <div className="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default index;
