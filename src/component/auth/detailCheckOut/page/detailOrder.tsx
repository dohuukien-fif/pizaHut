import * as React from 'react';
import { CheckOutFeaturesProps } from './interface';
import './detaiFeatures.scss';
import { formatPrice } from '../../../../utils';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { checkProducts, cartItemTotal } from './../../../cart/cartSelected';
import { deleteCode } from './../../../../component/checkOut/checkOutRedux';
import { useNavigate } from 'react-router-dom';
import { updateProduct } from '../../../../app/cartRedux';
import OrderApi from '../../../../api/OrderApi';
import { BiErrorCircle } from 'react-icons/bi';
import { RiDeleteBin5Line } from 'react-icons/ri';
export interface DetailOrderProps {}

export default function DetailOrder(props: any) {
  const checkProductss = useSelector(checkProducts);
  const dispatch = useDispatch();
  const navigete = useNavigate();
  console.log('checkProductss', checkProductss);
  const [dataOrder, setDataOrder] = React.useState<any[]>([]);

  const dates = new Date();
  const dataday = `${dates.getDate()}/${dates.getMonth() + 1}/${dates.getFullYear()}`;
  const datahour = `${dates.getHours()}:${dates.getMinutes() + 1}:${dates.getSeconds()}`;

  const setProduct = useSelector((state: any) => state.checkout.updateCart);
  const setcheckout = useSelector((state: any) => state.checkout.products);
  const setCart = useSelector((state: any) => state.cart.products);
  console.log('[setProduct]', setProduct);
  console.log('[setcheckout]', setcheckout);
  console.log('[setCart]', setCart);
  const handleClickUpdateCart = async (product: any, code: number, id: string) => {
    console.log(code);
    console.log(code);
    const actionCart = await updateProduct(product);

    dispatch(actionCart);

    const action = await deleteCode(code);

    dispatch(action);

    await OrderApi.delete(id);
    console.log(code);
  };

  const handleClickGoBack = () => {
    navigete(-1);
  };

  //fetchApi   Order

  React.useEffect(() => {
    (async () => {
      const reponse = await OrderApi.getAll();

      setDataOrder(reponse.data);

      console.log(reponse.data);
    })();
  }, []);
  const checkCategory = ['piza', 'newDish', 'mixed', 'Seafood', 'Stuffing', 'Traditional'];

  const handleDeleteOrder = async (code: number, id: string) => {
    const action = deleteCode(code);

    dispatch(action);

    await OrderApi.delete(id);
  };
  return (
    <>
      <div className="detailOrder">
        {checkProductss.length === 0 && (
          <h3>
            {' '}
            <BiErrorCircle />
            Kh??ng c?? ????n h??ng
          </h3>
        )}
        {checkProductss?.length > 0 &&
          checkProductss?.map((items: any, index: number) => (
            <div className="detailOrder_item" key={items?.code}>
              <div className="detailOrder_title">
                <h3>Chi ti???t ????n h??ng #{items?.code}</h3>

                <div className="detailOrder_delete">
                  <button onClick={() => handleDeleteOrder(items.code, items._id)}>
                    <RiDeleteBin5Line />
                  </button>
                </div>
              </div>
              <div className="detailOrder_confim">
                {dataOrder.find((e) => e.code === items.code)?.status === 'pending' && (
                  <span>Ch??? x??c nh???n</span>
                )}
                {dataOrder.find((e) => e.code === items.code)?.status === 'Success' && (
                  <span>Th??nh c??ng</span>
                )}
                {dataOrder.find((e) => e.code === items.code)?.status === 'Shipping' && (
                  <span>??ang giao </span>
                )}
                {dataOrder.find((e) => e.code === items.code)?.status === 'Reful' && (
                  <span>????n h???y</span>
                )}

                <span>
                  Ng??y ?????t h??ng: {items?.day} {items?.time}{' '}
                  {items?.time.split(':')[0] > 12 ? 'PM' : 'AM'}
                </span>
              </div>
              <div className="detailOrder_top">
                <div className="detailOrder_address">
                  <div className="detailOrder_address-title">
                    <p>?????A CH??? NH???N H??NG</p>
                  </div>
                  <div className="detailOrder_address-infor">
                    <p>?????a ch???</p>
                    {items.order === '?????t l???y h??ng' && (
                      <p>506 - 510 Nguy???n th??? minh khai ,Ph?????ng 2 ,Qu???n 3 ,HCM</p>
                    )}
                    {items.order === '?????t giao h??ng' && (
                      <p>{`${items.address.streets}, ${items.address.coutry} ,${items.address.city}`}</p>
                    )}
                  </div>
                  <div className="detailOrder_address-phone">
                    <p>??i???n tho???i</p>
                    <p>{items.address.phone}</p>
                  </div>
                </div>
                <div className="detailOrder_order">
                  <div className="detailOrder_order-title">
                    <p>H??NH TH???C ?????T H??NG</p>
                  </div>
                  <div className="detailOrder_order-infor">
                    <p>Ph????ng th???c ?????t h??ng</p>
                    {items.order === '?????t l???y h??ng' && <p>nh???n h??ng t???i c???a h??ng</p>}
                    {items.order === '?????t giao h??ng' && <p>nh???n h??ng t???i nh??</p>}
                  </div>
                  <div className="detailOrder_order-freeship">
                    <p>Ph?? v???n chuy???n</p>
                    <p>Mi???n ph??</p>
                  </div>
                </div>
                <div className="detailOrder_pay">
                  <div className="detailOrder_pay-title">
                    <p>H??NH TH???C THANH TO??N</p>
                  </div>
                  <div className="detailOrder_pay-infor">
                    <p>Thanh to??n khi nh???n h??ng</p>

                    {dataOrder.find((e) => e.code === 1002)?.status === 'pending' && (
                      <p>??ang ch??? x??? l??...</p>
                    )}
                    {dataOrder.find((e) => e.code === 1002)?.status === 'Success' && (
                      <p>??ang ch??? v???n chuy???n...</p>
                    )}
                    {dataOrder.find((e) => e.code === 1002)?.status === 'Shipping' && (
                      <p>??ang giao h??ng...</p>
                    )}
                    {dataOrder.find((e) => e.code === 1002)?.status === 'Reful' && (
                      <p>????n h??ng ???? h???y...</p>
                    )}
                  </div>
                </div>
              </div>

              <div className="detailOrder_bottom">
                <div className="detaiOrder_bottom-title">
                  <div className="detaiOrder_bottom-title-left">
                    <span>S???n ph???m</span>
                  </div>
                  <div className="detaiOrder_bottom-title-right">
                    <span>Gi??</span>
                    <span>S??? l?????ng</span>
                    <span>T???m t??nh</span>
                  </div>
                </div>
                {/* MAP ITEM CART */}
                <div className="detaiOrder_bottom-block-list">
                  {items?.products?.map((item: CheckOutFeaturesProps, index: any) => (
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
                              <span>{item.product.name}</span>
                              <span>x{item.quantity}</span>
                            </div>
                            {checkCategory.includes(item.product.category) && (
                              <>
                                {' '}
                                {Object.values(item.product.size).every((e) => e !== '') && (
                                  <div className="detaiOrder_bottom-size">
                                    <span>{`K??ch th?????c - ${item.product.size.name}`}</span>
                                  </div>
                                )}
                                {item.product.soles.length > 0 && (
                                  <div className="detaiOrder_bottom-soles">
                                    <span>{`????? - ${item.product.soles}`}</span>
                                  </div>
                                )}
                                {Object.values(item.product.more).every((e) => e !== '') && (
                                  <div className="detaiOrder_bottom-more">
                                    <span>{`Th??m nh??n - ${item.product.more.name}`}</span>
                                  </div>
                                )}
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="detaiOrder_bottom-content-right">
                        <div className="detaiOrder_bottom-price">
                          <span> {formatPrice(item.product?.price)}</span>

                          {Object.keys(item.product?.size).length > 0 && (
                            <>
                              <span>{`+ ${formatPrice(item.product?.size.price)}`}</span>
                            </>
                          )}
                          {Object.keys(item.product?.more).length > 0 && (
                            <>
                              <span>{`+ ${formatPrice(item.product?.more.price)}`}</span>
                            </>
                          )}
                        </div>
                        <div className="detaiOrder_bottom-quantity">
                          <span>x{item.quantity}</span>
                        </div>
                        <div className="detaiOrder_bottom-provisional">
                          <span>
                            {formatPrice(
                              item.product?.price +
                                Number(
                                  Object.keys(item.product?.size).length > 0
                                    ? item.product?.size?.price
                                    : 0
                                ) +
                                Number(
                                  Object.keys(item.product?.more).length > 0
                                    ? item.product?.more?.price
                                    : 0
                                ) *
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
                  <button onClick={handleClickGoBack}>
                    <AiOutlineArrowLeft />
                    <span>Quay l???i</span>
                  </button>

                  <button
                    onClick={() => handleClickUpdateCart(items?.products, items.code, items._id)}
                  >
                    <AiOutlineArrowLeft />
                    <span>?????t l???i ????n h??ng</span>
                  </button>
                </div>
                <div className="detailOrder_total">
                  <div className="detailOrder_total-end">
                    <div className="detailOrder_total-top">
                      <div className="detailOrder_total-group">
                        <span>T???m t??nh (X1)</span>
                        <span>{formatPrice(items.amount)}</span>
                      </div>
                      <div className="detailOrder_total-group">
                        <span>Gi???m gi??</span>
                        <span>{`- ${formatPrice(items.discount || 0)}`}</span>
                      </div>
                    </div>

                    <div className="detailOrder_total-bottom">
                      <div className="detailOrder_total-group">
                        <span>T???ng ti???n</span>
                        <span>{formatPrice(items.amount)}</span>
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
