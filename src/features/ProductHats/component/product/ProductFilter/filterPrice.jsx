import { TextField } from '@mui/material';
import React, { useState } from 'react';
import './styles.scss';
FilterPrice.propTypes = {};

function FilterPrice({ onChanges }) {
  const [values, setvalue] = useState({
    price_gte: 0,
    // price_lte: 0,
  });
  const handleChange = (e) => {
    const { value, name } = e.target;
    setvalue((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    if (onChanges) {
      onChanges(values);
    }
    setvalue({
      price_gte: 0,
    });
  };
  return (
    <div className="filter">
      <h3>Chọn giá</h3>
      <div className="filter-prices">
        <TextField
          // style={{ height: '30px' }}
          className="textInput"
          type="text"
          name="price_gte"
          value={values.price_gte}
          onChange={handleChange}
        />
        {/* <input type="text" name="price_lte" value={values.price_lte} onChange={handleChange} /> */}
        <button type="submit" onClick={handleSubmit}>
          Áp dụng
        </button>
      </div>
    </div>
  );
}

export default FilterPrice;
