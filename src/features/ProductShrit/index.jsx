import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, useRouteMatch, useLocation } from 'react-router-dom';
import Product from './page/productFeature';
import Description from './page/description';
import ProductAoAdidas from './page/ProductaoAdidas';
import ProductAoBur from './page/ProductAoBurberry';
import ProductCavin from './page/ProductaoCavin';
import ProductAoDior from './page/ProductaoDior';
import ProductAoDolce from './page/ProducDolce';
import ProductGucci from './page/ProductGucci';
import ProductAoKenzo from './page/ProductKenzo';
import ProductAOLacoste from './page/ProductLacoste';
// import ProductLacoste from './page/ProductLacoste';
ProductFeatures.propTypes = {};

function ProductFeatures(props) {
  const match = useRouteMatch();
  return (
    <div>
      <Switch>
        <Route path={match.url} exact component={Product} />

        <Route path={`${match.path}/ao-adidas`} component={ProductAoAdidas} />
        <Route path={`${match.path}/ao-burberry`} component={ProductAoBur} />
        <Route path={`${match.path}/ao-calvin`} component={ProductCavin} />
        <Route path={`${match.path}/ao-dior`} component={ProductAoDior} />
        <Route path={`${match.path}/ao-dolce`} component={ProductAoDolce} />
        {/* <Route path={`${match.path}/ao-gucci`} component={ProductGucci} /> */}
        <Route path={`${match.path}/ao-kenzo`} component={ProductAoKenzo} />
        <Route path={`${match.path}/ao-lacoste`} component={ProductAOLacoste} />
        <Route path={`${match.url}/:aoId`} component={Description} />
      </Switch>
    </div>
  );
}

export default ProductFeatures;
