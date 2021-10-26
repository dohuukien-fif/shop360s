import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import Slide from './../component/slides';
import ProductLisst from '../component/productLisst';
import ProductApi from './../../../api/productapi';
// import queryString from 'query-string';
// import { PriceChange } from '@mui/icons-material';
import { Pagination } from '@mui/material';
import Sekenle from './../component/ProductSelekent/seleken';
import ProductFilter from '../component/ProductFilter';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
ProductFeature.propTypes = {};

function ProductFeature(props) {
  const match = useRouteMatch();
  console.log(match);
  const [products, setproducts] = useState([]);
  const [filter, setfilter] = useState({
    _page: 1,
    _limit: 25,
  });
  const [pagination, setPagination] = useState({
    _page: 1,
    _limit: 25,
    _totalRows: 10,
  });
  const [Loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchDataProduct = async () => {
      try {
        // const querypram = queryString.stringify(filter);

        const res = await ProductApi.getAll(filter);
        const { data, pagination } = res;
        console.log(res);
        setLoading(false);
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
  // const hanleFilter = (filterNew) => {
  //   console.log(filterNew);
  //   setfilter((prew) => ({
  //     ...prew,
  //     ...filterNew,
  //   }));
  // };
  return (
    <div className="container">
      <Slide />
      <h2 className="title">SẢN PHẨM BÁN CHẠY</h2>
      <div className="product">
        {/* <div className="product-left">
          <ProductFilter filter={filter} onChange={hanleFilter} />
        </div> */}
        <div className="product-right">
          {Loading ? <Sekenle length={15} /> : <ProductLisst product={products} />}
          <Pagination
            className="paginations"
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
