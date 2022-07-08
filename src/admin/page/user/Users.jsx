import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import Stack from '@mui/material/Stack';
import { collection, onSnapshot } from 'firebase/firestore';
import React, { useEffect } from 'react';
import { FiSearch } from 'react-icons/fi';
import { db } from '../../../firebase';
import './user.scss';

UsersFeatures.propTypes = {};

function UsersFeatures(props) {
  const [customes, setcustomers] = React.useState([]);
  const [SearhTerm, setSearchTerm] = React.useState('');
  const [data, setData] = React.useState([]);
  const inputRef = React.useRef(null);
  useEffect(
    () =>
      onSnapshot(collection(db, 'user'), (snapshot) =>
        setcustomers(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
      ),
    []
  );

  const handleChangeSearch = (e) => {
    const { value } = e.target;
    if (inputRef.current) {
      clearTimeout(inputRef.current);
    }

    inputRef.current = setTimeout(() => {
      setSearchTerm(value);
    }, 500);
  };

  useEffect(() => {
    const filterSearchData = () => {
      setData(
        customes.filter((e) => e?.displayName?.toLowerCase().includes(SearhTerm?.toLowerCase()))
      );
    };
    filterSearchData();
  }, [SearhTerm, customes]);
  return (
    <div className="user">
      <div className="user_title">
        <span>Users</span>
      </div>
      <div className="user__search">
        <button>
          <FiSearch />
        </button>
        <input type="text" placeholder="Search name..." onChange={handleChangeSearch} />
      </div>
      <div className="user_block">
        <div className="user__swapper">
          <div className="user__top">
            <span></span>
            <span>Name</span>
            <span>Email</span>
          </div>
          <div className="user__content">
            <div className="user__list">
              {data.map((item, index) => (
                <div className="user__item" key={index}>
                  <div className="user_index">
                    <span>{index}</span>
                  </div>
                  <div className="user_name">
                    <img
                      src={
                        item.photoURL ||
                        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxsIVGXUz77jSd-Zgau2ZqRpL_STVm4gbxWQ&usqp=CAU'
                      }
                      alt={item.displayName}
                    />
                    <span>{item.displayName}</span>
                  </div>
                  <div className="user_email">
                    <span>{item.email}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="user_pagination">
          <Stack spacing={2}>
            <Pagination
              count={10}
              renderItem={(item) => (
                <PaginationItem
                  components={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
                  {...item}
                />
              )}
            />
          </Stack>
        </div>
      </div>
    </div>
  );
}

export default UsersFeatures;
