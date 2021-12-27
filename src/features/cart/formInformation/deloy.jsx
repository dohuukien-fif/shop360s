import React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import './deloy.scss';
deloy.propTypes = {
  cartTotals: PropTypes.array,
  cartInformation: PropTypes.object,
  handleClickOpens: PropTypes.func,
};

function deloy({ open, cartInformation, setOpen, handleClickOpens }) {
  // const tap = cartTotals.filter((element) => element.length - 1);

  return (
    <div>
      <Dialog
        open={open}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        className="kien-dep "
      >
        <DialogContent className="Dia_log1">
          {/* {cartTotals !== undefined &&
            new Array(totalCart).map((items, index) => (
              <div key={items.id}>
                <span>{items.total}</span>
              </div>
            ))} */}
          <div className="information">
            <div className="information_title">Xác nhận thông tin</div>
            <div className="information_fullName">
              <span> * Tên người nhận</span>
              <span>{cartInformation.value?.fullName}</span>
            </div>
            <div className="information_phone">
              <span> * Số điện thoại người nhận</span>
              <span>{cartInformation.value?.phone}</span>
            </div>
            <div className="information_email">
              <span> * Email người nhận</span>
              <span>{cartInformation.value?.email}</span>
            </div>
            <div className="information_adress">
              <span> * Địa chỉ người nhận</span>
              <span>{cartInformation.value?.address}</span>
            </div>
            <div className="information_note">
              <span> * Ghi chú</span>
              <span>{cartInformation.value?.note}</span>
            </div>
          </div>

          {/* <h2>{cartInformation?.fullName}</h2>
            <h2>{cartInformation?.node}</h2>
            <h2>{cartInformation?.email}</h2>
            <h2>{cartInformation?.fullName}</h2> */}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>
            <span style={{ fontWeight: '600' }}>Trở lại</span>
          </Button>
          <Button autoFocus onClick={handleClickOpens}>
            <span style={{ fontWeight: '600' }}> Tiếp tục</span>
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default deloy;
