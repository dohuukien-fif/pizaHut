import * as React from 'react';
import { Control, useController } from 'react-hook-form';
export interface SelectOption {
  label?: string;
  value: number | string;
}

export interface RadioProps {
  name: string;
  control: Control<any>;
  value: any;

  onClick?: any;
}

export default function RadioField({ name, control, value, onClick }: RadioProps) {
  const {
    field: { onChange, onBlur },
    fieldState: { invalid, error },
  } = useController({
    name,
    control,
  });
  return (
    <input
      onClick={onClick}
      type="radio"
      name={name}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
    />
  );
}
