import React from 'react';
import PropTypes from 'prop-types';
import SearchCode from './filterCode';
import FilterTotal from './FilterTotal';
import './styles.scss';
FilterFeatures.propTypes = {
  onSubmits: PropTypes.func,
};

function FilterFeatures({ onSubmits }) {
  const handleSearchCode = (value) => {

    if(value ===""){
     return window.location.reload()
    }else{

     const newValue = {
     code: Number(value),
    };
    onSubmits(value !== '' ? newValue : '');
    }
   
    console.log('code', value);
  };

  const handleSearchTotal = (value) => {
    onSubmits(value);
  };
  return (
    <div className="filter_order">
      <SearchCode onSubmitCode={handleSearchCode} />
      <FilterTotal onSubmitTotal={handleSearchTotal} />
    </div>
  );
}

export default FilterFeatures;
