import React, { useState } from 'react';
import { FaDownload } from 'react-icons/fa';
import { useRouteMatch } from 'react-router-dom';
import useUpdateProduct from '../../hooks/useUpdateGlass';
import './EditProduct.scss';
EditGlassFeatures.propTypes = {};

function EditGlassFeatures(props) {
  const {
    params: { glassId },
  } = useRouteMatch();

  const [imagess, setimagess] = useState([]);
  const [input, setinput] = useState({});

  console.log('productId', glassId);

  const { product } = useUpdateProduct(glassId);

  console.log(product);

  const handleChange = (e) => {
    const { value, name } = e.target;

    setimagess((prev) => ({ ...prev, [name]: value }));
  };

  const handleChangeInput = (e) => {
    const { value, name } = e.target;

    setinput((prev) => ({ ...prev, [name]: value }));
  };
  // const setImage = imagess.length > 0 && imagess.split(',');

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
                <span>category:</span>
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
              Image: <strong>*</strong>{' '}
            </label>
            <textarea type="text" name="Araray" placeholder="ảnh" id="" onChange={handleChange} />
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
              Name: <strong>*</strong>{' '}
            </label>
            <input
              type="text"
              name="name"
              placeholder={product.name}
              id=""
              onChange={handleChangeInput}
            />
          </div>
          <div className="update__bottom-group">
            <label>
              Giá :<strong>*</strong>{' '}
            </label>
            <input
              type="text"
              name="price"
              placeholder={product.price}
              id=""
              onChange={handleChangeInput}
            />
          </div>
          <div className="update__bottom-group">
            <label>
              Giá giảm :<strong>*</strong>{' '}
            </label>
            <input
              type="text"
              name="price"
              placeholder={product.originalPrice}
              id=""
              onChange={handleChangeInput}
            />
          </div>
          <div className="update__bottom-group">
            <label>
              Giới tính: <strong>*</strong>{' '}
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
              Màu: <strong>*</strong>{' '}
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
              Ảnh mô tả: <strong>*</strong>{' '}
            </label>
            <input
              type="text"
              name="thumbnailUrl"
              placeholder={product.thumbnailUrl}
              id=""
              onChange={handleChangeInput}
            />
          </div>
        </div>
        <div className="update__btn">
          <div className="update__btn-block">
            <div className="update__adside">
              <img src={new Array(product.Araray)[0]} alt="" />
              <FaDownload />
            </div>
            <div className="btn__update">
              <button>Update</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditGlassFeatures;
