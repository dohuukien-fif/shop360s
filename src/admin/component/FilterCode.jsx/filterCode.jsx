import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './filterCode.scss';
import { AiOutlineSearch } from 'react-icons/ai';
SearchCode.propTypes = {};

function SearchCode({ onSubmitCode }) {
  const [Search, setSearch] = useState('');

  const handleChange = (e) => {
    const { value } = e.target;
    setSearch(value);
  };

  const handleSubmitCode = () => {
    if (onSubmitCode) onSubmitCode(Search);
  };

  return (
    <div className="code">
      <div className="code_inputSearch">
        <span>Nhập mã code</span>
        <div className="code_search">
          <input type="text" value={Search} onChange={handleChange} placeholder="Nhập code " />

          <div className="code_btn">
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

export default SearchCode;
