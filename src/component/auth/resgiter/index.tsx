import * as React from 'react';
import FormControlRegister from './formControl';
import './styles.scss';
export interface RegisterFeaturesProps {}

export default function RegisterFeatures(props: RegisterFeaturesProps) {
  return (
    <div className="register">
      <FormControlRegister />
    </div>
  );
}
