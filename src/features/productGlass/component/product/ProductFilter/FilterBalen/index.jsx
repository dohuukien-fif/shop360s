import PropTypes from 'prop-types';
import React from 'react';
import SortPrice from './SortQuanAu';

ProductFilter.propTypes = {
  onChanges: PropTypes.func,
};

function ProductFilter({ onChanges, filter }) {
  const handleSortPrice = (newvalue) => {
    if (onChanges) {
      onChanges(newvalue);
    }
  };

  return (
    <div className="content_left-trousersJeans">
      <div className="content_left-trousersJeans-right">
        <SortPrice filter={filter} onChanges={handleSortPrice} />
      </div>
    </div>
  );
}

export default ProductFilter;
