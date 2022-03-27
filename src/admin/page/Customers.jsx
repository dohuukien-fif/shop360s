import React from 'react';
import PropTypes from 'prop-types';
import { formatPrice } from '../../utils';
import './customers.scss';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import Stack from '@mui/material/Stack';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
CustomersFeatures.propTypes = {};

function CustomersFeatures(props) {
  const [customes, setcustomers] = React.useState([
    {
      orderId: 123,
      user: 'huu kien',
      order: 490,
      spending: 1456547,
      email: 'huukien0099@gmail.com',
    },
    {
      orderId: 123,
      user: 'huu kien',
      order: 490,
      spending: 1456547,
      email: 'huukien0099@gmail.com',
    },
    {
      orderId: 123,
      user: 'huu kien',
      order: 490,
      spending: 1456547,
      email: 'huukien0099@gmail.com',
    },
    {
      orderId: 123,
      user: 'huu khag',
      order: 490,
      spending: 1456547,
      email: 'huukien0099@gmail.com',
    },
    {
      orderId: 123,
      user: 'huu sơn',
      order: 490,

      spending: 1456547,
      email: 'huukien0099@gmail.com',
    },
  ]);

  return (
    <div className="customers">
      <div className="customers_title">
        <span>Customers</span>
      </div>
      <div className="customers_block">
        <div className="customers__swapper">
          <div className="customers__top">
            <span></span>
            <span>Name</span>
            <span>Email</span>
            <span>Total Orders</span>
            <span>Total Spend</span>
          </div>
          <div className="customers__content">
            <div className="customers__list">
              {customes.map((item, index) => (
                <div className="customers__item">
                  <div className="customers_index">
                    <span>{index}</span>
                  </div>
                  <div className="customers_name">
                    <span>{item.user}</span>
                  </div>
                  <div className="customers_email">
                    <span>{item.email}</span>
                  </div>
                  <div className="customers_order">
                    <span>{item.order}</span>
                  </div>

                  <div className="customers_spend">
                    <span>{formatPrice(item.spending)}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="customers_pagination">
          <Stack spacing={2}>
            <Pagination
              count={10}
              renderItem={(item) => (
                <PaginationItem
                  components={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
                  {...item}
                />
              )}
            />
          </Stack>
        </div>
      </div>
    </div>
  );
}

export default CustomersFeatures;
