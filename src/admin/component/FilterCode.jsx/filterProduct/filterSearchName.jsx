import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './SearchProduct.scss';
import { AiOutlineSearch } from 'react-icons/ai';
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
    <div className="search_product">
      <div className="search_inputSearch">
        <div className="code_search">
          <input
            type="text"
            value={Search}
            onChange={handleChange}
            placeholder="Nhập tên sản phẩm "
          />
          <div className="search_btn">
            <button onClick={handleSubmitCode}>
              {' '}
              <AiOutlineSearch />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchNameFeatures;
