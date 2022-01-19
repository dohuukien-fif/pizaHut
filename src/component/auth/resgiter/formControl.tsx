import * as React from 'react';
import { Link } from 'react-router-dom';
import { GiJusticeStar } from 'react-icons/gi';
import { AiOutlineArrowRight } from 'react-icons/ai';
export interface FormControlRegisterProps {}

export default function FormControlRegister(props: FormControlRegisterProps) {
  return (
    <div className="register_container">
      <div className="register_block">
        <div className="register_title">
          <h2>Tạo tài khoản</h2>
        </div>
        <form action="">
          <div className="form_group">
            <label>
              Họ và Tên <GiJusticeStar />
            </label>
            <input type="text" placeholder="Nhập họ và tên của bạn tại đây" />
          </div>
          <div className="form_group">
            <label>
              Số điện thoại <GiJusticeStar />
            </label>
            <input
              type="tel"
              placeholder="Nhập số điện thoại của bạn tại đây"
              pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
              required
            />
          </div>
          <div className="form_group">
            <label>
              E-mail <GiJusticeStar />
            </label>
            <input type="email" placeholder="Nhập email của bạn tại đây" />
          </div>
          <div className="form_group">
            <label>
              Mật khẩu <GiJusticeStar />
            </label>
            <input type="password" placeholder="Nhập mật khẩu của bạn tại đây" />
          </div>
          <div className="form_group">
            <label>
              Xác nhận mật khẩu <GiJusticeStar />
            </label>
            <input type="password" placeholder="Nhập mật khẩu của bạn tại đây" />
          </div>
          <div className="form_forget">
            <label>Quên mật khẩu</label>
          </div>
          <div className="form_group-redirest">
            <label>Bạn đã có tài Khoản chưa?</label>
            <span>
              <Link to="register">Tạo tài khoản</Link>
            </span>
          </div>
          <button>
            <span>
              Đăng nhập <AiOutlineArrowRight />
            </span>
          </button>
        </form>
      </div>
    </div>
  );
}
