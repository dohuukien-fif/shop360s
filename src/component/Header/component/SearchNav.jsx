// import React from 'react';
// import PropTypes from 'prop-types';
// import { FiSearch } from 'react-icons/fi';
// SearchNav.propTypes = {};

// function SearchNav({ scrow, onSubmit, SearchItem, setSearchItem }) {
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (onSubmit) onSubmit(SearchItem);
//   };
//   return (
//     <>
//       {!scrow && (
//         <form onSubmit={handleSubmit}>
//           <input
//             // className={scrow && 'activeHeader'}
//             value={SearchItem}
//             type="text"
//             placeholder="Tìm kiến sản phẩm..."
//             onChange={(e) => setSearchItem(e.target.value)}
//           />
//           <button>
//             {' '}
//             <FiSearch />
//           </button>
//         </form>
//       )}
//     </>
//   );
// }

// export default SearchNav;
