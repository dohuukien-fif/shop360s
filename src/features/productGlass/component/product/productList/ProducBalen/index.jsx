import PropTypes from 'prop-types';
import React from 'react';
import Product from './../../product/ProductkinhBalen/index';

ProductList.propTypes = {
  products: PropTypes.array,
};

function ProductList({ products }) {
  return (
    <div className="trousersList">
      {products.map((items, index) => (
        <Product key={items.id} product={items} />
      ))}
    </div>
  );
}

export default ProductList;
