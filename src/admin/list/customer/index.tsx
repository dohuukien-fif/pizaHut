import * as React from 'react';
import { FiSearch } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import CustomersApi from '../../../api/customersApi';
import LoadingFeatures from '../../../component/loadingFeatures';
import { formatPrice } from '../../../utils';
import useSearchCustomers from './hooks/useSearchCustomers';
import { CustomersItemProps } from './interface';
import './styles.scss';

export interface CustomersProps {}

export default function CustomerFeatures(props: CustomersProps) {
  const data: any[] = [
    {
      id: 1,
      name: 'huu  kien',
      email: 'huukien009@gmail.com',
      order: 2,
      spend: 456789,
    },
    {
      id: 1,
      name: 'tan  kien',
      email: 'huukien009@gmail.com',
      order: 7,
      spend: 456789,
    },
    {
      id: 1,
      name: 'quan  kien',
      email: 'huukien009@gmail.com',
      order: 6,
      spend: 456789,
    },
    {
      id: 1,
      name: 'sam  kien',
      email: 'huukien009@gmail.com',
      order: 5,
      spend: 456789,
    },
  ];
  const navigete = useNavigate();
  const [income, setIncome] = React.useState<any[]>([]);
  const [SearhTerm, setSearchTerm] = React.useState<string>('');
  const [dataSearchs, setDataSearch] = React.useState<CustomersItemProps[]>(data);
  const debount = React.useRef<any>(null);
  const { dataCustomers, LoadingCustomers, setFilter, pagination } = useSearchCustomers(SearhTerm);

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

  const handleChanPage = (newPage: number) => {
    console.log(newPage);
    setFilter((prev: any) => ({
      ...prev,
      page: newPage,
    }));
  };
  // const sortTotalOrder = data.sort((a, b) => b.order - a.order);
  // const dataSearch = data.filter((e) =>
  //   e.name.toLocaleLowerCase().includes(SearhTerm.toLocaleLowerCase())
  // );

  const handleClickNavigeteCustomers = (UserId: string) => {
    navigete(`/admin/Customers/${UserId}`);
  };
  return (
    <div className="customers">
      <div className="customers__swapper">
        <div className="customers__title">
          <span>CUSTOMERS</span>
        </div>
        <div className="customers__search">
          <button>
            <FiSearch />
          </button>
          <input type="text" placeholder="Search name..." onChange={onChangeSearch} />
        </div>
        {LoadingCustomers ? (
          <LoadingFeatures />
        ) : (
          <div className="customers__list">
            <div className="customers__table--top">
              <span>STT</span>
              <span>User</span>

              <span>Total Orders</span>
              <span>Total Spend</span>
              <span>Action</span>
            </div>
            <div className="customers__table--body">
              {dataCustomers
                ?.sort((a, b) => b.totalOrder - a.totalOrder)
                ?.map((items, index) => (
                  <div className="customers__table--item" key={index}>
                    <div className="customers__table--stt">
                      <span>{index}</span>
                    </div>
                    <div className="customers__table--user">
                      <span>{items.userName}</span>
                    </div>
                    {/* <div className="customers__table--email">
                    <span>{items.email}</span>
                  </div> */}
                    <div className="customers__table--totalOder">
                      <span>{items.totalOrder}</span>
                    </div>
                    <div className="customers__table--totalSpend">
                      <span>{formatPrice(items.amount)}</span>
                    </div>
                    <div className="customers__table--action">
                      <button onClick={() => handleClickNavigeteCustomers(items.userId)}>
                        View
                      </button>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        )}

        <div className="customers__pagination">
          {Array.from(
            { length: Math.ceil(pagination?.totalRow || 0 / pagination?.limit || 0 + 1) },
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
