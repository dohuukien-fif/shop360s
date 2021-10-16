import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import Slide from './../component/slides';
import ProductLisst from '../component/productLisst';
import ProductApi from './../../../api/productapi';
import queryString from 'query-string';
import { PriceChange } from '@mui/icons-material';
import { Pagination } from '@mui/material';
ProductFeature.propTypes = {};

function ProductFeature(props) {
  const [products, setproducts] = useState([]);
  const [filter, setfilter] = useState({
    _page: 1,
    _limit: 10,
  });
  const [pagination, setPagination] = useState({
    _page: 1,
    _limit: 10,
    _totalRows: 10,
  });
  useEffect(() => {
    const fetchDataProduct = async () => {
      try {
        // const querypram = queryString.stringify(filter);
        const res = await ProductApi.getAll(filter);
        const { data, pagination } = res;
        console.log(res);
        setproducts(data);
        setPagination(pagination);
      } catch (error) {}
    };
    fetchDataProduct();
  }, [filter]);
  //page product
  const hanleOnchange = (e, page) => {
    console.log(page);
    setfilter((prew) => ({
      ...prew,
      _page: page,
    }));
  };
  return (
    <div className="container">
      <Slide />
      <div className="product">
        <div className="product-left">left</div>
        <div className="product-right">
          <ProductLisst product={products} />
          <Pagination
            color="primary"
            count={Math.ceil(pagination._totalRows / pagination._limit)}
            page={pagination._page}
            onChange={hanleOnchange}
          ></Pagination>
        </div>
      </div>
    </div>
  );
}

export default ProductFeature;
