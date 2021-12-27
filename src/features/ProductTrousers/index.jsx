import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, useRouteMatch, useLocation } from 'react-router-dom';
import Product from './page/productFeature';
import Description from './page/description';
import ProductQuanJeans from './page/ProductQuanJeans';
import ProductQuanAu from './page/ProductQuanAu';
import ProductVaynu from './page/ProductVaynu';
import ProductQuanShort from './page/ProductQuanShort';
import ProductQuanKaki from './page/ProductQuanKaki';
ProductFeatures.propTypes = {};

function ProductFeatures(props) {
  const match = useRouteMatch();
  return (
    <div>
      <Switch>
        <Route path={match.url} exact component={Product} />

        <Route path={`${match.path}/quan-jeans`} exact component={ProductQuanJeans} />
        <Route path={`${match.path}/quan-au`} component={ProductQuanAu} />
        <Route path={`${match.path}/vay-nu`} component={ProductVaynu} />
        <Route path={`${match.path}/quan-short`} component={ProductQuanShort} />
        <Route path={`${match.path}/quan-kaki`} component={ProductQuanKaki} />
        <Route path={`${match.url}/:quanId`} component={Description} />
      </Switch>
    </div>
  );
}

export default ProductFeatures;
