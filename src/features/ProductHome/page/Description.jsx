import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import useDetailProduct from './../component/hooks/useDetailproduct';
import ProductThumnail from './../component/Description/ProducTumnail/index';
import ProductInfo from '../component/Description/ProductInfo';
import './detai.scss';
import ProductApi from '../../../api/productapi';
import Sken from './../component/ProductSelekent/index';
import SlidesHomes from '../component/slides/slidesHome';
function Description() {
  const {
    params: { productId },
    url,
  } = useRouteMatch();

  const { product, Loading } = useDetailProduct(productId);
  console.log(product);
  const title =
    product.categoryName === undefined ? ' ' : `${product.categoryName} / ${product.name}`;
  //change quantity
  const handlechangeQuantity = (newvalue) => {
    console.log(newvalue);
  };
  return (
    <div className="description">
      <div className="detai-title">{title}</div>
      <div className="detai">
        <div className="detai-left">
          {Loading ? <Sken length={1} /> : <ProductThumnail product={product} />}
        </div>
        <div className="detai-right">
          {Loading ? (
            <Sken length={1} />
          ) : (
            <ProductInfo product={product} onChange={handlechangeQuantity} />
          )}
        </div>
      </div>
      <div className="related">
        <h2>SẢN PHẨM LIÊN QUAN</h2>
        <SlidesHomes />
      </div>
    </div>
  );
}

Description.propTypes = {};

export default Description;
