import * as React from 'react';
import OrderApi from '../../../../../api/OrderApi';

export interface useEditProps {}

export default function useEdit(ProductId: any) {
  const [data, setproduct] = React.useState<any>([]);
  const [LoadingSearch, setLoading] = React.useState<boolean>(true);
  React.useEffect(() => {
    setLoading(true);
    const setdaSearchApi = async () => {
      const res: any = await OrderApi.getId(ProductId);

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
    data,
    LoadingSearch,
  };
}
