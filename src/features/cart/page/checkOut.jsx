import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AdressForm from './../formInformation/index';
import './checkout.scss';
import { useSelector, useDispatch } from 'react-redux';
import { addInformation } from './../cartSlice/Information';
import { addCheckout } from './../cartSlice/checkout';
import { cartTotalSelector, cartInformationSelector } from './../cartSelector';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import Deloy from '../formInformation/deloy';

import { removeTotalCart } from './../cartSlice/totalslice';
import { removeCart } from './../cartSlice';

import { useHistory } from 'react-router-dom';
import swal from 'sweetalert';
import DeloyCheck from '../formInformation/deloyCheck';
// CartCheckout.propTypes = {};

function CartCheckout(props) {
  const [open, setOpen] = useState(false);
  const [opens, setOpens] = useState(false);
  const [checkss, setcheck] = useState('');
  const dispatch = useDispatch();
  const history = useHistory();
  const cartTotals = useSelector(cartTotalSelector);
  const cartInformation = useSelector(cartInformationSelector);
  console.log(cartInformation);

  const handleClickOpens = () => {
    setOpens(true);
    setOpen(false);
  };

  const handleCloses = () => {
    setOpens(false);
  };
  const handlcheck = () => {
    setcheck(false);
    setOpen(true);
    setOpens(false);
  };
  const handlcheckout = () => {
    setcheck('ok');
    setOpen(false);
    setOpens(false);
  };
  const handleSubmit = async (value) => {
    console.log('kien', value);

    const action = await addInformation({ value });
    dispatch(action);
    if (cartInformation !== undefined) setOpen(true);
    //
  };
  console.log('hay');
  const cartTotalss = new Array(cartTotals[cartTotals.length - 1]);
  const handleClick = async () => {
    const actions = addCheckout({
      id: Date.now(),
      infor: cartInformation,
      cartTotalss,
    });

    dispatch(actions);
    dispatch(removeTotalCart());
    dispatch(removeCart());
    setOpens(false);
    swal({
      // title: 'Good job!',
      text: 'Đặt hàng thành công!',
      icon: 'success',
    });

    await history.push('/');
  };
  return (
    <div className="checkout">
      <h2>Thông Tin Nhận Hàng</h2>
      <AdressForm onSubmits={handleSubmit} />
      <Deloy
        open={open}
        cartTotals={cartTotals}
        cartInformation={cartInformation}
        setOpen={setOpen}
        handleClickOpens={handleClickOpens}
      />
      <DeloyCheck
        opens={opens}
        handlcheck={handlcheck}
        handleClick={handleClick}
        cartTotals={cartTotals}
        cartInformation={cartInformation}
      />
    </div>
  );
}

export default CartCheckout;
