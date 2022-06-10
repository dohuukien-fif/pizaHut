import * as React from 'react';

import CustomersApi from '../../../../api/customersApi';

export interface useEditProps {}

export default function useCustomers(ProductId: any) {
  const [dataCustomers, setproduct] = React.useState<any>([]);
  const [LoadingCustomers, setLoading] = React.useState<boolean>(true);
  React.useEffect(() => {
    setLoading(true);
    const setdaSearchApi = async () => {
      const res: any = await CustomersApi.getById(ProductId);

      console.log('resssssssssssssssss', res);

      // const setdata = res.filter((items: any) =>
      //   items.categories
      //     ?.toLowerCase()
      //     .includes(data.replace('+', ' ')?.split('=')[1]?.toLowerCase())
      // );

      setproduct(res);
      setLoading(false);
    };
    setdaSearchApi();
  }, [ProductId]);

  return {
    dataCustomers,
    LoadingCustomers,
  };
}
