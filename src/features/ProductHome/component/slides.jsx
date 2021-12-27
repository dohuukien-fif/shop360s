import React from 'react';
import PropTypes from 'prop-types';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
function slidesProduct(props) {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    arrows: true,
    slidesToScroll: 1,
    autoplay: true,
    className: 'slides',
    autoplaySpeed: 5000,
    cssEase: 'linear',
  };
  return (
    <div>
      <Slider {...settings}>
        <div className="slides-image">
          <img src="https://360boutique.vn/wp-content/uploads/2021/12/Banner-WEb.jpg" alt="" />
        </div>
        <div className="slides-image">
          <img src="https://360boutique.vn/wp-content/uploads/2021/10/WEB-LEN.jpg" alt="" />
        </div>
        <div className="slides-image">
          <img src=" https://360boutique.vn/wp-content/uploads/2021/11/web-copy.jpg" alt="" />
        </div>

        {/* <div className="slides-image">
          <img
            src="https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZHVjdHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
        </div> */}
      </Slider>
    </div>
  );
}

export default slidesProduct;
