import * as React from 'react';
import FormConTrol from './formControl';
import './styles.scss';
export interface LoginFeaturesProps {}

export default function LoginFeatures(props: LoginFeaturesProps) {
  return (
    <div className="login">
      <FormConTrol />
    </div>
  );
}
