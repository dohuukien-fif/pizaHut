import * as React from 'react';
import { AiOutlineShoppingCart, AiOutlineWarning } from 'react-icons/ai';
import { BiChevronUp } from 'react-icons/bi';
import { FaRegUser } from 'react-icons/fa';
import { MdAccountBalanceWallet } from 'react-icons/md';
import { RiMoneyDollarCircleLine } from 'react-icons/ri';
import CustomersApi from '../../../api/customersApi';
import OrderApi from '../../../api/OrderApi';
import usersApi from '../../../api/usersApis';
import DashboardTop from './dashboardTop';
import './styles.scss';
import Table from './table';
export interface DashBoardProps {}

export default function DashBoard(props: DashBoardProps) {
  const [data, setData] = React.useState<any[]>();
  const [user, setUser] = React.useState<any[]>();
  const [income, setIncome] = React.useState<any[]>();
  const [pagination, setPagination] = React.useState<any>({
    page: 1,
    limit: 10,
    totalRow: 1,
  });
  const [filters, setfilters] = React.useState<any>({
    page: 1,
    limit: 10,
  });
  React.useEffect(() => {
    (async () => {
      const res: any = await OrderApi.getParam(filters);
      setData(res.data);
      setPagination(res.pagination);
      console.log(res.data);
    })();
  }, [filters]);
  const handleChanPage = (newPage: number) => {
    console.log(newPage);
    setfilters((prev: any) => ({
      ...prev,
      page: newPage,
    }));
  };
  React.useEffect(() => {
    (async () => {
      const res: any = await usersApi.getAll();
      console.log('[user]', res);
      setUser(res.data);
    })();
  }, []);
  React.useEffect(() => {
    (async () => {
      const res: any = await CustomersApi.getAll();
      console.log('[user]', res);
      setIncome(res?.data.reduce((total: number, item: any) => total + item.amount || 0, 0));
    })();
  }, []);
  console.log(income);

  const totalOrder = data?.reduce((total, item) => total + Number(item.amount), 0);
  console.log(totalOrder, data);
  return (
    <div className="dashboard">
      <DashboardTop user={user} data={data} income={income} totalOrder={totalOrder} />
      <div className="dashboard__body">
        <div className="dashboard__body--swapper">
          <div className="dashboard__body--title">
            <span>Latest transactions</span>
          </div>
          {data?.length === 0 ? (
            <div className="dashboard__none">
              <AiOutlineWarning /> Không có sản phẩm nào
            </div>
          ) : (
            <>
              {' '}
              <div className="dashboard__tables--title">
                <div className="dashboard__tables--left">
                  <span>Tracking Id</span>
                  <span>Product</span>
                </div>
                <div className="dashboard__tables--right">
                  <span>Date</span>
                  <span>Amount</span>
                  <span>Payment</span>
                  <span>status</span>
                </div>
              </div>
              <div className="dashboard__table--list">
                {data?.map((item: any, index: number) => (
                  <Table item={item} key={index} />
                ))}
              </div>
            </>
          )}
          <div className="dashboard__pagination">
            {Array.from(
              { length: Math.ceil(pagination.totalRow / pagination.limit + 1) },
              (v, i) => (
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
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
