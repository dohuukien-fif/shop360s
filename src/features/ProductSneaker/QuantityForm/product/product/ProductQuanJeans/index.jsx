import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import { formatPrice } from './../../../../../../utils/index';
import { useHistory } from 'react-router';
Product.propTypes = {};

function Product({ product }) {
  const { name, id, Araray, originalPrice, promotionpencent, price } = product;
  const history = useHistory();
  const handleClick = () => {
    history.push(`${product.id}`);
  };
  return (
    <div className="main_items-trousersJean" key={id} onClick={handleClick}>
      <div className="trousersJean_image">
        <img src={Araray[0]} alt="" />
        <div className="trousers_images">
          {Araray.map((items, index) => (
            <img src={items} alt="" />
          ))}
        </div>
      </div>
      <div className="content_trousers">
        <div className="content_trousers-top">
          <div className="content_trousers-top-name">
            <span>{name}</span>
          </div>
        </div>
        <div className="content_trousers-bottom">
          <div className="content_trousers-bottom-price">
            <span>{formatPrice(price)}</span>
          </div>
          {promotionpencent > 0 && (
            <div className="content_trousers-bottom-discount">
              <span>{formatPrice(originalPrice)}</span>
              <span>{` - ${promotionpencent}%`}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Product;
