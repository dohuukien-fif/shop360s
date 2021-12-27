import { yupResolver } from '@hookform/resolvers/yup';
import CircularProgress from '@mui/material/CircularProgress';
import React, { useState } from 'react';
// import Inputfield from 'component/form-control/inputField';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import QuantityField from './../../../../component/form-control/QuantitiFiend';
import Setbutton from './../Description/detailinfo/size';
AddTocartForm.propTypes = {};

function AddTocartForm({ item, onSubmits = null }) {
  const [values, setvalues] = useState({});
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
    console.log('kien', newValue);
  };

  const handleSubmit = async (value) => {
    if (Object.keys(values).length === 0) {
      seteror('chua có');
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
    // console.log('kien', values);
  };
  const { isSubmitting } = form.formState;
  return (
    <>
      <div className="info-size">
        <h2>Cỡ</h2>

        {item.map((item, index) => (
          <Setbutton key={index} item={item} onChange={handleToggle} />
          // <button className={isActive ? 'actives' : null}>
          //   <span onClick={() => handleToggle(item)}>{item}</span>
          // </button>
        ))}
        <div className="info-error"> {eror}</div>
      </div>
      {eror}
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
