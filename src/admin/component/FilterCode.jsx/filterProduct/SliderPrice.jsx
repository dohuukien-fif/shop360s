import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import useMaxPrice from '../../../hooks/useMaxPrice';
import './slidePrice.scss';

SliderPrice.propTypes = {};

function SliderPrice({ productMaxPrice, OnSubmitPrice }) {
  const [value, setValue] = useState();

  const DeboarnRef = useRef(null);

  const hadleChange = (e) => {
    const { name, value } = e.target;
    if (DeboarnRef.current) {
      clearTimeout(DeboarnRef.current);
    }
    DeboarnRef.current = setTimeout(() => {
      if (OnSubmitPrice) {
        OnSubmitPrice({ [name]: value });
      }
    }, 500);
  };
  return (
    <div className="slidePrice">
      <div className="slidePrice_title">Price Slider</div>
      <div className="slidePrice_content">
        <div className="range-wrap">
          <div className="range-value" id="rangeV"></div>
          <input
            id="range"
            type="range"
            name="price_lte"
            min={Math.floor(Math.min(...productMaxPrice))}
            max={Math.ceil(Math.max(...productMaxPrice))}
            onChange={hadleChange}
            value={value}
            step="1"
          />
        </div>
      </div>
    </div>
  );
}

export default SliderPrice;
