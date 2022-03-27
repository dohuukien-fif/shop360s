import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, useRouteMatch, useHistory, useLocation } from 'react-router-dom';
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
import { AiOutlineCheckCircle } from 'react-icons/ai';
function Description() {
  const { user } = useUserContext();
  const dispatch = useDispatch();
  const history = useHistory();
  const [DiaLogProduct, setDiaLogProduct] = useState({});
  const location = useLocation();
  const {
    params: { quanId },
    url,
  } = useRouteMatch();

  const { product, Loading } = useDetailProduct(quanId);
  console.log(product);
  const title =
    product.categoryName === undefined ? ' ' : `${product.categoryName} / ${product.name}`;
  //change quantity
  const handleAddtoCart = (formValue, value) => {
    if (user === null) {
      alert('vui lòng đăng nhập');
      localStorage.setItem('REDERESS', JSON.stringify(location.pathname));

      return history.push('/login');
    }
    const action = addTocart({
      id: product.id,
      product,
      size: formValue.size,
      quantity: value.quantity,
    });

    // info DialogProduct
    let addNewProduct = {
      id: product.id,
      product,
      newSize: [{ size: formValue.size, quantity: value.quantity }],
      size: formValue.size,
      quantity: value.quantity,
    };
    //set  render   up for Dialog
    setDiaLogProduct((prev) => ({
      ...prev,
      addNewProduct,
    }));

    dispatch(action);
    console.log('nung', formValue.size, value.quantity);
  };
  const handleClickLinkCart = () => {
    history.push('/Cart');
  };
  return (
    <div className="description">
      <div className="detai-title">{title}</div>
      {Object.keys(DiaLogProduct).length > 0 && (
        <div className="woocommerce">
          <div className="woocommerce_infor">
            <AiOutlineCheckCircle />
            <div className="woocommerce_message">
              <span>{DiaLogProduct.addNewProduct.quantity} x</span>
              <span>{`“${DiaLogProduct.addNewProduct.product.name}”`}</span>

              <span>{DiaLogProduct.addNewProduct.size}</span>
            </div>
          </div>
          <div className="woocommerce_btn">
            <button onClick={handleClickLinkCart}>XEM GIỎ HÀNG</button>
          </div>
        </div>
      )}
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
