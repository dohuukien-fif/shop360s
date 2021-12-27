import React, { useState, useEffect } from 'react';

import Slider from 'react-slick';
import ProductApi from './../../../../api/productapi';
import { useHistory } from 'react-router';
import { formatPrice } from './../../../../utils';
SlidesHome.propTypes = {};

function SlidesHome(props) {
  const [Imagess, setImages] = useState([]);
  const history = useHistory();
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };

  useEffect(() => {
    const fetchApiRandom = async () => {
      try {
        const res = await ProductApi.getAll();
        setImages(res);
        console.log(res);
      } catch (error) {}
    };
    fetchApiRandom();
  }, []);
  const handleClick = (newId) => {
    history.push(`${newId}`);
  };
  return (
    <Slider {...settings}>
      {Imagess.slice(Math.floor(Math.random() * Imagess.length)).map((item, index) => (
        <div key={index} className="sidess" onClick={() => handleClick(item.id)}>
          {new Array(item.Araray)
            .filter((e) => e)
            .map((items, index) => (
              <img src={items[0]} alt="" />
            ))}
          <div className="content">
            <div className="content__top">
              <div className="content__top-name">{item.name}</div>
            </div>
            <div className="content__bottom">
              <div className="content__bottom-prices">
                <div className="content__bottom-prices-price">{formatPrice(item.price)}</div>
                {item.promotionpencent > 0 && (
                  <div className="content__bottom-prices-discount">
                    <div> {formatPrice(item.originalPrice)}</div>
                    <div>{` - ${item.promotionpencent} %`}</div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
}

export default SlidesHome;
