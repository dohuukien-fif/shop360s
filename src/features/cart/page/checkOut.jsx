import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import swal from 'sweetalert';
import { useUserContext } from '../../../component/contextApi';
import Deloy from '../formInformation/deloy';
import DeloyCheck from '../formInformation/deloyCheck';
import OrderApi from './../../../api/OrderApi';
import { cartInformationSelector, cartItemTotal, cartTotalSelector } from './../cartSelector';
import { removeCart } from './../cartSlice';
import { addCheckout } from './../cartSlice/checkout';
import { addInformation } from './../cartSlice/Information';
import { removeTotalCart } from './../cartSlice/totalslice';
import AdressForm from './../formInformation/index';
import './checkout.scss';
// CartCheckout.propTypes = {};

function CartCheckout(props) {
  const [open, setOpen] = useState(false);
  const [opens, setOpens] = useState(false);
  const [checkss, setcheck] = useState('');
  const dispatch = useDispatch();
  const { user } = useUserContext();
  const history = useHistory();
  const cartTotals = useSelector(cartTotalSelector);
  const cartInformation = useSelector(cartInformationSelector);
  console.log(cartInformation);
  const cartItemTotals = useSelector(cartItemTotal);
  const handleClickOpens = () => {
    setOpens(true);
    setOpen(false);
  };

  const handlcheck = () => {
    setcheck(false);
    setOpen(true);
    setOpens(false);
  };

  const dates = new Date();
  const dataday = `${dates.getDate()}/${dates.getMonth() + 1}/${dates.getFullYear()}`;
  const datahour = `${dates.getHours()}:${dates.getMinutes() + 1}:${dates.getSeconds()}`;
  const handleSubmit = async (value) => {
    const action = await addInformation({ value });
    dispatch(action);
    if (cartInformation !== undefined) setOpen(true);
    //
  };

  const cartTotalss = new Array(cartTotals[cartTotals.length - 1]);
  const handleClick = async () => {
    const actions = await addCheckout({
      code: Math.floor(Math.random() * 4000) + 100,
      day: dataday,
      time: datahour,
      id: Date.now(),
      status: 'Pending',
      user: { name: user?.displayName, email: user?.email },
      infor: cartInformation.value,
      cartTotalss,
    });

    await OrderApi.add({
      code: Math.floor(Math.random() * 4000) + 100,
      day: dataday,
      time: datahour,
      id: Date.now(),
      status: 'Pending',
      user: { name: user?.displayName, email: user?.email },
      infor: cartInformation.value,
      cartTotalss,
      total: cartItemTotals,
    });

    dispatch(actions);
    dispatch(removeTotalCart());
    dispatch(removeCart());
    setOpens(false);

    await swal({
      // title: 'Good job!',
      text: 'Đặt hàng thành công!',
      icon: 'success',
    });
    history.push('/');
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
