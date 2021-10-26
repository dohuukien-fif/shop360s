import React from 'react';
import PropTypes from 'prop-types';
import FilterCategory from './filterCategory';

ProductFilter.propTypes = {};

function ProductFilter({ onChange, filter }) {
  // const [state, setstate] = useState(initialState)

  const handleFilterCategory = (newvalue) => {
    const newCategory = {};
    if (onChange) {
      onChange(newCategory);
    }
  };
  return (
    <div>
      <FilterCategory />
    </div>
  );
}

export default ProductFilter;
