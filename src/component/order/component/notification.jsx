import React from 'react';
import PropTypes from 'prop-types';
import { CgNotes } from 'react-icons/cg';
import { FiBell } from 'react-icons/fi';
import { GiBackwardTime } from 'react-icons/gi';
import { AiOutlineRight } from 'react-icons/ai';
import { FaShuttleVan } from 'react-icons/fa';
import { BsChatSquareText } from 'react-icons/bs';
import { MdCardMembership } from 'react-icons/md';
import { fontSize } from '@mui/system';
import './styles.scss';
bell.propTypes = {};

function bell(props) {
  return (
    <>
      <div className="notification">
        <ul className="notification_list">
          <li className="notification_item">
            <div className="notification_image">
              <img
                src="https://360boutique.vn/wp-content/themes/360boutique/thumb.php?src=https://360boutique.vn/wp-content/uploads/2021/10/cach-lam-sach-ao-len-1.jpg&w=400&h=250&zc=1&q=90"
                alt=""
              />
            </div>
            <div className="notification_content">
              <p style={{ fontWeight: '600' }}>
                Những tips giúp áo len của các bạn nam auto đẹp & bền
              </p>
              <span style={{ color: 'gray' }}>13/10/2021</span>
              <p>
                Nếu bạn muốn thì phải đọc ngay “Tips Bảo Quản Áo Len Siêu Bền Bấp Chấp Năm Tháng”...
              </p>
            </div>
          </li>
          <li className="notification_item">
            <div className="notification_image">
              <img
                src="https://360boutique.vn/wp-content/themes/360boutique/thumb.php?src=https://360boutique.vn/wp-content/uploads/2021/07/120CM-POSTER-DAN-KINH.jpg&w=400&h=250&zc=1&q=90"
                alt=""
              />
            </div>
            <div className="notification_content">
              <p style={{ fontWeight: '600' }}>
                SIÊU SALE NỬA GIÁ, ÁO PHÔNG QUẦN SHORT ĐỒNG LOẠT 30% – 40% – 50%
              </p>
              <span style={{ color: 'gray' }}>07/07/2021</span>
              <p>
                SIÊU SALE NỬA GIÁ, ÁO PHÔNG QUẦN SHORT ĐỒNG LOẠT 30% – 40% – 50% Tháng 7 này nhà 360
                mang tới...
              </p>
            </div>
          </li>
          <li className="notification_item">
            <div className="notification_image">
              <img
                src="https://360boutique.vn/wp-content/themes/360boutique/thumb.php?src=https://360boutique.vn/wp-content/uploads/2021/06/anh-web.png&w=400&h=250&zc=1&q=90"
                alt=""
              />
            </div>
            <div className="notification_content">
              <p style={{ fontWeight: '600' }}>BÃO SALE GIẢI NHIỆT ĐỒNG GIÁ TỪ 99K</p>
              <span style={{ color: 'gray' }}>03/06/2021</span>
              <p>
                Mùa hè nắng nóng, giải nhiệt ngay với cơn bão mưa sale của hệ thống thời trang 360
                với mức Ưu...
              </p>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}

export default bell;
