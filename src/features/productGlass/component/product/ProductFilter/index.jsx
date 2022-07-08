import PropTypes from 'prop-types';
import React from 'react';
import FilterCategory from './filterCategory';
import FilterPrice from './filterPrice';
import SortPrice from './SortPridce';
import './styles.scss';
ProductFilter.propTypes = {
  onChanges: PropTypes.func,
};

function ProductFilter({ onChanges, filter }) {
  const handleSortPrice = (newvalue) => {
    if (onChanges) {
      onChanges(newvalue);
    }
  };
  const handleCategory = (newvalue) => {
    if (onChanges) {
      const newCategory = {
        categoryName: newvalue,
      };
      onChanges(newCategory);
    }
  };
  return (
    <div className="content_left-trousers">
      <div className="content_left-trousers-left">
        <h2>Danh mục sản phẩm</h2>
        <FilterCategory onChanges={handleCategory} />
        <h3>Chọn giá</h3>
        <FilterPrice onChanges={handleSortPrice} />
      </div>
      <div className="content_left-trousers-right">
        <SortPrice filter={filter} onChanges={handleSortPrice} />
      </div>
    </div>
  );
}

export default ProductFilter;
