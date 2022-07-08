import { yupResolver } from '@hookform/resolvers/yup';
import CircularProgress from '@mui/material/CircularProgress';
import PropTypes from 'prop-types';
import React from 'react';
// import Inputfield from 'component/form-control/inputField';
import { useForm } from 'react-hook-form';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import * as yup from 'yup';
import QuantityField from './../../../../component/form-control/QuantitiFiend';
AddTocartForm.propTypes = {
  onSubmits: PropTypes.func,
};

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
    return new Promise((resolve) => {
      setTimeout(() => {
        // setLoading(true);
        if (onSubmits) {
          onSubmits(value);
        }
        // setTimeout(() => {
        //   setLoading(false);
        // }, 2000);

        form.reset();
        resolve(true);
      }, 2000);
    });
  };
  const { isSubmitting } = form.formState;
  return (
    <form onSubmit={form.handleSubmit(handleSubmit)}>
      <QuantityField sx={{ width: 50 }} name="quantity" label="Quantity" form={form} />

      <div className="info-btn">
        <button type="submit">
          <span>
            <AiOutlineShoppingCart />
          </span>{' '}
          <span>
            Add to cart
            {isSubmitting && (
              <CircularProgress
                // sx={{ fontSize: '10px' }}
                style={{ width: '18px', height: '18px', marginLeft: '10px' }}
                color="inherit"
              />
            )}
          </span>
        </button>
      </div>
    </form>
  );
}

export default AddTocartForm;
