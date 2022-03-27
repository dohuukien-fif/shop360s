import React from 'react';
import PropTypes from 'prop-types';
import './newProduct.scss';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import Inputfeild from '../../../component/form-control/inputfiend';
import FormNewProduct from '../../formNewProduct';
NewproductFeatures.propTypes = {};

function NewproductFeatures(props) {
  const handleFormSubmit = (formValues) => {
    console.log(formValues);

    // one submit index + 1 để check address old =>dialog
  };
  return (
    <div className="newProduct">
      <div className="newProduct_title">
        <span>New Product</span>
      </div>

      <div className="newProduct_form">
        <FormNewProduct onSubmits={handleFormSubmit} />
      </div>
    </div>
  );
}

export default NewproductFeatures;
