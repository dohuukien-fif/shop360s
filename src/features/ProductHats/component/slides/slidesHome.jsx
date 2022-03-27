import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import Slider from 'react-slick';
import SwiperCore, { FreeMode, Navigation, Pagination } from 'swiper';
// import 'swiper/components/navigation/navigation.scss';
import 'swiper/modules/navigation/navigation.scss'; // Navigation module
import 'swiper/modules/pagination/pagination.scss'; // Pagination module
import 'swiper/swiper.scss'; // core Swiper
import HatApi from './../../../../api/ProductHatApi';
import { formatPrice } from './../../../../utils';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';
SwiperCore.use([FreeMode, Pagination, Navigation]);
SlidesHome.propTypes = {};

function SlidesHome(props) {
  const [Imagess, setImages] = useState([]);
  const history = useHistory();

  useEffect(() => {
    const fetchApiRandom = async () => {
      try {
        const res = await HatApi.getAll();
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
    <Swiper
      slidesPerView={3}
      spaceBetween={30}
      // freeMode={true}
      navigation
      pagination={{
        clickable: true,
        // clickable: true,
      }}
      breakpoints={{
        300: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        400: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
      }}
      className="mySwiper"
      // data-swiper-autoplay="2000"
    >
      {Imagess.map((item, index) => (
        <SwiperSlide onClick={() => handleClick(item.id)}>
          {/* <div className="slides-image">
          <img src="https://360boutique.vn/wp-content/uploads/2021/12/Banner-WEb.jpg" alt="" />
        </div> */}
          {new Array(item.Araray)
            .filter((element) => element)
            .map((items, index) => (
              // {console.log(items)}
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
                    {/* <div>{` - ${item.promotionpencent} %`}</div> */}
                  </div>
                )}
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
      {/* <SwiperSlide>
      <img src="https://360boutique.vn/wp-content/uploads/2021/12/BANNER-WEB-1.jpg" alt="" />
    </SwiperSlide>
    <SwiperSlide>
      <img src=" https://360boutique.vn/wp-content/uploads/2021/11/web-copy.jpg" alt="" />
    </SwiperSlide>
    <SwiperSlide>
      <img src=" https://360boutique.vn/wp-content/uploads/2021/11/web-copy.jpg" alt="" />
    </SwiperSlide>
    <SwiperSlide>
      <img src=" https://360boutique.vn/wp-content/uploads/2021/11/web-copy.jpg" alt="" />
    </SwiperSlide> */}
    </Swiper>
  );
}

export default SlidesHome;
