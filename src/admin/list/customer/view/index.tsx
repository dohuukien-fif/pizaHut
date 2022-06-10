import * as React from 'react';
import { useParams } from 'react-router-dom';
import OrderApi from '../../../../api/OrderApi';
import usersApi from '../../../../api/usersApis';
import { OrderProps, UserProps } from '../../../../model';
import { formatPrice } from '../../../../utils';
import useCustomers from '../hooks/useCustomers';
import './styles.scss';
export interface ViewCustomersProps {}

export default function ViewCustomers(props: ViewCustomersProps) {
  const [data, setData] = React.useState<UserProps>();
  const [dataOrder, setDataOrder] = React.useState<OrderProps>();
  const { customersId } = useParams();

  console.log('CustomersId', customersId);
  React.useEffect(() => {
    (async () => {
      const res: any = await usersApi.getAll();
      console.log(res);
      console.log('[user]', res.data);
      setData(res.data.find((e: any) => e._id == customersId));
    })();
  }, []);
  React.useEffect(() => {
    (async () => {
      const res: any = await OrderApi.getAll();
      console.log(res);
      console.log('[user]', res.data);
      setDataOrder(res.data.find((e: any) => e.userId == customersId));
    })();
  }, []);

  const { dataCustomers, LoadingCustomers } = useCustomers(customersId);

  console.log(dataCustomers);

  console.log('data', data);
  console.log('dataOrder', dataOrder);

  return (
    <div className="viewCustomers">
      <div className="viewCustomers__swapper">
        <div className="viewCustomers__title">
          <span>Thông tin khách hàng</span>
        </div>

        <div className="viewCustomer__body">
          <div className="viewCustomers__left">
            <div className="viewCustomers__figust">
              <img
                src={
                  data?.image ||
                  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOPJ5dTrQSe3mDwAx13Igby0nTFuGN6ovTyg&usqp=CAU'
                }
                alt=""
              />
            </div>
          </div>
          <div className="viewCustomers__right">
            <div className="viewCustomers__user">
              <div className="viewCustomers__name">
                <span>
                  UserName:<strong>*</strong>
                </span>
                <span>{data?.username || 'thepizzacompany'}</span>
              </div>
              <div className="viewCustomers__product">
                <div className="viewCustomers__telephone">
                  <span>
                    Số điện thoại : <strong>*</strong>
                  </span>
                  <span>{dataCustomers?.address?.phone || 0}</span>
                </div>
                <div className="viewCustomers__address">
                  <span>
                    Địa chỉ :<strong> *</strong>
                  </span>
                  <span>
                    {`${dataCustomers?.address?.streets},${dataCustomers?.address?.coutry},${dataCustomers?.address?.city}` ||
                      ''}
                  </span>
                </div>
                <div className="viewCustomers__amount">
                  <span>
                    Amount :<strong> *</strong>
                  </span>
                  <span>{formatPrice(dataCustomers?.amount || 0)}</span>
                </div>
                <div className="viewCustomers__total">
                  <span>
                    Tổng đơn hàng :<strong> *</strong>
                  </span>
                  <span>{`${dataCustomers?.totalOrder || 0} đơn hàng`}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="viewCustomers__table">
        <div className="viewCustomers__table--top">
          <div className="viewCustomers__table--top--left">
            <span># Code</span>
            <span>Sản phẩm</span>
          </div>
          <div className="viewCustomers__table--top--right">
            <span>Date </span>
            <span>Tạm tính </span>

            <span>Số lượng</span>
            <span>Thành tiền</span>
          </div>
        </div>
        <div className="viewCustomers__list">
          {dataOrder?.products?.map((items: OrderProps, index: number) => {
            return (
              <div className="viewCustomers__item" key={index}>
                <div className="viewCustomers__item--left">
                  <div className="viewCustomers__code">
                    <span>{dataOrder.code || 0}</span>
                  </div>
                  <div className="viewCustomers__products">
                    <img src={items.product.image} alt="" />
                    <span>{items.product.name}</span>
                  </div>
                </div>
                <div className="viewCustomers__item--right">
                  <div className="viewCustomers__date">
                    <span>{dataOrder.day || 0}</span>
                    <span>{dataOrder.time || 0}</span>
                  </div>

                  <div className="viewCustomer__price">
                    <span>{formatPrice(items.product.price * items.quantity || 0)}</span>
                  </div>
                  <div className="viewCustomer__quantity">
                    <span>{items.quantity || 0}</span>
                  </div>
                  <div className="viewCustomer__amount">
                    <span>{formatPrice(dataOrder.amount || 0)}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
