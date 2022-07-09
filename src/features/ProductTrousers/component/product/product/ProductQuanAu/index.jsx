import React, { useEffect, useState } from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useHistory } from 'react-router';
import { formatPrice } from './../../../../../../utils/index';
Product.propTypes = {};

function Product({ product }) {
  const [Index, setIndex] = useState(0);
  const { name, id, Araray, originalPrice, promotionpencent, price } = product;
  useEffect(() => {
    AOS.init();
  }, []);
  const history = useHistory();
  const handleClick = () => {
    history.push(`${product.id}`);
  };
  return (
    <div className="trousers_items" key={id} data-aos="fade-up" onClick={handleClick}>
      {product.promotionpencent > 0 && <span className="onsale">Giảm giá!</span>}
      <div className="trousers_figure">
        <img src={Araray[Index]} alt="" />
        <div className="trousers_figures">
          {Araray.map((items, index) => (
            <img key={index} src={items} alt="" onMouseMove={() => setIndex(index)} />
          ))}
        </div>
      </div>
      <div className="trousers_body">
        <header className="trousers_header">
          <div className="trousers_name">
            <span>{name}</span>
          </div>
        </header>
        <footer className="trousers_footer">
          <div className="trousers_price">
            <span>{formatPrice(price)}</span>
          </div>
          {promotionpencent > 0 && (
            <div className="trousers_discount">
              <span>{formatPrice(originalPrice)}</span>
              {/* <span>{` - ${promotionpencent}%`}</span> */}
            </div>
          )}
        </footer>
      </div>
    </div>
  );
}

export default Product;
