import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

index.propTypes = {};

function index({ product }) {
  return (
    <div className="evaluate_content">
      <p>{product.description}</p>
      <div className="evaluate_content-image">
        <img src={product.thumbnailUrl} alt="" />
      </div>
      {product.instruct !== undefined && (
        <div className="evaluate_content-info">
          <h2> Hướng dẫn bảo Quản</h2>
          <ul>
            {product.instruct.map((item, index) => (
              <Fragment key={index}>
                {' '}
                <li>{item}</li>
              </Fragment>
            ))}
          </ul>
        </div>
      )}
      {product.information !== undefined && (
        <div className="evaluate_content-info">
          <h2> THÔNG TIN CHUNG</h2>
          <ul>
            {product.information.map((item, index) => (
              <Fragment key={index}>
                {' '}
                <li>{item}</li>
              </Fragment>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default index;
