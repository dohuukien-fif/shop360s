import React from 'react';

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
