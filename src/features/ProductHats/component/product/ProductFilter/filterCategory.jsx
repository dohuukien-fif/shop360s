import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import CategoryApi from './../../../../../api/categorymu';
import { FormControl, NativeSelect } from '@mui/material';

import './styles.scss';
FilterCategory.propTypes = {
  onChanges: PropTypes.func,
};

function FilterCategory({ onChanges, filter }) {
  const [category, setcategory] = useState([]);
  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const res = await CategoryApi.getAll();
        setcategory(res);
      } catch (error) {}
    };
    fetchCategory();
  }, []);
  const handleChange = (e) => {
    const { value } = e.target;
    if (onChanges) {
      onChanges(value);
    }
  };
  return (
    <div>
      <FormControl fullWidth sx={{ marginTop: '30px' }} className="filter-category">
        {/* <InputLabel sx variant="standard" htmlFor="uncontrolled-native">
          Danh Mục
        </InputLabel> */}
        <NativeSelect
          sx={{ fontSize: '14px' }}
          // defaultValue={30}
          inputProps={{
            name: 'age',
            id: 'uncontrolled-native',
          }}
          onChange={handleChange}
        >
          <option>Danh mục</option>
          {category.map((item, index) => (
            <option key={index} value={item.name}>
              {item.name}
            </option>
          ))}
        </NativeSelect>
      </FormControl>
    </div>
  );
}

export default FilterCategory;
