import { collection, onSnapshot } from 'firebase/firestore';
import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import { addSearchs, Searchss } from '../../features/SearchProduct/Slic/searchSlice';
import SearchApi from './../../api/Searchapi';
import { cartCheckout, cartItemCount } from './../../features/cart/cartSelector';
// import {Searchss} from "./"
import { LoadingSearch } from './../../features/SearchProduct/Slic/searchSelec';
import { db } from './../../firebase';
import { useUserContext } from './../contextApi/index';
import DialogCart from './component/dialogCarrt/dialogCart';
import DialogSearch from './component/dialogSearch/index';
import ProductLink from './component/Link';
import Nav from './component/nav';
import './styles.scss';

const Header = (props) => {
  const [torget, settorget] = useState(false);
  const history = useHistory();

  const loadingSearchs = useSelector(LoadingSearch);

  console.log('[[loadingSearchs]]', loadingSearchs);
  const { pathname } = useLocation();
  const cartCheckouts = useSelector(cartCheckout);
  const { user, logoutUser, dataImage } = useUserContext();

  console.log('user', user);
  const cartItemCounts = useSelector(cartItemCount);
  const [opens, setOpen] = useState(false);
  const [accounts, setaccounts] = useState(false);
  const [openSearch, setopenSearch] = useState(false);
  const [openCart, setopenCart] = useState(false);
  const [SearchItem, setSearchItem] = useState('');
  const [screen, setscreen] = useState(0);
  const clickAccount = () => {
    setaccounts((x) => !x);
  };
  const CloseMiniCart = useRef();
  const CloseMiniSearch = useRef();
  const CloseDiaLogAccout = useRef();
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
    setAnchorEl(false);
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
      if (window.scrollY >= 200) {
        setscrow(true);
      } else {
        setscrow(false);
      }
      console.log('scrool700');
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

  useEffect(() => {
    const setTrueToget = () => {
      setscreen(window.innerWidth);
    };
    window.addEventListener('resize', setTrueToget);
    setTrueToget();
    return () => window.removeEventListener('resize', setTrueToget);
  }, []);
  useEffect(() => {
    if (screen > 600) {
      settorget(false);
      setscrow(false);
      setAnchorEl(false);
    } else {
      setscrow(true);
    }
  }, [screen]);
  console.log(screen);
  //location loading set => false => dialog
  //link close tab
  useEffect(() => {
    setopenSearch(false);
    setopenCart(false);
    settorget(false);
    setscrow(false);
    setAnchorEl(false);
  }, [pathname]);

  useEffect(() => {
    const handleWindowClose = (e) => {
      if (e.target === CloseMiniCart.current) {
        setopenCart(false);
        setopenSearch(false);
      }
    };
    window.addEventListener('click', handleWindowClose);
    return () => window.removeEventListener('click', handleWindowClose);
  }, []);

  useEffect(() => {
    const handleWindowClose = (e) => {
      if (e.target === CloseMiniSearch.current) {
        setopenSearch(false);
      }
    };
    window.addEventListener('click', handleWindowClose);
    return () => window.removeEventListener('click', handleWindowClose);
  }, []);
  useEffect(() => {
    const handleWindowClose = (e) => {
      if (e.target === CloseDiaLogAccout.current) {
        setAnchorEl(false);
      }
    };
    window.addEventListener('click', handleWindowClose);
    return () => window.removeEventListener('click', handleWindowClose);
  }, []);

  useEffect(
    () =>
      onSnapshot(collection(db, 'color'), (snapshot) =>
        console.log(
          '[snapshot]',
          snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
        )
      ),
    []
  );

  return (
    <div className={scrow ? 'home activeNav' : 'home'} ref={CloseDiaLogAccout}>
      <Nav
        scrow={scrow}
        handleSubmit={handleSubmit}
        SearchItem={SearchItem}
        setSearchItem={setSearchItem}
        loadingSearchs={loadingSearchs}
        user={user}
        dataImage={dataImage}
        handleClickmenu={handleClickmenu}
        anchorEl={anchorEl}
        handleClosemenu={handleClosemenu}
        handleClose={handleClose}
        cartCheckouts={cartCheckouts}
        handleLogout={handleLogout}
        clickAccount={clickAccount}
        accounts={accounts}
        setopenSearch={setopenSearch}
        handleLinkCart={handleLinkCart}
        cartItemCounts={cartItemCounts}
        torget={torget}
        settorget={settorget}
        handleClickToget={handleClickToget}
        setAnchorEl={setAnchorEl}
      />
      <ProductLink torget={torget} scrow={scrow} />

      <DialogSearch
        loadingSearchs={loadingSearchs}
        openSearch={openSearch}
        setopenSearch={setopenSearch}
        handleSubmit={handleSubmit}
        SearchItem={SearchItem}
        setSearchItem={setSearchItem}
        CloseMiniSearch={CloseMiniSearch}
      />

      {/* dialog-cart */}
      <DialogCart openCart={openCart} setopenCart={setopenCart} CloseMiniCart={CloseMiniCart} />
    </div>
  );
};

Header.propTypes = {};

export default Header;
