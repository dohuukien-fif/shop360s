import { AddCircleOutline, RemoveCircleOutline } from '@mui/icons-material';
import { FormControl, FormHelperText, IconButton, OutlinedInput } from '@mui/material';
import { Box } from '@mui/system';
import PropTypes from 'prop-types';
import React from 'react';
import { Controller } from 'react-hook-form';

QuantityField.propTypes = {
  form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,

  label: PropTypes.string,
  disabled: PropTypes.bool,
};

// const useStyles = makeStyles((theme) => ({
//   root: {},

//   box: {
//     display: 'flex',
//     flexFlow: 'row nowrap',
//     alignItems: 'center',
//     maxWidth: '200px',
//   },
// }));

function QuantityField(props) {
  //   const classes = useStyles();
  const { form, name, label, disabled, onChangeRHF } = props;
  const { errors, setValue } = form;
  const hasError = !!errors[name];
  const handleChange = (value) => {
    if (!onChangeRHF) return;
    onChangeRHF(value);
  };
  return (
    <FormControl error={hasError} width="50%" margin="normal" variant="outlined" size="small">
      <Controller
        name={name}
        control={form.control}
        render={({ onChange, onBlur, value, name }) => (
          <Box>
            <IconButton
              onClick={() =>
                setValue(name, Number.parseInt(value) ? Number.parseInt(value) - 1 : 1)
              }
            >
              <RemoveCircleOutline />
            </IconButton>

            <OutlinedInput
              sx={{ width: '100px' }}
              id={name}
              type="number"
              disabled={disabled}
              value={value}
              onChange={handleChange(value)}
              onBlur={onBlur}
            />

            <IconButton
              onClick={() =>
                setValue(name, Number.parseInt(value) ? Number.parseInt(value) + 1 : 1)
              }
            >
              <AddCircleOutline />
            </IconButton>
          </Box>
        )}
      />

      <FormHelperText>{errors[name]?.message}</FormHelperText>
    </FormControl>
  );
}

export default QuantityField;
