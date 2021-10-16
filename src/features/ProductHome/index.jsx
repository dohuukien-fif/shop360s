import React from 'react';
import PropTypes from 'prop-types';

import { Route, Switch, useRouteMatch } from 'react-router-dom';
import Product from './page/product';
import DetailProduct from './page/Description';

ProductFeature.propTypes = {};

function ProductFeature(props) {
  const match = useRouteMatch();
  console.log(match);
  return (
    <div>
      <Switch>
        <Route path={match.path} exact component={Product} />
        <Route path={`${match.path}/:productId`} component={DetailProduct} />
      </Switch>
    </div>
  );
}

export default ProductFeature;
