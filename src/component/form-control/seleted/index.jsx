import { Box, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';
import { Controller } from 'react-hook-form';
import './styles.scss';
InputField.propTypes = {
  form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,

  label: PropTypes.string,
  disabled: PropTypes.bool,
};

function InputField(props) {
  const { form, name, label, disabled, options } = props;
  const { errors } = form;
  const hasError = errors[name];

  return (
    <Controller
      name={name}
      control={form.control}
      render={({ onChange, onBlur, value, name }) => (
        <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">{label}</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={value}
              name={name}
              label="Age"
              onChange={onChange}
              onBlur={onBlur}
              error={!!hasError}
              helperText={errors[name]?.message}
            >
              {options.map((item, idx) => (
                <>
                  <MenuItem value={item.value}>{item.label}</MenuItem>
                </>
              ))}
            </Select>
          </FormControl>
        </Box>
      )}
    />
  );
}

export default InputField;
