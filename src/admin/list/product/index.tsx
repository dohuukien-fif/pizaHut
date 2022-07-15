import * as React from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { RiDeleteBin5Line } from 'react-icons/ri';
import { Link, useNavigate } from 'react-router-dom';
import ProductApi from '../../../api/productApi';
import LoadingFeatures from '../../../component/loadingFeatures';
import LoadingList from '../../../component/loadingFeatures/loadingList';
import Filter from '../../component/filter';
import ProductItem from './productItem';
import './styles.scss';
export interface ProductFeaturesProps {}

export default function ProductFeatures(props: ProductFeaturesProps) {
  const [dataProduct, setdataProduct] = React.useState<any>([]);
  const [filter, setfilter] = React.useState({});
  const [loading, setloading] = React.useState(false);
  const [pagination, setPagination] = React.useState<any>({
    page: 1,
    limit: 10,
    totalRow: 1,
  });
  const [filters, setfilters] = React.useState<any>({
    page: 1,
    limit: 10,
    _order: 'desc',
    _sort: 'price',
  });
  React.useEffect(() => {
    setloading(true);
    const fetchApi = async () => {
      const res: any = await ProductApi.getParam(filters);

      console.log(res);
      setdataProduct(res.data);
      setPagination(res.pagination);
      setloading(false);
    };
    fetchApi();
  }, [filters]);

  const handleFilter = (value: any) => {
    console.log(value);
    setfilters((prev: any) => ({
      ...prev,
      ...value,
    }));
  };
  console.log(filters);
  const navigete = useNavigate();
  const handleChanPage = (newPage: number) => {
    console.log(newPage);
    setfilters((prev: any) => ({
      ...prev,
      page: newPage,
    }));
  };

  const handleDeleteProduct = async (id: any) => {
    await ProductApi.remove(id);

    window.location.reload();
  };
  return (
    <div className="product">
      <div className="product__title">
        <div className="product__title--left">
          <span>Product</span>
          <span>{`${pagination.totalRow}  Sản  phẩm`}</span>
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
              <div className="product__talet--title--left">
                <span>Id</span>
                <span>Product</span>
              </div>
              <div className="product__talet--title--right">
                <span>Price</span>
                <span>Action</span>
              </div>
            </div>
            <div className="product__table--list">
              {dataProduct.map((item: any, index: number) => (
                <ProductItem item={item} key={index} getDelete={handleDeleteProduct} />
              ))}
            </div>
          </div>
        )}
      </div>
      <div className="products__pagination">
        {Array.from({ length: Math.ceil(pagination.totalRow / pagination.limit + 1) }, (v, i) => (
          <>
            {i > 0 && (
              <button
                className={pagination.page === i ? 'activePagination' : ''}
                onClick={() => handleChanPage(i)}
              >
                {i}
              </button>
            )}
          </>
        ))}
      </div>
    </div>
  );
}
