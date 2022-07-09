import * as React from 'react';
import './styles.scss';
export interface LoadingFileProps {}

export default function LoadingFile(props: LoadingFileProps) {
  return (
    <div className="loading__file">
      <div className="lds-spinner">
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
