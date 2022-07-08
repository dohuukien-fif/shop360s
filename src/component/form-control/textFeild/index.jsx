import * as React from 'react';

import { useController, Control } from 'react-hook-form';

// export interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
//   name: string;
//   control: Control<any>;
//   label?: string;
// }

export default function Textfield({ name, control, label, placeholder, ...inputProps }) {
  const {
    field: { value, onChange, onBlur },
  } = useController({
    name,
    control,
  });

  return (
    <>
      <textarea
        type="text"
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
        la
      />
    </>
  );
}
