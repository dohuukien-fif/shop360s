import React from 'react';
import PropTypes from 'prop-types';
import { formatPrice } from '../../../../utils';
import './range.scss';
RangePrice.propTypes = {};

function RangePrice({ onSubmitRange, productMaxPrice }) {
  const DataRangePridce = [
    {
      nameValue: 'price',
      sort: 'price_lte',
      name: 'All',
      price: Math.ceil(Math.max(...productMaxPrice) - 1),
    },
    {
      nameValue: 'price',
      sort: 'price_lte',
      name: `<= ${formatPrice(500000)}`,
      price: 500000,
    },
    {
      nameValue: 'price',
      sort: 'price_lte',
      name: `<= ${formatPrice(1000000)}`,
      price: 1000000,
    },
    {
      nameValue: 'price',
      sort: 'price_lte',
      name: `> ${formatPrice(1000000)}`,
      price: Math.ceil(Math.max(...productMaxPrice)),
    },
  ];

  const handleChangeRadio = (e) => {
    const { name, value, dirName } = e.target;
    if (Number(value) === Math.ceil(Math.max(...productMaxPrice))) {
      onSubmitRange({ price_gte: 1000000, [dirName]: value });
    } else {
      onSubmitRange({ price_gte: 0, [dirName]: value });
    }

    console.log();
  };

  return (
    <div className="range">
      <div className="range_title">Multi Range</div>
      <div className="range_content">
        {DataRangePridce.map((item, index) => (
          <div className="range_group" key={index}>
            <input
              type="radio"
              name={item.nameValue}
              dirname={item.sort}
              value={item.price}
              onChange={handleChangeRadio}
            />
            <span>{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RangePrice;
