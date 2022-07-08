import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { formatPrice } from './../../../../../utils/index';
import './styles.scss';

Product.propTypes = {};

function Product({ product }) {
  const [Index, setIndex] = useState(0);
  const { name, id, Araray, originalPrice, promotionpencent, price } = product;
  const history = useHistory();
  useEffect(() => {
    AOS.init();
  }, []);
  const handleClick = () => {
    history.push(`Kinh/${product.id}`);
  };

  return (
    <div className="product_items" key={id} data-aos="fade-up" onClick={handleClick}>
      {product.promotionpencent > 0 && <span className="onsale">Giảm giá!</span>}
      <div className="product_figure">
        <img src={Araray[Index]} alt="" />
        <div className="product_figures">
          {Araray.map((items, index) => (
            <img key={index} src={items} alt="" onMouseMove={() => setIndex(index)} />
          ))}
        </div>
      </div>
      <div className="product_body">
        <header className="product_header">
          <div className="product_name">
            <span>{name}</span>
          </div>
        </header>
        <footer className="product_footer">
          <div className="product_price">
            <span>{formatPrice(price)}</span>
          </div>
          {promotionpencent > 0 && (
            <div className="product_discount">
              <span>{formatPrice(originalPrice)}</span>
              <span>{` - ${promotionpencent}%`}</span>
            </div>
          )}
        </footer>
      </div>
    </div>
  );
}

export default Product;
