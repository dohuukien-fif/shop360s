import React from 'react';
import './filterTotal.scss';
FilterTotal.propTypes = {};

function FilterTotal({ onSubmitTotal }) {
  // const [sort,setSort ] = useState();

  const handleChangeSort = (e) => {
    const { value, name } = e.target;
    const newSort = {
      _sort: name,
      _order: value,
    };

    if (onSubmitTotal) onSubmitTotal(newSort);
  };
  return (
    <div className="filterTotal">
      <span>Lọc tổng tiền</span>
      <select name="total" id="" onChange={handleChangeSort}>
        <option value="">Filter </option>
        <option value="asc">tăng dần</option>
        <option value="desc">giảm dần</option>
      </select>
    </div>
  );
}

export default FilterTotal;
