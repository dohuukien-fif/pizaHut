import * as React from 'react';
import { dataLisst } from '../../../../component/hooks';

export interface useSearchDataProps {}

export default function useSearchData(data: string) {
  const [dataSearch, setproduct] = React.useState<any>(dataLisst);
  const [LoadingSearch, setLoading] = React.useState<boolean>(true);
  React.useEffect(() => {
    const setdaSearchApi = () => {
      return new Promise<boolean>((resolve) => {
        setTimeout(() => {
          const setdata = dataLisst.filter((items: any) =>
            items.categories
              ?.toLowerCase()
              .includes(data.replace('+', ' ')?.split('=')[1]?.toLowerCase())
          );
          resolve(true);
          setproduct(setdata);
          setLoading(false);
        }, 2000);
      });
    };
    setdaSearchApi();
  }, [data]);

  return {
    dataSearch,
    LoadingSearch,
  };
}
