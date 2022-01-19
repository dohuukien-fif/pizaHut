import * as React from 'react';
import './styles.scss';
export interface LoadingInputProps {}

export default function LoadingInput(props: LoadingInputProps) {
  return (
    <div className="ll">
      <div className="lds-spinnerrr">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
