import React from 'react';
import PropTypes from 'prop-types';
import { Link, Redirect, Route, Switch, useRouteMatch } from 'react-router-dom';
import { useUserContext } from '../../../component/contextApi';
import HomeFeatures from '../home/Home';
import LoginFeatures from '../../component/auth/login';
import ProfilesFeaures from '../../component/Profiles';
import ProductFeatures from '../product/product';
import CustomersFeatures from '../customers/Customers';
import ViewCustomers from '../customers/view';
import EditOrderFeatures from '../updateData/EditOrder';
import EditSearch from '../updateData/EditSearch';
import EditTrouserFeatures from '../updateData/EditTrouser';
import EditShirtsFeatures from '../updateData/EditShirts';
import EditProductFeatures from '../updateData/EditProduct';
import EditHatsFeatures from '../updateData/EditHats';
import EditGlassFeatures from '../updateData/EditGlass';
import NewTrouserFeatures from '../newProduct/newTrouser';
import NewShirtFeatures from '../newProduct/newShrits';
import NewSneakerFeatures from '../newProduct/newSneaker';
import NewHatFeatues from '../newProduct/newHats';
import NewGlassFeatures from '../newProduct/newGlass';
import NewproductFeatures from '../newProduct/newProduct';

import RegisterFeatures from '../../component/auth/register/index';
import GlassApiFeatures from '../';


RouterAdmin.propTypes = {
   
};

function RouterAdmin(props) {
   const { user, logoutUser } = useUserContext();
   const match = useRouteMatch();
   const isUser = Boolean(user);
   return (
      <Switch>
            <Route path={`${match.url}`} exact>
              {isUser ? <HomeFeatures /> : <Redirect to="/admin/login" />}
            </Route>
            <Route path={`${match.url}/login`} exact>
              {!isUser ? <LoginFeatures /> : <Redirect to="/admin" />}
            </Route>
            <Route path={`${match.url}/register`} exact>
              {!isUser ? <RegisterFeatures /> : <Redirect to="/admin" />}
            </Route>

            {user && (
              <>
                <Route path={`${match.url}/Profile`} exact>
                  <ProfilesFeaures />
                </Route>
                <Route path={`${match.url}/Product`} exact>
                  <ProductFeatures />
                </Route>
                <Route path={`${match.url}/Glass`} exact>
                  <GlassApiFeatures />
                </Route>
                <Route path={`${match.url}/Customers`} exact>
                  <CustomersFeatures />
                </Route>
                <Route path={`${match.url}/Hats`} exact>
                  <HatApiFeatures />
                </Route>
                <Route path={`${match.url}/Trousers`} exact>
                  <TrousersApiFeatures />
                </Route>
                <Route path={`${match.url}/Shirts`} exact>
                  <ShirtApiFeatures />
                </Route>
                <Route path={`${match.url}/Search`} exact>
                  <SearchApiFeatures />
                </Route>
                <Route path={`${match.url}/Sneaker`} exact>
                  <SneakerApiFeatures />
                </Route>
                <Route path={`${match.url}/User`} exact>
                  <UsersFeatures />
                </Route>
                <Route path={`${match.url}/Order`} exact>
                  <OrderFeatures />
                </Route>
                <Route path={`${match.url}/News`} exact>
                  <NewFeatures />
                </Route>
                {/* //newProduct */}
                <Route path={`${match.url}/newProduct`} exact>
                  <NewproductFeatures />
                </Route>
                <Route path={`${match.url}/newGlass`} exact>
                  <NewGlassFeatures />
                </Route>
                <Route path={`${match.url}/newHat`} exact>
                  <NewHatFeatues />
                </Route>
                <Route path={`${match.url}/newSneaker`} exact>
                  <NewSneakerFeatures />
                </Route>
                <Route path={`${match.url}/newShirts`} exact>
                  <NewShirtFeatures />
                </Route>
                <Route path={`${match.url}/newTrouser`} exact>
                  <NewTrouserFeatures />
                </Route>

                {/* UPDATEDATA   */}
                <Route path={`${match.url}/product/:productId`}>
                  <EditProductFeatures />
                </Route>
                <Route path={`${match.url}/Glass/:glassId`}>
                  <EditGlassFeatures />
                </Route>
                <Route path={`${match.url}/Hats/:hatId`}>
                  <EditHatsFeatures />
                </Route>
                <Route path={`${match.url}/Sneaker/:sneakerId`}>
                  <EditProductFeatures />
                </Route>
                <Route path={`${match.url}/Shirts/:shirtsId`}>
                  <EditShirtsFeatures />
                </Route>
                <Route path={`${match.url}/Trouser/:trousertId`}>
                  <EditTrouserFeatures />
                </Route>
                <Route path={`${match.url}/Search/:searchId`}>
                  <EditSearch />
                </Route>
                <Route path={`${match.url}/Order/:orderId`}>
                  <EditOrderFeatures />
                </Route>
                <Route path={`${match.url}/Customers/:customerId`}>
                  <ViewCustomers />
                </Route>
              </>
            )}
          </Switch>
   );
}

export default RouterAdmin;