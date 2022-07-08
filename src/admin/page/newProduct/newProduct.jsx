import React from 'react';
import FormNewProduct from '../../formNewProduct';
import './newProduct.scss';
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
