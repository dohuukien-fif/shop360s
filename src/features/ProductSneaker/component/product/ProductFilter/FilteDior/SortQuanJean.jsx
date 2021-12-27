import React from 'react';
import PropTypes from 'prop-types';

SortPrice.propTypes = {};

function SortPrice({ onChanges }) {
  const handleChange = (e) => {
    const { value, name } = e.target;
    const newSort = {
      _sort: name,
      _order: value,
    };
    if (onChanges) {
      onChanges(newSort);
    }
    console.log(value, name);
  };
  return (
    <select id="sort_price" name="price" onChange={handleChange}>
      <option>Mới nhất</option>
      <option value="asc">Giá thấp đến cáo</option>
      <option value="desc">Giá cao đến thấp</option>
    </select>
  );
}

export default SortPrice;
