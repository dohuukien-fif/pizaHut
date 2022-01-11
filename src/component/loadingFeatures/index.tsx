import * as React from 'react';
import './styles.scss';
export interface LoadingFeaturesProps {}

export default function LoadingFeatures(props: LoadingFeaturesProps) {
  return (
    <div className="loading_order">
      <div className="lds-ripple">
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
