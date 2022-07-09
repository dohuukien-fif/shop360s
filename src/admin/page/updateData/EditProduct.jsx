import axios from 'axios';
import React, { Fragment, useState } from 'react';
import { FaDownload } from 'react-icons/fa';
import { useRouteMatch } from 'react-router-dom';
import LoadingFileImage from '../../../component/loading/loadingFileImage';
import useUpdateProduct from '../../hooks/useUpdateProduct';
import './EditProduct.scss';
EditProductFeatures.propTypes = {};

function EditProductFeatures(props) {
  const {
    params: { productId },
  } = useRouteMatch();
  const [fileImage, setFileImages] = React.useState('');
  const [LoadingfileImage, setLoadingfileImage] = React.useState(false);
  const [LoadingfileImageThumbnailUrl, setLoadingfileImageThumbnailUrl] = React.useState(false);
  const [imagessFile, setImagessFile] = React.useState();
  const [Araray, setAraray] = React.useState([]);
  const [informations, setInformaTion] = React.useState({});
  const [sizes, setSize] = useState({});
  const [thumbnailUrl, seThumbnailUrl] = useState('');
  const [input, setinput] = useState({
    id: productId,
  });
  

  console.log('productId', productId);

  const { product } = useUpdateProduct(productId);

  console.log(product);

  // const handleChange = (e) => {
  // const { value, name } = e.target;

  //  setimagess((prev) => ({ ...prev, [name]: value }));
  //  };

  const handleChangeInformatinon = (e) => {
    const { value, name } = e.target;

    setInformaTion((prev) => ({ ...prev, [name]: value }));
  };
  const handleChangeSize = (e) => {
    const { value, name } = e.target;

    setSize((prev) => ({ ...prev, [name]: value }));
  };
  const handleChangeThumnaiUrlFile = (e) => {
    const file = e.target.files;

    const reader = new FileReader();
    reader.readAsDataURL(file[0]);
    reader.onload = (e) => {
      seThumbnailUrl(e.target.result);

      console.log('(e.target.result', e.target.result);
    };
  };
  const handleChangeImageUrlFile = (e) => {
    const file = e.target.files;

    const reader = new FileReader();
    reader.readAsDataURL(file[0]);
    reader.onload = (e) => {
      setImagessFile(e.target.result);

      console.log('(e.target.result', e.target.result);
    };
  };

  const handleButtonImageArray = () => {
    console.log('imagessFile', imagessFile);
    setAraray((prev) => [...prev, imagessFile]);
    setImagessFile();
  };
  const handleChangeInput = (e) => {
    const { value, name } = e.target;

    setinput((prev) => ({ ...prev, [name]: value }));
  };
  // const setImage = imagess.length > 0 && imagess.split(',');
  // const setImage = imagess.length > 0 && imagess.split(',');
  // const newImage = Object.keys(imagess).length > 0 &&
  //  imagess?.Araray !== '' && {
  //    Araray: imagess.Araray !== undefined && imagess.Araray.split(','),
  //  };
  const newInformation = Object.keys(informations).length > 0 &&
    informations?.information !== '' && {
      information: informations.information !== undefined && informations.information.split(','),
    };
  const newSize = Object.keys(sizes).length > 0 &&
    sizes?.size !== '' && {
      size: sizes.size !== undefined && sizes.size.split(','),
    };

  const newinput = Object.values(input).filter((e) => e !== '') && input;
  // const newInput = Object.value(input).filter((e) => e !== '');

  console.log(Object.values(input).filter((e) => e !== ''));

  //SET IMAGE ARRAY
  const handleChangeImageUrlFiles = async (e) => {
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
  //set sSIZE
  const handleChangeSizes = (e) => {
    const { value, name } = e.target;

    setSize(value);
  };
  //SET IMAGE thumnairl
  const handleChangeImageUrlFilesThumnairl = async (e) => {
    setLoadingfileImageThumbnailUrl(true);
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
      seThumbnailUrl(url);
      setLoadingfileImageThumbnailUrl(false);
    } catch (error) {}
  };
  const handleButtonImageArrays = () => {
    console.log('imagessFile', imagessFile);
    setAraray((prev) => [...prev, fileImage]);
    setFileImages('');
  };
  const handlebuttonData = () => {
    const newValue  = {
      ...newinput,
      price: Number(newinput.price) || product.price,
      originalPrice: Number(newinput.originalPrice) || product.originalPrice,

      ...newInformation,
    
      size:sizes!==""?sizes.split(","):product.size,
Araray:Araray.length >0? Araray:product.Araray,
      thumbnailUrl:thumbnailUrl!==""?thumbnailUrl:product.thumbnailUrl,
    }
    console.log('first', {
      ...newinput,
      price: Number(newinput.price) || product.price,
      originalPrice: Number(newinput.originalPrice) || product.originalPrice,

      ...newInformation,
      ...newSize,

      thumbnailUrl,
    });

    seThumbnailUrl('');
  };

  console.log('Araray', Araray.length, imagessFile);
  const promoTionTencent = Math.round(
    (Number(newinput.price) / (Number(newinput.price) + Number(newinput.originalPrice))) * 100
  );
  return (
    <div className="update">
      <div className="update__top">
        <div className="update__top-left"></div>

        <div className="update__top-right">
          <div className="update__right-block">
            <div className="update__right-top">
              <div className="update__top-adside">
                <img src={new Array(product.Araray)[0]} alt="" />
              </div>
              <div className="update__top-name">
                <span>{product.name}</span>
              </div>
            </div>
            <div className="update__right-bottom">
              <div className="update__top-group">
                <span>id:</span>
                <span>{product.id}</span>
              </div>
              <div className="update__top-group">
                <span>Categories:</span>
                <span>{product.categoryName}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="update__bottom">
        <div className="update__form">
          <div className="update__form-title">
            <span>Update</span>
          </div>

          <div className="update__bottom-group">
            <label>
              Categories: <strong>*</strong>{' '}
            </label>
            <input
              type="text"
              name="categoryName"
              placeholder={product.categoryName}
              id=""
              onChange={handleChangeInput}
            />
          </div>
          <div className="update__bottom-group">
            <label>
              name: <strong>*</strong>{' '}
            </label>
            <input
              type="text"
              name="name"
              placeholder={product.name}
              value={input?.name}
              id=""
              onChange={handleChangeInput}
            />
          </div>
          <div className="update__bottom-group">
            <label>
              giá :<strong>*</strong>{' '}
            </label>
            <input
              type="number"
              name="price"
              placeholder={product.price}
              id=""
              value={Number(newinput.price)}
              onChange={handleChangeInput}
            />
          </div>
          <div className="update__bottom-group">
            <label>
              Giá giảm :<strong>*</strong>{' '}
            </label>

            <input
              type="number"
              name="originalPrice"
              placeholder={product.originalPrice}
              value={Number(newinput.originalPrice)}
              onChange={handleChangeInput}
            />
          </div>
          <div className="update__bottom-group">
            <label>
              Phần trăm giảm giá : <strong>*</strong>{' '}
              <span>{`${promoTionTencent ? promoTionTencent : product.promotionpencent} %`}</span>
            </label>

            {/* <textarea
              type="number"
              name="promotionpencent"
              placeholder={product.promotionpencent}
              value={promoTionTencent}
              onChange={handleChangeInput}
            /> */}
          </div>
          <div className="update__bottom-group">
            <label>
              giới tính: <strong>*</strong>{' '}
            </label>
            <input
              type="text"
              name="sex"
              placeholder={product.sex}
              id=""
              onChange={handleChangeInput}
            />
          </div>
          <div className="update__bottom-group">
            <label>
              search: <strong>*</strong>{' '}
            </label>
            <input
              type="text"
              name="SearchTerm"
              placeholder={product.SearchTerm}
              id=""
              onChange={handleChangeInput}
            />
          </div>
          <div className="update__bottom-group">
            <label>
              Phân loại: <strong>*</strong>{' '}
            </label>
            <input
              type="text"
              name="Designs"
              placeholder={product.Designs}
              id=""
              onChange={handleChangeInput}
            />
          </div>
          <div className="update__bottom-group">
            <label>
              Xuất xứ: <strong>*</strong>{' '}
            </label>
            <input
              type="text"
              name="origin"
              placeholder={product.origin}
              id=""
              onChange={handleChangeInput}
            />
          </div>
          <div className="update__bottom-group">
            <label>
              màu: <strong>*</strong>{' '}
            </label>
            <input
              type="text"
              name="color"
              placeholder={product.color}
              id=""
              onChange={handleChangeInput}
            />
          </div>
          <div className="update__bottom-group">
            <label>
              Mô tả sản phẩm: <strong>*</strong>{' '}
            </label>
            <textarea
              type="text"
              name="description"
              placeholder={product.desctiption}
              onChange={handleChangeInput}
            />
          </div>
          <div className="update__bottom-group">
            <label>
              Thông tin sản phẩm : <strong>*</strong>{' '}
            </label>
            <textarea
              type="text"
              name="information"
              placeholder={product.information}
              onChange={handleChangeInformatinon}
            />
          </div>

          <div className="update__bottom-group">
            <label>
              Size : <strong>*</strong>{' '}
            </label>
            <textarea
              type="text"
              name="size"
              placeholder={product.Size}
              onChange={handleChangeSize}
            />
          </div>
          <div className="update__bottom-group">
            <div className="update__bottom-group--image--left">
              <label>
                Ảnh sản phẩm: <strong>*</strong>{' '}
              </label>
              <input
                type="file"
                id="file"
                onChange={handleChangeImageUrlFiles}
                style={{ display: 'none' }}
              />
              {fileImage === '' && (
                <label htmlFor="file">
                  <span className="update__file">Upload file</span>
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
                      <button type="button" onClick={handleButtonImageArrays}>
                        creater
                      </button>
                    </>
                  )}
                </>
              )}
            </div>
            <div className=" update__image--list ">
              {Araray?.map((item, idx) => (
                <Fragment key={idx}>
                  <img src={item} />
                </Fragment>
              ))}
            </div>
          </div>
          <div className="update__bottom-group">
            <label>
              Ảnh Mô tả: <strong>*</strong>{' '}
            </label>
            <input
              type="file"
              name="Araray"
              id="files"
              onChange={handleChangeImageUrlFilesThumnairl}
            />
            {thumbnailUrl === '' && (
              <>
                <label htmlFor="files">
                  <span className="update__file">Upload file</span>
                </label>
              </>
            )}
            {LoadingfileImageThumbnailUrl ? (
              <LoadingfileImage />
            ) : (
              <>
                {' '}
                {thumbnailUrl !== '' && (
                  <div className="update__figust">
                    <img src={imagessFile} alt={product.name} />

                    <button onClick={handleButtonImageArray}>Submit</button>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
        <div className="update__btn">
          <div className="update__btn-block">
            <div className="update__adside">
              <img src={new Array(product.Araray)[0]} alt="" />
              <FaDownload />
            </div>
            <div className="btn__update">
              <button onClick={handlebuttonData}>Update</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditProductFeatures;
