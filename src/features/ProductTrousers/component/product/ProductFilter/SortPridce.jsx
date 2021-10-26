import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/system';
import { FormControl, InputLabel, NativeSelect } from '@mui/material';
import './styles.scss';
SortPrice.propTypes = {};

function SortPrice({ onChanges }) {
  const handleChange = (e) => {
    const { value, name } = e.target;
    const newSort = {
      _sort: name,
      _order: value,
    };
    if (onChanges) {
      onChanges(newSort);
    }
    console.log(value, name);
  };
  return (
    <Box>
      <FormControl className="selectPrice">
        <NativeSelect
          sx={{ fontSize: '13px' }}
          // defaultValue={30}
          inputProps={{
            name: 'price',
            id: 'uncontrolled-native',
          }}
          onChange={handleChange}
        >
          <option>Mới nhất</option>
          <option value="asc">Giá thấp đến cáo</option>
          <option value="desc">Giá cao đến thấp</option>
        </NativeSelect>
      </FormControl>
    </Box>
  );
}

export default SortPrice;
