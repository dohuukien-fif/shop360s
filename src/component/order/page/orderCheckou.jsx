import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Account from './../component/account/index';
import './styles.scss';
import { Link, useHistory, useRouteMatch, Switch, Route } from 'react-router-dom';

import { GiBackwardTime } from 'react-icons/gi';
import { AiOutlineRight } from 'react-icons/ai';

import { BiExit } from 'react-icons/bi';

import FormAccount from './../component/formAccout';
import Order from './../component/order';
import Bell from './../component/notification';
import Exit from './../component/cancelorder';
import Addres from './../component/addres';
import ProductOrrder from './order';
import Check from './../component/productOrder';
import { useUserContext } from './../../contextApi/index';
OrderCheckou.propTypes = {};

function OrderCheckou(props) {
  const [isMobal, setMobal] = useState(false);
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
  const handleSubmit = (newvalue) => {
    let newArray = [];
    const newEven = {
      name: user?.displayName,
      content: newvalue.evaluate,
    };
    // const newssss = { ...newEven };
    let newss = [...newArray];

    let newArr = newss.push(newEven);
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
    localStorage.setItem('onesss', JSON.stringify(newArr));
    setMobal(false);
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
            </Switch>
          </div>
        </div>
      </div>
      {isMobal && (
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
