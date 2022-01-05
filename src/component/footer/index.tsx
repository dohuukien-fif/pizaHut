import * as React from 'react';
import { BsFacebook } from 'react-icons/bs';
import { FiInstagram } from 'react-icons/fi';
import { AiOutlineYoutube, AiOutlineArrowRight } from 'react-icons/ai';
import './styles.scss';
export interface FooterProps {}

export default function Footer(props: FooterProps) {
  return (
    <div className="footer">
      <div className="footer_block">
        <div className="footer_logo">
          <img
            src="https://image.shutterstock.com/image-vector/pizza-daily-fresh-vector-emblem-600w-1901059681.jpg"
            alt=""
          />
        </div>
        <div className="footer_place">
          <div className="place_top">
            <div className="place_top-title">
              <span>GIỚI THIỆU</span>
            </div>
            <div className="place_top-list">
              <div className="place_top-item">
                <span>Hệ thống nhà hàng</span>
              </div>
              <div className="place_top-item">
                <span>Câu chuyện thương hiệu</span>
              </div>
              <div className="place_top-item">
                <span>Ưu đãi thành viên</span>
              </div>
              <div className="place_top-item">
                <span>Tin tức và sự kiên </span>
              </div>
              <div className="place_top-item">
                <span>Tuyển dụng</span>
              </div>
            </div>
          </div>
          <div className="place_bottom">
            <div className="place_bottom-title">
              <span>VĂN PHÒNG ĐẠI DIỆN</span>
            </div>
            <div className="place_bottom-list">
              <div className="place_bottom-item">
                <span>
                  Công ty Cổ phần Pizza Ngon 77 Trần Nhân Tôn, Phường 9, Quận 5, Thành phố Hồ Chí
                  Minh{' '}
                </span>
              </div>
              <div className="place_bottom-item">
                <span>SĐT: +84 (028) 7308 3377 </span>
              </div>
              <div className="place_bottom-item">
                <span>MST: 0104115527 </span>
              </div>
              <div className="place_bottom-item">
                <span>
                  Cấp lần đầu ngày 17 tháng 08 năm 2009 và có thể được sửa đổi vào từng thời điểm{' '}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="footer_support">
          <div className="support_top">
            <div className="support_top-title">
              <span>LIÊN HỆ</span>
            </div>
            <div className="support_top-list">
              <div className="support_top-item">
                <span>Liên hệ</span>
              </div>
              <div className="support_top-item">
                <span>Hướng dẫn mua hàng</span>
              </div>
              <div className="support_top-item">
                <span>Chính sách giao hàng</span>
              </div>
              <div className="support_top-item">
                <span>Chính sách bảo mật</span>
              </div>
              <div className="support_top-item">
                <span>Điều khoản và điều kiên</span>
              </div>
            </div>
          </div>
          <div className="support_bottom">
            <div className="support_bottom-title">
              <span>TỔNG ĐÀI HỖ TRỢ</span>
            </div>
            <div className="support_bottom-list">
              <div className="support_bottom-item">
                <span>Đặt hàng: 1900 6066 (9:30 – 21:30)</span>
              </div>
              <div className="support_bottom-item">
                <span>Tổng đài CSKH: 1900 633 606 (9:30 - 21:30)</span>
              </div>
            </div>
          </div>
        </div>
        <div className="footer_social">
          <div className="social_top">
            <div className="social_top-title">
              <span>LIÊN KẾT VỚI CHÚNG TÔI</span>
            </div>
            <div className="social_top-list">
              <div className="social_top-item">
                <BsFacebook />
              </div>
              <div className="social_top-item">
                <FiInstagram />
              </div>
              <div className="social_top-item">
                <AiOutlineYoutube />
              </div>
            </div>
          </div>
          <div className="social_bottom">
            <div className="social_bottom-title">
              <span>ĐĂNG KÍ THÀNH VIÊN QUA ĐỊA CHỈ EMAIL</span>
            </div>
            <div className="social_bottom-list">
              <div className="social_bottom-item">
                <form action="">
                  <input type="text" placeholder="Nhập địa chỉ email" />
                  <button>
                    Gửi <AiOutlineArrowRight />
                  </button>
                </form>
              </div>
              <div className="social_bottom-item">
                <img
                  src="https://360boutique.vn/wp-content/uploads/2019/04/da-thong-bao.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer_license">
        <p>Bản quyền © 2022 The Pizza Company. Đã đăng ký bản quyền.</p>
      </div>
    </div>
  );
}
