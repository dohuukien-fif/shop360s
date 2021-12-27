import queryString from 'query-string';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { searchDatas, setdataSearch, filterDatas, SearchsDatas } from './../Slic/searchSelec';
import ProductFilter from './../component/product/ProductFilter/FilterAoAdidas/index';
import ProductAidas from './../component/product/productList/ProducAdidas/index';
import { addFilterPrice } from './../Slic/searchSlice';
import './stylesQuanJeans.scss';

ProductQuanJeans.propTypes = {};

function ProductQuanJeans(props) {
  // const [Product, setProduct] = useState([]);
  // const [Loading, setLoading] = useState(true);
  // const dispath = useDispatch();
  const dispatch = useDispatch();
  let dataSearch = useSelector(searchDatas);
  let setDataSearch = useSelector(setdataSearch);
  let filetrDataSearch = useSelector(filterDatas);
  let informationSearch = useSelector(SearchsDatas);
  const location = useLocation();
  const history = useHistory();
  // console.log('search ', searchDatass, 'flter', filetrDatass);
  const [filters, setfilters] = useState({
    _page: 1,
    _limit: 12,
  });

  useEffect(() => {
    const queryParam = { name: informationSearch };
    history.push({
      pathname: location.pathname,
      search: queryString.stringify(queryParam),
    });
  }, [informationSearch]);
  // const [pagination, setpagination] = useState({
  //   _page: 1,
  //   _limit: 12,
  //   _totalRows: 12,
  // });

  // setpagination();
  // const getPagination = (e, page) => {
  //   setfilters((prev) => ({
  //     ...prev,
  //     _page: page,
  //   }));
  // };
  const setFilters = (newfilter) => {
    console.log(newfilter.order);
    const action = addFilterPrice(newfilter.order);
    dispatch(action);
  };
  // const [state, setstate] = useState([]);
  // useEffect(() => {
  //   const fetchApi = async () => {
  //     try {
  //       const res = await TrousersApi.getAll();
  //       dispath(addSearch(res));
  //     } catch (error) {}
  //   };
  //   fetchApi();
  // }, []);

  // console.log('huukien', state);
  useEffect(() => {
    if (informationSearch === '') {
      history.push('/Trang-chu');
      return;
    }
  }, []);
  useEffect(() => {
  
  }, []);
  // const res = JSON.parse(localStorage.getItem('searchss'));
  // console.log('res', res);
  return (
    <div className="product_trouser">
      {dataSearch.length === 0 ? (
        <div className="non_search"> không có sản phẩm bạn muốn tìm ! </div>
      ) : (
        <>
          <div className="product_trouser_title-trouser">
            <span>
              {' '}
              <Link to="/">Trang chủ</Link> / sản phầm thời trang dành cho nam nữ mới nhât / Kết quả
              tìm kiếm cho “{informationSearch}”
            </span>
          </div>

          <div className="content_trouser">
            <div className="content_trouser_left-trousersJeans">
              <h2>Kết quả tìm kiếm: “{informationSearch}”</h2>
              <ProductFilter onChanges={setFilters} filter={filters} />
            </div>
            {setDataSearch.length === 0 ? (
              <h3 style={{ fontSize: '14px' }}>
                Không tìm thấy sản phẩm trong khoảng giá đã chọn ...!
              </h3>
            ) : (
              <div className="content_trouser_right-trouser">
                <ProductAidas products={setDataSearch} />

                {/* <Pagination
            className="paginations"
            variant="outlined"
            shape="rounded"
            count={Math.ceil(pagination?._totalRows / pagination?._limit)}
            Page={pagination?._page}
            // onChange={getPagination}
          ></Pagination> */}
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default ProductQuanJeans;
