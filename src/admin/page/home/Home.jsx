import AOS from 'aos';
import 'aos/dist/aos.css';
import { collection, onSnapshot } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { BsFillBagCheckFill } from 'react-icons/bs';
import { RiMoneyDollarCircleLine } from 'react-icons/ri';
import { useSelector } from 'react-redux';
import OrderApi from '../../../api/OrderApi';
import { db } from '../../../firebase';
import { SalesItemSelector } from './../sliceReducer/Selector';
import CustomerHomeItem from './customerItem';
import './Home.scss';
import OrderHomeItem from './orderItem';
import WiddletMain from './widlet';
HomeFeatures.propTypes = {};

function HomeFeatures(props) {
  const [customes, setcustomers] = useState([]);

  const SalesItemSelectors = useSelector(SalesItemSelector);

  console.log(SalesItemSelectors);
  useEffect(() => {
    AOS.init();
  }, []);
  const [dataOrder, setdataOrder] = React.useState([]);
  const [filters, setfilters] = React.useState({
    _page: 1,
    _limit: 12,
  });
  React.useEffect(() => {
    const fetchApiproduct = async () => {
      const res = await OrderApi.getAll(filters);
      setdataOrder(res.data);
    };
    fetchApiproduct();
  }, [filters]);
  useEffect(
    () =>
      onSnapshot(collection(db, 'Sales'), (snapshot) =>
        setcustomers(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
      ),
    []
  );
  console.log('dataOrder', dataOrder);

  const TOTAL = dataOrder?.reduce((total, item) => total + item.total, 0);

  const dates = new Date();
  const LENGTHTODAY = dataOrder?.filter((e) => e.day.split('/')[0] === dates.getDate().toString());
  const LENGTHLASTDAY = dataOrder?.filter(
    (e) => e.day.split('/')[0] === dates.getDate().toString() - 1
  );
  const TOTALDAY = LENGTHTODAY?.reduce((total, item) => total + item.total, 0);

  const TOTALLASTDAY =
    LENGTHLASTDAY.length > 0 ? LENGTHLASTDAY.reduce((total, item) => total + item.total, 0) : 0;
  console.log(TOTAL);

  const percent = TOTALDAY ? Math.ceil(TOTALDAY / (TOTALDAY + TOTALLASTDAY) / 100) : 0;

  const TOTALSALES = customes.reduce((total, item) => total + item.order, 0);

  const TOTALLASTMONT = customes
    ?.find((e) => e.product)
    ?.product?.filter((e) => e?.day?.split('/')[1] === dates.getMonth().toString())
    ?.reduce((total, item) => total + item.total, 0);

  const TOTALMONTH = dataOrder
    ?.filter((e) => e?.day?.split('/')[1] === (dates.getMonth() + 1).toString())
    ?.reduce((total, item) => total + item.total, 0);

  const TOTALINCOME =
    TOTALLASTMONT === 0 && TOTALMONTH === 0
      ? 0
      : ((TOTALMONTH /
          (TOTALLASTMONT === 0 || TOTALLASTMONT === undefined ? 10000 : TOTALLASTMONT)) *
          100) /
        100;

  console.log('TOTALINCOME', parseInt(TOTALINCOME));
  console.log(TOTALLASTMONT, TOTALMONTH);

  const SALESORDER = customes.reduce((total, item) => total + item.order, 0);

  const COUNTORDER = Math.round(
    ((dataOrder.length - (SALESORDER === 0 || SALESORDER === undefined ? 1 : SALESORDER)) * 100) /
      100
  );

  const TOATLCUSTOMER = customes?.reduce((total, item) => total + item.spending, 0);

  console.log('COUNTORDER', COUNTORDER, SALESORDER);

  console.log('total', ((TOTALLASTMONT || 0) / (TOTALMONTH || 0 - TOTALLASTMONT || 0)) * 100);
  console.log('totalIncome', TOTALLASTMONT, TOTALMONTH);
  console.log('totalIncome', typeof TOTALLASTMONT, typeof TOTALMONTH);
  console.log(
    TOTALMONTH / (TOTALLASTMONT === 0 || TOTALLASTMONT === undefined ? 1 : TOTALLASTMONT)
  );
  console.log(TOTALLASTMONT === 0 ? 1 : TOTALLASTMONT);
  return (
    <div className="revanue">
      <div className="revanue_container">
        <WiddletMain
          title={<RiMoneyDollarCircleLine />}
          price={TOTALDAY}
          percent={TOTALINCOME}
          name={'Total Income'}
          classs="Total__Income"
        />
        <WiddletMain
          title={<AiOutlineShoppingCart />}
          price={dataOrder.length || 0}
          percent={COUNTORDER}
          name={'Total Order'}
          checkPrice={true}
          classs="Total__Order"
        />
        <WiddletMain
          title={<BsFillBagCheckFill />}
          price={TOTALSALES}
          name={'Total Sales'}
          checkPrice={true}
          classs="Total__Sales"
        />
        <WiddletMain
          title={<BsFillBagCheckFill />}
          price={TOATLCUSTOMER}
          percent={TOTALINCOME}
          name={'Total Sales income'}
          classs="Total__SalesIncome"
        />
      </div>

      <div className="revanue_table">
        <div className="revanue_customers">
          <div className="revanue_customers-title">
            <span>Top Customers</span>
          </div>
          <div className="revanue_customers-top">
            <span>User</span>
            <span>Total Orders</span>
            <span>Total Speding</span>
          </div>
          <div className="revanue_customers-bottom">
            <div className="revanue_customers-bottom-list">
              {customes
                .sort((a, b) => a.order - b.order)
                .map((item, index) => (
                  <CustomerHomeItem item={item} key={index} />
                ))}
            </div>
          </div>
        </div>

        {dataOrder.length > 0 && (
          <div className="revanue_latestOrder">
            <div className="revanue_latestOrder-swapper">
              <div className="revanue_lastestOrder-title">
                <span>Latest Orders</span>
              </div>
              <div className="revanue_latestOrder-top">
                <span>Orders Id</span>
                <span>User</span>
                <span>Total Price</span>
                <span>Date</span>
                <span>Status</span>
              </div>

              <div className="revanue_latestOrder-bottom">
                <div className="revanue_latestOrder-bottom-list">
                  {dataOrder.map((item, index) => (
                    <OrderHomeItem item={item} key={index} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default HomeFeatures;
