import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import GlassApi from './../../../api/ProductGlassApi';
import { Pagination } from '@mui/material';
import { Link } from 'react-router-dom';
import ProductBalen from './../component/product/productList/ProducBalen/index';
import './stylesQuanJeans.scss';
import ProductFilter from './../component/product/ProductFilter/FilterBalen/index';
import Seleken from './../../ProductHome/component/ProductSelekent/seleken';
ProductQuanJeans.propTypes = {};

function ProductQuanJeans(props) {
  const [Product, setProduct] = useState([]);
  const [Loading, setLoading] = useState(true);
  const [filters, setfilters] = useState({
    _page: 1,
    _limit: 12,
    categoryName: 'kính Balenciaga',
  });
  const [pagination, setpagination] = useState({
    _page: 1,
    _limit: 12,
    _totalRows: 12,
  });
  useEffect(() => {
    const fetchApi = async () => {
      try {
        const res = await GlassApi.getAll(filters);
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
          <Link to="/">Trang chủ</Link> / <Link to="/Kinh">Kính</Link> / Kính Balenciaga
        </span>
      </div>

      <div className="content_trouser">
        <div className="content_trouser_left-trousersJeans">
          <h2>Kính Balenciaga</h2>
          <ProductFilter onChanges={setFilters} filter={filters} />
        </div>
        <div className="content_trouser_right-trouser">
          {Loading ? <Seleken length={12} /> : <ProductBalen products={Product} />}
          <Pagination
            className="paginations"
            variant="outlined"
            shape="rounded"
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
