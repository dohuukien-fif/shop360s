import { ShoppingCart } from '@mui/icons-material';
import CloseIcon from '@mui/icons-material/Close';
import DehazeIcon from '@mui/icons-material/Dehaze';
import { Badge, IconButton } from '@mui/material';
import React from 'react';
import { FiSearch } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';
import './styles.scss';

NavRight.propTypes = {};

function NavRight({
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
}) {
  const history = useHistory();
  const handleNavigateProfile = () => {
    history.push('/profile');
    setAnchorEl(false);
  };
  const handleNavigateAdmin = () => {
    history.push('/admin');
  };
  return (
    <div className="header-right">
      <div className="none">
        {user && (
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

            <span>
              {user?.displayName &&
                `${user?.displayName.charAt(0).toUpperCase()}${user?.displayName.slice(1)}`}
            </span>
          </>
        )}
        {anchorEl && (
          <ul
            className="menu"
            // anchorEl={anchorEl}

            onClose={handleClosemenu}
          >
            <li onClick={handleNavigateProfile}>Profiles</li>
            <li>
              {' '}
              <Link to="/Thongtin" onClick={handleClose}>
                Thông tin{' '}
                {cartCheckouts.length > 0 && (
                  <div className="icon_quantity">{cartCheckouts.length}</div>
                )}
              </Link>
            </li>
            <li onClick={handleLogout}>Logout</li>
            <li onClick={handleNavigateAdmin}>Admin</li>
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
  );
}

export default NavRight;
