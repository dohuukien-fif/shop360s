import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import { formatPrice } from './../../../../../utils';
import Sizes from './size';
import QuantityForm from './../../quantityForm/index';
import Description from './description';
import {
  AiFillFacebook,
  AiOutlineTwitter,
  AiFillInstagram,
  AiOutlineStar,
  AiFillStar,
} from 'react-icons/ai';
import { BsFillCartCheckFill } from 'react-icons/bs';
//   product: PropTypes.array,
// };

function ProductInfo({ product, onChange }) {
  const {
    price,
    originalPrice,
    origin,
    Size,
    information,
    color,
    name,
    promotionpencent,
    description,

    sex,
    Designs,
    categoryName,
    size,
    evaluate,
  } = product;
  // const onChangeQuantity = (newvalue) => {
  //   console.log(newvalue);
  // };
  // const handleSize = (newvalue) => {
  //   console.log('sex', newvalue);
  // };
  const onChangeQuantity = (newvalue) => {
    if (onChange) {
      onChange(newvalue);
    }
  };
  return (
    <div className="info_glass">
      <div className="info_glass-name">
        <h1>{name}</h1>
      </div>
      <div className="infomation">
        <div className="infomation_origin">
          <span>Mã SP : </span>
          <span>{evaluate}</span>
        </div>
        <div className="infomation_origin">
          <span>Xuất Xứ : </span>
          <span>{origin}</span>
        </div>
        <div className="infomation_category">
          <span>Danh mục : </span>
          <span>{categoryName}</span>
        </div>
      </div>
      <div className="info_glass-evaluate">
        <span>Đánh giá : </span>
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />( {size} )<span>Viết đánh giá</span>
      </div>
      <div className="info_glass-price">
        <span className="info_glass-price-prices">{formatPrice(price)}</span>
        {promotionpencent > 0 && (
          <div className="info_glass-price-discount">
            <span>{formatPrice(originalPrice)}</span>
            <div> {`Giảm - ${promotionpencent} %`}</div>
          </div>
        )}
      </div>
      <div className="size">
        {/* <h2>Cỡ</h2>
        {Size.map((item, index) => (
          <Sizes item={item} onChange={handleSize} />
        ))} */}
        {sex !== undefined && (
          <div className="size_sex">
            <span>Giới tính : </span> <span>{sex}</span>
          </div>
        )}

        {color !== undefined && (
          <div className="size_color">
            <span>Màu sắc : </span> <span>{color}</span>
          </div>
        )}

        {origin !== undefined && (
          <div className="size_origin">
            <span>Xuất xứ : </span> <span>{origin}</span>
          </div>
        )}

        {Designs !== undefined && (
          <div className="size_origin">
            <span>Phân loại : </span> <span>{Designs}</span>
          </div>
        )}
      </div>

      <div className="info_glass-quantity">
        <QuantityForm onSubmits={onChangeQuantity} />
      </div>
      <div className="info_glass-information">
        <h2>THÔNG TIN</h2>
        <ul>
          {information.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      {/* <img src={product} alt="" /> */}
      {/* <div className="thumnai-images">
        {product.images.map((item, index) => (
          <h1>{item.img}</h1>
        ))}
      </div> */}
      <div className="description">
        <h2>chia sẻ qua</h2>
        <div className="description_icon">
          <div className="description_facebook">
            <AiFillFacebook />
          </div>
          <div className="description_twice">
            <AiOutlineTwitter />
          </div>
          <div className="description_instagram">
            <AiFillInstagram />
          </div>
        </div>
        {/* <h2>Mô tả</h2>
        <p>{description}</p> */}
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
