import React from 'react';
import PropTypes from 'prop-types';
import Product from './../product/index';

import './styles.scss';
ProductList.propTypes = {
  products: PropTypes.array,
};

function ProductList({ products }) {
  return (
    <div className="product_list">
      {products.map((items, index) => (
        <Product key={items.id} product={items} />
      ))}
    </div>
  );
}

export default ProductList;
