import * as React from 'react';
import FormManager from '../formMannager';
import './styles.scss';
export interface ModalManagerProps {
  modal: boolean;
  handleCloseModal: () => void;
  onSubmit: (value: any) => void;
  closeRef: any;
}

export default function ModalManager({
  closeRef,
  modal,
  onSubmit,
  handleCloseModal,
}: ModalManagerProps) {
  const handleSubmitForm = (value: any) => {
    if (onSubmit) onSubmit(value);
  };
  return (
    <div
      className={modal ? 'manager__modal  active__manager--modal' : 'manager__modal'}
      ref={closeRef}
    >
      <div className="manager__modal--swap">
        <div className="manager__modal--title">
          <span>Thêm nhân viên mới</span>
        </div>
        <div className="manager__modal--form">
          <FormManager onSubmitValue={handleSubmitForm} handleCloseModal={handleCloseModal} />
        </div>
      </div>
    </div>
  );
}
