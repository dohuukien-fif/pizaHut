import * as React from 'react';
import { AiOutlineWarning } from 'react-icons/ai';
import { MdOutlineDeleteSweep } from 'react-icons/md';
import CustomersApi from '../../../api/customersApi';
import OrderApi from '../../../api/OrderApi';
import LoadingFeatures from '../../../component/loadingFeatures';
import Table from '../../features/dashboard/table';
import Completed from './copletedItem';
import OrderItem from './orderItem';
import OrderTab from './orderTab';
import './styles.scss';
export interface OrderFeaturesProps {}

export default function OrderFeatures(props: OrderFeaturesProps) {
  const [indexTab, setIndexTav] = React.useState<number>(0);
  const [data, setData] = React.useState<any[]>();
  const [customers, setCustomers] = React.useState<any[]>();
  const [Loading, setLoading] = React.useState<boolean>(false);
  const [pagination, setPagination] = React.useState<any>({
    page: 1,
    limit: 10,
    totalRow: 10,
  });
  const [filter, setfilter] = React.useState<any>({
    page: 1,
    limit: 10,
  });
  React.useEffect(() => {
    (async () => {
      setLoading(true);
      const res: any = await OrderApi.getParam(filter);
      setData(res.data);
      setPagination(res.pagination);
      console.log(res);
      setLoading(false);
    })();
  }, [filter]);

  const handleChanPage = (newPage: number) => {
    console.log(newPage);
    setfilter((prev: any) => ({
      ...prev,
      page: newPage,
    }));
  };
  React.useEffect(() => {
    (async () => {
      const res: any = await CustomersApi.getAll();
      console.log('[cutomers]', res);
      setCustomers(res);
    })();
  }, []);
  const handleChangeUpdateCompleted = async (value: string) => {
    await OrderApi.update(value);
    window.location.reload();
  };

  const handlePostSales = async (value: any) => {
    const checkUserId: any = customers?.findIndex((e) => e.userId === value.userId);

    const checkUserData: any = customers?.find((e) => e.userId === value.userId);

    if (checkUserId >= 0) {
      const newValueUpdate = {
        userId: value?.userId,
        userName: value?.user?.userName,
        amount: checkUserData?.amount + value?.amount,
        totalOrder: checkUserData?.totalOrder + value?.products?.length,
        address: value?.address,
        status: 'pending',
      };
      await CustomersApi.update(newValueUpdate);
      await OrderApi.delete(value._id);
      window.location.reload();
      return;
    } else {
      const newValuePost = {
        userId: value.userId,
        userName: value?.user?.userName || '',
        amount: value?.amount,
        totalOrder: value.products.length,
        address: value.address,
        status: 'pending',
      };
      await OrderApi.delete(value._id);
      window.location.reload();
      await CustomersApi.setData(newValuePost);
    }
  };

  const handleClearAllOrder = async () => {
    await OrderApi.deleteAll();

    window.location.reload();
  };

  return (
    <div className="orders">
      <div className="orders__swapper">
        {Loading && <LoadingFeatures />}
        <div className="orders__title">
          <div className="order__title--left">
            <p>Order</p>
            <span>{`${data?.length} orders found`}</span>
          </div>
          <div className="order__title--right">
            <button onClick={handleClearAllOrder}>
              <span>Clear OrderAll</span> <MdOutlineDeleteSweep />
            </button>
          </div>
        </div>

        <OrderTab setIndexTab={setIndexTav} indexTab={indexTab} />
        {indexTab === 0 && (
          <div className="orders__table">
            {data?.length === 0 ? (
              <div className="product__none">
                <AiOutlineWarning /> Không có sản phẩm nào
              </div>
            ) : (
              <>
                <div className="orders__table--title">
                  <div className="orders__left">
                    <span>Tracking Id</span>
                    <span>Product</span>
                  </div>
                  <div className="orders__right">
                    <span>Date</span>
                    <span>Amount</span>
                    <span>Payment</span>
                    <span>Status</span>
                    <span>Action</span>
                  </div>
                </div>
                <div className="orders__list">
                  {data?.map((item, index) => (
                    <OrderItem item={item} key={index} onSubmitSales={handlePostSales} />
                  ))}
                </div>
              </>
            )}
          </div>
        )}
        {indexTab === 1 && (
          <div className="orders__table">
            {data?.length === 0 ? (
              <div className="product__none">
                <AiOutlineWarning /> Không có sản phẩm nào
              </div>
            ) : (
              <>
                {data?.filter((e) => e.status === 'Shipping').length === 0 ? (
                  <div className="product__none">
                    <AiOutlineWarning /> Không có đơn hàng nào vận chuyển
                  </div>
                ) : (
                  <>
                    {' '}
                    <div className="orders__table--title">
                      <div className="orders__left">
                        <span>Tracking Id</span>
                        <span>Product</span>
                      </div>
                      <div className="orders__right">
                        <span>Date</span>
                        <span>Amount</span>
                        <span>Payment</span>
                        <span>Status</span>
                        <span>Action</span>
                      </div>
                    </div>
                    <div className="orders__list">
                      {data
                        ?.filter((e) => e.status === 'Shipping')
                        ?.map((item, index) => (
                          <OrderItem item={item} key={index} onSubmitSales={handlePostSales} />
                        ))}
                    </div>
                  </>
                )}
              </>
            )}
          </div>
        )}
        {indexTab === 2 && (
          <div className="orders__table">
            {data?.length === 0 ? (
              <div className="product__none">
                <AiOutlineWarning /> Không có sản phẩm nào
              </div>
            ) : (
              <>
                <div className="orders__table--title">
                  <div className="orders__left">
                    <span>Tracking Id</span>
                    <span>Product</span>
                  </div>
                  <div className="orders__right">
                    <span>Date</span>
                    <span>Amount</span>
                    <span>Payment</span>
                    <span>Status</span>
                    <span>Action</span>
                  </div>
                </div>
                <div className="orders__list">
                  {data?.map((item, index) => (
                    <Completed item={item} onSubmits={handleChangeUpdateCompleted} key={index} />
                  ))}
                </div>
              </>
            )}
          </div>
        )}
        <div className="order__pagination">
          {Array.from({ length: Math.ceil(pagination.totalRow / pagination.limit + 1) }, (v, i) => (
            <>
              {i > 0 && (
                <button
                  className={pagination.page === i ? 'activePagination' : ''}
                  onClick={() => handleChanPage(i)}
                >
                  {i}
                </button>
              )}
            </>
          ))}
        </div>
      </div>
    </div>
  );
}
