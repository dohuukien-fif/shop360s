import React from 'react';
import PropTypes from 'prop-types';

SortPrice.propTypes = {};

function SortPrice({ onChanges }) {
  const handleChange = (e) => {
    const { value } = e.target;
    // const sex = (value = '');
    console.log({ e });
    const newSort = {
      order: value,
    };
    if (onChanges) {
      onChanges(newSort);
    }
    console.log(value);
  };
  return (
    <select id="sort_price" name="price" onChange={handleChange}>
      <option value="">Mới nhất</option>
      <option value="199999">giá dưới 200.000đ</option>
      <option value="200000">giá từ 200.000đ - 400.000đ</option>
      <option value="400000">Giá trên 400.000đ</option>
    </select>
  );
}

export default SortPrice;
