import PropTypes from 'prop-types';
import React from 'react';
import Product from './../../product/ProductBur/index';

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
