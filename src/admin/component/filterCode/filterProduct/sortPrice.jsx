import React from 'react';

FilterTotal.propTypes = {};

function FilterTotal({ onSubmitTotal }) {
  // const [sort,setSort ] = useState();

  const handleChangeSort = (e) => {
    const { value, name } = e.target;
    const newSort = {
      _sort: name,
      _order: value,
    };

    console.log(newSort);
    if (onSubmitTotal) onSubmitTotal(newSort);
  };
  return (
    <div className="filterTotal">
      <select name="price" id="" onChange={handleChangeSort}>
        <option value="">Tất cả </option>
        <option value="asc">tăng dần</option>
        <option value="desc">giảm dần</option>
      </select>
    </div>
  );
}

export default FilterTotal;
