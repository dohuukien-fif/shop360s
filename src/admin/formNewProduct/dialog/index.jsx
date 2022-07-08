import React, { Fragment } from 'react';
import { formatPrice } from '../../../utils';
import './styles.scss';
const DialogNewProduct = ({
  isdialog,
  dataDialog,
  handleClickSetisDialog,
  handleSubmitBroveMovie,
}) => {
  const handleSentValueUpMovie = () => {
    handleSubmitBroveMovie();
  };
  return (
    <div className={isdialog ? 'newProduct__dialog activeDialog' : 'newProduct__dialog'}>
      <div className="dialog__swapper">
        <div className="dialog__title">
          <p>Xác nhận sản phẩm gửi lên</p>
        </div>
        <div className="dialog__content">
          <div className="dialog__group">
            <p>
              <strong> Id *:</strong>
            </p>
            <span>{dataDialog.id}</span>
          </div>
          <div className="dialog__image">
            <p>
              <strong>Image *:</strong>
            </p>
            <div className="dialog__image--list">
              {dataDialog?.Araray?.map((item, idx) => (
                <Fragment key={idx}>
                  <img src={item} alt="" />
                </Fragment>
              ))}
            </div>
          </div>
          <div className="dialog__group">
            <p>
              <strong>CategoryName *:</strong>
            </p>
            <span>{`${dataDialog.categoryName}`}</span>
          </div>

          <div className="dialog__group">
            <p>
              <strong>Name *:</strong>
            </p>
            <span>{`${dataDialog.name}`}</span>
          </div>

          <div className="dialog__group">
            <p>
              <strong>Giá *:</strong>
            </p>
            <span>{`${formatPrice(dataDialog.price)}`}</span>
          </div>

          <div className="dialog__group">
            <p>
              <strong>Giá giảm *:</strong>
            </p>
            <span>{`${formatPrice(dataDialog.originalPrice)}`}</span>
          </div>
          <div className="dialog__group">
            <p>
              <strong>Giảm phần trăm *:</strong>
            </p>
            <span>{`${dataDialog.promotionpencent} %`}</span>
          </div>
          <div className="dialog__group">
            <p>
              <strong> Giới tính *:</strong>
            </p>
            <span>{`${dataDialog.sex}`}</span>
          </div>

          <div className="dialog__group">
            <p>
              <strong>Tìm kiếm *:</strong>
            </p>
            <span>{`${dataDialog.SearchTerm}`}</span>
          </div>

          <div className="dialog__group">
            <p>
              <strong> Phân loại *:</strong>
            </p>
            <span>{`${dataDialog.Designs}`}</span>
          </div>

          <div className="dialog__group">
            <p>
              <strong>Xuất xứ *:</strong>
            </p>
            <span>{` ${dataDialog.origin}`}</span>
          </div>

          <div className="dialog__group">
            <p>
              <strong> Nơi sản xuất *:</strong>
            </p>
            <span>{`${dataDialog.origin}`}</span>
          </div>

          <div className="dialog__group">
            <p>
              <strong>Màu *:</strong>
            </p>
            <span>{`${dataDialog.color}`}</span>
          </div>

          <div className="dialog__group--text">
            <p>
              <strong>Mô tả *:</strong>
            </p>
            <span>{`- ${dataDialog.description}`}</span>
          </div>
          <div className="dialog__group--text">
            <p>
              <strong>Thông tin*:</strong>
            </p>
            <span>{`- ${dataDialog.information}`}</span>
          </div>

          <div className="dialog__group--text">
            <p>
              <strong>Sizes *:</strong>
            </p>
            <div className="dialog__group--sizeList">
              {dataDialog?.size?.map((item, idx) => (
                <span key={idx}>{idx === 0 ? ` ${item}` : `, - ${item}`}</span>
              ))}
            </div>
          </div>

          {/* <div className="dialog__thumbnailUrl">
            <p>
              <strong> ảnh mô tả:</strong>
            </p>
            <span>{`${dataDialog.thumbnailUrl}`}</span>
          </div> */}

          <div className="dialog__group--btn">
            <button type="submit" onClick={handleSentValueUpMovie}>
              Xác nhận
            </button>
            <button type="button" onClick={handleClickSetisDialog}>
              Đóng
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

DialogNewProduct.propTypes = {};

export default DialogNewProduct;
