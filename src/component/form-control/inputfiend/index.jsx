import * as React from 'react';

import PropTypes from 'prop-types';

import { useController, Control } from 'react-hook-form';

// export interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
//   name: string;
//   control: Control<any>;
//   label?: string;
// }

export default function Inputfeild({ name, control, label, ...inputProps }) {
  const {
    field: { value, onChange, onBlur },
  } = useController({
    name,
    control,
  });

  return (
    <>
      <input type="text" name={name} value={value} onChange={onChange} onBlur={onBlur} />
    </>
  );
}
