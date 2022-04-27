import * as React from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { RiDeleteBin5Line } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import ProductApi from '../../../api/productApi';
import LoadingFeatures from '../../../component/loadingFeatures';
import Filter from '../../component/filter';
import ProductItem from './productItem';
import './styles.scss';
export interface ProductFeaturesProps {}

export default function ProductFeatures(props: ProductFeaturesProps) {
  const [dataProduct, setdataProduct] = React.useState<any>([]);
  const [filter, setfilter] = React.useState({});
  const [loading, setloading] = React.useState(false);
  React.useEffect(() => {
    setloading(true);
    const fetchApi = async () => {
      const res = await ProductApi.getAll(filter);

      setdataProduct(res);
      setloading(false);
    };
    fetchApi();
  }, [filter]);

  const handleFilter = (value: any) => {
    console.log(value);
    setfilter((prev) => ({
      ...prev,
      ...value,
    }));
  };

  return (
    <div className="product">
      <div className="product__title">
        <div className="product__title--left">
          <span>Product</span>
        </div>
        <div className="product__title--right">
          <Link to="/admin/newProduct">
            <button>
              new Product <AiOutlineArrowRight />
            </button>
          </Link>
        </div>
      </div>
      <div className="product__body">
        <div className="product__filter">
          <Filter onChanges={handleFilter} />
        </div>
        {loading ? (
          <LoadingFeatures />
        ) : (
          <div className="product__table">
            <div className="product__talet--title">
              <span>Id</span>
              <span>Product</span>
              <span>Price</span>
              <span>Action</span>
            </div>
            <div className="product__table--list">
              {dataProduct.map((item: any, index: number) => (
                <ProductItem item={item} index={index} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
