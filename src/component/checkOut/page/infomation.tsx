import * as React from 'react';
import './infor.scss';
import { cartOrder, cartAddress } from './../../cart/cartSelected';
import { useSelector, useDispatch } from 'react-redux';
import { AiFillClockCircle, AiOutlineSearch } from 'react-icons/ai';
import { MdPlace } from 'react-icons/md';
import { BsTelephone } from 'react-icons/bs';
export interface InformationFearutesProps {}

export default function InformationFearutes(props: InformationFearutesProps) {
  const CartOrders = useSelector(cartOrder);
  const [istime, setistime] = React.useState<boolean>(false);
  const [istab, setistab] = React.useState<string>('near');
  const [infors, setinfors] = React.useState<any>('');

  const handleClickTimes = () => {
    setistime((x) => !x);
  };
  // const handlechekc = (value: any) => {
  //   setinfors(value.target.defaultValue);
  // };
  const handleClickTab = (newTab: string) => {
    setistab(newTab);
  };
  const handleSubmit = (e: any) => {
    e.preventDefault();
  };
  return (
    <div className="infor">
      {CartOrders === 'Đặt giao hàng' && (
        <div className="infor_swrapper">
          <div className="infor_title">
            <span>Đặt giao hàng</span>
          </div>
          <div className="infor_content">
            <div className="infor_left">
              <div className="infor_left-title">
                <span>Thông tin nhận hàng</span>
                <div className="form_group">
                  <input type="checkbox" id="cb1" />
                  <span>Sử dụng địa chỉ cũ</span>
                </div>
              </div>
              {/* INFOR_LEFT */}
              <div className="infor_left-content">
                <form action="">
                  <div className="form_group">
                    <label>
                      Họ và tên: <strong>*</strong>
                    </label>
                    <input type="text" />
                  </div>
                  <div className="form_group">
                    <label>
                      Số điện thoại: <strong>*</strong>
                    </label>
                    <input type="text" />
                  </div>
                  <div className="form_group">
                    <label>
                      Tỉnh thành: <strong>*</strong>
                    </label>
                    <select name="" id="">
                      <option value="">Chọn thành phố</option>
                      <option value="hồ chí minh">Hồ chí minh</option>
                      <option value="hồ chí minh">Hà nội</option>
                      <option value="hồ chí minh">Cần thơ</option>
                    </select>
                  </div>
                  <div className="form_group">
                    <label>
                      Quận huyện: <strong>*</strong>
                    </label>
                    <select name="" id="">
                      <option value="">Chọn Quận/Huyên</option>
                      <option value="hồ chí minh">thủ đức</option>
                      <option value="hồ chí minh">Hà nội</option>
                      <option value="hồ chí minh">Cần thơ</option>
                    </select>
                  </div>
                  <div className="form_group">
                    <label>
                      Phường xã: <strong>*</strong>
                    </label>
                    <select name="" id="">
                      <option value="">Chọn Tỉnh/Thành Phố</option>
                      <option value="hồ chí minh">quận 2</option>
                      <option value="hồ chí minh">Hà nội</option>
                      <option value="hồ chí minh">Cần thơ</option>
                    </select>
                  </div>
                  <div className="form_group">
                    <label>
                      Số nhà hẽm: <strong>*</strong>
                    </label>
                    <input type="text" />
                  </div>
                  <div className="form_group">
                    <label>
                      Tên đường: <strong>*</strong>
                    </label>
                    <input type="text" />
                  </div>
                </form>
              </div>
            </div>
            {/* INFOR_RIGHT */}
            <div className="infor_right">
              <div className="infor_right-title">
                <span>Chọn thời gian nhận hàng</span>
              </div>
              <div className="form_group">
                <input
                  type="radio"
                  onClick={() => setinfors('now')}
                  id="now"
                  name="fav_language"
                  value="now"
                />
                <label> Ngay bây giờ (tối thiểu 30 phút sau khi đặt hàng thành công)</label>
              </div>
              <div className="form_group">
                <input
                  type="radio"
                  onClick={() => setinfors('time')}
                  id="time"
                  name="fav_language"
                  value="time"
                />
                <label>chọn thời gian</label>
              </div>
              <div className="form_check">
                <input type="checkbox" id="cb1" />
                <label>Chọn xuất quá đơn đỏ</label>
              </div>
              {infors === 'time' && (
                <div className="form_time">
                  <input type="text" placeholder="Nhập thời gian giao hàng" />
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {CartOrders === 'Đặt lấy hàng' && (
        <div className="receiver_swrapper">
          <div className="receiver_title">
            <span>Đặt lấy hàng</span>
          </div>
          <div className="receiver_content">
            <div className="receiver_left">
              <div className="receiver_left-title">
                <span>Thông tin nhận hàng</span>
              </div>
              {/* RECEIVER_LEFT */}
              <div className="receiver_left-content">
                <form onSubmit={handleSubmit}>
                  <div className="form_group">
                    <label>
                      Họ và tên: <strong>*</strong>
                    </label>
                    <input type="text" />
                  </div>
                  <div className="form_group">
                    <label>
                      Số điện thoại: <strong>*</strong>
                    </label>
                    <input type="text" />
                  </div>
                </form>
                <div className="receiver_time">
                  <div className="receiver_right-title">
                    <span>CHỌN THỜI GIAN NHẬN HÀNG</span>
                  </div>
                  <div className="form_group">
                    <input type="radio" name="time" onClick={() => setinfors('now')} />
                    <label>Chọn ngay bây giờ (tối thiểu 30 phút sau khi đặt hàng thành công)</label>
                  </div>
                  <div className="form_group" onClick={handleClickTimes}>
                    <input type="radio" name="time" onClick={() => setinfors('time')} />
                    <label>chọn thời gian</label>
                  </div>
                  <div className="form_check">
                    <input type="checkbox" id="cb1" />
                    <label>Chọn xuất quá đơn đỏ</label>
                  </div>
                </div>
              </div>

              {infors === 'time' && (
                <div className="form_group">
                  <input
                    type="text"
                    className="form_group-text"
                    placeholder="Nhập thời gian giao hàng"
                  />
                </div>
              )}
            </div>
            {/* RECEIVER_RIGHT */}
            <div className="receiver_right">
              <div className="receiver_right-title">
                <span>chọn cửa hàng nhận</span>
              </div>
              <div className="receiver_right-content">
                <form onSubmit={handleSubmit}>
                  <div className="form_group">
                    <label>
                      Tỉnh/Thành: <strong>*</strong>
                    </label>
                    <select name="" id="">
                      <option value="">Chọn Tỉnh/Thành Phố</option>
                      <option value="hồ chí minh">quận 2</option>
                      <option value="hồ chí minh">Hà nội</option>
                      <option value="hồ chí minh">Cần thơ</option>
                    </select>
                  </div>
                  <div className="form_group">
                    <label>
                      Quận/Huyện: <strong>*</strong>
                    </label>
                    <select name="" id="">
                      <option value="">Chọn Quận/Huyện</option>
                      <option value="hồ chí minh">quận 2</option>
                      <option value="hồ chí minh">Hà nội</option>
                      <option value="hồ chí minh">Cần thơ</option>
                    </select>
                  </div>
                  <div className="form_group">
                    <label>
                      Cửa hàng: <strong>*</strong>
                    </label>
                    <input type="text" placeholder="Nhập tên cửa hàng" />
                    <AiOutlineSearch />
                  </div>

                  <div className="receiver_store">
                    <div className="receiver_store-btn">
                      <button
                        className={
                          istab === 'near'
                            ? 'receiver_store-btn-near activeTab'
                            : 'receiver_store-btn-near'
                        }
                        onClick={() => handleClickTab('near')}
                      >
                        <span>Cửa hàng gần bạn</span>
                      </button>
                      <button
                        className={
                          istab === 'filter'
                            ? 'receiver_store-btn-near activeTab'
                            : 'receiver_store-btn-near'
                        }
                        onClick={() => handleClickTab('filter')}
                      >
                        Cửa hàng có thể lọc
                      </button>
                    </div>

                    <div className="receiver_store-place">
                      {/* TAB-NEAR */}
                      {istab === 'near' && (
                        <>
                          {' '}
                          <div className="form_store">
                            <input type="radio" checked id="time" name="time" value="time" />
                            <div className="receiver_store-place-content">
                              <div className="receiver_store-place-block">
                                <div className="receiver_store-title">
                                  <span>THE PIZZA COMPANY SONG HÀNH</span>
                                </div>
                                <div className="receiver_store-places">
                                  <AiFillClockCircle />
                                  <span>81 song hành,P An phú , Quận 2 ,HCM</span>
                                </div>
                                <div className="receiver_store-phone">
                                  <AiFillClockCircle />
                                  <span>0969757507</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="form_store">
                            <input type="radio" checked id="time" name="time" value="time" />
                            <div className="receiver_store-place-content">
                              <div className="receiver_store-place-block">
                                <div className="receiver_store-title">
                                  <span>THE PIZZA COMPANY NGUYỄN THỊ MINH KHAI</span>
                                </div>
                                <div className="receiver_store-places">
                                  <AiFillClockCircle />
                                  <span>81 song hành,P An phú , Quận 2 ,HCM</span>
                                </div>
                                <div className="receiver_store-phone">
                                  <AiFillClockCircle />
                                  <span>0969757507</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="form_store">
                            <input type="radio" checked id="time" name="time" value="time" />
                            <div className="receiver_store-place-content">
                              <div className="receiver_store-place-block">
                                <div className="receiver_store-title">
                                  <span>THE PIZZA COMPANY 333 LÊ VĂN SỸ</span>
                                </div>
                                <div className="receiver_store-places">
                                  <AiFillClockCircle />
                                  <span>81 song hành,P An phú , Quận 2 ,HCM</span>
                                </div>
                                <div className="receiver_store-phone">
                                  <AiFillClockCircle />
                                  <span>0969757507</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </>
                      )}
                      {/* TABFILTER */}
                      {istab === 'filter' && (
                        <>
                          {' '}
                          <div className="form_store">
                            <input type="radio" checked id="time" name="time" value="time" />
                            <div className="receiver_store-place-content">
                              <div className="receiver_store-place-block">
                                <div className="receiver_store-title">
                                  <span>THE PIZZA COMPANY SONG HÀNHH</span>
                                </div>
                                <div className="receiver_store-places">
                                  <MdPlace />
                                  <span>81 song hành,P An phú , Quận 2 ,HCM</span>
                                </div>
                                <div className="receiver_store-phone">
                                  <BsTelephone />
                                  <span>0969757507</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="form_store">
                            <input type="radio" checked id="time" name="time" value="time" />
                            <div className="receiver_store-place-content">
                              <div className="receiver_store-place-block">
                                <div className="receiver_store-title">
                                  <span>THE PIZZA COMPANY NGUYỄN THỊ MINH KHAI</span>
                                </div>
                                <div className="receiver_store-places">
                                  <MdPlace />
                                  <span>81 song hành,P An phú , Quận 2 ,HCM</span>
                                </div>
                                <div className="receiver_store-phone">
                                  <BsTelephone />
                                  <span>0969757507</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="form_store">
                            <input type="radio" checked id="time" name="time" value="time" />
                            <div className="receiver_store-place-content">
                              <div className="receiver_store-place-block">
                                <div className="receiver_store-title">
                                  <span>THE PIZZA COMPANY 333 LÊ VĂN SỸ</span>
                                </div>
                                <div className="receiver_store-places">
                                  <MdPlace />
                                  <span>81 song hành,P An phú , Quận 2 ,HCM</span>
                                </div>
                                <div className="receiver_store-phone">
                                  <BsTelephone />
                                  <span>0969757507</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
