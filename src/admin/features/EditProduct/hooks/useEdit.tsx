import * as React from 'react';
import { dataLisst } from '../../../../component/hooks';
import ProductApi from './../../../../api/productApi';
export interface useEditProps {}

export default function useEdit(ProductId: number) {
  const [dataSearch, setproduct] = React.useState<any>([]);
  const [LoadingSearch, setLoading] = React.useState<boolean>(true);
  React.useEffect(() => {
    setLoading(true);
    const setdaSearchApi = async () => {
      const res: any = await ProductApi.getById(ProductId);

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
    dataSearch,
    LoadingSearch,
  };
}
