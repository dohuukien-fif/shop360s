

import axios from 'axios';
import * as React from 'react';
import { useForm } from 'react-hook-form';
import Inputfeild from '../../../../../component/form-control/inputfiend';
import LoadingFileImage from '../../../../../component/loading/loadingFileImage';
import './styles.scss';


export default function FormManager({ onSubmitValue, handleCloseModal }) {
  const [values, setValue] = React.useState({
    gender: '',
    date: '',
  });
  const [fileImage, setFileImages] = React.useState('');

  const [LoadingfileImage, setLoadingfileImage] = React.useState(false);
  const [isOpen, setIsOpen] = React.useState(false);
  const { register, handleSubmit, control, reset } = useForm({
    defaultValues: {
      fullName: '',
      telephone: '',
      address: '',
      position: '',
      identification: '',
      // shipper: '' || 'giao ngay',
    },
  });

  const handleIsopen = () => {
    setIsOpen(true);
  };
  const handleIsClose = () => {
    setIsOpen(false);
  };
  const handChangeInput = (e) => {
    const { name, value } = e.target;

    setValue((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  //SET IMAGE ARRAY
  const handleChangeImageUrlFile = async (e) => {
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

      console.log('url', url);
      setFileImages(url);
      setLoadingfileImage(false);
    } catch (error) {}
  };
  const handleSubmitForm = async (value) => {
    if (onSubmitValue) {
      await onSubmitValue({
        ...value,
        telephone: Number(value.telephone),
        identification: Number(value.identification),
        image: fileImage,
        ...values,
      });
    }
    setValue({
      gender: '',
      date: '',
    });
    reset();
  };

  console.log(values);
  return (
    <>
      <form onSubmit={handleSubmit(handleSubmitForm)}>
        <div className="manager__modal--group">
          <label>Họ và tên :*</label>
          <Inputfeild name="fullName" control={control} placeholder="Vui lòng nhập tên..." />
        </div>
        <div className="manager__modal--group--radio">
          <label>Giới tính :*</label>
          <div className="manager__modal--group--second">
            <span>Nam</span>
            <input type="radio" value="nam" name="gender" onChange={handChangeInput} />
          </div>
          <div className="manager__modal--group--second">
            <span>Nữ</span>
            <input type="radio" value="nữ" name="gender" onChange={handChangeInput} />
          </div>
        </div>
        <div className="manager__modal--group">
          <label>
            ảnh mô tả: <strong>*</strong>{' '}
          </label>
          <input
            type="file"
            id="file"
            onChange={handleChangeImageUrlFile}
            style={{ display: 'none' }}
          />
          {fileImage === '' && (
            <label htmlFor="file">
              <span>Upload file</span>
            </label>
          )}
          {LoadingfileImage ? (
            <LoadingFileImage />
          ) : (
            <>
              {' '}
              {fileImage !== '' && (
                <>
                  <img src={fileImage} alt="" />{' '}
                </>
              )}
            </>
          )}
        </div>
        <div className="manager__modal--group">
          <label>Giày sinh :*</label>
          <input type="date" name="date" onChange={handChangeInput} />
        </div>
        <div className="manager__modal--group">
          <label>Chức vụ :*</label>
          <Inputfeild name="position" control={control} placeholder="Vui lòng nhập chức vụ..." />
        </div>
        <div className="manager__modal--group">
          <label>Cmnd/Cccd :*</label>
          <Inputfeild
            name="identification"
            control={control}
            placeholder="Vui lòng nhập Cmnd/Cccd..."
          />
        </div>
        <div className="manager__modal--group">
          <label>Số điện thoai :*</label>
          <Inputfeild
            name="telephone"
            control={control}
            placeholder="Vui lòng nhập Số điện thoại..."
          />
        </div>
        <div className="manager__modal--group">
          <label>Địa chỉ :*</label>
          <Inputfeild name="address" control={control} placeholder="Vui lòng nhập địa chỉ..." />
        </div>
        <div className="manager__modal--group--btn">
          <button type="button" onClick={handleIsopen}>
            Xác nhận
          </button>
          <button type="button" onClick={handleCloseModal}>
            Đóng
          </button>
        </div>
        <div className={isOpen ? 'confirm active__confirm' : 'confirm'}>
          <div className="confirm__swap">
            <div className="confirm__top">
              <span>Bạn có muốn thêm vào danh sách</span>
            </div>
            <div className="confirm__bottom">
              <button type="submit">Đồng ý</button>
              <button type="button" onClick={handleIsClose}>
                Đóng
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
