import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { remove } from 'dom-helpers';
import QuantityField from './../../../component/form-control/QuantitiFiend/index';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { formatPrice } from './../../../utils/index';

import { Typography, Box, Link } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { BsFillTrashFill } from 'react-icons/bs';
CartItem.propTypes = {};

function CartItem({ items, onSubmit, removes }) {
  const { id, product, quantity, size } = items;
  const [Sizessss, setSizessss] = useState('');
  console.log(items);
  const schema = yup.object().shape({
    quantity: yup
      .number()
      .required('Please enter quantity!')
      .min(1, 'Please enter smallest equal 1!')
      .typeError('Please enter a number!'),
  });
  const form = useForm({
    defaultValues: {
      quantity: quantity,
    },
    resolver: yupResolver(schema),
  });
  // const thumbnailUrl = product.thumbnail
  //     ? STATIC_HOST + product.thumbnail?.url
  //     : THUMBNAIL_PLACEHOLDER;

  const handleSubmit = (quantity, sizes) => {
    if (!onSubmit) return;
    const values = {
      id,
      quantity,
    };
    onSubmit(values);
  };

  const handleChange = (quantity) => {
    handleSubmit(quantity);
  };

  const handleRemoveItem = () => {
    if (!removes) return;
    removes(id);
  };
  // const handleClick = (sizes) => {
  //   handleSubmit(sizes);
  //   console.log(sizes);
  // };
  return (
    <div className="cart_item">
      <div className="cart_name--mobile">
        <span>
          {' '}
          <CloseIcon onClick={handleRemoveItem} />
        </span>
        <h3>{product.name}</h3>
      </div>
      <div className="cart_body">
        <header className="cart_header">
          <div className="cart_figure">
            <img src={product.Araray[0]} />
          </div>
          <div className="cart_name">
            <h3>{product.name}</h3>
          </div>
        </header>

        <footer className="cart_footer">
          <div className="cart_form">
            <form onSubmit={form.handleSubmit(handleSubmit)}>
              <QuantityField form={form} name="quantity" onChangeRHF={handleChange} />
            </form>
          </div>

          <div className="cart_price">
            <span>
              {formatPrice(product.price)} {` x ${quantity}`}
            </span>

            <span>{formatPrice(product.price * quantity)}</span>

            <span>
              <BsFillTrashFill onClick={handleRemoveItem} style={{ cursor: 'pointer' }} />
            </span>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default CartItem;
