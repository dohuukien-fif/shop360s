import React, { useEffect, useState } from 'react';
import NewApi from '../../../api/NewApi';
import './styles.scss';
Notification.propTypes = {};

function Notification(props) {
  const [dataNotication, setDataNotication] = useState([]);
  useEffect(() => {
    const fetchApi = async () => {
      const data = await NewApi.getAll();

      setDataNotication(data);
      console.log('nnotota', data);
    };
    fetchApi();
  }, []);

  return (
    <>
      <div className="notification">
        <ul className="notification_list">
          {dataNotication.map((item, idx) => (
            <li className="notification_item">
              <div className="notification_image">
                <img src={item.image} alt="" />
              </div>
              <div className="notification_content">
                <p style={{ fontWeight: '600' }}>{item.name}</p>
                <span style={{ color: 'gray' }}>{item.time}</span>
                <div dangerouslySetInnerHTML={{ __html: item.description }}></div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Notification;
