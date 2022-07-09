import Paper from '@mui/material/Paper';
import React, { useState } from 'react';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { useHistory, useRouteMatch, useLocation } from 'react-router-dom';
import ProductInfo from '../component/Description/detailinfo/index';
import ChosingDiffrentProduct from '../component/slides/ChosingDiffrentProduct';
import { useUserContext } from './../../../component/contextApi/index';
import { addTocart } from './../../cart/cartSlice';
import Sken from './../../ProductHome/component/ProductSelekent/index';
import Descriptions from './../component/Description/Descriptions/index';
import ProductThumnail from './../component/Description/thumnail/index';
import useDetailProduct from './../component/hooks/useDescription';
import Seleken from './../component/ProductSelekent/chossing';
import SelenkenDescription from './../component/ProductSelekent/index';
import SlidesHomes from './../component/slides/slidesHome';
import './detail.scss';
function Description() {
  const { user } = useUserContext();
  const location = useLocation();
  const [DiaLogProduct, setDiaLogProduct] = useState({});
  const history = useHistory();
  const {
    params: { giayId },
  } = useRouteMatch();
  const dispatch = useDispatch();

  const { product, Loading } = useDetailProduct(giayId);
  console.log(product);
  const title =
    product.categoryName === undefined ? ' ' : `${product.categoryName} / ${product.name}`;
  //change quantity
  // const handlechangeQuantity = (newvalue) => {
  //   console.log(newvalue);
  // };
  const handleAddtoCart = (formValue) => {
    if (user === null) {
      alert('vui lòng đăng nhập');
      localStorage.setItem('REDERESS', JSON.stringify(location.pathname));

      return history.push('/login');
    }
    const action = addTocart({
      id: product.id,
      product,
      newSize: [],
      quantity: formValue.quantity,
    });
    // info DialogProduct
    let addNewProduct = {
      id: product.id,
      product,
      quantity: formValue.quantity,
    };
    //set  render   up for Dialog
    setDiaLogProduct((prev) => ({
      ...prev,
      addNewProduct,
    }));
    dispatch(action);
    console.log('nung', formValue.size);
  };
  const handleClickLinkCart = () => {
    history.push('/Cart');
  };
  return (
    <div className="description_glass">
      <div className="description_glass-title">{title}</div>
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
      <div className="detail_glass">
        <div className="detail_glass-left">
          {Loading ? <Sken length={1} /> : <ProductThumnail products={product} />}
        </div>
        <div className="detail_glass-right">
          {Loading ? (
            <Sken length={1} />
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
        {Loading ? <Seleken length={4} width={270} height={350} /> : <SlidesHomes />}
      </div>
    </div>
  );
}

Description.propTypes = {};

export default Description;
