import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './SearchProduct.scss';
SearchNameFeatures.propTypes = {};

function SearchNameFeatures({ Onsubmit }) {
  const [Search, setSearch] = useState('');

  const handleChange = (e) => {
    const { value } = e.target;
    setSearch(value);
    console.log(value);
  };

  const handleSubmitCode = () => {
    console.log(Search);
    if (Onsubmit) Onsubmit(Search);
  };

  return (
    <div className="search">
      <div className="search_inputSearch">
        <input
          type="text"
          value={Search}
          onChange={handleChange}
          placeholder="Nhập tên sản phẩm "
        />
      </div>
      <div className="search_btn">
        <button onClick={handleSubmitCode}>Tìm kiếm</button>
      </div>
    </div>
  );
}

export default SearchNameFeatures;
