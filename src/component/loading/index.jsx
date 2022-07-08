import React from 'react';
import './styles.scss';
LoadingFeatues.propTypes = {};

function LoadingFeatues(props) {
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

export default LoadingFeatues;
