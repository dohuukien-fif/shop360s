

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
          <label>H??? v?? t??n :*</label>
          <Inputfeild name="fullName" control={control} placeholder="Vui l??ng nh???p t??n..." />
        </div>
        <div className="manager__modal--group--radio">
          <label>Gi???i t??nh :*</label>
          <div className="manager__modal--group--second">
            <span>Nam</span>
            <input type="radio" value="nam" name="gender" onChange={handChangeInput} />
          </div>
          <div className="manager__modal--group--second">
            <span>N???</span>
            <input type="radio" value="n???" name="gender" onChange={handChangeInput} />
          </div>
        </div>
        <div className="manager__modal--group">
          <label>
            ???nh m?? t???: <strong>*</strong>{' '}
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
          <label>Gi??y sinh :*</label>
          <input type="date" name="date" onChange={handChangeInput} />
        </div>
        <div className="manager__modal--group">
          <label>Ch???c v??? :*</label>
          <Inputfeild name="position" control={control} placeholder="Vui l??ng nh???p ch???c v???..." />
        </div>
        <div className="manager__modal--group">
          <label>Cmnd/Cccd :*</label>
          <Inputfeild
            name="identification"
            control={control}
            placeholder="Vui l??ng nh???p Cmnd/Cccd..."
          />
        </div>
        <div className="manager__modal--group">
          <label>S??? ??i???n thoai :*</label>
          <Inputfeild
            name="telephone"
            control={control}
            placeholder="Vui l??ng nh???p S??? ??i???n tho???i..."
          />
        </div>
        <div className="manager__modal--group">
          <label>?????a ch??? :*</label>
          <Inputfeild name="address" control={control} placeholder="Vui l??ng nh???p ?????a ch???..." />
        </div>
        <div className="manager__modal--group--btn">
          <button type="button" onClick={handleIsopen}>
            X??c nh???n
          </button>
          <button type="button" onClick={handleCloseModal}>
            ????ng
          </button>
        </div>
        <div className={isOpen ? 'confirm active__confirm' : 'confirm'}>
          <div className="confirm__swap">
            <div className="confirm__top">
              <span>B???n c?? mu???n th??m v??o danh s??ch</span>
            </div>
            <div className="confirm__bottom">
              <button type="submit">?????ng ??</button>
              <button type="button" onClick={handleIsClose}>
                ????ng
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
