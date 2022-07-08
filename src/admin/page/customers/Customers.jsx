import { collection, onSnapshot } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { db } from '../../../firebase';
import { formatPrice } from '../../../utils';
import './customers.scss';
import { FiSearch } from 'react-icons/fi';
import LoadingSpinner from './../../../component/loading/loadingSpinip';
import { useHistory } from 'react-router-dom';
CustomersFeatures.propTypes = {};

function CustomersFeatures(props) {
  const [customes, setcustomers] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const history = useHistory();
  const inputRef = React.useRef(null);
  const [filterCustomers, setfilterCustomers] = React.useState([...customes]);
  console.log(customes, filterCustomers);
  const [data, setData] = React.useState([]);
  const [filter, setfilter] = React.useState({
    page: 1,
    limit: 12,
  });

  const [SearhTerm, setSearchTerm] = useState('');
  useEffect(
    () =>
      onSnapshot(collection(db, 'Sales'), (snapshot) =>
        setcustomers(snapshot.docs.map((doc) => ({ ...doc.data() })))
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
  // useEffect(() => {
  //   if (filter.limit > 12) {
  //     return setfilterCustomers(customes.slice(filter.limit - 12, filter.limit));
  //   }
  //   if (filter.limit > 12) {
  //     return setfilterCustomers(customes.slice(filter.limit - 12, filter.limit));
  //   }
  // }, [filter]);

  // const handleChangePage = (e, page) => {
  //   console.log('[pagegainnationn]', e, page);
  //   setfilter((prev) => ({
  //     ...prev,
  //     limit: 12 * page,
  //     page: page,
  //   }));
  // };
  const [dataSearchs, setDataSearch] = React.useState(customes);
  // useEffect(() => {
  //   const fetchSearch = () => {
  //     setDataSearch(
  //       customes.filter((e) => e?.displayName?.toLowerCase().includes(SearhTerm?.toLowerCase()))
  //     );
  //   };
  //   fetchSearch();
  // }, []);

  const handleClickNavigateCustomers = (id) => {
    setLoading(true);
    return new Promise((resuts, reject) => {
      setTimeout(() => {
        history.push(`/admin/Customers/${id}`);
        setLoading(false);
        resuts(true);
      }, 2000);
    });
  };
  useEffect(() => {
    const filterSearchData = () => {
      setData(customes.filter((e) => e?.user?.toLowerCase().includes(SearhTerm?.toLowerCase())));
    };
    filterSearchData();
  }, [SearhTerm, customes]);
  return (
    <div className="customers">
      {loading && <LoadingSpinner />}
      <div className="customers_title">
        <span>Customers</span>
      </div>

      <div className="customers__search">
        <button>
          <FiSearch />
        </button>
        <input type="text" placeholder="Search name..." onChange={handleChangeSearch} />
      </div>
      <div className="customers_block">
        <div className="customers__swapper">
          <div className="customers__top">
            <span>STT</span>
            <span>Name</span>
            <span>Email</span>
            <span>Total Orders</span>
            <span>Total Spend</span>
            <span>Action</span>
          </div>
          <div className="customers__content">
            <div className="customers__list">
              {data.map((item, index) => (
                <div className="customers__item" key={item.OrderId}>
                  <div className="customers_index">
                    <span>{index}</span>
                  </div>
                  <div className="customers_name">
                    <img
                      src={
                        item.photoURL ||
                        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxsIVGXUz77jSd-Zgau2ZqRpL_STVm4gbxWQ&usqp=CAU'
                      }
                      alt={item.displayName}
                    />
                    <span>{item.user}</span>
                  </div>
                  <div className="customers_email">
                    <span>{item?.email}</span>
                  </div>
                  <div className="customers_order">
                    <span>{item.order}</span>
                  </div>

                  <div className="customers_spend">
                    <span>{formatPrice(item.spending)}</span>
                  </div>

                  <div className="customers_action">
                    <button onClick={() => handleClickNavigateCustomers(item.id)}>
                      <span>View</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="customers_pagination">
          {/* <Stack spacing={2}>
            <Pagination
              count={Math.ceil(12 / customes.length)}
              onChange={handleChangePage}
              renderItem={(item) => (
                <PaginationItem
                  components={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
                  {...item}
                />
              )}
            />
          </Stack> */}
        </div>
      </div>
    </div>
  );
}

export default CustomersFeatures;
