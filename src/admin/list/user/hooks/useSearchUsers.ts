import * as React from 'react';

import CustomersApi from '../../../../api/customersApi';
import usersApi from '../../../../api/usersApis';

export interface useEditProps {}

export default function useSearchCustomers(data: any) {
  const [dataCustomers, setproduct] = React.useState<any[]>([]);
  const [LoadingCustomers, setLoading] = React.useState<boolean>(true);
  const [pagination, setPagination] = React.useState<any>({
    page: 1,
    limit: 10,
    totalRow: 1,
  });

  const [filter, setFilter] = React.useState<any>({
    page: 1,
    limit: 10,
  });

  console.log(filter);
  console.log(pagination);

  console.log(data);
  React.useEffect(() => {
    setLoading(true);
    const setdaSearchApi = async () => {
      const res: any = await usersApi.searchData({ ...filter, q: data });

      console.log('resssssssssssssssss', res);

      // const setdata = res.filter((items: any) =>
      //   items.categories
      //     ?.toLowerCase()
      //     .includes(data.replace('+', ' ')?.split('=')[1]?.toLowerCase())
      // );
      setPagination(res.pagination);
      setproduct(res.data);
      setLoading(false);
    };
    setdaSearchApi();
  }, [filter, data]);

  return {
    pagination,
    dataCustomers,
    LoadingCustomers,
    setFilter,
  };
}
