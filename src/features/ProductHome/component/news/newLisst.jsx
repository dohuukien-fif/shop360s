import React, { useState } from 'react';
import NewItem from './newItem';
import './styles.scss';

NewsProduct.propTypes = {};

function NewsProduct(props) {
  const [NewLisst, setNewLisst] = useState([
    {
      id: 1,
      date: '11 / 11 / 2021',
      link: 'https://360boutique.vn/bung-no-loat-chuong-trinh-mung-360-boutique-7-tuoi/',
      images:
        'https://360boutique.vn/wp-content/themes/360boutique/thumb.php?src=https://360boutique.vn/wp-content/uploads/2021/11/BANNER-WEB-SN-7-TUOI.jpg&w=400&h=250&zc=1&q=90',
      title: 'BÙNG NỔ LOẠT CHƯƠNG TRÌNH MỪNG 360 BOUTIQUE 7 TUỔI',
      content:
        ' Nhân dịp sinh nhật lên 7, 360 boutique GIẢM GIÁ LÊN ĐẾN 50% toàn bộ hoodie, khoác gió, quần jeans',
    },
    {
      id: 2,
      date: '13 / 10 / 2021',
      link: 'https://360boutique.vn/tips-giup-ao-len-nam/',
      images:
        'https://360boutique.vn/wp-content/themes/360boutique/thumb.php?src=https://360boutique.vn/wp-content/uploads/2021/10/cach-lam-sach-ao-len-1.jpg&w=400&h=250&zc=1&q=90',
      title: 'NHỮNG TÍP GIÚP ÁO LEN CỦA BẠN NAM AUTO ĐẸP & BỀN',
      content:
        ' Nếu bạn muốn thì phải đọc ngay “Tips Bảo Quản Áo Len Siêu Bền Bấp Chấp Năm Tháng”...',
    },
    {
      id: 3,
      date: '11 / 10 / 2021',
      link: 'https://360boutique.vn/sieu-sale-nua-gia-ngay-vang/',
      images:
        'https://360boutique.vn/wp-content/themes/360boutique/thumb.php?src=https://360boutique.vn/wp-content/uploads/2021/07/120CM-POSTER-DAN-KINH.jpg&w=400&h=250&zc=1&q=90',
      title: 'SIÊU SALE NỬA GIÁ, ÁO PHÔNG QUẦN SHORT ĐỒNG LOẠT 30% – 40% – 50%',
      content:
        ' SIÊU SALE NỬA GIÁ, ÁO PHÔNG QUẦN SHORT ĐỒNG LOẠT 30% – 40% – 50% Tháng 7 này nhà 360 mang tới',
    },
  ]);
  return (
    <>
      <div className="newLisst_title">
        <span>TIN TỨC</span>
      </div>
      <div className="postLisst">
        {NewLisst.map((items, index) => (
          <NewItem key={items.id} items={items} />
        ))}
      </div>
    </>
  );
}

export default NewsProduct;
