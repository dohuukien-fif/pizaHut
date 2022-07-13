import * as React from 'react';

import { useForm } from 'react-hook-form';
import { AiOutlineClose } from 'react-icons/ai';
import { IoMdArrowRoundBack } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
import ProductApi from '../../../api/productApi';
import { uid } from '../../../utils';
import FormNewProduct from './formEdit';
import './styles.scss';
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
  const [openMore, setopenMore] = React.useState<boolean>(false);
  const navigete = useNavigate();
  const [error, setError] = React.useState<string>('');
  const Errrr = React.useRef<any>(null);
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
  const handleChangCategory = (e: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(e.target.value);
  };
  let orderId = Math.floor(Math.random() * 1000) + Date.now();
  const handleClickError = () => {
    setError('');
  };

  React.useEffect(() => {
    if (error !== '') {
      Errrr.current = setTimeout(() => {
        setError('');
      }, 3000);
    }
    return () => clearTimeout(Errrr.current);
  }, [error]);

  const handleSubmitForm = async (value: any) => {
    try {
      if (Object.values(value).includes('')) return;
      console.log('form', value);

      await ProductApi.add(value);
    } catch (error) {
      setError('bạn đã nhập trùng name hoặc detail');
    }
  };

  const handleClickNavigeteBack = () => {
    navigete(-1);
  };
  return (
    <div className="newProduct">
      {error !== '' && (
        <div className={error !== '' ? 'newProduct_Error active_error' : 'newProduct_Error'}>
          <AiOutlineClose onClick={handleClickError} />
          <p>{error}</p>
        </div>
      )}
      <div className="newProduct__back">
        <button onClick={handleClickNavigeteBack}>
          <IoMdArrowRoundBack />
          <span>Trở về</span>
        </button>
      </div>
      <div className="newProduct__swapper">
        <div className="newProduct__title">
          <span>NewProduct</span>
        </div>
        <FormNewProduct onSubmit={handleSubmitForm} />
      </div>
    </div>
  );
}
