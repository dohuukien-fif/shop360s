import React from 'react';
import { formatPrice } from './../../../../../utils';
import QuantityForm from './../../quantityForm/index';
import './styles.scss';
//   product: PropTypes.array,
// };

function ProductInfo({ product, onChange }) {
  const {
    price,
    originalPrice,

    Size,
    information,

    name,
    promotionpencent,

    instruct,
  } = product;
  const onChangeQuantity = (newvalue, value) => {
    if (onChange) {
      onChange(newvalue, value);
    }
  };
  return (
    <div className="info">
      <div className="info-name">
        <h1>{name}</h1>
      </div>
      <div className="info-price">
        <span className="info-price-prices">{formatPrice(price)}</span>
        {promotionpencent > 0 && (
          <div className="info-price-discount">
            <span>{formatPrice(originalPrice)}</span>
            <div> {` - ${promotionpencent} %`}</div>
          </div>
        )}
      </div>
      {/* <div className="info-size">
        <h2>Cỡ</h2>
        {Size.map((item, index) => (
          <Sizes item={item} onChange={handleSize} />
        ))}
      </div> */}

      <div className="info-quantity">
        <QuantityForm item={Size} onSubmits={onChangeQuantity} />
      </div>
      <div className="info-information">
        <h2>THÔNG TIN</h2>
        <ul>
          {information.map((item, index) => (
            <>
              <li key={index}>{item}</li>
            </>
          ))}
        </ul>
      </div>

      {/* <img src={product} alt="" /> */}
      {/* <div className="thumnai-images">
        {product.images.map((item, index) => (
          <h1>{item.img}</h1>
        ))}
      </div> */}
      <div className="info-description">
        <h2>Mô tả</h2>
        <ul>
          {instruct.map((item, index) => (
            <>
              <li key={index}>{item}</li>
            </>
          ))}
        </ul>
        {/* <ul>
          {information.map((item, index) => (
            <Description des={item} />
          ))}
        </ul> */}
      </div>
    </div>
  );
}

export default ProductInfo;
