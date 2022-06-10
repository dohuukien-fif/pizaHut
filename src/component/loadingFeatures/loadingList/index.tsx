import * as React from 'react';
import './styles.scss';
export interface IAppProps {}

export default function LoadingList(props: IAppProps) {
  return (
    <div className="lds-ripple">
      <div></div>
      <div></div>
    </div>
  );
}
