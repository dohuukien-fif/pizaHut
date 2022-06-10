import * as React from 'react';
import { yupResolver } from '@hookform/resolvers/yup';

import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import InputFeild from '../../../../component/formControl/inputFeild';
import { uid } from '../../../../utils';
import TextFied from '../../../../component/formControl/textFeild';
import { iteratorSymbol } from 'immer/dist/internal';
export interface FormNewProductProps {
  onSubmit: (value: any) => void;
}

export default function FormNewProduct({ onSubmit }: FormNewProductProps) {
  const orderId = Math.floor(Math.random() * 1000) + Date.now();
  const { register, handleSubmit, control, reset } = useForm({
    defaultValues: {
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
  const [inputMore, setinputMore] = React.useState<any>({
    name: '',
    price: 0,
  });
  const [openSize, setopenSize] = React.useState<boolean>(false);
  const [openSoles, setopenSoles] = React.useState<boolean>(false);
  const [openMore, setopenMore] = React.useState<boolean>(false);
  const [item, setitem] = React.useState<any>([]);
  const [soles, setsoles] = React.useState<any>([]);
  const [size, setSize] = React.useState<any>([]);
  const [more, setMore] = React.useState<any>([]);
  const [fileMore, setfileMore] = React.useState<any>();
  const [image, setfile] = React.useState<string>('');
  const [category, setCategory] = React.useState<string>('');

  const Optionss = [
    { value: 'Chọn Category' },
    { value: 'piza' },
    {
      value: 'newDish',
    },
    {
      value: 'appertizer',
    },
    {
      value: 'dessert',
    },
    {
      value: 'drink',
    },
    {
      value: 'noodles',
    },
    {
      value: 'salad',
    },
    {
      value: 'spaghetti',
    },
    {
      value: 'salad',
    },
  ];

  const setOpenMore = () => {
    setopenMore((x) => !x);
  };
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

  const handleChangeMoreFile = (e: any) => {
    const file = e.target.files[0];
    setfileMore(URL.createObjectURL(file));
  };
  // const handleChangeFiles = (e: any) => {
  //   const file = e.target.files;

  //   const reader = new FileReader();
  //   reader.readAsDataURL(file[0]);
  //   reader.onload = (e: any) => {
  //     setfile(e.target.result);
  //   };
  // };

  console.log('fileMore', fileMore);
  const handleChangeFiles = (e: any) => {
    const file = e.target.files[0];

    setfile(URL.createObjectURL(file));
    localStorage.setItem('fileImage', JSON.stringify(e.target.result));
  };

  const handleChangeMore = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;

    setinputMore((prev: any) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handlButtonMore = () => {
    const newMore = {
      ...inputMore,
      price: Number(inputMore.price),
      image: fileMore,
    };

    setMore((prev: any) => [...prev, newMore]);
    setinputMore({
      name: '',
      price: 0,
    });

    setfileMore('');
  };

  console.log('file', fileMore);

  const handleFormSubmit = (value: any) => {
    const newValue = {
      ...value,
      price: Number(value.price),
      more,
      size,
      soles,
      image,
      orderId,
      category,
    };

    console.log(newValue);

    if (Object.values(newValue).includes('' || 0)) {
      alert('kiểm tra lại thông tin ');
      return;
    }

    onSubmit(newValue);

    reset();

    setSize([]);
    setsoles([]);
    setfile('');
  };

  const handleChangCategory = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    console.log('ienn', value);
    setCategory(value);
  };
  const checkPiza = ['piza', 'newDish'];

  console.log('[checkfile]', fileMore, inputMore, more);
  return (
    <form onSubmit={handleSubmit(handleFormSubmit)}>
      <div className="newProduct__group">
        <label>
          OrderId <strong>*</strong>
        </label>

        <span>{orderId}</span>
      </div>
      <div className="newProduct__group">
        <label>
          Category <strong>*</strong>
        </label>

        <select onChange={handleChangCategory}>
          {Optionss.map((items, idx) => (
            <option value={items.value}>{items.value}</option>
          ))}
        </select>
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
        <InputFeild control={control} name="name" placeholder="" />
      </div>
      <div className="newProduct__group">
        <label>
          Price <strong>*</strong>
        </label>
        <InputFeild control={control} name="price" placeholder="" />
      </div>
      <div className="newProduct__group">
        <label>
          Detail <strong>*</strong>
        </label>
        <InputFeild control={control} name="detail" placeholder="" />
      </div>
      {/* <div className="newProduct__group">
        <label>
          category <strong>*</strong>
        </label>
        <InputFeild control={control} name="category" placeholder={dataSearch.category} />
      </div> */}
      <div className="newProduct__group">
        <label>
          Spice <strong>*</strong>
        </label>
        <InputFeild control={control} name="Spice" placeholder="" />
      </div>
      {checkPiza.includes(category) && (
        <>
          {' '}
          {/* <div className="newProduct__group">
            <label>
              Vegetable: <strong>*</strong>
            </label>
            <InputFeild control={control} name="spice" placeholder={dataSearch.vegetable} />
          </div>{' '}
          <div className="newProduct__group">
            <label>
              Chill <strong>*</strong>
            </label>
            <InputFeild control={control} name="spice" placeholder={dataSearch.chill} />
          </div> */}
          <div className="newProduct__group--checkBox">
            <label>
              More <strong>*</strong>
            </label>
            <input type="radio" name="size" id="" onClick={setOpenMore} />
          </div>
          {openMore && (
            <div className="newProduct__input">
              <div className="newProduct__input--left">
                <label>
                  name <strong>*</strong>
                </label>
                <input type="text" name="name" onChange={handleChangeMore} />
                <label>
                  price <strong>*</strong>
                </label>
                <input type="number" name="price" onChange={handleChangeMore} />

                {fileMore && (
                  <div className="new_figures">
                    <img src={fileMore} alt="" />
                  </div>
                )}
                {!fileMore && (
                  <>
                    {' '}
                    <input
                      type="file"
                      id="files"
                      className="file"
                      accept="image/*"
                      onChange={handleChangeMoreFile}
                    />
                    <label htmlFor="files">
                      <span>Upload File</span>
                    </label>
                  </>
                )}
                <button type="button" onClick={handlButtonMore}>
                  submit
                </button>
              </div>

              <div className="newProduct__input--right">
                <div className="newProduct__list">
                  {more?.map((item: any, index: number) => (
                    <div className="newProduct__item" key={index}>
                      <div className="newProduct__index">
                        <span>{index}</span>
                      </div>
                      <div className="newProduct__content ">
                        <div className="newProduct__name">
                          <span>Name:</span>
                          <span>{item.name}</span>
                        </div>
                        <div className="newProduct__price">
                          <span>Price:</span>
                          <span>{item.price}</span>
                        </div>
                        <div className="newProduct__figust">
                          <span>Image:</span>
                          <img src={item.image} alt="" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
          <div className="newProduct__group--checkBox">
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
                <input type="number" name="price" onChange={handleChage} />
                <button type="button" onClick={handlButton}>
                  submit
                </button>
              </div>

              <div className="newProduct__input--right">
                <div className="newProduct__list">
                  {size?.map((item: any, index: number) => (
                    <div className="newProduct__item" key={index}>
                      <div className="newProduct__index">
                        <span>{index}</span>
                      </div>
                      <div className="newProduct__content ">
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
          <div className="newProduct__group--checkBox">
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
        </>
      )}
      <div className="newProduct__btn">
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}
