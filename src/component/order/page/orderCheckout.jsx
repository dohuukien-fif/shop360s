import React, { useState } from 'react';
import { AiOutlineRight } from 'react-icons/ai';
import { BiExit } from 'react-icons/bi';
import { GiBackwardTime } from 'react-icons/gi';
import { useSelector } from 'react-redux';
import { Link, Route, Switch, useHistory, useRouteMatch } from 'react-router-dom';
import { cartCheckout } from './../../../features/cart/cartSelector';
import { useUserContext } from './../../contextApi/index';
import Account from './../component/account/index';
import Addres from './../component/addres';
import Exit from './../component/cancelorder';
import FormAccount from './../component/formAccout';
import Bell from './../component/notification';
import Order from './../component/order';
import Check from './../component/productOrder';
import ShippingOrder from './../component/shippig';
import ProductOrrder from './order';
import './styles.scss';
OrderCheckou.propTypes = {};

function OrderCheckou(props) {
  const [isModal, setMobal] = useState(false);
  const { user } = useUserContext();
  const history = useHistory();
  const { url } = useRouteMatch();
  console.log(url);
  const handleClickBack = () => {
    history.goBack();
  };
  const handleClickHome = () => {
    history.push('/');
  };
  const handleClickMobal = () => {
    setMobal(true);
  };
  const handleClickCloke = () => {
    setMobal(false);
  };

  let checkEvanlue = JSON.parse(localStorage.getItem('onessss')) || [];

  console.log('[JSON.parse(checkEvanlue)]', checkEvanlue);
  const handleSubmit = (newvalue) => {
    setMobal(false);
    const newEven = {
      userId: user?.uid,
      name: user?.displayName,
      content: new Array(newvalue.evaluate),
    };
    //checkUserId === uid
    const checkUserId = checkEvanlue.findIndex((e) => e.userId === user.uid);

    //update content

    if (checkUserId >= 0) {
      checkEvanlue = [...checkEvanlue, checkEvanlue[checkUserId].content.push(newvalue.evaluate)];
      localStorage.setItem('onessss', JSON.stringify(checkEvanlue) || []);

      return;
    }
    //new Evanlue
    if (checkUserId < 0) {
      checkEvanlue = [...checkEvanlue, newEven];
      localStorage.setItem('onessss', JSON.stringify(checkEvanlue) || []);

      return;
    }

    // const newssss = { ...newEven };

    // let newData = newss.push(newEven);
    //     const newEvaluate = newss.push(newEven);
    //     const cloceStuden = [...student];
    // const newObje = {
    //   ...cloceStuden,
    //   name: "hat"
    // };
    // cloceStuden.push(newObje)
    // console.log(newss);
    // console.log(newArray);
    // newss.push(newEven);

    console.log('newss', checkEvanlue);
  };

  return (
    <div className="information_container">
      <div className="information_titles">
        <span>
          <Link to="/">Trang chủ</Link> / Tài Khoản
        </span>
      </div>
      <Account />
      <div className="information_order">
        <span>Tài khoản</span>
        <div className="information_fulter">
          <div className="information_Link">
            <ProductOrrder />
            <div className="information_content">
              <div className="information_icons">
                <GiBackwardTime style={{ fontSize: '20px' }} />{' '}
                <span onClick={handleClickBack}>Quan về</span>
              </div>
              <AiOutlineRight style={{ fontSize: '20px', marginTop: '-10px' }} />
            </div>
            <div className="information_content">
              <div className="information_icons">
                <BiExit style={{ fontSize: '20px' }} /> <span onClick={handleClickHome}>Thoát</span>
              </div>
              <AiOutlineRight style={{ fontSize: '20px', marginTop: '-10px' }} />
            </div>
          </div>
          <div className="information_router">
            <Switch>
              <Route exact path={url}>
                <Order handleClicks={handleClickMobal} />
              </Route>
              {/* <Route exact path={url} component={Order} /> */}
              <Route exact path={`${url}/thong-bao`} component={Bell} />
              <Route exact path={`${url}/don-huy`} component={Exit} />
              <Route exact path={`${url}/dia-chi`} component={Addres} />
              <Route exact path={`${url}/check`} component={Check} />
              <Route exact path={`${url}/shipping`} component={ShippingOrder} />
            </Switch>
          </div>
        </div>
      </div>
      {isModal && (
        <div className="mobal">
          <div className="mobal_multiplier">
            <FormAccount onSubmits={handleSubmit} />
            <button onClick={handleClickCloke}>Trở về</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default OrderCheckou;
