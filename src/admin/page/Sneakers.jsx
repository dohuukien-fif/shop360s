import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Pagination, PaginationItem, Stack } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { FaRegHandPointRight } from 'react-icons/fa';
import { AiOutlineDoubleRight, AiOutlineHome } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import SearchNameFeatures from '../component/FilterCode.jsx/filterProduct/filterSearchName';
import FilterProductFeatures from '../component/FilterCode.jsx/filterProduct/index.jsx';
import FilterTotal from '../component/FilterCode.jsx/filterProduct/sortPrice';
import ProductItem from '../component/productAdmin/productItem';
import OrderApi from './../../api/OrderApi';
import SneakerApi from './../../api/ProductSneakerApi';
import './product.scss';
import useCategories from './../hooks/useCategories';
import useMaxPrice from '../hooks/useMaxPrice';
import ProductItemSneaker from '../component/productAdmin/productItemSneaker';
ProductFeatures.propTypes = {};

function ProductFeatures(props) {
  const [dataProduct, setdataProduct] = useState([]);
  const [Index, setIndex] = useState(0);
  const [filters, setfilters] = useState({
    _page: 1,
    _limit: 12,
  });
  const [pagination, setpagination] = useState({
    _page: 1,
    _limit: 12,
    _totalRows: 12,
  });
  const [dataOrder, setdataOrder] = useState([]);

  useEffect(() => {
    const fetchApiproduct = async () => {
      const res = await OrderApi.getData();
      setdataOrder(res);
    };
    fetchApiproduct();
  }, []);

  const { productCategories } = useCategories(
    'https://api-product-json.herokuapp.com/categoriesSneaker'
  );
  const { productMaxPrice } = useMaxPrice('https://api-product-json.herokuapp.com/sneaker');

  console.log('dataOrder', dataOrder);

  useEffect(() => {
    const fetchApiproduct = async () => {
      const res = await SneakerApi.getAll(filters);

      setdataProduct(res.data);
      setpagination(res.pagination);
      console.log(res);
    };
    fetchApiproduct();
  }, [filters]);
  const getPagination = (e, page) => {
    setfilters((prev) => ({
      ...prev,
      _page: page,
    }));
  };
  console.log(dataProduct);

  const handleDeleteData = async (id) => {
    console.log(id);
  };
  const handleFilter = (value) => {
    setfilters((prev) => ({
      ...prev,
      ...value,
    }));
  };

  const handleSearchData = (value) => {
    console.log(value);
    if (value === '') window.location.reload();

    setfilters((prev) => ({
      ...prev,
      q: value,
    }));
  };
  console.log('dataProduct', dataProduct);
  return (
    <div className="products">
      {dataProduct.length === 0 ? (
        <h1>Loading...</h1>
      ) : (
        <>
          {' '}
          <div className="products_newProduct">
            <div className="product_topbag">
              <span>Shop</span>
              <div className="products_topbag-block">
                <AiOutlineHome className="active__topbbag" />
                <AiOutlineDoubleRight />
                <span className="active__topbbag">Sản phẩm</span> <AiOutlineDoubleRight />
                <span>Giày</span>
              </div>
            </div>
            <button>
              <FaRegHandPointRight />
              <Link to="/admin/newProduct">Create </Link>
            </button>
          </div>
          <div className="products_newProduct-swapper">
            <div className="products_newProduct-left">
              <div className="Filter-title">
                <span>Filters</span>
              </div>
              <div className="Filter">
                <FilterProductFeatures
                  productCategories={productCategories}
                  productMaxPrice={productMaxPrice}
                  onSubmits={handleFilter}
                />
              </div>
            </div>
            <div className="products_newProduct-right">
              <div className="products_newProduct-title">
                <span>{`${pagination._totalRows} Sản phẩm`}</span>
                <FilterTotal />
              </div>
              <div className="product_newProduct-search">
                <SearchNameFeatures Onsubmit={handleSearchData} />
              </div>
              <div className="product_title">
                <div className="product_title_left">
                  <span>Id</span>
                  <span>Sản phẩm</span>
                </div>
                <div className="product_title_right">
                  <span>Giá</span>
                  <span>Action</span>
                </div>
              </div>
              <div className="products_list">
                {dataProduct.map((items, index) => (
                  <ProductItemSneaker
                    key={items.id}
                    handleDeleteData={handleDeleteData}
                    items={items}
                  />
                ))}
              </div>
              <div className="products_pagition">
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
          </div>
        </>
      )}
    </div>
  );
}

export default ProductFeatures;
