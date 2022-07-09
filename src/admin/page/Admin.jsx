import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
import React, { Fragment, useEffect, useState } from 'react';
import { RiAccountPinCircleFill } from 'react-icons/ri';
import { useSelector } from 'react-redux';
import { Link, Redirect, Route, Switch, useRouteMatch } from 'react-router-dom';
import OrderApi from '../../api/OrderApi';
import { formatPrice } from '../../utils';
import LoginFeatures from '../component/auth/login';
import RegisterFeatures from '../component/auth/register';
import ProfilesFeaures from '../component/Profiles';
import ThemeMenu from '../component/ThemeMenu';
import { useUserContext } from './../../component/contextApi/index';
import './../component/ThemeMenu/styles.scss';
import './Admin.scss';
import CustomersFeatures from './customers/Customers';
import ViewCustomers from './customers/view';
import GlassApiFeatures from './glass/Glass';
import HatApiFeatures from './hats/Hats';
import HomeFeatures from './home/Home';
import ManagerFeatures from './managers/page/index';
import NewFeatures from './new/index';
import NewGlassFeatures from './newProduct/newGlass';
import NewHatFeatues from './newProduct/newHats';
import NewproductFeatures from './newProduct/newProduct';
import NewShirtFeatures from './newProduct/newShrits';
import NewSneakerFeatures from './newProduct/newSneaker';
import NewTrouserFeatures from './newProduct/newTrouser';
import OrderFeatures from './order/order';
import ProductFeatures from './product/product';
import SearchApiFeatures from './Search';
import ShirtApiFeatures from './shirts/shirts';
import SidePageFeatures from './sidePage';
import SneakerApiFeatures from './sneakers/Sneakers';
import TrousersApiFeatures from './trousers/Trouser';
import EditGlass from './updateData/EditGlass';
import EditHats from './updateData/EditHats';
import EditOrderFeatures from './updateData/EditOrder';
import EditProductFeatures from './updateData/EditProduct';
import EditSearch from './updateData/EditSearch';
import EditShirt from './updateData/EditShirts';
import EditTrouser from './updateData/EditTrouser';
import UsersFeatures from './user/Users';
AdminFeatures.propTypes = {};
const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));
function AdminFeatures(props) {
  const [isopen, setisopens] = useState(false);
  const [ThemeModal, setThemeModals] = useState('');
  const [lengthOrder, setlengthOrders] = useState([]);
  const match = useRouteMatch();
  const themeReducer = useSelector((state) => state.theme);

  const { user, logoutUser } = useUserContext();

  const isUser = Boolean(user);

  console.log('themeReducer', themeReducer);

  useEffect(() => {
    (async () => {
      const res = await OrderApi.getAll();
      setlengthOrders(res);
      console.log(res);
    })();
  }, []);

  async function handleLogout() {
    try {
      await logoutUser();
    } catch {}
  }
  const dates = new Date();
  // const LENGTHTODAY = lengthOrder?.filter(
  //   (e) => e.day.split('/')[0] === dates.getDate().toString()
  // );
  const TOTALORDER = lengthOrder.reduce((total, item) => total + item.total, 0);

  const hadleThemeAdmin = (value) => {
    setThemeModals(value);
  };
  return (
    <div className={`admin ${ThemeModal}`}>
      <div className="admin_title">
        <div
          className={isopen ? 'menu-btn open' : 'menu-btn'}
          onClick={() => setisopens((x) => !x)}
        >
          <div className="menu-btn__burger"></div>
        </div>
      </div>

      <div className="admin_swapper">
        <div className={isopen ? 'admin_left active' : 'admin_left'}>
          <SidePageFeatures setisopens={setisopens} />
        </div>
        <div className="admin_right">
          <div className="admin_right-top">
            <div className="admin_right-cart">
              <IconButton aria-label="cart">
                <StyledBadge badgeContent={lengthOrder.length} color="secondary">
                  <ShoppingCartIcon />
                </StyledBadge>
              </IconButton>

              <div className="admin_right-mini">
                <div className="admin_right-mini-swapper">
                  {lengthOrder.length === 0 ? (
                    <div className="admin_error">
                      <span>Không có đơn mua hàng</span>
                    </div>
                  ) : (
                    <>
                      {lengthOrder
                        .filter((e) => e.day.split('/')[0] === dates.getDate().toString())
                        .map((items, index) => (
                          <Fragment key={items.code}>
                            {items.cartTotalss.map((itemss, idx) => (
                              <Fragment key={idx}>
                                {itemss.sexx.map((itemsss, index) => (
                                  <div className="admin_mini-item" key={index}>
                                    <div className="admin_mini-left">
                                      <div className="admin_mini-code">
                                        <span>{`#  ${items.code}`}</span>
                                      </div>
                                      <div className="admin_mini-product">
                                        <div className="admin_mini-adside">
                                          <img src={itemsss.product.Araray[0]} alt="" />
                                        </div>
                                        <div className="admin_mini-name">
                                          <span>{itemsss?.product?.name} </span>
                                        </div>
                                      </div>
                                    </div>

                                    <div className="admin_mini-right">
                                      <div className="admin_mini-quantity">
                                        <span>{`${formatPrice(itemsss.product.price)} x ${
                                          itemsss.quantity
                                        }`}</span>
                                      </div>
                                      <div className="admin_mini-totalItem">
                                        <span>{formatPrice(itemss.total)}</span>
                                      </div>
                                    </div>
                                  </div>
                                ))}
                              </Fragment>
                            ))}
                          </Fragment>
                        ))}
                    </>
                  )}
                </div>
                <div className="admin_mini-total">
                  <span>Tổng tiền </span>
                  <span>{formatPrice(TOTALORDER)}</span>
                </div>
              </div>
            </div>
            <div className="admin_right-account">
              <div className="admin_right-icon">
                <RiAccountPinCircleFill />
                <span>{user?.displayName}</span>

                <div className="admin_right-menu">
                  <span>
                    <Link to="/admin/Profile">Profile</Link>
                  </span>
                  <span onClick={handleLogout}>Logout</span>
                </div>
              </div>
            </div>
            <ThemeMenu onSubmit={hadleThemeAdmin} />
          </div>
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
                <Route path={`${match.url}/manager`} exact>
                  <ManagerFeatures />
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
                  <EditGlass />
                </Route>
                <Route path={`${match.url}/Hats/:hatId`}>
                  <EditHats />
                </Route>
                <Route path={`${match.url}/Sneaker/:sneakerId`}>
                  <EditProductFeatures />
                </Route>
                <Route path={`${match.url}/Shirts/:shirtsId`}>
                  <EditShirt />
                </Route>
                <Route path={`${match.url}/Trouser/:trousertId`}>
                  <EditTrouser />
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
        </div>
      </div>
    </div>
  );
}

export default AdminFeatures;
