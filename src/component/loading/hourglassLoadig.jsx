import React from 'react';
import './hourglass.scss';
HourGlassLoading.propTypes = {};

function HourGlassLoading(props) {
  return (
    <div className="loading_hourglass">
      <div className="lds-hourglass"></div>
    </div>
  );
}

export default HourGlassLoading;
