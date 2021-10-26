import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import { formatPrice } from './../../../../utils';
import { useHistory } from 'react-router';
Product.propTypes = {};

function Product({ item }) {
  const history = useHistory();

  const handleClick = () => {
    history.push(`product/${item.id}`);
  };
  return (
    <li className="main-item" key={item.id} onClick={handleClick} key={item.id}>
      <div className="main-item_image">
        <img src={item.Araray[0]} alt="" />
        <div className="main-item_images">
          <img src={item.Araray[1]} alt="" />
          <img src={item.Araray[2]} alt="" />
          <img src={item.Araray[3]} alt="" />
        </div>
      </div>
      <div className="main-item_content">
        <div className="main-item_top">
          <div className="main-item_name">
            <span>{item.name}</span>
          </div>
        </div>
        <div className="main-item_bottom">
          <div className="main-item_price">
            {item.promotionpencent > 0 && (
              <div className="price-dicount">
                <span> {formatPrice(item.originalPrice)}</span>
              </div>
            )}
            <div className="price">{formatPrice(item.price)}</div>
          </div>
        </div>
      </div>
    </li>
  );
}

export default Product;
