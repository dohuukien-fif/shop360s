import React from 'react';
import { Link } from 'react-router-dom';
import Product from './../Product/index';
import './styles.scss';

ProductLisst.propTypes = {
  // product: PropTypes.object,
};

function ProductLisst({ product }) {
  return (
    <>
      <div>
        <ul className="main">
          <div className="title-product">
            <div className="main_arrow">
              <span>ÁO</span>
            </div>

            <span>
              <Link to="/Ao">Xem thêm</Link>
            </span>
          </div>
          <div className="main_block">
            {product
              .filter((e) => e.categoryName === 'áo')
              .slice(0, 10)
              .map((item, index) => (
                <Product key={index} item={item} />
              ))}
          </div>
        </ul>

        <ul className="main">
          <div className="title-product">
            <div className="main_arrow">
              <span>GIÀY</span>
            </div>
            <span>
              <Link to="/Giay">Xem thêm</Link>
            </span>
          </div>
          <div className="main_block">
            {product
              .filter((e) => e.categoryName === 'giày')
              .map((item, index) => (
                <Product key={index} item={item} />
              ))}
          </div>
        </ul>

        <ul className="main">
          <div className="title-product">
            <div className="main_arrow">
              <span>QUẦN</span>
            </div>
            <span>
              {' '}
              <Link to="/Quan">Xem thêm</Link>
            </span>
          </div>
          <div className="main_block">
            {product
              .filter((e) => e.categoryName === 'quần')
              .map((item, index) => (
                <Product key={index} item={item} />
              ))}
          </div>
        </ul>
      </div>
    </>
  );
}

export default ProductLisst;
