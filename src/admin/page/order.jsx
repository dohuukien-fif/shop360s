import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Pagination, PaginationItem, Stack } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { BsCalendar3 } from 'react-icons/bs';
import { MdOutlineManageAccounts, MdOutlinePriceChange } from 'react-icons/md';
import { SiSaltstack } from 'react-icons/si';
import { formatPrice } from '../../utils';
import FilterFeatures from '../component/FilterCode.jsx';
import CompletedItem from '../component/productAdmin/CompletedItem';
import OrderApi from './../../api/OrderApi';
import OrderItem from './../component/productAdmin/orderItem';
import './order.scss';

function OrderFeatures(props) {
  const [dataProduct, setdataProduct] = useState([]);
  const [tab, settab] = useState(1);
  const [value, setValue] = React.useState(new Date());
  const [Index, setIndex] = useState(0);
  const [activeTab, setactiveTab] = useState(true);
  const [filters, setfilters] = useState({
    _page: 1,
    _limit: 12,
  });
  // const [pagination, setpagination] = useState({
  //   _page: 1,
  //   _limit: 12,
  //   _totalRows: 12,
  // });
  const [pagination, setpagination] = useState({
    _page: 1,
    _limit: 12,
    _totalRows: 12,
  });
  useEffect(() => {
    const fetchApiproduct = async () => {
      const res = await OrderApi.getAll(filters);

      setdataProduct(res.data);
      setpagination(res.pagination);
    };
    fetchApiproduct();
  }, [filters]);

  const getPagination = (e, page) => {
    setfilters((prev) => ({
      ...prev,
      _page: page,
    }));
  };

  const handleDeleteData = async (id) => {
    await OrderApi.detele(id);
    window.location.reload();
  };

  const handleFilter = (value) => {
    setfilters((prev) => ({
      ...prev,
      ...value,
    }));
  };
  console.log('filters', dataProduct);

  const TOTAL = dataProduct.reduce((total, item) => total + item.total, 0);

  const dates = new Date();
  const LENGTHTODAY = dataProduct.filter((e) => e.day.split('/')[0] === dates.getDate().toString());

  console.log('TOTAL', LENGTHTODAY);
  return (
    <div className="products">
      {dataProduct.length === 0 ? (
        <h1>Loading...</h1>
      ) : (
        <>
          {' '}
          <div className="products-order">
            <div className="products-order-top">
              <div className="products-order-top_group">
                <div className="product-order-icon color1">
                  <SiSaltstack />
                </div>
                <div className="product-order-length">
                  <span>{LENGTHTODAY.length}</span>
                </div>
                <div className="product-order-total">
                  <span>New Sales</span>
                </div>
              </div>

              <div className="products-order-top_group">
                <div className="product-order-icon color2">
                  <MdOutlineManageAccounts />
                </div>
                <div className="product-order-length">
                  <span>{dataProduct.length}</span>
                </div>
                <div className="product-order-total">
                  <span>New Leads</span>
                </div>
              </div>

              <div className="products-order-top_group">
                <div className="product-order-icon color3">
                  <MdOutlinePriceChange />
                </div>
                <div className="product-order-length">
                  <span>{formatPrice(TOTAL)}</span>
                </div>
                <div className="product-order-total">
                  <span>Income</span>
                </div>
              </div>

              {/* <LocalizationProvider>
                <DatePicker
                  mask="____/__/__"
                  value={value}
                  onChange={(newValue) => setValue(newValue)}
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider> */}
            </div>
            <div className="products-order-bottom">
              <div className="products_order-bottom-left">
                <div className={tab === 1 ? 'products_order-All activeTab' : 'products_order-All'}>
                  <span onClick={() => settab(1)}>All Orders</span>
                </div>
                <div
                  className={
                    tab === 2 ? 'products_order-completed activeTab' : 'products_order-completed'
                  }
                >
                  <span onClick={() => settab(2)}>Completed</span>
                </div>
              </div>

              <div className="products_order-bottom-right">
                <div className="product_order-caledar">
                  <BsCalendar3 />
                  <span>1 March 2022</span>
                </div>
                <div className="products_order-to">
                  <span>to</span>
                </div>
                <div className="product_order-caledar">
                  <BsCalendar3 />
                  <span>1 April 2022</span>
                </div>
              </div>
            </div>
          </div>
          <div className="Filter">
            <FilterFeatures onSubmits={handleFilter} />
          </div>
          <div className="product_order-tab">
            <div className="product_order-swapper">
              {tab === 1 && (
                <>
                  {' '}
                  <div className="product_title-order">
                    <div className="product_title_left-order">
                      <span>Id</span>
                      <span>tên</span>
                      <span>Địa chỉ</span>
                      <span>ngày & giờ</span>
                    </div>

                    <div className="product_title_right-order">
                      <span>Tổng tiền</span>
                      <span>Status</span>
                      <span>Action</span>
                    </div>
                  </div>
                  <div className="products_list-order">
                    {dataProduct.map((items, index) => (
                      <OrderItem key={items.id} handleDeleteData={handleDeleteData} items={items} />
                    ))}
                  </div>
                </>
              )}
              {tab === 2 && (
                <>
                  <div className="product_title-order">
                    <div className="product_title_left-order">
                      <span>Code</span>
                      <span>tên</span>
                      <span>Địa chỉ</span>
                    </div>

                    <div className="product_title_right-order">
                      <span>Tổng tiền</span>
                      <span>Status</span>

                      <span>SetCompleted</span>
                    </div>
                  </div>
                  <div className="completed">
                    {dataProduct.map((items, index) => (
                      <CompletedItem
                        key={items.id}
                        handleDeleteData={handleDeleteData}
                        items={items}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
          {/* <div className="products_pagition">
            <Stack spacing={2}>
              <Pagination
                count={Math.ceil(pagination._totalRows / pagination._limit)}
                page={pagination._page}
                onChange={getPagination}
                renderItem={(item) => (
                  <PaginationItem
                    components={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
                    {...item}
                  />
                )}
              />
            </Stack>
          </div> */}
        </>
      )}
      <div className="products_Order-pagition">
        <Stack spacing={2}>
          <Pagination
            count={Math.ceil(pagination._totalRows / pagination._limit)}
            page={pagination._page}
            onChange={getPagination}
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
  );
}

export default OrderFeatures;
