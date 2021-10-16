import React from 'react';
import PropTypes from 'prop-types';
import Product from './../Product/index';
ProductLisst.propTypes = {
  product: PropTypes.object,
};

function ProductLisst({ product = {} }) {
  return (
    <>
      <div>
        <ul>
          {product.map((item, index) => (
            <Product item={item} />
          ))}
        </ul>
      </div>
    </>
  );
}

export default ProductLisst;
