import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './categories.scss';
Categories.propTypes = {};

function Categories({ productCategories, onSubmitsCategorie }) {
  const [value, setValue] = useState();

  const hadleChange = (e) => {
    if (e.target.value === '') return;

    if (onSubmitsCategorie) onSubmitsCategorie(e.target.value);
  };
  return (
    <div className="categories">
      <div className="categories_title">
        <span>Categories</span>
      </div>
      <div className="categories_content">
        <div className="categories_section">
          {productCategories.map((item, idx) => (
            <div className="categories_group" key={idx}>
              <input type="radio" name="categories" value={item.name} onChange={hadleChange} />
              <span>{item.name}</span>
            </div>
          ))}
        </div>
        <div className="slidePrice_mobile">
          <select onChange={hadleChange}>
            <option value="">Categories</option>
            {productCategories.map((item, idx) => (
              <option className="categories_option" value={item.name} key={idx}>
                {item.name}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}

export default Categories;
