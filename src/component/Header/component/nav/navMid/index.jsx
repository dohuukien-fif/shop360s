import { CircularProgress } from '@mui/material';
import React from 'react';
import { FiSearch } from 'react-icons/fi';
import { useSelector } from 'react-redux';
import { LoadingSearch } from '../../../../../features/SearchProduct/Slic/searchSelec';
import './styles.scss';
NavMid.propTypes = {};

function NavMid({ scrow, handleSubmit, SearchItem, setSearchItem }) {
  const loadingSearchs = useSelector(LoadingSearch);
  return (
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
            {loadingSearchs ? (
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
  );
}

export default NavMid;
