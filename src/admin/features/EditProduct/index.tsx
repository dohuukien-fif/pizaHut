import * as React from 'react';
import { useParams } from 'react-router-dom';
import InputFeild from '../../../component/formControl/inputFeild';
import FormEdit from './formEdit';
import useEdit from './hooks/useEdit';
import './styles.scss';
export interface EditProps {}

export default function EditFeatures(props: EditProps) {
  const { productId } = useParams();

  const { dataSearch, LoadingSearch } = useEdit(Number(productId));

  const handleOnsubmitUpdate = (value: any) => {
    console.log('onnsubmit', value);
  };
  return (
    <div className="edit">
      <div className="edit__swapper">
        <div className="edit__title">
          <span>
            Edit Product <strong>*</strong>
          </span>
        </div>
        <div className="edit__form">
          <FormEdit dataSearch={dataSearch} onSubmits={handleOnsubmitUpdate} />
        </div>
      </div>
    </div>
  );
}
