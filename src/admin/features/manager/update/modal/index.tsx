import * as React from 'react';
import { DataProps } from '../..';
import FormUpdateManager from '../formMannagerUpdate';

import './styles.scss';
export interface UpdateManagerProps {
  modal: boolean;
  handleCloseModal: () => void;
  onSubmit: (value: any) => void;
  closeRef: any;
  dataUpdate: any;
}

export default function UpdateManager({
  closeRef,
  modal,
  onSubmit,
  handleCloseModal,
  dataUpdate,
}: UpdateManagerProps) {
  const handleSubmitForm = (value: any) => {
    if (onSubmit) onSubmit(value);
    console.log('updateModal', value);
  };
  return (
    <div
      className={modal ? 'manager__update  active__manager--update' : 'manager__update'}
      ref={closeRef}
    >
      <div className="manager__update--swap">
        <div className="manager__update--title">
          <span>Thêm nhân viên mới</span>
        </div>
        <div className="manager__update--form">
          <FormUpdateManager
            onSubmitValue={handleSubmitForm}
            handleCloseModal={handleCloseModal}
            dataUpdate={dataUpdate}
          />
        </div>
      </div>
    </div>
  );
}
