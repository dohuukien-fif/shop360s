import React, { Fragment } from 'react';
import { useForm } from 'react-hook-form';
import { AiOutlineClose } from 'react-icons/ai';
import * as yup from 'yup';
import Inputfeild from '../../component/form-control/inputfiend';
import Textfield from '../../component/form-control/textFeild';
import './styles.scss';
import axios from 'axios';
import LoadingFileImage from '../../component/loading/loadingFileImage';
import DialogNewProduct from './dialog';
const FormNewProduct = React.memo(({ onSubmits }) => {
  const newDate = new Date();

  const [imagess, setimagess] = React.useState({});
  const [input, setinput] = React.useState({});
  const [error, seterror] = React.useState('');
  const [isdialog, setisdialog] = React.useState(false);
  const [dataDialog, setdataDialog] = React.useState({});
  const [issubmit, setisubmit] = React.useState(false);
  const Errrr = React.useRef(null);
  const [fileImage, setFileImages] = React.useState('');
  const [file, setFile] = React.useState();
  const [LoadingfileImage, setLoadingfileImage] = React.useState(false);
  const uuid = Math.floor(
    newDate.getSeconds() +
      newDate.getFullYear() +
      newDate.getFullYear() +
      newDate.getMilliseconds() * 12365478
  ).toString();
  const [imagessFile, setImagessFile] = React.useState();
  const [Araray, setAraray] = React.useState([]);
  const [informations, setInformaTion] = React.useState({});
  const [sizes, setSize] = React.useState('');
  const [thumbnailUrl, seThumbnailUrl] = React.useState('');
  const [dataGrende, sedataGrende] = React.useState('');
  const schema = yup.object().shape({
    categoryName: yup
      .string()
      .required('please enter your full Name')
      .test('should has leasst two word', 'please enter at least two word', (value) => {
        return value.split(' ').length >= 2;
      }),
  });

  const { register, handleSubmit, control, reset } = useForm({
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

      description: '',
    },
  });

  const newImage = Object.keys(imagess).length > 0 &&
    imagess?.Araray !== '' && {
      Araray: imagess.Araray !== undefined && imagess.Araray.split(','),
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
  //set sSIZE
  const handleChangeSize = (e) => {
    const { value, name } = e.target;

    setSize(value);
  };

  console.log('[size]ư', sizes.split(','));
  //SET INFORMATION
  const handleChangeInformatinon = (e) => {
    const { value, name } = e.target;

    setInformaTion((prev) => ({ ...prev, [name]: value }));
  };
  //SET THUMNAIR

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
  const handleButtonImageArray = () => {
    console.log('imagessFile', imagessFile);
    setAraray((prev) => [...prev, fileImage]);
    setFileImages('');
  };

  //get  value radio   grende
  const handleGetValueradio = (e) => {
    const { name, value } = e.target;

    sedataGrende(value);
    console.log(name, value);
  };
  console.log('[Araray]', Araray);
  const handleFormSubmit = async (formValues) => {
    const isInncludes = Object.values(formValues).includes('');
    //check value feffirent rổng không
    if (isInncludes) {
      return seterror('kiểm  tra lại thông tin còn thiếu');
    }
    // isInncludes dont empty
    if (isInncludes === false) {
      setdataDialog({
        ...formValues,
        price: Number(formValues.price),
        originalPrice: Number(formValues.originalPrice),
        promotionpencent: Math.round(
          (Number(formValues.price) /
            (Number(formValues.price) + Number(formValues.originalPrice))) *
            100
        ),
        sex: dataGrende,
        size: sizes?.split(','),
        id: uuid,
        Araray,
      });
      setisdialog(true);
    }

    //check value == isInncludes empty === issumbit true
    console.log('{ ...formValues, id: uuid, ...newImage }', {
      ...formValues,
      id: uuid,

      ...newImage,
    });

    // one submit index + 1 để check address old =>dialog
  };

  console.log('[dataGrende]', dataGrende);
  const handleSubmitBroveMovie = async () => {
    console.log('dataDialog', dataDialog);
    setisdialog(false);
    reset();
  };

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

      <div></div>
      <div className="newProduct-group--image">
        <div className="newProduct__group--image--left">
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
                  <button type="button" onClick={handleButtonImageArray}>
                    creater
                  </button>
                </>
              )}
            </>
          )}
        </div>
        <div className="newProduct-group--image--right">
          {Araray?.map((item, idx) => (
            <Fragment key={idx}>
              <img src={item} />
            </Fragment>
          ))}
        </div>
      </div>
      <div className="newProduct-group">
        <label>
          categories: <strong>*</strong>{' '}
        </label>
        <Inputfeild
          name="categoryName"
          control={control}
          placeholder="Vui lòng nhập CategoryName..."
        />
      </div>
      <div className="newProduct-group">
        <label>
          name: <strong>*</strong>{' '}
        </label>
        <Inputfeild name="name" control={control} placeholder="Vui lòng nhập Tên sản phầm..." />
      </div>
      <div className="newProduct-group">
        <label>
          giá :<strong>*</strong>{' '}
        </label>
        <Inputfeild name="price" control={control} placeholder="Vui lòng nhập giá sản phẩm..." />
      </div>
      <div className="newProduct-group">
        <label>
          Giá giảm :<strong>*</strong>{' '}
        </label>
        <Inputfeild
          name="originalPrice"
          control={control}
          placeholder="Vui lòng nhập giá giảm..."
        />
      </div>

      <div className="newProduct-group">
        <label>
          giới tính: <strong>*</strong>{' '}
        </label>
        <div className="newProduct-group--second">
          <label>Nam</label>
          <input type="radio" name="sex" value="nam" onChange={handleGetValueradio} />
        </div>
        <div className="newProduct-group--second">
          <label>Nữ</label>
          <input type="radio" name="sex" value="nữ" onChange={handleGetValueradio} />
        </div>
      </div>
      <div className="newProduct-group">
        <label>
          search: <strong>*</strong>{' '}
        </label>
        <Inputfeild
          name="SearchTerm"
          control={control}
          placeholder="Vui lòng nhập Tên tìm kiếm..."
        />
      </div>
      <div className="newProduct-group">
        <label>
          Phân loại: <strong>*</strong>{' '}
        </label>
        <Inputfeild name="Designs" control={control} placeholder="Vui lòng nhập phân loại..." />
      </div>
      <div className="newProduct-group">
        <label>
          Xuất xứ: <strong>*</strong>{' '}
        </label>
        <Inputfeild name="origin" control={control} placeholder="Vui lòng nhập xuất xứ..." />
      </div>
      <div className="newProduct-group">
        <label>
          màu: <strong>*</strong>{' '}
        </label>
        <Inputfeild name="color" control={control} placeholder="Vui lòng nhập màu..." />
      </div>

      <div className="newProduct-group">
        <label>
          Mô tả sản phẩm: <strong>*</strong>{' '}
        </label>
        <Textfield
          name="description"
          control={control}
          placeholder="Vui lòng nhập nội dung mô tả..."
        />
      </div>
      <div className="newProduct-group">
        <label>
          Thông tin sản phẩm: <strong>*</strong>{' '}
        </label>
        <Textfield
          name="information"
          control={control}
          placeholder="Vui lòng nhập thông sản phẩm..."
        />
      </div>
      <div className="newProduct-group">
        <label>
          size: <strong>*</strong>{' '}
        </label>
        <textarea name="size" onChange={handleChangeSize} placeholder="Vui lòng nhập size..." />
      </div>
      <div className="newProduct_btn">
        <button type="submit">Creater</button>
      </div>

      <DialogNewProduct
        isdialog={isdialog}
        dataDialog={dataDialog}
        handleClickSetisDialog={handleClickSetisDialog}
        handleSubmitBroveMovie={handleSubmitBroveMovie}
      />
    </form>
  );
});

FormNewProduct.propTypes = {};

export default FormNewProduct;
