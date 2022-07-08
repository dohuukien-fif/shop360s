import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';
NakLink.propTypes = {};

function NakLink({ torget, scrow }) {
  return (
    <ul
      className={
        (scrow && `menulist ${torget ? 'activeMenuScroll active' : 'activeMenuScroll'}`) ||
        (torget ? ' menulist activeMenuScroll active ' : 'menulist')
      }
    >
      <div className="menulist_figust">
        <img
          src="https://360boutique.vn/wp-content/uploads/2021/10/LOGO-360-DUNG-TAM-THOI-MAU-DEN-05.png"
          alt=""
        />
      </div>

      <h3>Danh sách sản phẩm</h3>
      <li>
        {' '}
        <Link to="/gioi-thieu">Giới Thiệu</Link>
      </li>
      <li>
        <span>Áo</span>
        <ul className="dropdown">
          <li style={{ fontSize: '18px', fontWeight: '600' }}>
            {' '}
            <Link to="/Ao">ÁO</Link>
          </li>
          <li className="dropdown_item">
            <Link to="/Ao/ao-adidas">Áo Adidas</Link>
          </li>
          <li className="dropdown_item">
            <Link to="/Ao/ao-burberry">Áo Burberry</Link>
          </li>
          <li className="dropdown_item">
            <Link to="/Ao/ao-calvin">Áo Calvin</Link>
          </li>
          <li className="dropdown_item">
            <Link to="/Ao/ao-dior">Áo dior</Link>
          </li>
          <li className="dropdown_item">
            <Link to="/Ao/ao-dolce">Áo dolce</Link>
          </li>
          <li className="dropdown_item">
            <Link to="/Ao/ao-kenzo">Áo Kenzo</Link>
          </li>
          <li className="dropdown_item">
            <Link to="/Ao/ao-lacoste">Áo Lacoste</Link>
          </li>
        </ul>
      </li>
      <li>
        <span>Quần</span>
        <ul className="dropdown">
          <li style={{ fontSize: '18px', fontWeight: '600' }}>
            {' '}
            <Link to="/Quan">QUẦN</Link>
          </li>
          <li className="dropdown_item">
            <Link to="/Quan/quan-jeans">Quần Jeans</Link>
          </li>
          <li className="dropdown_item">
            <Link to="/Quan/quan-au">Quần Âu</Link>
          </li>
          <li className="dropdown_item">
            <Link to="/Quan/vay-nu">Váy Nữ</Link>
          </li>
          <li className="dropdown_item">
            <Link to="/Quan/quan-short">Quần Short</Link>
          </li>
          <li className="dropdown_item">
            <Link to="/Quan/quan-kaki">Quần Kaki</Link>
          </li>
        </ul>
      </li>
      <li>
        {' '}
        <span>Kính</span>
        <ul className="dropdown">
          <li style={{ fontSize: '18px', fontWeight: '600' }}>
            {' '}
            <Link to="/Kinh">KÍNH</Link>
          </li>
          <li className="dropdown_item">
            <Link to="/Kinh/kinh-balenciaga">Kính Balenciaga</Link>
          </li>
          <li className="dropdown_item">
            <Link to="/Kinh/kinh-channel">Kính Channel</Link>
          </li>
          <li className="dropdown_item">
            <Link to="/Kinh/kinh-dior">Kính Diol</Link>
          </li>
          <li className="dropdown_item">
            <Link to="/Kinh/kinh-dolce">Kính Dolce</Link>
          </li>
          <li className="dropdown_item">
            <Link to="/Kinh/kinh-fendi">Kính Fendi</Link>
          </li>
        </ul>
      </li>
      <li>
        {' '}
        <span>Mũ</span>
        <ul className="dropdown">
          <li style={{ fontSize: '18px', fontWeight: '600' }}>
            {' '}
            <Link to="/Mu">MŨ</Link>
          </li>
          <li className="dropdown_item">
            <Link to="/Mu/mu-adidas">Mũ Adidas</Link>
          </li>
          <li className="dropdown_item">
            <Link to="/Mu/mu-burberry">Mũ Burberry</Link>
          </li>
          <li className="dropdown_item">
            <Link to="/Mu/mu-gucci">Mũ Gucci</Link>
          </li>
          <li className="dropdown_item">
            <Link to="/Mu/mu-dolce">Mũ Dolce</Link>
          </li>
          <li className="dropdown_item">
            <Link to="/Mu/mu-lacoste">Mũ Lacoste</Link>
          </li>
        </ul>
      </li>
      <li>
        <span>Sneaker</span>
        <ul className="dropdown">
          <li style={{ fontSize: '18px', fontWeight: '600' }}>
            {' '}
            <Link to="/Giay">GIÀY</Link>
          </li>
          <li className="dropdown_item">
            <Link to="/Giay/giay-adidas">Giày Adidas</Link>
          </li>
          <li className="dropdown_item">
            <Link to="/Giay/giay-burberry">Giày Burberry</Link>
          </li>
          <li className="dropdown_item">
            <Link to="/Giay/giay-gucci">Giày Gucci</Link>
          </li>
          <li className="dropdown_item">
            <Link to="/Giay/giay-dolce">Giày Dolce</Link>
          </li>
          <li className="dropdown_item">
            <Link to="/Giay/giay-converse">Giày Converse</Link>
          </li>
          <li className="dropdown_item">
            <Link to="/Giay/giay-dior">Giày Dior</Link>
          </li>
          <li className="dropdown_item">
            <Link to="/Giay/giay-lacoste">Giày Lacoste</Link>
          </li>
        </ul>
      </li>
      <li>
        {' '}
        <Link to="/tin-tuc">Tin Tức</Link>
      </li>
      {/* <li>Giới thiệu </li> */}
      {/* <li>
        <Link to="/Cart">cart</Link>
      </li> */}
    </ul>
  );
}

export default NakLink;
