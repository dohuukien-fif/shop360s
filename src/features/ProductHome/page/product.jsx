// import queryString from 'query-string';
// import { PriceChange } from '@mui/icons-material';
import { Pagination } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { BiChevronsUp } from 'react-icons/bi';
import { useRouteMatch } from 'react-router-dom';
import NewsProduct from '../component/news/newLisst';
import ProductLisst from '../component/productLisst';
import ProductApi from './../../../api/productapi';
import Sekenle from './../component/ProductSelekent/seleken';
import Slide from './../component/slides';
import './styles.scss';
ProductFeature.propTypes = {};

function ProductFeature(props) {
  const match = useRouteMatch();
  // const searchDatas = useSelector(searchData);
  // console.log('search ', searchDatas);
  const [scrowTop, setscrowTop] = useState(false);
  // const scrollT = useRef(null);
  console.log(match);
  const [products, setproducts] = useState([]);
  const [filter, setfilter] = useState({
    _page: 1,
    _limit: 30,
  });
  const [pagination, setPagination] = useState({
    _page: 1,
    _limit: 30,
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
  // useEffect(() => {
  //   var chatbox = document.getElementById('fb-customer-chat');
  //   chatbox.setAttribute('page_id', '111266914727827');
  //   chatbox.setAttribute('attribution', 'biz_inbox');

  //   window.fbAsyncInit = function () {
  //     window.FB.init({
  //       xfbml: true,
  //       version: 'v12.0',
  //     });
  //   };

  //   (function (d, s, id) {
  //     var js,
  //       fjs = d.getElementsByTagName(s)[0];
  //     if (d.getElementById(id)) return;
  //     js = d.createElement(s);
  //     js.id = id;
  //     js.src = 'https://connect.facebook.net/vi_VN/sdk/xfbml.customerchat.js';
  //     fjs.parentNode.insertBefore(js, fjs);
  //   })(document, 'script', 'facebook-jssdk');
  //   window?.FB?.XFBML.parse();
  // }, []);
  return (
    <div className="container">
      <Slide />
      <div className="title">
        <span>SẢN PHẨM BÁN CHẠY</span>
      </div>
      <div className="product">
        {/* <div className="product-left">
          <ProductFilter filter={filter} onChange={hanleFilter} />
        </div> */}

        <div className="product-right">
          {Loading ? <Sekenle length={pagination._limit} /> : <ProductLisst product={products} />}
          <Pagination
            className="paginations"
            // color="primary"
            variant="outlined"
            shape="rounded"
            count={Math.floor(pagination._totalRows / pagination._limit)}
            page={pagination._page}
            onChange={hanleOnchange}
          ></Pagination>
        </div>
        {/* <div id="fb-root">
          <div
            id="fb-customer-chat"
            class="fb-customerchat"
            // attribution="setup_tool"
            page_id="111266914727827"
          ></div>
        </div> */}
      </div>
      <NewsProduct />
      {scrowTop && (
        <div className="scroll_top" onClick={topFunction}>
          <BiChevronsUp style={{ fontSize: '50px' }} />
        </div>
      )}
    </div>
  );
}

export default ProductFeature;
