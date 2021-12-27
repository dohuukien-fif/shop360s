import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link, Route, Switch, useRouteMatch } from 'react-router-dom';
import useDetailProduct from './../component/hooks/useDescription';
import ProductThumnail from './../component/Description/thumnail/index';
import ProductInfo from '../component/Description/detailinfo/index';
import './detail.scss';
import ProductApi from '../../../api/productapi';
// import Sken from './../component/ProductSelekent/index';
import SelenkenDescription from './../component/ProductSelekent/index';
import SlidesHomes from './../component/slides/slidesHome';
import Descriptions from './../component/Description/Descriptions/index';
import Paper from '@mui/material/Paper';
import ChosingDiffrentProduct from '../component/slides/ChosingDiffrentProduct';
import Seleken from './../component/ProductSelekent/chossing';
import { addTocart } from './../../cart/cartSlice';
import { useDispatch } from 'react-redux';
import { useUserContext } from './../../../component/contextApi/index';
import Sklentons from './../component/ProductSelekent/seleken';
function Description() {
  const { user } = useUserContext();
  const {
    params: { muId },
    url,
  } = useRouteMatch();
  const dispatch = useDispatch();
  const { product, Loading } = useDetailProduct(muId);
  console.log(product);
  const title =
    product.categoryName === undefined ? ' ' : ` /${product.categoryName} / ${product.name}`;
  //change quantity
  const handleAddtoCart = (formValue) => {
    if (user === null) {
      alert('vui lòng đăng nhập');
      return;
    }
    const action = addTocart({
      id: product.id,
      product,
      quantity: formValue.quantity,
    });
    dispatch(action);
    console.log('nung', formValue.size);
  };
  return (
    <div className="description_glass">
      <div className="description_glass-title">
        {' '}
        <Link to="/GIÀY">GIÀY</Link> {title}
      </div>
      <div className="detail_glass">
        <div className="detail_glass-left">
          {Loading ? <SelenkenDescription length={1} /> : <ProductThumnail products={product} />}
        </div>
        <div className="detail_glass-right">
          {Loading ? (
            <SelenkenDescription length={1} />
          ) : (
            <ProductInfo product={product} onChange={handleAddtoCart} />
          )}
        </div>
      </div>
      <div className="choose">
        {Loading ? (
          <Seleken length={4} width={90} height={85} />
        ) : (
          <ChosingDiffrentProduct product={product} />
        )}
      </div>
      <div className="evaluate ">
        <Paper elevation={3}>
          <h2 className="evaluate_title">CHI TIẾT</h2>
          {Loading ? <SelenkenDescription length={1} /> : <Descriptions product={product} />}
        </Paper>
      </div>
      <div className="related_glass">
        <h2>SẢN PHẨM LIÊN QUAN</h2>
        {Loading ? <Sklentons length={4} /> : <SlidesHomes />}
      </div>
    </div>
  );
}

Description.propTypes = {};

export default Description;
