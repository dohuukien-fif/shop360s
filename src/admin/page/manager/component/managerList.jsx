import * as React from 'react';
import ManagerItem from './managerItem';

export default function ManagerList({ datas }) {
  return (
    <div className="manager__list">
      {datas.map((item, index) => (
        <ManagerItem item={item} key={index} />
      ))}
    </div>
  );
}
