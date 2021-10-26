import React from 'react';
import PropTypes from 'prop-types';

import { Route, Switch, useRouteMatch, useLocation } from 'react-router-dom';

import Product from './page/product';
import Description from './page/Description';

import ProductQuan from './page/ProductQuan';

ProductFeature.propTypes = {};

function ProductFeature(props) {
  const match = useRouteMatch();
  console.log(match);
  return (
    <div>
      <Switch>
        <Route path={match.url} exact component={Product} />

        {/* <Route path={`${match.path}/count`} component={ProductQuan} /> */}
        <Route path={`${match.url}/:productId`} component={Description} />
      </Switch>
    </div>
  );
}

export default ProductFeature;
