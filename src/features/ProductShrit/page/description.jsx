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
import { useDispatch } from 'react-redux';
import { addTocart } from './../../cart/cartSlice';
import { useUserContext } from './../../../component/contextApi/index';
function Description() {
  const { user } = useUserContext();
  const dispatch = useDispatch();
  const {
    params: { aoId },
    url,
  } = useRouteMatch();

  const { product, Loading } = useDetailProduct(aoId);
  console.log(product);
  const title =
    product.categoryName === undefined ? ' ' : `${product.categoryName} / ${product.name}`;
  //change quantity
  const handleAddtoCart = (formValue, value) => {
    if (user === null) {
      alert('vui lòng đăng nhập');
      return;
    }
    const action = addTocart({
      id: product.id,
      product,
      size: formValue.size,
      quantity: value.quantity,
    });
    dispatch(action);
    console.log('nung', formValue.size, value.quantity);
  };
  return (
    <div className="description">
      <div className="detai-title">{title}</div>
      <div className="detai">
        <div className="detai-left">
          {Loading ? <Sken length={1} /> : <ProductThumnail products={product} />}
        </div>
        <div className="detai-right">
          {Loading ? (
            <Sken length={1} />
          ) : (
            <ProductInfo product={product} onChange={handleAddtoCart} />
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
