import * as React from 'react';

import PropTypes from 'prop-types';

import { useController, Control } from 'react-hook-form';

export interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  control: Control<any>;
  label?: string;
}

export default function TextFied({ name, control, label, ...inputProps }: InputFieldProps) {
  const {
    field: { value, onChange, onBlur, ref },
    fieldState: { invalid, error },
  } = useController({
    name,
    control,
  });

  return (
    <>
      <textarea name={name} value={value} onChange={onChange} onBlur={onBlur} />
    </>
  );
}
