import React, { useState, useEffect } from 'react';

import './styles.scss';
import { formatPrice } from './../../../../utils';
import { useHistory } from 'react-router';
import AOS from 'aos';
import 'aos/dist/aos.css';
Product.propTypes = {};

function Product({ item }) {
  const [Index, setIndex] = useState(0);
  const history = useHistory();
  useEffect(() => {
    AOS.init();
  }, []);
  const handleClick = () => {
    history.push(`Trang-chu/${item.id}`);
  };
  return (
    <li className="main-item " data-aos="fade-up" onClick={handleClick}>
      <div className="main-item_image">
        <img src={item.Araray[Index]} alt="" />
        <div className="main-item_images">
          {item.Araray.slice(0, 4).map((item, index) => (
            <>
              <img src={item} alt="" onMouseMove={() => setIndex(index)} />
            </>
          ))}
          {/* <img src={item.Araray[1]} alt="" />
          <img src={item.Ar aray[2]} alt="" />
          <img src={item.Araray[3]} alt="" /> */}
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
