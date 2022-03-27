import logo from './logo.svg';
import { useEffect } from 'react';

import './app.scss';
import Home from './features/ProductHome/index';
import Headers from './component/Header';

import { Route, Switch, Redirect, useHistory, useLocation } from 'react-router-dom';
import QuanFeature from './features/ProductTrousers/index';
import AoFeature from './features/ProductShrit/index';
import KinhFeature from './features/ProductGlass/index';
import muFeature from './features/ProductHats/index';
import GiayFeature from './features/ProductSneaker/index';
import CartFeature from './features/cart/index';
import Login from './component/auth/login';
import Register from './component/auth/register';
import Thongtins from './component/order/page/orderCheckou';
import { useUserContext } from './component/contextApi/index';
import NotFound from './component/notFound/index';
import Fouter from './component/fouter/index';
import SearchProduct from './features/SearchProduct/index';
import IntroduceFeartures from './features/introduce/page/index';
import NewFeatures from './features/introduce/page/new';
import AdminFeatures from './admin/page/Admin';
// import Order from './component/order/index';

import { useSelector } from 'react-redux';
function App() {
  const { user, registerUser, logoutUser, signInUser, loading } = useUserContext();
  const themeReducer = useSelector((state) => state.theme);
  const history = useHistory();
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  const isloginin = JSON.parse(localStorage.getItem('accessToken'));
  const haslogin = Boolean(isloginin);
  // console.log(haslogin);
  // useEffect(() => {
  //   const handlepussh = () => {
  //     // if (isloginin === undefined) return;
  //     if (loading) {
  //       <Redirect from="/login" to="/Trang-chu" />;
  //     }
  //   };
  //   handlepussh();
  // }, [loading]);

  const LINKREDIRECT =
    localStorage.getItem('REDERESS') && JSON.parse(localStorage.getItem('REDERESS'));
  const ISLINKREDIRECT = Boolean(LINKREDIRECT);

  useEffect(() => {
    if (haslogin) {
      localStorage.removeItem('REDERESS');
    }
  }, [haslogin]);
  return (
    <div>
      <Headers />

      <Switch>
        <Redirect from="/" to="/Trang-chu" exact />

        <Route path="/Trang-chu" component={Home} />
        {/* {user === null && <Redirect to="/Trang-chu" />} */}
        {haslogin && <Redirect from="/login" to={ISLINKREDIRECT ? LINKREDIRECT : '/Trang-chu'} />}
        {haslogin && (
          <Redirect from="/register" to={ISLINKREDIRECT ? LINKREDIRECT : '/Trang-chu'} />
        )}
        <Route path="/Quan" component={QuanFeature} />
        <Route path="/Ao" component={AoFeature} />
        {/* <Route path="/tat-ca" component={AllproductFeature} /> */}
        <Route path="/Kinh" component={KinhFeature} />
        {/* <Redirect from="" to="/product" exact /> */}
        <Route path="/Search" component={SearchProduct} />
        <Route path="/Mu" component={muFeature} />
        <Route path="/Giay" component={GiayFeature} />
        <Route path="/Cart" component={CartFeature} />
        <Route path="/Thongtin" component={Thongtins} />
        <Route path="/gioi-thieu" component={IntroduceFeartures} />
        <Route path="/tin-tuc" component={NewFeatures} />
        <Route path="/admin" component={AdminFeatures} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />

        <Route component={NotFound} />
        {/* {logoutUser && <Redirect to="/" />}
        {user === null && <Redirect to="/" />} */}

        {/* <Route path="/todo" component={Todofeatures} />
        <Route path="/abum" component={AlbumFeature} />
        <Route path="/products" component={ProducFeatures} />
        <Route path="/cart" component={CartFeture} />
        <Route component={NotFound} /> */}
      </Switch>

      <Fouter />
      {/* {user === null && <Redirect to="/login" />} */}
    </div>
  );
}

export default App;
