import * as React from 'react';
import { yupResolver } from '@hookform/resolvers/yup';

import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import InputFeild from '../../../../component/formControl/inputFeild';
import { uid } from '../../../../utils';
import TextFied from '../../../../component/formControl/textFeild';
import axios from 'axios';
import LoadingFile from '../../../../component/loadingFeatures/loadingFile/loadingInput';
export interface FormEditProps {
  dataSearch: any;
  onSubmits: (value: any) => void;
}

export default function FormEdit({ dataSearch, onSubmits }: FormEditProps) {
  const orderId = uid();
  const { register, handleSubmit, control } = useForm({
    defaultValues: {
      category: '',
      image: '',
      Spice: '',
      name: '',
      price: 0,
      detail: '',

      // shipper: '' || 'giao ngay',
    },
  });

  const [inputSize, setinputSize] = React.useState<any>({
    name: '',
    price: 0,
  });
  const [openSize, setopenSize] = React.useState<boolean>(false);
  const [openSoles, setopenSoles] = React.useState<boolean>(false);
  const [openMore, setopenMore] = React.useState<boolean>(false);
  const [item, setitem] = React.useState<any>([]);
  const [soles, setsoles] = React.useState<any>([]);
  const [size, setSize] = React.useState<any>([]);
  const [image, setfile] = React.useState<string>('');
  const [fileImage, setFileImage] = React.useState<string>('');
  const [file, setFile] = React.useState<any>();
  const [LoadingfileImage, setLoadingfileImage] = React.useState<boolean>(false);
  const setOpenSize = () => {
    setopenSize((x) => !x);
  };
  const setOpenSoles = () => {
    setopenSoles((x) => !x);
  };
  const setOpenMore = () => {
    setopenMore((x) => !x);
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
  const checkPiza = ['piza', 'newDish'];
  const handleChangeFiless = async (e: any) => {
    const file = e.target.files[0];
    const data = new FormData();

    data.append('file', file);
    data.append('upload_preset', 'upload');

    try {
      const uploadRe = await axios.post(
        'https://api.cloudinary.com/v1_1/huukien/image/upload',
        data
      );
      console.log(data);
      console.log(uploadRe.data);

      const { url } = uploadRe.data;

      setfile(url);
    } catch (error) {}
  };

  const handleChangeFiles = async (e: React.ChangeEvent<any>) => {
    setLoadingfileImage(true);
    const file = e.target.files[0];

    const data = new FormData();

    data.append('file', file);
    data.append('upload_preset', 'upload');

    try {
      const uploadRe = await axios.post(
        'https://api.cloudinary.com/v1_1/huukien/image/upload',
        data
      );
      console.log(data);
      console.log(uploadRe.data);

      const { url } = uploadRe.data;

      console.log(url);
      setFileImage(url);
      setLoadingfileImage(false);
    } catch (error) {}
  };

  const handleFormSubmit = async (value: any) => {
    const newValue = {
      ...value,
      id: dataSearch._id,
      price: Number(value.price),
      more: item.length > 0 ? item : [...dataSearch.more],
      size: size.length > 0 ? size : [...dataSearch.size],
      soles: soles.length > 0 ? soles : [...dataSearch.soles],
      image: fileImage !== '' ? fileImage : dataSearch.image,
    };

    await onSubmits(newValue);
  };

  console.log(dataSearch);

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)}>
      <div className="edit__group">
        <label>
          OrderId <strong>*</strong>
        </label>

        <span>{orderId}</span>
      </div>
      <div className="edit__group">
        <label>
          Category <strong>*</strong>
        </label>

        <InputFeild control={control} name="category" placeholder={dataSearch.category} />
      </div>
      <div className="edit__group">
        <label>
          Image <strong>*</strong>
        </label>
        <input type="file" id="file" accept="image/*" onChange={handleChangeFiles} />
        {fileImage === '' && (
          <label htmlFor="file">
            <span>Upload File</span>
          </label>
        )}

        <div className="newProduct__image">
          {LoadingfileImage ? <LoadingFile /> : <>{fileImage && <img src={fileImage} alt="" />}</>}
        </div>
      </div>
      <div className="edit__group">
        <label>
          Name <strong>*</strong>
        </label>
        <InputFeild control={control} name="name" placeholder={dataSearch.name} />
      </div>
      <div className="edit__group">
        <label>
          Price <strong>*</strong>
        </label>
        <InputFeild control={control} name="price" placeholder={dataSearch.price} />
      </div>
      <div className="edit__group">
        <label>
          Detail <strong>*</strong>
        </label>
        <InputFeild control={control} name="detail" placeholder={dataSearch.detail} />
      </div>
      {/* <div className="edit__group">
        <label>
          category <strong>*</strong>
        </label>
        <InputFeild control={control} name="category" placeholder={dataSearch.category} />
      </div> */}
      <div className="edit__group">
        <label>
          Spice <strong>*</strong>
        </label>
        <InputFeild control={control} name="Spice" placeholder={dataSearch.Spice} />
      </div>
      {checkPiza.includes(dataSearch.category) && (
        <>
          {' '}
          {/* <div className="edit__group">
            <label>
              Vegetable: <strong>*</strong>
            </label>
            <InputFeild control={control} name="spice" placeholder={dataSearch.vegetable} />
          </div>{' '}
          <div className="edit__group">
            <label>
              Chill <strong>*</strong>
            </label>
            <InputFeild control={control} name="spice" placeholder={dataSearch.chill} />
          </div> */}
          <div className="edit__group--checkBox">
            <label>
              More <strong>*</strong>
            </label>
            <input type="radio" name="size" id="" onClick={setOpenMore} />
          </div>
          {openMore && (
            <div className="edit__input">
              <div className="edit__input--left">
                <label>
                  name <strong>*</strong>
                </label>
                <input type="text" name="name" onChange={handleChage} />
                <label>
                  price <strong>*</strong>
                </label>
                <input type="text" name="price" onChange={handleChage} />

                {image && (
                  <div className="new_figures">
                    <img src={image} alt="" />
                  </div>
                )}
                {!image && (
                  <>
                    {' '}
                    <input type="file" id="file" accept="image/*" onChange={handleChangeFiless} />
                    <label htmlFor="file">
                      <span>Upload File</span>
                    </label>
                  </>
                )}
                <button type="button" onClick={handlButton}>
                  submit
                </button>
              </div>

              <div className="edit__input--right">
                <div className="edit__list">
                  {size?.map((item: any, index: number) => (
                    <div className="edit__item" key={index}>
                      <div className="edit__index">
                        <span>{index}</span>
                      </div>
                      <div className="edit__content ">
                        <div className="edit__name">
                          <span>Name:</span>
                          <span>{item.name}</span>
                        </div>
                        <div className="edit__price">
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
          <div className="edit__group--checkBox">
            <label>
              Size <strong>*</strong>
            </label>
            <input type="radio" name="size" id="" onClick={setOpenSize} />
          </div>
          {openSize && (
            <div className="edit__input">
              <div className="edit__input--left">
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

              <div className="edit__input--right">
                <div className="edit__list">
                  {size?.map((item: any, index: number) => (
                    <div className="edit__item" key={index}>
                      <div className="edit__index">
                        <span>{index}</span>
                      </div>
                      <div className="edit__content ">
                        <div className="edit__name">
                          <span>Name:</span>
                          <span>{item.name}</span>
                        </div>
                        <div className="edit__price">
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
          <div className="edit__group--checkBox">
            <label>
              Soles <strong>*</strong>
            </label>
            <input type="radio" name="" value={item} id="" onClick={setOpenSoles} />
          </div>
          {openSoles && (
            <div className="edit__input">
              <div className="edit__input--left">
                {' '}
                <label>
                  Item <strong>*</strong>
                </label>
                <input type="text" name="name" onChange={handleChageSoles} />
                <button type="button" onClick={handleButtonSoles}>
                  submit
                </button>
              </div>
              <div className="edit__input--right">
                <div className="edit__list">
                  {soles?.map((items: any, index: number) => (
                    <div className="edit__item" key={index}>
                      <div className="edit__index">
                        <span>{index}</span>
                      </div>
                      <div
                        className="edit__content
                          "
                      >
                        <div className="edit__name">
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
        </>
      )}
      <div className="edit__btn">
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}
