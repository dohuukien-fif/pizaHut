import * as React from 'react';
import OrderApi from '../../../api/OrderApi';
import { formatPrice } from '../../../utils';
import './styles.scss';

import { OrderProps } from '../../../model';
import { useNavigate } from 'react-router-dom';
import LoadingFeatures from '../../../component/loadingFeatures';
export interface DeliveryFeaturesProps {}

export default function DeliveryFeatures(props: DeliveryFeaturesProps) {
  const [data, setData] = React.useState<OrderProps[]>();
  const [Loading, setLoading] = React.useState<boolean>(false);

  const navigete = useNavigate();

  const [pagination, setPagination] = React.useState<any>({
    page: 1,
    limit: 10,
    totalRow: 1,
  });

  const [filter, setfilter] = React.useState<any>({
    page: 1,
    limit: 10,
  });

  React.useEffect(() => {
    (async () => {
      setLoading(true);
      const res: any = await OrderApi.getParamDelivery(filter);
      console.log(res);

      setData(res.data);
      setPagination(res.pagination);
      setLoading(false);
    })();
  }, [filter]);
  console.log(data);
  const handleChanPage = (newPage: number) => {
    console.log(newPage);
    setfilter((prev: any) => ({
      ...prev,
      page: newPage,
    }));
  };
  const handleIdOrder = async (id: string) => {
    navigete(`/admin/delivery/${id}`);
  };
  return (
    <div className="delivery">
      <div className="delivery__swapper">
        {Loading && <LoadingFeatures />}
        <div className="delivery__title">
          <span>Delivery</span>
        </div>
        <div className="delivery__table">
          {data?.length === 0 ? (
            <div>khonng</div>
          ) : (
            <>
              {' '}
              <div className="delivery__top">
                <span>STT</span>
                <span>User</span>

                <span>Quatity</span>
                <span>Price</span>
                <span>Status</span>
                <span>Action</span>
              </div>
              <div className="delivery__body">
                {data?.map((item: any, idex: any) => (
                  <>
                    {item.products.map((items: OrderProps, idexs: number) => (
                      <div className="delivery__item" key={idex}>
                        <div className="delivery__stt">
                          <span>{idex}</span>
                        </div>
                        <div className="delivery__user">
                          <span>{item.user.userName}</span>
                        </div>

                        <div className="delivery__quatity">
                          <span>{items.quantity}</span>
                        </div>
                        <div className="delivery__price">
                          <span>{formatPrice(item.amount)}</span>
                        </div>
                        <div className="delivery__status">
                          <span>{item.status}</span>
                        </div>
                        <div className="delivery__action">
                          <button onClick={() => handleIdOrder(item._id)}>
                            <span>View</span>
                          </button>
                        </div>
                      </div>
                    ))}
                  </>
                ))}
              </div>
            </>
          )}
        </div>
        <div className="delivery__pagination">
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
