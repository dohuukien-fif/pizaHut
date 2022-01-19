import * as React from 'react';
import { Link } from 'react-router-dom';
import { GiJusticeStar } from 'react-icons/gi';
import { AiOutlineArrowRight } from 'react-icons/ai';
export interface FormConTroProps {}

export default function FormConTrol(props: FormConTroProps) {
  return (
    <div className="login_container">
      <div className="login_block">
        <div className="login_title">
          <h2>Đăng nhập</h2>
        </div>
        <form action="">
          <div className="form_group">
            <label>
              Emai <GiJusticeStar />
            </label>
            <input type="text" placeholder="Nhập email của bạn tại đây" />
          </div>
          <div className="form_group">
            <label>
              Mật khẩu <GiJusticeStar />
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
