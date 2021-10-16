import React from 'react';
import PropTypes from 'prop-types';

Product.propTypes = {};

function Product({ item }) {
  return (
    <div>
      <h1>{item.name}</h1>
    </div>
  );
}

export default Product;
