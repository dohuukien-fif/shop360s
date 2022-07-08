import { ShoppingCart } from '@mui/icons-material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HomeIcon from '@mui/icons-material/Home';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import { Badge, IconButton } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import NavLeft from './navLeft';
import NavMid from './navMid';
import NavRight from './navRight';

Nav.propTypes = {};

function Nav(props) {
  const {
    scrow,
    handleSubmit,
    SearchItem,
    setSearchItem,
    loadingSearchs,
    user,
    dataImage,
    handleClickmenu,
    anchorEl,
    handleClosemenu,
    handleClose,
    cartCheckouts,
    handleLogout,
    clickAccount,
    accounts,
    setopenSearch,
    handleLinkCart,
    cartItemCounts,
    torget,
    settorget,
    handleClickToget,
    setAnchorEl,
  } = props;
  return (
    <div className={scrow ? 'header actives_header' : 'header'}>
      <NavLeft scrow={scrow} />
      <NavMid
        scrow={scrow}
        handleSubmit={handleSubmit}
        SearchItem={SearchItem}
        setSearchItem={setSearchItem}
        loadingSearchs
      />
      <NavRight
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
            <img
              src={
                dataImage.downloadURL ||
                user?.photoURL ||
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxsIVGXUz77jSd-Zgau2ZqRpL_STVm4gbxWQ&usqp=CAU'
              }
              alt=""
              onClick={handleClickmenu}
            />

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
  );
}

export default Nav;
