import { createSelector } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';
export const searchDatas = (state) => state.search.searchData;
export const filterDatas = (state) => state.search.filterPrice.price;
export const SearchsDatas = (state) => state.search.filterPrice.Search;
export const LoadingSearch = (state) => state.search.loading;
// export const cartTotalSelector = (state) => state.total.TotalItem;
// export const cartInformationSelector = (state) => state.infor;

export const setdataSearch = createSelector(
  searchDatas,
  filterDatas,
  (searchData, selectedItem) => {
    console.log('seasssssssss', typeof selectedItem);

    return searchData.filter((item) => {
      // if (searchData.length > 0) {
      //   return item;
      // }

      if (selectedItem === '199999') {
        return item.price < 200000;
      }
      if (selectedItem === '200000') {
        return item.price > 200000 && item.price < 400000;
      }
      if (selectedItem === '400000') {
        return item.price > 400001;
      }
      return item;

      // if (selectedItem === 'asc') {
      //    return a.price - b.price;
      //  }
    });
  }
);
