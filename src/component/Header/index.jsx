import { ShoppingCart } from '@mui/icons-material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CloseIcon from '@mui/icons-material/Close';
import DehazeIcon from '@mui/icons-material/Dehaze';
import HomeIcon from '@mui/icons-material/Home';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import { Badge, IconButton } from '@mui/material';

import React, { useEffect, useRef, useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory, useLocation } from 'react-router-dom';

import { addSearch, addSearchs, Searchss } from '../../features/SearchProduct/Slic/searchSlice';
import SearchApi from './../../api/Searchapi';
import { cartCheckout, cartItemCount } from './../../features/cart/cartSelector';
import { useUserContext } from './../contextApi/index';
import DialogCart from './component/dialogCarrt/dialogCart';
import DialogSearch from './component/dialogSearch/index';
import ProductLink from './component/Link';
// import {Searchss} from "./"
import { LoadingSearch } from './../../features/SearchProduct/Slic/searchSelec';
import './styles.scss';
import CircularProgress from '@mui/material/CircularProgress';
const Header = (props) => {
  const [torget, settorget] = useState(false);
  const history = useHistory();
  const loadingSearchs = useSelector(LoadingSearch);
  const ref = useRef();
  const { pathname } = useLocation();
  const cartCheckouts = useSelector(cartCheckout);
  const { user, logoutUser, signInUser } = useUserContext();
  const cartItemCounts = useSelector(cartItemCount);
  const [opens, setOpen] = useState(false);
  const [accounts, setaccounts] = useState(false);
  const [openSearch, setopenSearch] = useState(false);
  const [openCart, setopenCart] = useState(false);
  const [SearchItem, setSearchItem] = useState('');
  const clickAccount = () => {
    setaccounts((x) => !x);
  };

  const [anchorEl, setAnchorEl] = useState(false);
  // console.log(user, !!signInUser);

  // const open = Boolean(anchorEl);
  const handleClickmenu = () => {
    setAnchorEl((prev) => !prev);
  };
  const handleClosemenu = () => {
    setAnchorEl(false);
  };

  async function handleLogout() {
    try {
      await logoutUser();
      setAnchorEl(false);
    } catch {}
  }
  const handleClickToget = () => {
    settorget((x) => !x);
  };
  const handleLinkCart = () => {
    // history.push('/Cart');
    setopenCart(true);
  };

  // const handleClickOpen = () => {
  //   setOpen(true);
  // };

  const handleClose = () => {
    setOpen(false);
  };
  // const hanleLooutClick = () => {
  //   const action = logout();
  //   dispatch(action);
  // };
  //
  // const handleLinkCart = () => {
  //   history.push('/cart');
  // };
  const [scrow, setscrow] = useState(false);
  // const [scrowTop, setscrowTop] = useState(false);
  useEffect(() => {
    const chanscrowu = () => {
      if (window.scrollY >= 150) {
        setscrow(true);
      } else {
        setscrow(false);
      }
    };
    window.addEventListener('scroll', chanscrowu);
    return () => {
      window.removeEventListener('scroll', chanscrowu);
    };
  }, [scrow]);
  //
  // useEffect(() => {
  //   const chanscrowus = () => {
  //     if (window.scrollY >= 300) {
  //       setscrowTop(true);
  //     } else {
  //       setscrowTop(false);
  //     }
  //   };
  //   window.addEventListener('scroll', chanscrowus);
  //   return () => {
  //     window.removeEventListener('scroll', chanscrowus);
  //   };
  // }, [scrowTop]);
  // QUẦN ÂU NAM QACTK203
  //quan au
  //quần Short
  //quan jean
  //quần Jeans
  //áo Burberry
  //áo Dior
  const dispatch = useDispatch();
  // const [filters, setfilters] = useState({
  //   _page: 1,
  //   _limit: 12,
  // });
  // const [pagination, setpagination] = useState();
  const [Product, setProduct] = useState([]);
  useEffect(() => {
    const fetchApi = async () => {
      try {
        const res = await SearchApi.getAll();
        setProduct(res);
      } catch (e) {
        console.error(e);
      }
    };
    fetchApi();
  }, []);
  // custom search towe
  // const searchItemss = (newValue) => {
  //   return newValue.filter((item) =>
  //     item.SearchTerm.toLowerCase().includes(SearchItem.toLowerCase())
  //   );
  // };
  // handlesubmit dispath Search up redux
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (openSearch === true) {
        setopenSearch(false);
      }
      // let res = await searchItemss(Product);
      const action = Searchss(SearchItem);
      const user = await dispatch(action).unwrap();
      console.log('searcsadasjfaskbf', user);
      // dispatch(addSearch());
      dispatch(addSearchs(SearchItem));

      history.push(`/Search/q`);
      setSearchItem('');
    } catch (error) {
      console.log(error);
    }
  };

  const setTrueToget = () => {
    if (window.innerWidth > 768) {
      settorget(false);
    }
  };
  window.addEventListener('scroll', setTrueToget);
  //location loading set => false => dialog

  useEffect(() => {
    setopenSearch(false);
    setopenCart(false);
  }, [pathname]);

  // useEffect(() => {
  //   const handleWindow = () => {
  //     setopenCart(false) || setopenSearch(false);
  //   };
  //   document.addEventListener('click', handleWindow);
  //   return () => {
  //     document.removeEventListener('click', handleWindow);
  //   };
  // }, [openCart, openSearch]);
  // useEffect(() => {
  //   const checkIfClickedOutside = (e) => {
  //     // If the menu is open and the clicked target is not within the menu,
  //     // then close the menu
  //     if (openSearch && ref.current && !ref.current.contains(e.target)) {
  //       setopenSearch(false);
  //     }
  //   };

  //   document.addEventListener('click', checkIfClickedOutside);

  //   return () => {
  //     // Cleanup the event listener
  //     document.removeEventListener('click', checkIfClickedOutside);
  //   };
  // }, [openSearch]);
  return (
    <div className={scrow ? 'activeNav' : null}>
      <div className={scrow ? 'header actives_header' : 'header'}>
        <div className={scrow ? 'header-left active_image' : 'header-left'}>
          <Link to="/Trang-chu">
            <img
              src="https://360boutique.vn/wp-content/uploads/2021/10/LOGO-360-DUNG-TAM-THOI-MAU-DEN-05.png"
              alt=""
            />
          </Link>
        </div>
        <div className={scrow ? 'header-mid activeHeader' : 'header-mid'}>
          {!scrow && (
            <form onSubmit={handleSubmit}>
              <input
                // className={scrow && 'activeHeader'}
                value={SearchItem}
                type="text"
                placeholder="Tìm kiến sản phẩm..."
                onChange={(e) => setSearchItem(e.target.value)}
              />
              <button>
                {' '}
                {loadingSearchs === true ? (
                  <CircularProgress
                    // sx={{ fontSize: '10px' }}
                    style={{ width: '18px', height: '18px', marginRight: '10px' }}
                    color="inherit"
                  />
                ) : (
                  <FiSearch />
                )}
              </button>
            </form>
          )}
        </div>
        <div className="header-right">
          <div className="none">
            {user && (
              <>
                <AccountCircleIcon onClick={handleClickmenu} style={{ fontSize: '25px' }} />

                <span>{user?.displayName}</span>
              </>
            )}
            {anchorEl && (
              <ul
                className="menu"
                // anchorEl={anchorEl}

                onClose={handleClosemenu}
              >
                <li onClick={handleClose}>Profile</li>
                <li onClick={handleClose}>
                  {' '}
                  <Link to="/Thongtin">
                    Thông tin{' '}
                    {cartCheckouts.length > 0 && (
                      <div className="icon_quantity">{cartCheckouts.length}</div>
                    )}
                  </Link>
                </li>
                <li onClick={handleLogout}>Logout</li>
              </ul>
            )}

            {user === null && (
              <>
                <div className="account">
                  <span onClick={clickAccount}>tài khoản</span>
                  {accounts && (
                    <ul className="account_list">
                      <li>
                        <Link to="/login">
                          {' '}
                          <span style={{ fontSize: '13px' }}>Login</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/register">
                          {' '}
                          <span style={{ fontSize: '13px' }}>register</span>
                        </Link>
                      </li>
                    </ul>
                  )}
                </div>
              </>
            )}
          </div>

          <FiSearch onClick={() => setopenSearch(true)} style={{ cursor: 'pointer' }} />
          <div className="none">
            <IconButton
              size="large"
              aria-label="show 4 new mails"
              color="inherit"
              onClick={handleLinkCart}
            >
              <Badge badgeContent={user ? cartItemCounts : '0'} color="error">
                <ShoppingCart style={{ fontSize: '25px' }} />
              </Badge>
            </IconButton>
          </div>

          {torget ? (
            <CloseIcon onClick={() => settorget(false)} />
          ) : (
            <DehazeIcon className="header-right_icon" onClick={handleClickToget} />
          )}
        </div>

        <div className="mobile">
          <div className="mobile_tab">
            <Link to="/">
              <HomeIcon style={{ fontSize: '25px' }} />
            </Link>
          </div>
          <div className="mobile_tab">
            <IconButton
              size="large"
              aria-label="show 4 new mails"
              color="inherit"
              onClick={handleLinkCart}
            >
              <Badge badgeContent={user ? cartItemCounts : '0'} color="error">
                <ShoppingCart style={{ fontSize: '25px' }} />
              </Badge>
            </IconButton>
          </div>
          <div className="mobile_tab">
            <NotificationsNoneIcon style={{ fontSize: '25px' }} />
          </div>
          <div className="mobile_tab">
            <>
              <AccountCircleIcon style={{ fontSize: '25px' }} onClick={handleClickmenu} />
              {anchorEl && (
                <ul
                  className="menu"
                  // anchorEl={anchorEl}

                  onClose={handleClosemenu}
                >
                  <li onClick={handleClose}>Profile</li>
                  <li onClick={handleClose}>
                    <Link to="/Thongtin">Thông tin</Link>
                  </li>
                  {user && <li onClick={handleLogout}>Logout</li>}
                  {user === null && (
                    <li>
                      <Link to="/login">
                        <span style={{ fontSize: '13px' }} onClick={handleLogout}>
                          Login
                        </span>
                      </Link>
                    </li>
                  )}
                </ul>
              )}
            </>
          </div>
        </div>
      </div>

      <ProductLink torget={torget} scrow={scrow} />

      <DialogSearch
        loadingSearchs={loadingSearchs}
        openSearch={openSearch}
        setopenSearch={setopenSearch}
        handleSubmit={handleSubmit}
        SearchItem={SearchItem}
        setSearchItem={setSearchItem}
      />

      {/* dialog-cart */}
      <DialogCart openCart={openCart} setopenCart={setopenCart} />
      {/* <Dialog disableEscapeKeyDown open={open} onClose={handleClose}>
        <CloseIcon className={classes.closeButton} onClick={handleClose} />

        <DialogContent>
          {mode === MODE.REGISTER && (
            <>
              <Register closeDialog={handleClose} />
              <Box textAlign="center">
                <Button color="primary" onClick={() => setMode(MODE.LOGIN)}>
                  Already have an account . Login here
                </Button>
              </Box>
            </>
          )}
          {mode === MODE.LOGIN && (
            <>
              <h2 onClick={handleLogout}>Lovk</h2>
              <Login closeDialog={handleClose} />
              <Box textAlign="center">
                <Button color="primary" onClick={() => setMode(MODE.REGISTER)}>
                  Already have an account . Register here
                </Button>
              </Box>
            </>
          )}
        </DialogContent>
      </Dialog> */}
      {/* {scrowTop && <h1>kien</h1>} */}
    </div>
  );
};

Header.propTypes = {};

export default Header;
