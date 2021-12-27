import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, useRouteMatch, useLocation } from 'react-router-dom';
import Order from './page/orderCheckou';

import Orders from './page/order';
// import Description from './page/description';
// import ProductBalen from './page/ProductBalenciaga';
// import ProductChannel from './page/ProductChanel';
// import ProductDior from './page/ProductDior';
// import ProductDolce from './page/ProductDolce';
// import ProductFendi from './page/ProductFendi';
Index.propTypes = {};

function Index(props) {
  const match = useRouteMatch();
  return (
    <div>
      <Switch>
        <Route path={match.url} exact component={Order} />
      </Switch>
    </div>
  );
}

export default Index;
