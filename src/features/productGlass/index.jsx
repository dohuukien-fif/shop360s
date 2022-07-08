import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import Description from './page/description';
import ProductBalen from './page/ProductBalenciaga';
import ProductChannel from './page/ProductChanel';
import ProductDior from './page/ProductDior';
import ProductDolce from './page/ProductDolce';
import Product from './page/productFeature';
import ProductFendi from './page/ProductFendi';
ProductFeatures.propTypes = {};

function ProductFeatures(props) {
  const match = useRouteMatch();
  return (
    <div>
      <Switch>
        <Route path={match.url} exact component={Product} />

        <Route path={`${match.path}/kinh-balenciaga`} component={ProductBalen} />
        <Route path={`${match.path}/kinh-channel`} component={ProductChannel} />
        <Route path={`${match.path}/kinh-dior`} component={ProductDior} />
        <Route path={`${match.path}/kinh-dolce`} component={ProductDolce} />
        <Route path={`${match.path}/kinh-fendi`} component={ProductFendi} />
        <Route path={`${match.url}/:kinhId`} component={Description} />
      </Switch>
    </div>
  );
}

export default ProductFeatures;
