import * as React from 'react';
import { yupResolver } from '@hookform/resolvers/yup';

import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import InputFeild from '../../../component/formControl/inputFeild';
import './styles.scss';
import { uid } from '../../../utils';
import TextFied from '../../../component/formControl/textFeild';
export interface NewProductProps {}
export interface FormProps {
  category: string;
  image: string;
  name: string;
  price: number;
  detail: string;
  Spice: string;
}
export default function NewProduct(props: NewProductProps) {
  const [size, setSize] = React.useState<Array<FormProps>>([]);
  const [image, setfile] = React.useState<string>('');
  const [openSize, setopenSize] = React.useState<boolean>(false);
  const [openSoles, setopenSoles] = React.useState<boolean>(false);
  const [inputSize, setinputSize] = React.useState<any>({
    name: '',
    price: 0,
  });
  const [soles, setsoles] = React.useState<any>([]);

  const [item, setitem] = React.useState<any>([]);
  const { register, handleSubmit, control, reset } = useForm({
    defaultValues: {
      category: '',

      name: '',
      price: '',
      detail: '',
      spice: '',

      // shipper: '' || 'giao ngay',
    },
  });

  const id = uid();

  const setOpenSize = () => {
    setopenSize((x) => !x);
  };
  const setOpenSoles = () => {
    setopenSoles((x) => !x);
  };

  const handleChage = (e: any) => {
    const { name, value } = e.target;

    setinputSize((prev: any) => ({
      ...prev,
      [name]: value,
    }));

    console.log(name, value);
  };

  const handleChageSoles = (e: any) => {
    const { name, value } = e.target;

    setitem([value]);

    console.log(name, value);
  };

  const handleButtonSoles = () => {
    if (item.length === 0) return;
    setsoles((prev: any) => [...prev, { item }]);
    setitem([]);
  };

  console.log(Object.values(inputSize).includes(''));
  const handlButton = () => {
    if (Object.keys(inputSize).length === 0) return;
    if (Object.values(inputSize).includes('')) return;
    if (Object.values(inputSize).includes(0)) return;
    setSize((prev: any) => [...prev, inputSize]);
    setinputSize({ name: '', price: 0 });
  };
  const handleChangeFiles = (e: any) => {
    const file = e.target.files;

    const reader = new FileReader();
    reader.readAsDataURL(file[0]);
    reader.onload = (e: any) => {
      setfile(e.target.result);
      localStorage.setItem('fileImage', JSON.stringify(e.target.result));
    };
  };
  console.log('[size]', size, inputSize);
  console.log('[soles]', soles, item);
  const handleFormSubmit = async (value: any) => {
    console.log({ ...value, size, soles, image, id });

    setSize([]);
    setsoles([]);
    reset();
  };
  return (
    <div className="newProduct">
      <div className="newProduct__swapper">
        <div className="newProduct__title">
          <span>NewProduct</span>
        </div>
        <form onSubmit={handleSubmit(handleFormSubmit)}>
          <div className="newProduct__group">
            <label>
              Id <strong>*</strong>
            </label>
            <span>{id}</span>
          </div>
          <div className="newProduct__group">
            <label>
              Categories <strong>*</strong>
            </label>
            <InputFeild control={control} name="category" />
          </div>
          <div className="newProduct__group">
            <label>
              Image <strong>*</strong>
            </label>
            <input type="file" id="file" accept="image/*" onChange={handleChangeFiles} />

            <label htmlFor="file">
              <span>Upload File</span>
            </label>

            {image && <img src={image} alt="" />}
          </div>
          <div className="newProduct__group">
            <label>
              Name <strong>*</strong>
            </label>
            <InputFeild control={control} name="name" />
          </div>
          <div className="newProduct__group">
            <label>
              Price <strong>*</strong>
            </label>
            <InputFeild control={control} name="price" />
          </div>
          <div className="newProduct__group">
            <label>
              Spice <strong>*</strong>
            </label>
            <InputFeild control={control} name="spice" />
          </div>
          <div className="newProduct__group">
            <label>
              Description <strong>*</strong>
            </label>
            <TextFied control={control} name="detail" />
          </div>
          <div className="newProduct__coutine">
            <div className="newProduct__group">
              <div className="newProduct__checkbox">
                <label>
                  Size <strong>*</strong>
                </label>
                <input type="radio" name="size" id="" onClick={setOpenSize} />
              </div>
              {openSize && (
                <div className="newProduct__input">
                  <div className="newProduct__input--left">
                    <label>
                      name <strong>*</strong>
                    </label>
                    <input type="text" name="name" onChange={handleChage} />
                    <label>
                      price <strong>*</strong>
                    </label>
                    <input type="text" name="price" onChange={handleChage} />
                    <button type="button" onClick={handlButton}>
                      submit
                    </button>
                  </div>

                  <div className="newProduct__input--right">
                    <div className="newProduct__list">
                      {size?.map((item, index) => (
                        <div className="newProduct__item" key={index}>
                          <div className="newProduct__index">
                            <span>{index}</span>
                          </div>
                          <div
                            className="newProduct__content
                          "
                          >
                            <div className="newProduct__name">
                              <span>Name:</span>
                              <span>{item.name}</span>
                            </div>
                            <div className="newProduct__price">
                              <span>Price:</span>
                              <span>{item.price}</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className="newProduct__group">
              <div className="newProduct__checkbox">
                <label>
                  Soles <strong>*</strong>
                </label>
                <input type="radio" name="" value={item} id="" onClick={setOpenSoles} />
              </div>
              {openSoles && (
                <div className="newProduct__input">
                  <div className="newProduct__input--left">
                    {' '}
                    <label>
                      Item <strong>*</strong>
                    </label>
                    <input type="text" name="name" onChange={handleChageSoles} />
                    <button type="button" onClick={handleButtonSoles}>
                      submit
                    </button>
                  </div>
                  <div className="newProduct__input--right">
                    <div className="newProduct__list">
                      {soles?.map((items: any, index: number) => (
                        <div className="newProduct__item" key={index}>
                          <div className="newProduct__index">
                            <span>{index}</span>
                          </div>
                          <div
                            className="newProduct__content
                          "
                          >
                            <div className="newProduct__name">
                              {items.item.map((itemss: Array<string>, index: number) => (
                                <>
                                  <span>Item:</span>
                                  <span>{itemss}</span>
                                </>
                              ))}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="newProduct__btn">
            <button type="submit">submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}
