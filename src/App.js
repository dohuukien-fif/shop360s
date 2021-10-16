import logo from './logo.svg';
import './app.scss';
import Home from './features/ProductHome/page/product';
import Headers from './component/Header';

import { Route, Switch } from 'react-router';

function App() {
  return (
    <div>
      <Headers />

      <Switch>
        <Route exact path="/" component={Home} />
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
