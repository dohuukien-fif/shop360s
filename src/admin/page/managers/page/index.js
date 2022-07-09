import * as React from 'react';
import { IoMdAdd } from 'react-icons/io';
import ProductApi from '../../../../api/productapi';
import ManagerList from '../component/managerList';
import ModalManager from '../component/modal';

import './styles.scss';

export default function ManagerFeatures(props) {
  const [modal, setModal] = React.useState(false);
  const closeRef = React.useRef(null);
  const data = [
    {
      id: 1,
      userName: 'huukien',
      gender: 'name',
      birthDay: '08/03/2000',
      position: 'nhân viên',
      identification: '212813496',
      telephone: '0969757507',
      address: 'duc hoa-mo duc-quan  ngai',
    },
    {
      id: 22,
      userName: 'huukien',
      gender: 'name',
      birthDay: '08/03/2000',
      position: 'nhân viên',
      identification: '212813496',
      telephone: '0969757507',
      address: 'duc hoa-mo duc-quan  ngai',
    },
    {
      id: 3,
      userName: 'huukien',
      gender: 'name',
      birthDay: '08/03/2000',
      position: 'nhân viên',
      identification: '212813496',
      telephone: '0969757507',
      address: 'duc hoa-mo duc-quan  ngai',
    },
  ];

  const handleOpenModal = () => {
    setModal(true);
  };
  const handleCloseModal = () => {
    setModal(false);
  };

  const handleSubmitValueForm = async (value) => {
    await ProductApi.get(value);

    setModal(false);
  };
  React.useEffect(() => {
    const hanndleWindowClose = (e) => {
      if (e.target === closeRef.current) {
        setModal(false);
      }
    };
    window.addEventListener('click', hanndleWindowClose);

    return () => window.removeEventListener('click', hanndleWindowClose);
  }, []);
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
            </div>
          </div>
          <ManagerList datas={data} />
        </div>
      </div>
      <ModalManager
        modal={modal}
        onSubmit={handleSubmitValueForm}
        handleCloseModal={handleCloseModal}
        closeRef={closeRef}
      />
    </div>
  );
}
