import * as React from 'react';

export default function ManagerItem({ item }) {
  return (
    <div className="manager__item">
      <div className="manager__left">
        <div className="manager__figust">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwWuvJHLqnpwQKedQusejSFEL-9Y3grrH4vQ&usqp=CAU"
            alt=""
          />
        </div>
        <div className="manager__name">
          <span>{item.userName}</span>
        </div>
        <div className="manager__position">
          <span>{item.position}</span>
        </div>
        <div className="manager__telephone">
          <span>{item.telephone}</span>
        </div>
        <div className="manager__identification">
          <span>{item.identification}</span>
        </div>
      </div>
      <div className="manager__right">
        <div className="manager__address">
          <span>{item.address}</span>
        </div>
      </div>
    </div>
  );
}
