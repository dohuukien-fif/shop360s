import React from 'react';
import { Redirect, Route, Switch, useRouteMatch } from 'react-router-dom';
import GlassApiFeatures from '../';
import { useUserContext } from '../../../component/contextApi';
import LoginFeatures from '../../component/auth/login';
import RegisterFeatures from '../../component/auth/register/index';
import ProfilesFeaures from '../../component/Profiles';
import CustomersFeatures from '../customers/Customers';
import ViewCustomers from '../customers/view';
import HomeFeatures from '../home/Home';
import NewGlassFeatures from '../newProduct/newGlass';
import NewHatFeatues from '../newProduct/newHats';
import NewproductFeatures from '../newProduct/newProduct';
import NewShirtFeatures from '../newProduct/newShrits';
import NewSneakerFeatures from '../newProduct/newSneaker';
import NewTrouserFeatures from '../newProduct/newTrouser';
import ProductFeatures from '../product/product';
import EditGlassFeatures from '../updateData/EditGlass';
import EditHatsFeatures from '../updateData/EditHats';
import EditOrderFeatures from '../updateData/EditOrder';
import EditProductFeatures from '../updateData/EditProduct';
import EditSearch from '../updateData/EditSearch';
import EditShirtsFeatures from '../updateData/EditShirts';
import EditTrouserFeatures from '../updateData/EditTrouser';

RouterAdmin.propTypes = {};

function RouterAdmin(props) {
  const { user } = useUserContext();
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
          {/* <Route path={`${match.url}/Hats`} exact>
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
                </Route> */}
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
