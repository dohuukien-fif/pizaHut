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
      const res: any = await ProductApi.searchData(
        data.replace('+', ' ')?.split('=')[1].trim().toLowerCase()
      );

      setproduct(res.data);
      setLoading(false);
    };
    setdaSearchApi();
  }, [data]);

  return {
    dataSearch,
    LoadingSearch,
  };
}
