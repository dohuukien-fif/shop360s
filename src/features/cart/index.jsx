import React from 'react';
import PropTypes from 'prop-types';

import { Route, Switch, useRouteMatch, useLocation } from 'react-router-dom';

import Product from './page/cartFeature';
import Cartchecout from './page/checkOut';

// import ProductQuan from './page/ProductQuan';

CartFeature.propTypes = {};

function CartFeature(props) {
  const match = useRouteMatch();
  console.log(match);
  return (
    <div>
      <Switch>
        <Route path={match.url} exact component={Product} />

        {/* <Route path={`${match.path}/count`} component={ProductQuan} /> */}
        <Route path={`${match.url}/checkout`} component={Cartchecout} />
      </Switch>
    </div>
  );
}

export default CartFeature;
