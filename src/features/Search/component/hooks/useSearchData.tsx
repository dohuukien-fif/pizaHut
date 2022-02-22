import * as React from 'react';
import { dataLisst } from '../../../../component/hooks';
import ProductApi from './../../../../api/productApi';
export interface useSearchDataProps {}

export default function useSearchData(data: any) {
  const [dataSearch, setproduct] = React.useState<any>([]);
  const [LoadingSearch, setLoading] = React.useState<boolean>(true);
  React.useEffect(() => {
    setLoading(true);
    const setdaSearchApi = async () => {
      const res: any = await ProductApi.get();
      const newRess = await res.filter((items: any) =>
        items.category
          ?.toLowerCase()
          .includes(data.replace('+', ' ')?.split('=')[1].trim().toLowerCase())
      );

      console.log('resssssssssssssssss', newRess);

      // const setdata = res.filter((items: any) =>
      //   items.categories
      //     ?.toLowerCase()
      //     .includes(data.replace('+', ' ')?.split('=')[1]?.toLowerCase())
      // );

      setproduct(newRess);
      setLoading(false);
    };
    setdaSearchApi();
  }, [data]);

  return {
    dataSearch,
    LoadingSearch,
  };
}
