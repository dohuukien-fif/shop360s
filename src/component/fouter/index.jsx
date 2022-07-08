import { doc, setDoc } from 'firebase/firestore';
import React, { useState } from 'react';
import { BsTelephoneForward } from 'react-icons/bs';
import { HiOutlineMailOpen } from 'react-icons/hi';
import { db } from '../../firebase';
import './styles.scss';
Fouter.propTypes = {};

function Fouter(props) {
  const [valueEmail, setValueEmail] = useState('');
  const handleChangeValueEmail = (e) => {
    const { value } = e.target;
    setValueEmail(value);
  };

  const uid = new Date().getMilliseconds();

  console.log(uid);

  const handleSubmitValueEmail = async (e) => {
    e.preventDefault();

    const docRef = doc(db, 'email', uid.toString());

    await setDoc(docRef, { valueEmail });
    console.log(valueEmail);

    setValueEmail('');
  };
  return (
    <div className="footer">
      <div className="footer_top">
        <div className="newsletter">
          <div className="newsletter_form">
            <div className="newsletter_title">
              <HiOutlineMailOpen style={{ fontSize: '20px' }} /> <span>Đăng kí nhận tin</span>
            </div>
            <div className="newsletter_input">
              <form onSubmit={handleSubmitValueEmail}>
                <input
                  type="email"
                  placeholder="Nhập email của bạn"
                  value={valueEmail}
                  required
                  onChange={handleChangeValueEmail}
                />
                <button type="submit">ĐĂNG KÍ</button>
              </form>
            </div>
          </div>
          <div className="newsletter_phone">
            <BsTelephoneForward style={{ fontSize: '20px' }} /> <span>Hỗ trợ / Mua hàng:</span>{' '}
            <span style={{ color: 'red' }}>097 328 58 86</span>
          </div>
        </div>
      </div>
      <div className="footer_mid">
        <div className="fouter_store">
          <div className="fouter_name">HỆ THỐNG CỬA HÀNG</div>
          <ul>
            <li>242 Thái Hà, Q.Đống Đa, HN</li>
            <li>20 Dương Quảng Hàm, Q.Cầu Giấy, HN</li>
            <li>11 Dương Quảng Hàm, Q.Cầu Giấy, HN</li>
            <li>63 Đại Cổ Việt, Q.Hai Bà Trưng, HN</li>
            <li>27 Chùa Bộc, Q.Đống Đa, HN</li>
            <li>296 Nguyễn Trãi, Q.Nam Từ Liêm, HN</li>

            <li>116 Hồ Tùng Mậu,Q.Cầu Giấy, HN</li>
            <li>37 Trung Kính, Q.Cầu Giấy, HN</li>
          </ul>
        </div>
        <div className="fouter_contract">
          <div className="fouter_name">CHÍNH SÁCH VÀ QUY ĐỊNH CHUNG</div>
          <ul>
            <li>Hướng Dẫn Mua Hàng</li>
            <li>Hình Thức Thanh Toán</li>
            <li>Quy Định Về Bảo Mật Thông Tin</li>
            <li>Chính Sách Bảo Hành</li>
            <li>Chính Sách Đổi Trả Hàng</li>
            <li>Chính Sách Vận Chuyển</li>

            <li>Điều Khoản Dịch Vụ</li>
            <li>Giới Thiệu</li>
          </ul>
        </div>
        <div className="fouter_addres">
          <div className="fouter_name">ĐỊA CHỈ</div>
          <ul>
            <li>CÔNG TY CỔ PHẦN THỜI TRANG 360</li>
            <li>Trụ sở: Đội 6 Phương Đình, Đan Phượng, Hà Nội</li>
            <li>Facebook thời trang nam: 360Boutique</li>
            <li>Facebook kids: 360Kids</li>
            <li>Điện thoại: 0973 285 886</li>
            <li>Hotline: 0862 052 988</li>

            <li>Email: web@360boutique.vn</li>
            <li>Website: https://360boutique.vn/</li>
            <li>
              <a href="http://online.gov.vn/CustomWebsiteDisplay.aspx?DocId=53660&amp;fbclid=IwAR14XANFc5xYjLN6iS26MFE2WLYzdvVBJecvSSKBxOWBtAqoB9S7RZWMTwU">
                <img
                  className="fouter_image"
                  src="https://360boutique.vn/wp-content/uploads/2019/04/da-thong-bao.png"
                  alt=""
                />
              </a>
            </li>
          </ul>
        </div>
        <div className="fouter_Fanpage">
          <div className="fouter_name">FANPAGE</div>
          <div className="img">
            <img
              className="fanpage_image"
              src="https://scontent.fdad1-3.fna.fbcdn.net/v/t39.30808-6/s526x296/255535153_2125572154272983_2441141431992209732_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=dd9801&_nc_ohc=oqiGVu8FBjwAX8gexZQ&_nc_ht=scontent.fdad1-3.fna&edm=ALIZrNsEAAAA&oh=129a2ae1e61c180244f5187bd921b16a&oe=61973387"
              alt=""
            />
            <img
              className="fanpage_images"
              src="https://scontent.fdad1-1.fna.fbcdn.net/v/t39.30808-1/cp0/p80x80/255285006_2125726210924244_626103038942954809_n.jpg?_nc_cat=1&ccb=1-5&_nc_sid=dbb9e7&_nc_ohc=lpt27PV49nMAX-FddMw&_nc_ht=scontent.fdad1-1.fna&edm=ALIZrNsEAAAA&oh=e7974d2a763ce267b0a71bdbc013242e&oe=61974429"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="footer_bottom">
        <p>Copyright © 2017 360boutique. All Rights Reserved</p>
      </div>
    </div>
  );
}

export default Fouter;
