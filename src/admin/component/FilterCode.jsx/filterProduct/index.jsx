import PropTypes from 'prop-types';
import React from 'react';
import Categories from './categories';
import RangePrice from './rangePrice';
import SliderPrice from './SliderPrice';
import './styles.scss';

FilterProductFeatures.propTypes = {
  onSubmits: PropTypes.func,
  SearchData: PropTypes.func,
};

function FilterProductFeatures({ onSubmits, productMaxPrice, productCategories }) {
  const handleRange = (value) => {
    onSubmits(value);
    console.log('code', value);
  };

  const handlePrice = (value) => {
    onSubmits(value);
  };
  const handleCategories = (value) => {
    const newValue = {
      categoryName: value,
    };
    onSubmits(newValue);
  };
  return (
    <div className="filter_product">
      <div className="filter_product-left">
        <RangePrice onSubmitRange={handleRange} productMaxPrice={productMaxPrice} />
        <SliderPrice OnSubmitPrice={handlePrice} productMaxPrice={productMaxPrice} />
      </div>
      <div className="filter_product-right">
        <Categories productCategories={productCategories} onSubmitsCategorie={handleCategories} />
      </div>
    </div>
  );
}

export default FilterProductFeatures;
