import axios from 'axios';
import React, { Fragment } from 'react';
import { useForm } from 'react-hook-form';
import { AiOutlineClose } from 'react-icons/ai';
import * as yup from 'yup';
import Inputfeild from '../../component/form-control/inputfiend';
import Textfield from '../../component/form-control/textFeild';
import LoadingFileImage from '../../component/loading/loadingFileImage';
import DialogNewProduct from './dialog';
import './styles.scss';
const FormNewProduct = React.memo(({ onSubmits }) => {
  const newDate = new Date();

  const [imagess, setimagess] = React.useState({});

  const [error, seterror] = React.useState('');
  const [isdialog, setisdialog] = React.useState(false);
  const [dataDialog, setdataDialog] = React.useState({});
  const [issubmit, setisubmit] = React.useState(false);
  const Errrr = React.useRef(null);
  const [fileImage, setFileImages] = React.useState('');

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

  console.log('[size]??', sizes.split(','));
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
    //check value feffirent r???ng kh??ng
    if (isInncludes) {
      return seterror('ki???m  tra l???i th??ng tin c??n thi???u');
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

    // one submit index + 1 ????? check address old =>dialog
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
          placeholder="Vui l??ng nh???p CategoryName..."
        />
      </div>
      <div className="newProduct-group">
        <label>
          name: <strong>*</strong>{' '}
        </label>
        <Inputfeild name="name" control={control} placeholder="Vui l??ng nh???p T??n s???n ph???m..." />
      </div>
      <div className="newProduct-group">
        <label>
          gi?? :<strong>*</strong>{' '}
        </label>
        <Inputfeild name="price" control={control} placeholder="Vui l??ng nh???p gi?? s???n ph???m..." />
      </div>
      <div className="newProduct-group">
        <label>
          Gi?? gi???m :<strong>*</strong>{' '}
        </label>
        <Inputfeild
          name="originalPrice"
          control={control}
          placeholder="Vui l??ng nh???p gi?? gi???m..."
        />
      </div>

      <div className="newProduct-group">
        <label>
          gi???i t??nh: <strong>*</strong>{' '}
        </label>
        <div className="newProduct-group--second">
          <label>Nam</label>
          <input type="radio" name="sex" value="nam" onChange={handleGetValueradio} />
        </div>
        <div className="newProduct-group--second">
          <label>N???</label>
          <input type="radio" name="sex" value="n???" onChange={handleGetValueradio} />
        </div>
      </div>
      <div className="newProduct-group">
        <label>
          search: <strong>*</strong>{' '}
        </label>
        <Inputfeild
          name="SearchTerm"
          control={control}
          placeholder="Vui l??ng nh???p T??n t??m ki???m..."
        />
      </div>
      <div className="newProduct-group">
        <label>
          Ph??n lo???i: <strong>*</strong>{' '}
        </label>
        <Inputfeild name="Designs" control={control} placeholder="Vui l??ng nh???p ph??n lo???i..." />
      </div>
      <div className="newProduct-group">
        <label>
          Xu???t x???: <strong>*</strong>{' '}
        </label>
        <Inputfeild name="origin" control={control} placeholder="Vui l??ng nh???p xu???t x???..." />
      </div>
      <div className="newProduct-group">
        <label>
          m??u: <strong>*</strong>{' '}
        </label>
        <Inputfeild name="color" control={control} placeholder="Vui l??ng nh???p m??u..." />
      </div>

      <div className="newProduct-group">
        <label>
          M?? t??? s???n ph???m: <strong>*</strong>{' '}
        </label>
        <Textfield
          name="description"
          control={control}
          placeholder="Vui l??ng nh???p n???i dung m?? t???..."
        />
      </div>
      <div className="newProduct-group">
        <label>
          Th??ng tin s???n ph???m: <strong>*</strong>{' '}
        </label>
        <Textfield
          name="information"
          control={control}
          placeholder="Vui l??ng nh???p th??ng s???n ph???m..."
        />
      </div>
      <div className="newProduct-group">
        <label>
          size: <strong>*</strong>{' '}
        </label>
        <textarea name="size" onChange={handleChangeSize} placeholder="Vui l??ng nh???p size..." />
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
