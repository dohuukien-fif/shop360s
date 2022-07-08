import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import swal from 'sweetalert';
import SalesApi from '../../../api/ProductSales';
import { useUserContext } from '../../../component/contextApi';
import LoadingFeatues from '../../../component/loading';
import { AddOrder } from '../cartSlice/checkOuts';
import Deloy from '../formInformation/deloy';
import DeloyCheck from '../formInformation/deloyCheck';
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
  const [dataSales, setdataSales] = useState([]);
  const [opens, setOpens] = useState(false);
  const [loading, setloading] = useState(false);
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
  useEffect(() => {
    const fetchApiproduct = async () => {
      const res = await SalesApi.getAll();

      setdataSales(res);
    };
    fetchApiproduct();
  }, []);
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

  const totals = cartTotalss.find((e) => e?.total);

  console.log('totals', totals?.total);
  const handleClick = async () => {
    //check login before order
    setloading(true);
    if (user === null) {
      alert('vui lòng đăng nhập  ');
      return;
    }
    //check orderId === uid
    const salesId = dataSales.findIndex((items) => items?.OrderId === user?.uid);
    const dataSale = dataSales.find((items) => items?.OrderId === user?.uid);
    //check for id admin order &&   sales
    const CHECK_OREDERID = salesId >= 0 ? dataSale.OrderId : user?.uid;
    const CHECKID = Date.now();
    //dispatch order up redux checkOut
    const actions = await addCheckout({
      code: Math.floor(Math.random() * 4000) + 100,
      day: dataday,
      time: datahour,
      id: CHECKID,
      OrderId: CHECK_OREDERID,
      status: 'Pending',
      user: { name: user?.displayName, email: user?.email },
      infor: cartInformation.value,
      cartTotalss,
    });
    dispatch(actions);
    //dispatch  order   up  redux thunk
    const actionss = AddOrder({
      code: Math.floor(Math.random() * 4000) + 100,
      day: dataday,
      time: datahour,
      id: CHECKID,
      OrderId: CHECK_OREDERID,
      status: 'Pending',
      user: { name: user?.displayName, email: user?.email, image: user?.photoURL },
      infor: cartInformation.value,
      cartTotalss,
      total: totals?.total,
    });

    const res = await dispatch(actionss).unwrap();
    console.log(res);

    dispatch(removeTotalCart());
    dispatch(removeCart());
    setOpens(false);
    setloading(false);
    await swal({
      // title: 'Good job!',
      text: 'Đặt hàng thành công!',
      icon: 'success',
    });
    await history.push('/');
  };
  return (
    <div className="checkout">
      <h2>Thông Tin Nhận Hàng</h2>
      {loading && <LoadingFeatues />}
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
