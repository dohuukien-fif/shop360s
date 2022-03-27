import PropTypes from 'prop-types';
import React from 'react';
import { useForm } from 'react-hook-form';
import { AiOutlineClose } from 'react-icons/ai';
import * as yup from 'yup';
import Inputfeild from '../../component/form-control/inputfiend';
import './styles.scss';
FormNewProduct.propTypes = {
  onSubmits: PropTypes.func,
};

function FormNewProduct({ onSubmits }) {
  const newDate = new Date();
  const [imagess, setimagess] = React.useState({});
  const [input, setinput] = React.useState({});
  const [error, seterror] = React.useState('');
  const [isdialog, setisdialog] = React.useState(false);
  const [dataDialog, setdataDialog] = React.useState({});
  const [issubmit, setisubmit] = React.useState(false);
  const Errrr = React.useRef(null);
  const uuid = Math.floor(
    newDate.getSeconds() +
      newDate.getFullYear() +
      newDate.getFullYear() +
      newDate.getMilliseconds() * 12365478
  ).toString();

  const schema = yup.object().shape({
    categoryName: yup
      .string()
      .required('please enter your full Name')
      .test('should has leasst two word', 'please enter at least two word', (value) => {
        return value.split(' ').length >= 2;
      }),
    //     phone: yup.string().required('please enter your Email').email('please enter Email'),
    //     city: yup.string().required('please enter your Email').email('please enter Email'),
    //     coutry: yup.string().required('please enter your Email').email('please enter Email'),
    //     commune: yup.string().required('please enter your Email').email('please enter Email'),
    //     apartment: yup.string().required('please enter your Email').email('please enter Email'),
    //     Street: yup.string().required('please enter your Password').min(6, 'please enter at least 6 '),
    //     now: yup
    //       .string()
    //       .required('please enter retyPassword')
    //       .oneOf([yup.ref('password')], 'please does not match'),
    //     time: yup
    //       .string()
    //       .required('please enter retyPassword')
    //       .oneOf([yup.ref('password')], 'please does not match'),
  });

  //   console.log('uuid', uuid);
  const { register, handleSubmit, control } = useForm({
    defaultValues: {
      id: uuid,
      categoryName: '',
      name: '',
      price: '',
      originalPrice: '',
      sex: '',
      SearchTerm: '',
      Designs: '',
      origin: '',
      color: '',
      thumbnailUrl: '',

      // shipper: '' || 'giao ngay',
    },
  });

  const handleChange = (e) => {
    const { value, name } = e.target;

    setimagess((prev) => ({ ...prev, [name]: value }));
  };

  const handleChangeInput = (e) => {
    const { value, name } = e.target;

    setinput((prev) => ({ ...prev, [name]: value }));
  };

  console.log('input', input);
  const newImage = Object.keys(imagess).length > 0 &&
    imagess?.Araray !== '' && {
      Araray: imagess.Araray !== undefined && imagess.Araray.split(','),
    };
  const handleFormSubmit = async (formValues) => {
    const isInncludes = Object.values(formValues).includes('');
    //check value feffirent rổng không
    if (isInncludes) {
      return seterror('kiểm  tra lại thông tin còn thiếu');
    }
    // isInncludes dont empty
    if (isInncludes === false) {
      setdataDialog({ ...formValues, id: uuid, ...newImage });
      setisdialog(true);
    }

    //check value == isInncludes empty === issumbit true
    if (formValues && isInncludes === false && issubmit) {
      await onSubmits({ ...formValues, id: uuid, ...newImage });
    }

    // one submit index + 1 để check address old =>dialog
  };

  const handleClickSetisDialog = () => {
    setisubmit(true);
    setisdialog(false);
  };

  console.log(dataDialog?.Araray);
  React.useEffect(() => {
    if (error !== '') {
      Errrr.current = setTimeout(() => {
        seterror('');
      }, 5000);
    }
    return () => clearTimeout(Errrr.current);
  }, [error]);
  return (
    <form onSubmit={handleSubmit(handleFormSubmit)}>
      {error !== '' && (
        <div className={error !== '' ? 'cart_Error active_error' : 'cart_Error'}>
          <AiOutlineClose />
          <p>{error}</p>
        </div>
      )}
      <div className="newProduct_id">
        <span>
          id : <strong>{uuid}</strong>
        </span>
      </div>
      <div className="newProduct-group">
        <label>
          image: <strong>*</strong>{' '}
        </label>
        <textarea type="text" name="Araray" placeholder="ảnh" id="" onChange={handleChange} />
      </div>
      <div className="newProduct-group">
        <label>
          category: <strong>*</strong>{' '}
        </label>
        <Inputfeild name="categoryName" control={control} />
        {/* <input
    type="text"
    name="categoryName"
    placeholder="Nhập categoryName"
    id=""
    onChange={handleChangeInput}
  /> */}
      </div>
      <div className="newProduct-group">
        <label>
          name: <strong>*</strong>{' '}
        </label>
        <Inputfeild name="name" control={control} />
        {/* <input
    type="text"
    name="name"
    placeholder="Nhập name"
    id=""
    onChange={handleChangeInput}
  /> */}
      </div>
      <div className="newProduct-group">
        <label>
          giá :<strong>*</strong>{' '}
        </label>
        <Inputfeild name="price" control={control} />
        {/* <input
    type="text"
    name="price"
    placeholder="Nhập giá"
    id=""
    onChange={handleChangeInput}
  /> */}
      </div>
      <div className="newProduct-group">
        <label>
          Giá giảm :<strong>*</strong>{' '}
        </label>
        <Inputfeild name="originalPrice" control={control} />
        {/* <input
    type="text"
    name="originalPrice"
    placeholder="Giá giảm"
    id=""
    onChange={handleChangeInput}
  /> */}
      </div>
      <div className="newProduct-group">
        <label>
          giới tính: <strong>*</strong>{' '}
        </label>
        <Inputfeild name="sex" control={control} />
        {/* <input
    type="text"
    name="sex"
    placeholder="Giới tính"
    id=""
    onChange={handleChangeInput}
  /> */}
      </div>
      <div className="newProduct-group">
        <label>
          search: <strong>*</strong>{' '}
        </label>
        <Inputfeild name="SearchTerm" control={control} />
        {/* <input
    type="text"
    name="SearchTerm"
    placeholder="Tìm kiếm"
    id=""
    onChange={handleChangeInput}
  /> */}
      </div>
      <div className="newProduct-group">
        <label>
          Phân loại: <strong>*</strong>{' '}
        </label>
        <Inputfeild name="Designs" control={control} />
        {/* <input
    type="text"
    name="Designs"
    placeholder="Đánh giá"
    id=""
    onChange={handleChangeInput}
  /> */}
      </div>
      <div className="newProduct-group">
        <label>
          Xuất xứ: <strong>*</strong>{' '}
        </label>
        <Inputfeild name="origin" control={control} />
        {/* <input
    type="text"
    name="origin"
    placeholder="Xuất xứ"
    id=""
    onChange={handleChangeInput}
  /> */}
      </div>
      <div className="newProduct-group">
        <label>
          màu: <strong>*</strong>{' '}
        </label>
        <Inputfeild name="color" control={control} />
        {/* <input type="text" name="color" placeholder="Màu" id="" onChange={handleChangeInput} /> */}
      </div>
      <div className="newProduct-group">
        <label>
          ảnh mô tả: <strong>*</strong>{' '}
        </label>
        <Inputfeild name="thumbnailUrl" control={control} />
        {/* <input
    type="text"
    name="thumbnailUrl"
    placeholder="Ảnh mô tả"
    id=""
    onChange={handleChangeInput}
    <div className="newProduct__dialog">
<div className="dialog__title">
  <p>Xác nhận sản phẩm gửi lênn</p>
</div>
<div className="dialog__content">
  <div className="dialog__id">
    <span>id: <strong></strong></span>
  </div>
  <div className="dialog__image">
     
  </div>
</div>
</div>
  /> */}
      </div>
      <div className="newProduct_btn">
        <button type="submit">Creater</button>
      </div>

      <div className={isdialog ? 'newProduct__dialog activeDialog' : 'newProduct__dialog'}>
        <div className="dialog__swapper">
          <div className="dialog__title">
            <p>Xác nhận sản phẩm gửi lên</p>
          </div>
          <div className="dialog__content">
            <div className="dialog__id">
              <p>
                id: <strong>{dataDialog.id}</strong>
              </p>
            </div>
            <div className="dialog__image">
              <p>
                <strong>image</strong>
              </p>
              <img
                src={
                  dataDialog?.Araray !== undefined
                    ? dataDialog?.Araray[0]
                    : 'https://via.placeholder.com/100x100 '
                }
                alt=""
              />
              {dataDialog?.Araray === undefined && <span>vui lòng chọn link ảnh</span>}
            </div>
            <div className="dialog__category">
              <p>
                <strong>categoryName:</strong>
              </p>
              <span>{`- ${dataDialog.categoryName}`}</span>
            </div>

            <div className="dialog__name">
              <p>
                <strong>name:</strong>
              </p>
              <span>{`- ${dataDialog.name}`}</span>
            </div>

            <div className="dialog__price">
              <p>
                <strong>giá:</strong>
              </p>
              <span>{`- ${dataDialog.price}`}</span>
            </div>

            <div className="dialog__originnaPrice">
              <p>
                <strong>Giá giảm: </strong>
              </p>
              <span>{`- ${dataDialog.originalPrice}`}</span>
            </div>

            <div className="dialog__sex">
              <p>
                <strong> giới tính:</strong>
              </p>
              <span>{`- ${dataDialog.sex}`}</span>
            </div>

            <div className="dialog__search">
              <p>
                <strong>search:</strong>
              </p>
              <span>{`- ${dataDialog.SearchTerm}`}</span>
            </div>

            <div className="dialog__designs">
              <p>
                <strong> Phân loại:</strong>
              </p>
              <span>{`- ${dataDialog.Designs}`}</span>
            </div>

            <div className="dialog__sex">
              <p>
                <strong>Xuất xứ:</strong>
              </p>
              <span>{`-  ${dataDialog.sex}`}</span>
            </div>

            <div className="dialog__origin">
              <p>
                <strong> giới tính:</strong>
              </p>
              <span>{`- ${dataDialog.origin}`}</span>
            </div>

            <div className="dialog__color">
              <p>
                <strong>màu:</strong>
              </p>
              <span>{`- ${dataDialog.color}`}</span>
            </div>

            <div className="dialog__thumbnailUrl">
              <p>
                <strong> ảnh mô tả:</strong>
              </p>
              <span>{`- ${dataDialog.thumbnailUrl}`}</span>
            </div>
          </div>

          <button type="button">cace</button>
          <button type="submit" onClick={handleClickSetisDialog}>
            dialog
          </button>
        </div>
      </div>
    </form>
  );
}

export default FormNewProduct;
