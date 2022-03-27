import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import PropTypes from 'prop-types';
import React from 'react';
import { formatPrice } from './../../../utils';
import './deloyCheck.scss';
deloyCheck.propTypes = {
  handlcheck: PropTypes.func,
  handleClick: PropTypes.func,
  cartTotals: PropTypes.array,
  cartInformation: PropTypes.object,
};

function deloyCheck({ opens, handlcheck, handleClick, cartTotals, cartInformation }) {
  const totalCart = cartTotals[cartTotals.length - 1];
  // const sexxs = totalCart.sexx.map((items, index) => items.product);
  console.log('totalCart', totalCart);

  return (
    <Dialog
      open={opens}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogContent>
        <div className="succes">
          <div className="succes_title">Xác nhận đơn hàng</div>
          <div className="succes_cart-lisst">
            {cartTotals !== undefined &&
              totalCart?.sexx.map((items, index) => (
                <div className="succes_cart-item" key={items.id}>
                  <div className="succes_top" key={items.id}>
                    <div className="succes_top-image">
                      <img src={items.product.Araray[0]} alt="" />
                    </div>
                    <div className="succes_top-name">
                      <span>{items.product.name} </span>
                    </div>
                  </div>
                  <div className="succes_bottom">
                    <div className="succes_bottom-gia">
                      <span>{`${formatPrice(items.product.price)} x ${items.quantity}`} </span>
                    </div>
                    <div className="succes_bottom-payload">
                      <span>{formatPrice(items.product.price * items.quantity)} </span>
                    </div>
                  </div>
                </div>
              ))}
          </div>
          <div className="succes_total">
            <span>Thanh toán</span>
            {formatPrice(totalCart?.total)}
          </div>
          <div className="succes_information">
            {/* <div className="information_title">Xác nhận thông tin</div> */}
            <div className="succes_information-fullName">
              <span> * Người nhận : </span>
              <span>{cartInformation.value?.fullName}</span>
            </div>
            <div className="succes_information-phone">
              <span> * Phone : </span>
              <span>{cartInformation.value?.phone}</span>
            </div>
            <div className="succes_information-email">
              <span> * Email : </span>
              <span>{cartInformation.value?.email}</span>
            </div>
            <div className="succes_information-adress">
              <span> * Địa chỉ : </span>
              <span>{cartInformation.value?.address}</span>
            </div>
            <div className="succes_information-note">
              <span> * Ghi chú : </span>
              <span>{cartInformation.value?.note}</span>
            </div>
          </div>
        </div>
      </DialogContent>
      <DialogActions>
        <Button onClick={handlcheck}>Trở về</Button>
        <Button onClick={handleClick}>Mua hàng</Button>
      </DialogActions>
    </Dialog>
  );
}

export default deloyCheck;
