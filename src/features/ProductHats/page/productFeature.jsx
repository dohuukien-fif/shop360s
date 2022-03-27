import { Pagination } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { BiChevronsUp } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import HatApi from './../../../api/ProductHatApi';
import Selekent from './../../ProductHome/component/ProductSelekent/seleken';
import ProductFilter from './../component/product/ProductFilter/index';
import ProductLisst from './../component/product/productList/index';
import './styles.scss';
ProductFeature.propTypes = {};

function ProductFeature(props) {
  const [Product, setProduct] = useState([]);
  const [Loading, setLoading] = useState(true);
  const [scrowTop, setscrowTop] = useState(false);
  const [filter, setfilter] = useState({
    _page: 1,
    _limit: 12,
  });
  const [pagination, setpagination] = useState({
    _page: 1,
    _limit: 12,
    _totalRows: 12,
  });
  useEffect(() => {
    const fetchApi = async () => {
      try {
        const res = await HatApi.getAll(filter);
        const { data, pagination } = res;
        console.log(data);
        setLoading(false);
        setProduct(data);
        setpagination(pagination);
      } catch (error) {}
    };
    fetchApi();
  }, [filter]);
  const getPagination = (e, page) => {
    setfilter((prev) => ({
      ...prev,
      _page: page,
    }));
  };
  const setFilters = (newfilter) => {
    setfilter((prev) => ({
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
    <div className="product">
      <div className="product_title">
        <span>
          {' '}
          <Link to="/">Trang chủ</Link> / Mũ
        </span>
      </div>
      <h2>Mũ</h2>
      <div className="content">
        <div className="content_left">
          <ProductFilter onChanges={setFilters} filter={filter} />
        </div>
        <div className="content_right">
          {Loading ? <Selekent length={pagination._limit} /> : <ProductLisst products={Product} />}
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

export default ProductFeature;
