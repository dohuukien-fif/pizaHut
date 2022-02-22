import * as React from 'react';
import { CheckOutFeaturesProps } from './interface';
import './detaiFeatures.scss';
import { formatPrice } from '../../../../utils';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import { useSelector } from 'react-redux';
import { checkProducts, cartItemTotal } from './../../../cart/cartSelected';
export interface DetailOrderProps {}

export default function DetailOrder(props: any) {
  const checkProductss = useSelector(checkProducts);

  console.log('checkProductss', checkProductss);

  const dates = new Date();
  const dataday = `${dates.getDate()}/${dates.getMonth() + 1}/${dates.getFullYear()}`;
  const datahour = `${dates.getHours()}:${dates.getMinutes() + 1}:${dates.getSeconds()}`;
  return (
    <>
      <div className="detailOrder">
        {checkProductss.length > 0 &&
          checkProductss.map((items: any, index: number) => (
            <div className="detailOrder_item" key={items?.code}>
              <div className="detailOrder_title">
                <h3>Chi tiết đơn hàng #{items?.code}</h3>
              </div>
              <div className="detailOrder_confim">
                <span>Chờ xác nhận</span>

                <span>
                  Ngày đặt hàng: {items?.day} {items?.time}{' '}
                  {items?.time.split(':')[0] > 12 ? 'PM' : 'AM'}
                </span>
              </div>
              <div className="detailOrder_top">
                <div className="detailOrder_address">
                  <div className="detailOrder_address-title">
                    <p>ĐỊA CHỈ NHẬN HÀNG</p>
                  </div>
                  <div className="detailOrder_address-infor">
                    <p>Địa chỉ</p>
                    {items.order === 'Đặt lấy hàng' && (
                      <p>506 - 510 Nguyễn thị minh khai ,Phường 2 ,Quận 3 ,HCM</p>
                    )}
                    {items.order === 'Đặt giao hàng' && (
                      <p>{`${items.address.streets}, ${items.address.coutry} ,${items.address.city}`}</p>
                    )}
                  </div>
                  <div className="detailOrder_address-phone">
                    <p>Điện thoại</p>
                    <p>{items.address.phone}</p>
                  </div>
                </div>
                <div className="detailOrder_order">
                  <div className="detailOrder_order-title">
                    <p>HÌNH THỨC ĐẶT HÀNG</p>
                  </div>
                  <div className="detailOrder_order-infor">
                    <p>Phương thức đặt hàng</p>
                    {items.order === 'Đặt lấy hàng' && <p>nhận hàng tại cửa hàng</p>}
                    {items.order === 'Đặt giao hàng' && <p>nhận hàng tại nhà</p>}
                  </div>
                  <div className="detailOrder_order-freeship">
                    <p>Phí vận chuyển</p>
                    <p>Miễn phí</p>
                  </div>
                </div>
                <div className="detailOrder_pay">
                  <div className="detailOrder_pay-title">
                    <p>HÌNH THỨC THANH TOÁN</p>
                  </div>
                  <div className="detailOrder_pay-infor">
                    <p>Thanh toán khi nhận hàng</p>
                    <p>Đang chờ xử lý</p>
                  </div>
                </div>
              </div>

              <div className="detailOrder_bottom">
                <div className="detaiOrder_bottom-title">
                  <div className="detaiOrder_bottom-title-left">
                    <span>Sản phẩm</span>
                  </div>
                  <div className="detaiOrder_bottom-title-right">
                    <span>Giá</span>
                    <span>Số lượng</span>
                    <span>Tạm tính</span>
                  </div>
                </div>
                {/* MAP ITEM CART */}
                <div className="detaiOrder_bottom-block-list">
                  {items.product.map((item: CheckOutFeaturesProps, index: any) => (
                    <div className="detaiOrder_bottom-content" key={index}>
                      <div className="detaiOrder_bottom-content-left">
                        <div className="detaiOrder_bottom-adside">
                          <img src={item.product.image} alt="" />
                        </div>
                        <div className="detaiOrder_bottom-infor">
                          <div className="detaiOrder_bottom-length">
                            <span>{index}</span>
                          </div>
                          <div className="detaiOrder_bottom-product">
                            <div className="detaiOrder_bottom-name">
                              <span>Pizza rau củ</span>
                              <span>x{item.quantity}</span>
                            </div>
                            {Object.values(item.product.size).every((e) => e !== '') && (
                              <div className="detaiOrder_bottom-size">
                                <span>{`Kích thước - ${item.product.size.name}`}</span>
                              </div>
                            )}
                            {item.product.soles.length > 0 && (
                              <div className="detaiOrder_bottom-soles">
                                <span>{`Đế - ${item.product.soles}`}</span>
                              </div>
                            )}
                            {Object.values(item.product.more).every((e) => e !== '') && (
                              <div className="detaiOrder_bottom-more">
                                <span>{`Thêm nhân - ${item.product.more.name}`}</span>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="detaiOrder_bottom-content-right">
                        <div className="detaiOrder_bottom-price">
                          <span>
                            {' '}
                            {formatPrice(
                              item.product?.price +
                                item.product?.size?.price +
                                item.product?.more?.price
                            )}
                          </span>
                        </div>
                        <div className="detaiOrder_bottom-quantity">
                          <span>x{item.quantity}</span>
                        </div>
                        <div className="detaiOrder_bottom-provisional">
                          <span>
                            {formatPrice(
                              (item.product?.price +
                                item.product?.size?.price +
                                item.product?.more?.price) *
                                item.quantity
                            )}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="detailOrder_end">
                <div className="detailOrder_btn">
                  <button>
                    <AiOutlineArrowLeft />
                    <span>Quay lại</span>
                  </button>

                  <button>
                    <AiOutlineArrowLeft />
                    <span>Đặt lại đơn hàng</span>
                  </button>
                </div>
                <div className="detailOrder_total">
                  <div className="detailOrder_total-end">
                    <div className="detailOrder_total-top">
                      <div className="detailOrder_total-group">
                        <span>Tạm tính (X1)</span>
                        <span>{formatPrice(items.total)}</span>
                      </div>
                      <div className="detailOrder_total-group">
                        <span>Giảm giá</span>
                        <span>{`- ${formatPrice(items.discount || 0)}`}</span>
                      </div>
                    </div>

                    <div className="detailOrder_total-bottom">
                      <div className="detailOrder_total-group">
                        <span>Tổng tiền</span>
                        <span>{formatPrice(items.total)}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
}
