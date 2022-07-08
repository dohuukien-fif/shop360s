import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, useRouteMatch, useHistory, useLocation } from 'react-router-dom';
import useDetailProduct from './../component/hooks/useDetailproduct';
import ProductThumnail from './../component/Description/ProducTumnail/index';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import ProductInfo from '../component/Description/ProductInfo';
import './detai.scss';
import ProductApi from '../../../api/productapi';
import Sken from './../component/ProductSelekent/index';
import Skenlen from './../component/ProductSelekent/seleken';
import SlidesHomes from '../component/slides/slidesHome';
import { useDispatch } from 'react-redux';
import { addTocart, setSize } from './../../cart/cartSlice';
import { useUserContext } from './../../../component/contextApi/index';
function Description() {
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  const [isAddToCart, setisAddToCart] = useState(true);
  const [DiaLogProduct, setDiaLogProduct] = useState({});
  const { user } = useUserContext();
  const {
    params: { productId },
    url,
  } = useRouteMatch();

  console.log('location', location.pathname);
  const { product, Loading } = useDetailProduct(productId);
  console.log(product);
  const title =
    product.categoryName === undefined ? ' ' : `${product.categoryName} / ${product.name}`;
  //change quantity
  // const handlechangeQuantity = (newvalue, value) => {
  //   console.log('sex', newvalue, value);
  // };

  console.log(product);
  const handleAddtoCart = (formValue, value) => {
    if (user === null) {
      alert('vui lòng đăng nhập');

      localStorage.setItem('REDERESS', JSON.stringify(location.pathname));

      return history.push('/login');
    }

    const action = addTocart({
      id: product.id,
      product,
      newSize: [{ size: formValue.size, quantity: value.quantity }],
      size: formValue.size,
      quantity: value.quantity,
    });

    dispatch(action);

    // let setProduct = [...DiaLogProduct];
    // info DialogProduct
    let addNewProduct = {
      id: product.id,
      product,

      size: formValue.size,
      quantity: value.quantity,
    };
    //set  render   up for Dialog
    setDiaLogProduct((prev) => ({
      ...prev,
      addNewProduct,
    }));
    // setisAddToCart(true);
    //dispatch action => store =>cart

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
          {Loading ? <Sken length={1} /> : <ProductThumnail product={product} />}
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
        {Loading ? <Skenlen length={4} /> : <SlidesHomes category={product.categoryName} />}
      </div>
    </div>
  );
}

Description.propTypes = {};

export default Description;
