import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ShirtApi from './../../../api/ProductShritApi';
import { Pagination } from '@mui/material';
import { Link } from 'react-router-dom';
import ProductGucci from './../component/product/productList/ProductGucci/index';
import './stylesQuanJeans.scss';
import ProductFilter from './../component/product/ProductFilter/FiliterAoGucci/index';
import Seleken from './../../ProductHome/component/ProductSelekent/seleken';

ProductQuanJeans.propTypes = {};

function ProductQuanJeans(props) {
  const [Product, setProduct] = useState([]);
  const [Loading, setLoading] = useState(true);
  const [filters, setfilters] = useState({
    _page: 1,
    _limit: 12,
    categoryName: 'áo Gucci',
  });
  const [pagination, setpagination] = useState({
    _page: 1,
    _limit: 12,
    _totalRows: 12,
  });
  useEffect(() => {
    const fetchApi = async () => {
      try {
        const res = await ShirtApi.getAll(filters);
        const { data, pagination } = res;

        console.log(data);
        setLoading(false);
        setProduct(data);
        setpagination(pagination);
      } catch (error) {}
    };
    fetchApi();
  }, [filters]);
  const getPagination = (e, page) => {
    setfilters((prev) => ({
      ...prev,
      _page: page,
    }));
  };
  const setFilters = (newfilter) => {
    setfilters((prev) => ({
      ...prev,
      ...newfilter,
    }));
  };
  return (
    <div className="product_trouser">
      <div className="product_trouser_title-trouser">
        <span>
          {' '}
          <Link to="/">Trang chủ</Link> / <Link to="/Ao">Áo</Link> / Áo Gucci
        </span>
      </div>
      <h2>ÁO GUCCI</h2>
      <div className="content_trouser">
        <div className="content_trouser_left-trousersJeans">
          <ProductFilter onChanges={setFilters} filter={filters} />
        </div>
        <div className="content_trouser_right-trouser">
          {/* <ProductQuanJean products={Product} /> */}
          {Loading ? <Seleken length={12} /> : <ProductGucci products={Product} />}
          <Pagination
            className="paginations"
            color="primary"
            count={Math.ceil(pagination._totalRows / pagination._limit)}
            page={pagination._page}
            onChange={getPagination}
          ></Pagination>
        </div>
      </div>
    </div>
  );
}

export default ProductQuanJeans;
