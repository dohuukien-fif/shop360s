import React, { useEffect, useState } from 'react';
import { AiOutlineArrowDown, AiOutlineArrowUp, AiOutlineShoppingCart } from 'react-icons/ai';
import OrderApi from '../../api/OrderApi';
import { formatPrice } from '../../utils';
import './Home.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { BsFillBagCheckFill } from 'react-icons/bs';
import { RiMoneyDollarCircleLine } from 'react-icons/ri';
HomeFeatures.propTypes = {};

function HomeFeatures(props) {
  const [customes, setcustomers] = useState([
    {
      orderId: 123,
      user: 'huu kien',
      order: 490,
      spending: 1456547,
    },
    {
      orderId: 123,
      user: 'huu kien',
      order: 490,
      spending: 1456547,
    },
    {
      orderId: 123,
      user: 'huu kien',
      order: 490,
      spending: 1456547,
    },
    {
      orderId: 123,
      user: 'huu khag',
      order: 490,
      spending: 1456547,
    },
    {
      orderId: 123,
      user: 'huu sơn',
      order: 490,
      spending: 1456547,
    },
  ]);

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
  return (
    <div className="revanue">
      <div className="revanue_container">
        <div className="revanue__group" data-aos="fade-up">
          <div className="revanue_title">
            <RiMoneyDollarCircleLine />
          </div>
          <div className="revanue_total">
            <div className="revanue_total-top">
              <div className="revanue_price">
                <span>{formatPrice(TOTALDAY || 0)}</span>
              </div>
              <div className="revanue_percent">
                <span style={{ color: TOTALDAY > TOTALLASTDAY ? 'green' : 'red' }}>
                  {`${TOTALDAY > TOTALLASTDAY ? '' : '-'}${percent}%`}
                  {TOTALDAY > TOTALLASTDAY ? <AiOutlineArrowUp /> : <AiOutlineArrowDown />}
                </span>
              </div>
            </div>

            <div className="revanue_month">
              <span>Total Income</span>
            </div>
          </div>
        </div>
        <div className="revanue__group" data-aos="fade-up">
          <div className="revanue_title">
            <BsFillBagCheckFill />
          </div>
          <div className="revanue_total">
            <div className="revanue_total-top">
              <div className="revanue_price">
                <span>{dataOrder.length || 0} </span>
              </div>
              <div className="revanue_percent">
                <span style={{ color: TOTALDAY > TOTALLASTDAY ? 'green' : 'red' }}>
                  {`${TOTALDAY > TOTALLASTDAY ? '' : '-'}${percent}%`}
                  {TOTALDAY > TOTALLASTDAY ? <AiOutlineArrowUp /> : <AiOutlineArrowDown />}
                </span>
              </div>
            </div>
            <div className="revanue_month">
              <span>Total Sales</span>
            </div>
          </div>
        </div>
        <div className="revanue__group" data-aos="fade-up">
          <div className="revanue_title">
            <AiOutlineShoppingCart />
          </div>
          <div className="revanue_total">
            <div className="revanue_total-top">
              <div className="revanue_price">
                <span>{dataOrder.length || 0} </span>
              </div>
              <div className="revanue_percent">
                <span style={{ color: TOTALDAY > TOTALLASTDAY ? 'green' : 'red' }}>
                  {`${TOTALDAY > TOTALLASTDAY ? '' : '-'}${percent}%`}
                  {TOTALDAY > TOTALLASTDAY ? <AiOutlineArrowUp /> : <AiOutlineArrowDown />}
                </span>
              </div>
            </div>
            <div className="revanue_month">
              <span>Total Order</span>
            </div>
          </div>
        </div>
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
              {customes.map((item, index) => (
                <div className="revanue_customers-bottom-item">
                  <div className="revanue_customers-bottom-user">
                    <span>{item.user}</span>
                  </div>
                  <div className="revanue_customers-bottom-totalOrder">
                    <span>{item.order}</span>
                  </div>
                  <div className="revanue_customers-bottom-spending">
                    <span>{formatPrice(item.spending)}</span>
                  </div>
                </div>
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
                    <div className="revanue_latestOrder-bottom-item">
                      <div className="revanue_latestOrder-bottom-orderId">
                        <span>{`# ${item.code}`}</span>
                      </div>
                      <div className="revanue_latestOrder-bottom-user">
                        <span>{item.user.name}</span>
                      </div>
                      <div className="revanue_latestOrder-bottom-totalOrder">
                        <span>{formatPrice(item.total)}</span>
                      </div>
                      <div className="revanue_latestOrder-bottom-day">
                        <span>{item.day}</span>
                      </div>

                      {item.status === 'Pending' && (
                        <div className="revanue_latestOrder-bottom-spending ">
                          <span className="active__pending">{item.status}</span>
                        </div>
                      )}

                      {item.status === 'Refund' && (
                        <div className="revanue_latestOrder-bottom-spending ">
                          <span className="active__reject">{item.status}</span>
                        </div>
                      )}

                      {item.status === 'Success' && (
                        <div className="revanue_latestOrder-bottom-spending ">
                          <span className="active__success">{item.status}</span>
                        </div>
                      )}

                      {item.status === 'Shipping' && (
                        <div className="revanue_latestOrder-bottom-spending ">
                          <span className="active__delivered">{item.status}</span>
                        </div>
                      )}
                    </div>
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
