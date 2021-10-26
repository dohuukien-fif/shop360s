import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import useDetailProduct from './../component/hooks/useDescription';
import ProductThumnail from './../component/Description/thumnail/index';
import ProductInfo from '../component/Description/detailinfo/index';
import './detail.scss';
import ProductApi from '../../../api/productapi';
import Sken from './../../ProductHome/component/ProductSelekent/index';
import SlidesHomes from './../component/slides/slidesHome';
import Descriptions from './../component/Description/Descriptions/index';
import Paper from '@mui/material/Paper';
function Description() {
  const {
    params: { kinhId },
    url,
  } = useRouteMatch();

  const { product, Loading } = useDetailProduct(kinhId);
  console.log(product);
  const title =
    product.categoryName === undefined ? ' ' : `${product.categoryName} / ${product.name}`;
  //change quantity
  const handlechangeQuantity = (newvalue) => {
    console.log(newvalue);
  };
  return (
    <div className="description_glass">
      <div className="description_glass-title">{title}</div>
      <div className="detail_glass">
        <div className="detail_glass-left">
          {Loading ? <Sken length={1} /> : <ProductThumnail products={product} />}
        </div>
        <div className="detail_glass-right">
          {Loading ? (
            <Sken length={1} />
          ) : (
            <ProductInfo product={product} onChange={handlechangeQuantity} />
          )}
        </div>
      </div>
      <div className="evaluate ">
        <Paper elevation={3}>
          <h2 className="evaluate_title">CHI TIẾT</h2>
          <Descriptions product={product} />
        </Paper>
      </div>
      <div className="related_glass">
        <h2>SẢN PHẨM LIÊN QUAN</h2>
        <SlidesHomes />
      </div>
    </div>
  );
}

Description.propTypes = {};

export default Description;
