import React from 'react';
import { AiFillCaretDown, AiOutlineFileSearch } from 'react-icons/ai';
import { BiGlassesAlt } from 'react-icons/bi';
import { BsEraserFill } from 'react-icons/bs';
import { FaRedhat } from 'react-icons/fa';
import { GiSonicShoes, GiTrousers } from 'react-icons/gi';
import { IoMdShirt } from 'react-icons/io';
import { MdStorefront } from 'react-icons/md';
import { NavLink } from 'react-router-dom';
import './styles.scss';
Dropdow.propTypes = {};

function Dropdow({ handleclick, path, isopen, handleIsopen }) {
  return (
    <div className="sidePage__QuickMenu-product">
      <div
        className={
          isopen ? 'sidePage__QuickMenu-groups activeAccordion' : 'sidePage__QuickMenu-groups'
        }
        onClick={handleIsopen}
      >
        {' '}
        <BsEraserFill />
        <span>Sản phẩm</span>
        <AiFillCaretDown className={isopen && 'activeIcon'} />
      </div>
      <div
        className={
          isopen ? 'sidePage__QuickMenu-Accordion active' : 'sidePage__QuickMenu-Accordion'
        }
      >
        <div
          className={
            path === 'Product'
              ? 'sidePage__QuickMenu-group activeLink'
              : 'sidePage__QuickMenu-group'
          }
        >
          <NavLink
            onClick={handleclick}
            to="/admin/Product"
            className={({ isActive }) => (isActive ? 'activeLink' : null)}
          >
            <MdStorefront />
            <span>Product</span>
          </NavLink>
        </div>

        <div
          className={
            path === 'Glass' ? 'sidePage__QuickMenu-group activeLink' : 'sidePage__QuickMenu-group'
          }
        >
          <NavLink
            onClick={handleclick}
            to="/admin/Glass"
            className={({ isActive }) => (isActive ? 'activeLink' : null)}
          >
            <BiGlassesAlt />

            <span> Glass</span>
          </NavLink>
        </div>

        <div
          className={
            path === 'Hats' ? 'sidePage__QuickMenu-group activeLink' : 'sidePage__QuickMenu-group'
          }
        >
          <NavLink onClick={handleclick} to="/admin/Hats">
            <FaRedhat />
            <span> Hats</span>
          </NavLink>
        </div>
        <div
          className={
            path === 'Shirts' ? 'sidePage__QuickMenu-group activeLink' : 'sidePage__QuickMenu-group'
          }
        >
          <NavLink onClick={handleclick} to="/admin/Shirts">
            <IoMdShirt />

            <span> Shirts</span>
          </NavLink>
        </div>
        <div
          className={
            path === 'Sneaker'
              ? 'sidePage__QuickMenu-group activeLink'
              : 'sidePage__QuickMenu-group'
          }
        >
          <NavLink onClick={handleclick} to="/admin/Sneaker">
            <GiSonicShoes />
            <span> Sneaker</span>
          </NavLink>
        </div>

        <div
          className={
            path === 'Trousers'
              ? 'sidePage__QuickMenu-group activeLink'
              : 'sidePage__QuickMenu-group'
          }
        >
          <NavLink onClick={handleclick} to="/admin/Trousers">
            <GiTrousers />
            <span> Trousers</span>
          </NavLink>
        </div>
        <div
          className={
            path === 'Search' ? 'sidePage__QuickMenu-group activeLink' : 'sidePage__QuickMenu-group'
          }
        >
          <NavLink onClick={handleclick} to="/admin/Search">
            <AiOutlineFileSearch />
            <span> Search</span>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Dropdow;
