import logo from './logo.svg';
import './app.scss';
import Home from './features/ProductHome/index';
import Headers from './component/Header';
import Sex from './features/ProductHome/page/detail';
import { Route, Switch, Redirect } from 'react-router-dom';
import QuanFeature from './features/ProductTrousers/index';
import AoFeature from './features/ProductShrit/index';
import KinhFeature from './features/ProductGlass/index';
import muFeature from './features/ProductHats/index';
import GiayFeature from './features/ProductSneaker/index';
function App() {
  return (
    <div>
      <Headers />

      <Switch>
        <Redirect from="/" to="/product" exact />
        <Route path="/product" component={Home} />
        <Route path="/Quan" component={QuanFeature} />
        <Route path="/Ao" component={AoFeature} />
        <Route path="/Kinh" component={KinhFeature} />
        <Route path="/Mu" component={muFeature} />
        <Route path="/Giay" component={GiayFeature} />
        {/* <Route path="/todo" component={Todofeatures} />
        <Route path="/abum" component={AlbumFeature} />
        <Route path="/products" component={ProducFeatures} />
        <Route path="/cart" component={CartFeture} />
        <Route component={NotFound} /> */}
      </Switch>
    </div>
  );
}

export default App;
