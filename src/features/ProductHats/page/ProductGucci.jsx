import { Pagination } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import HatApi from './../../../api/ProductHatApi';
import Seleken from './../../ProductHome/component/ProductSelekent/seleken';
import ProductFilter from './../component/product/ProductFilter/FilterGucci/index';
import ProductHatGucci from './../component/product/productList/ProducGucci/index';
import './stylesQuanJeans.scss';
// import './stylesQuanJeans.scss';
ProductQuanJeans.propTypes = {};

function ProductQuanJeans(props) {
  const [Product, setProduct] = useState([]);
  const [Loading, setLoading] = useState(true);
  const [filters, setfilters] = useState({
    _page: 1,
    _limit: 12,
    categoryName: 'mũ Gucci',
  });
  const [pagination, setpagination] = useState({
    _page: 1,
    _limit: 12,
    _totalRows: 12,
  });
  useEffect(() => {
    const fetchApi = async () => {
      try {
        const res = await HatApi.getAll(filters);
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
          <Link to="/">Trang chủ</Link> / <Link to="/Mu">Mũ</Link> / Mũ Gucci
        </span>
      </div>

      <div className="content_trouser">
        <div className="content_trouser_left-trousersJeans">
          <h2>MŨ GUCCI</h2>
          <ProductFilter onChanges={setFilters} filter={filters} />
        </div>
        <div className="content_trouser_right-trouser">
          {Loading ? <Seleken length={12} /> : <ProductHatGucci products={Product} />}
          {/* {Loading ? <Selekent length={12} /> : <ProductLisst products={Product} />} */}
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
