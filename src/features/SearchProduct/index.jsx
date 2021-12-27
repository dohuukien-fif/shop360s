import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, useRouteMatch, Redirect, useLocation } from 'react-router-dom';

import Description from './page/description';
import SearchProduct from './page/SearchProduct';
import ProductSearch from './page/product';

// import ProductLacoste from './page/ProductLacoste';
ProductFeatures.propTypes = {};

function ProductFeatures(props) {
  const match = useRouteMatch();
  return (
    <div>
      <Switch>
        <Route path={match.url} exact component={ProductSearch} />
        <Route path={`${match.url}/q`} exact component={SearchProduct} />

        {/* <Route path={`${match.path}/ao-gucci`} component={ProductGucci} /> */}

        <Route path={`${match.url}/:SearchId`} component={Description} />
      </Switch>
    </div>
  );
}

export default ProductFeatures;
