import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
// import Inputfield from 'component/form-control/inputField';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import QuantityField from './../../../../component/form-control/QuantitiFiend';
import Setbutton from './../Description/ProductInfo/size';

import CircularProgress from '@mui/material/CircularProgress';
AddTocartForm.propTypes = {};

function AddTocartForm({ item, onSubmits = null }) {
  // const curentInput = useRef();
  const [values, setvalues] = useState({});
  // const [isActive, setActive] = useState(false);
  const [eror, seteror] = useState();
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

  const handleToggle = (newValue) => {
    setvalues((prev) => ({
      ...prev,
      size: newValue,
    }));
    seteror('');

    console.log('kiensssssssss', newValue);
  };

  const handleSubmit = async (value) => {
    // if (Object.values(values) === '') {
    //   seteror('vui lòng chon size');
    //   return;
    // }
    // if (Object.values(values) === undefined) {
    //   seteror('vui lòng chon size');
    // }

    if (Object.keys(values).length === 0) {
      seteror('vui lòng chon size');
    } else {
      return new Promise((resolve) => {
        setTimeout(() => {
          // setLoading(true);
          if (onSubmits) {
            onSubmits(values, value);
          }
          // setTimeout(() => {
          //   setLoading(false);
          // }, 2000);
          seteror('');
          form.reset();
          resolve(true);
        }, 2000);
      });
    }
  };
  const { isSubmitting } = form.formState;
  return (
    <>
      <div className="info-size">
        <h2>Cỡ</h2>

        <Setbutton item={item} onChange={handleToggle} />
      </div>
      <div className="info-error"> {eror}</div>
      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <QuantityField name="quantity" label="Quantity" form={form} />

        <div className="info-btn">
          <button type="submit">
            <span>
              {' '}
              {isSubmitting && (
                <CircularProgress
                  // sx={{ fontSize: '10px' }}
                  style={{ width: '18px', height: '18px', marginRight: '10px' }}
                  color="inherit"
                />
              )}
              Add to cart
            </span>
          </button>
        </div>
      </form>
    </>
  );
}

export default AddTocartForm;
