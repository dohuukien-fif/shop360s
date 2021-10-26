import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Product from './../../product/ProductQuankaki/index';

import './styles.scss';
ProductList.propTypes = {
  products: PropTypes.array,
};

function ProductList({ products }) {
  return (
    <div className="container-trousers">
      {products.map((items, index) => (
        <Product key={items.id} product={items} />
      ))}
    </div>
  );
}

export default ProductList;
