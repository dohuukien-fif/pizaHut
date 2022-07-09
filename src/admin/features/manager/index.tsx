import * as React from 'react';
import { IoMdAdd } from 'react-icons/io';
import ManagerApi from '../../../api/managerApi';
import ManagerList from './managerList';
import ModalManager from './modal';
import './styles.scss';
import UpdateManager from './update/modal/index';

export interface DataProps {
  id: number;
  fullName: string;
  gender: string;
  birthDay: string;
  position: string;
  identification: string;
  telephone: string;
  address: string;
  _id: string;
  image: string;
  date: string;
}

export interface ManagerFeaturesProps {}

export default function ManagerFeatures(props: ManagerFeaturesProps) {
  const [modal, setModal] = React.useState<boolean>(false);
  const [isUpdate, setisUpdate] = React.useState<boolean>(false);
  const [data, setData] = React.useState<Array<DataProps[]>>([]);
  const [dataUpdate, setDataUpdate] = React.useState<DataProps>();
  const closeRef = React.useRef(null);
  const closeUpdateRef = React.useRef(null);
  React.useEffect(() => {
    const fetchApi = async () => {
      const res = await ManagerApi.getAll();

      setData(res.data);

      console.log('data', res.data);
    };
    fetchApi();
  }, []);
  const handleOpenModal = () => {
    setModal(true);
  };
  const handleCloseModal = () => {
    setModal(false);
  };
  const handleOpenModalUpdate = () => {
    setisUpdate(true);
  };
  const handleCloseModalUpdate = () => {
    setisUpdate(false);
  };
  const handleSubmitValueForm = async (value: any) => {
    await ManagerApi.setData(value);

    setModal(false);
  };
  const handleSubmitValueFormUpdate = async (value: any) => {
    await ManagerApi.update(value);
    console.log('[value]ư', value);

    setisUpdate(false);

    window.location.reload();
  };
  React.useEffect(() => {
    const hanndleWindowClose = (e: any) => {
      if (e.target === closeRef.current) {
        setModal(false);
      }
    };
    window.addEventListener('click', hanndleWindowClose);

    return () => window.removeEventListener('click', hanndleWindowClose);
  }, []);
  React.useEffect(() => {
    const hanndleWindowClose = (e: any) => {
      if (e.target === closeUpdateRef.current) {
        setisUpdate(false);
      }
    };
    window.addEventListener('click', hanndleWindowClose);

    return () => window.removeEventListener('click', hanndleWindowClose);
  }, []);

  const handleGetIdManager = async (id: string) => {
    const data = await ManagerApi.getById(id);

    setDataUpdate(data);
    setisUpdate(true);
    console.log(id);
  };
  return (
    <div className="manager">
      <div className="manager__btn">
        <button onClick={handleOpenModal}>
          Thêm mới <IoMdAdd />
        </button>
      </div>
      <div className="manager__swap">
        <div className="manager__title">
          <span>Quản lý nhân viên</span>
        </div>
        <div className="manager__table">
          <div className="manager__top">
            <div className="manager__top--left">
              <span>Ảnh</span>
              <span>Tên</span>
              <span>Chức vụ</span>

              <span>Số điện thoai</span>
              <span>Cmnd/Cccd</span>
            </div>
            <div className="manager__top--right">
              <span>Địa chỉ</span>
              <span>Cập nhật</span>
            </div>
          </div>
          <ManagerList
            datas={data}
            handleOpenModalUpdate={handleOpenModalUpdate}
            handleGetIdManager={handleGetIdManager}
          />
        </div>
      </div>
      <ModalManager
        modal={modal}
        onSubmit={handleSubmitValueForm}
        handleCloseModal={handleCloseModal}
        closeRef={closeRef}
      />
      <UpdateManager
        dataUpdate={dataUpdate}
        modal={isUpdate}
        onSubmit={handleSubmitValueFormUpdate}
        handleCloseModal={handleCloseModalUpdate}
        closeRef={closeUpdateRef}
      />
    </div>
  );
}
