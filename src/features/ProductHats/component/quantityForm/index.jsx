import React from 'react';
import PropTypes from 'prop-types';
// import Inputfield from 'component/form-control/inputField';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import QuantityField from './../../../../component/form-control/QuantitiFiend';
import { Button } from '@mui/material';
import { AiOutlineShoppingCart } from 'react-icons/ai';
AddTocartForm.propTypes = {};

function AddTocartForm({ onSubmits = null }) {
  const schema = yup.object().shape({
    quantity: yup
      .number()
      .required('kien dep trai')
      .min(1, 'please enter at leart 1 ')
      .typeError('please enter number'),
  });
  const form = useForm({
    defaultValues: {
      quantity: 1,
    },
    resolver: yupResolver(schema),
  });
  const handleSubmit = async (value) => {
    console.log('kien', value);
    if (onSubmits) {
      await onSubmits(value);
    }
  };
  return (
    <form onSubmit={form.handleSubmit(handleSubmit)}>
      <QuantityField name="quantity" label="Quantity" form={form} />

      <div className="info-btn">
        <button type="submit">
          <span>
            <AiOutlineShoppingCart />
          </span>{' '}
          <span>Add to cart</span>
        </button>
      </div>
    </form>
  );
}

export default AddTocartForm;
