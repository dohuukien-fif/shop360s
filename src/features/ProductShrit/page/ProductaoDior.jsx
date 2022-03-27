import { Pagination } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { BiChevronsUp } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import ShirtApi from './../../../api/ProductShritApi';
import Seleken from './../../ProductHome/component/ProductSelekent/seleken';
import ProductFilter from './../component/product/ProductFilter/FilterAodior/index';
import ProductDior from './../component/product/productList/ProducDior/index';
import './stylesQuanJeans.scss';
ProductQuanJeans.propTypes = {};

function ProductQuanJeans(props) {
  const [Product, setProduct] = useState([]);
  const [Loading, setLoading] = useState(true);
  const [scrowTop, setscrowTop] = useState(false);
  const [filters, setfilters] = useState({
    _page: 1,
    _limit: 12,
    categoryName: 'áo Dior',
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
  //scroll
  useEffect(() => {
    const chanscrowus = () => {
      if (window.scrollY >= 500) {
        setscrowTop(true);
        // scrollT.current.classList.add('show');
      } else {
        setscrowTop(false);
      }
    };
    window.addEventListener('scroll', chanscrowus);
    return () => {
      window.removeEventListener('scroll', chanscrowus);
    };
  }, [scrowTop]);
  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  return (
    <div className="product_trouser">
      <div className="product_trouser_title-trouser">
        <span>
          {' '}
          <Link to="/">Trang chủ</Link> / <Link to="/Ao">Áo</Link> / Áo Dior
        </span>
      </div>

      <div className="content_trouser">
        <div className="content_trouser_left-trousersJeans">
          <h2>ÁO DIOR</h2>
          <ProductFilter onChanges={setFilters} filter={filters} />
        </div>
        <div className="content_trouser_right-trouser">
          {/* <ProductQuanJean products={Product} /> */}
          {Loading ? <Seleken length={pagination._limit} /> : <ProductDior products={Product} />}
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
      {scrowTop && (
        <div className="scroll_top" onClick={topFunction}>
          <BiChevronsUp style={{ fontSize: '50px' }} />
        </div>
      )}
    </div>
  );
}

export default ProductQuanJeans;
