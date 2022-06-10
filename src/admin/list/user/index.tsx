import * as React from 'react';
import { FiSearch } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import CustomersApi from '../../../api/customersApi';
import usersApi from '../../../api/usersApis';
import LoadingFeatures from '../../../component/loadingFeatures';
import { UserProps } from '../../../model';
import useSearchCustomers from './hooks/useSearchUsers';
import './styles.scss';
export interface UserFeaturesProps {}

export default function UserFeatures(props: UserFeaturesProps) {
  const [data, setData] = React.useState<any[]>([]);
  const [customers, setCustomers] = React.useState<any[]>([]);
  const [isDisabled, setIsDisabled] = React.useState<Array<string>>([]);
  // const [pagination, setPagination] = React.useState<any>({
  //   page: 1,
  //   limit: 10,
  //   totalRow: 1,
  // });
  // const [filter, setfilter] = React.useState<any>({
  //   page: 1,
  //   limit: 10,
  // });
  const [SearhTerm, setSearchTerm] = React.useState<string>('');

  const debount = React.useRef<any>(null);
  const viewClick = React.useRef();
  const onChangeSearch = (e: any) => {
    const { value } = e.target;

    if (debount.current) {
      clearTimeout(debount.current);
    }

    debount.current = setTimeout(() => {
      setSearchTerm(value);
      console.log(value);
    }, 1000);
  };

  const navigete = useNavigate();
  const { dataCustomers, LoadingCustomers, setFilter, pagination } = useSearchCustomers(SearhTerm);

  // React.useEffect(() => {
  //   (async () => {
  //     const res: any = await usersApi.getParam(filter);
  //     console.log(res);
  //     console.log('[user]', res.data);
  //     setData(res.data);
  //     setPagination(res.pagination);
  //   })();
  // }, [filter]);
  React.useEffect(() => {
    (async () => {
      const res: any = await CustomersApi.getAll();
      console.log(res.data);
      setCustomers(res.data);
      setIsDisabled(res.data.map((e: any) => e.userId));
    })();
  }, []);

  const handleChanPage = (newPage: number) => {
    console.log(newPage);
    setFilter((prev: any) => ({
      ...prev,
      page: newPage,
    }));
  };

  const handleClickOderId = (UserId: string) => {
    if (isDisabled.includes(UserId)) {
      navigete(`/admin/Customers/${UserId}`);
      return;
    }

    return;
  };

  return (
    <div className="user">
      <div className="user__swapper">
        <div className="user__search">
          <button>
            <FiSearch />
          </button>
          <input type="text" placeholder="Search name..." onChange={onChangeSearch} />
        </div>
        <div className="user__title">
          <span>USER</span>
        </div>
        {LoadingCustomers ? (
          <LoadingFeatures />
        ) : (
          <>
            {' '}
            {dataCustomers?.length === 0 ? (
              <h1>Không có thông tin tìm kiếm</h1>
            ) : (
              <div className="user__list">
                <div className="user__table--top">
                  <span>STT</span>
                  <span>User</span>

                  <span>Status</span>
                </div>
                <div className="user__table--body">
                  {dataCustomers?.map((items: UserProps, index: number) => (
                    <div className="user__table--item" key={index}>
                      <div className="user__table--stt">
                        <span>{items._id}</span>
                      </div>
                      <div className="user__table--user">
                        <img
                          src={
                            items.image ||
                            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxsIVGXUz77jSd-Zgau2ZqRpL_STVm4gbxWQ&usqp=CAU'
                          }
                          alt=""
                        />
                        <span>{items.username}</span>
                      </div>
                      {/* <div className="user__table--email">
                <span>{items.email}</span>
              </div> */}
                      <div className="user__table--status">
                        <button
                          className={!isDisabled.includes(items._id) ? 'aciveView' : ''}
                          disabled={!isDisabled.includes(items._id)}
                          onClick={() => handleClickOderId(items._id)}
                        >
                          View
                        </button>
                        <span>active</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </>
        )}

        <div className="user__pagination">
          {Array.from(
            { length: Math.ceil(pagination?.totalRow / pagination?.limit + 1) },
            (v, i) => (
              <>
                {i > 0 && (
                  <button
                    className={pagination?.page === i ? 'activePagination' : ''}
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
  );
}
