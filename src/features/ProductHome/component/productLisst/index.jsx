import React from 'react';
import PropTypes from 'prop-types';
import Product from './../Product/index';
import './styles.scss';
ProductLisst.propTypes = {
  // product: PropTypes.object,
};

function ProductLisst({ product }) {
  return (
    <>
      <div>
        <h2 className="title-product">ÁO</h2>
        <ul className="main">
          {product
            .filter((e) => e.categoryName === 'áo')
            .slice(0, 10)
            .map((item, index) => (
              <Product item={item} />
            ))}
        </ul>
        <h2 className="title-product">GIÀY</h2>
        <ul className="main">
          {product
            .filter((e) => e.categoryName === 'giày')
            .map((item, index) => (
              <Product item={item} />
            ))}
        </ul>
        <h2 className="title-product">QUẦN</h2>
        <ul className="main">
          {product
            .filter((e) => e.categoryName === 'quần')
            .map((item, index) => (
              <Product item={item} />
            ))}
        </ul>
      </div>
    </>
  );
}

export default ProductLisst;
