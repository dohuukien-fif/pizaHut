import * as React from 'react';
import { formatPrice } from '../../../../utils';
import { cartFeaturesProps } from '../../page/interface';
import { RiDeleteBin6Fill } from 'react-icons/ri';
import { GrAdd } from 'react-icons/gr';
import { GoDash } from 'react-icons/go';
import './styles.scss';

import { removeProduct, setquantity } from '../../../../app/cartRedux';
import { useDispatch } from 'react-redux';
export interface CartItemProps {
  items: any;
}

function CartItem({ items }: CartItemProps) {
  const { product, quantity } = items;

  console.log(product, quantity);
  const [quatitys, setquatity] = React.useState(quantity === 0 ? 1 : quantity);
  const dispatch = useDispatch();

  React.useEffect(() => {
    const hanndlequanntity = () => {
      const action = setquantity({
        id: items.id,
        quantity: quatitys || 1,
      });
      dispatch(action);
    };
    hanndlequanntity();
  }, [quatitys, dispatch]);
  const handleDeleteCart = (id: number) => {
    const action = removeProduct(id);
    dispatch(action);
  };
  const checkCategory = ['piza', 'newDish', 'mixed', 'Seafood', 'Stuffing', 'Traditional'];

  console.log(product.price);
  return (
    <div className="cart_item">
      <div className="cart_blocks">
        <div className="cart_left">
          <div className="cart_aside">
            <img src={product.image} alt={product.name} />
          </div>

          <div className="cart_add">
            <div className="cart_name">
              <span>{product.name}</span>
            </div>
            {Object.keys(product.size).length > 0 &&
              Object.values(product.size).every((e) => e !== '') && (
                <div className="cart_sizeName">
                  <span>{`Kích thước - ${product.size.name}`}</span>
                </div>
              )}
            {product.soles.length > 0 && !product.soles.includes(null) && (
              <div className="cart_soles">
                <span>{`Đế - ${product.soles}`}</span>
              </div>
            )}
            {Object.keys(product.more).length > 0 &&
              Object.values(product.more).every((e) => e !== '') && (
                <div className="cart_more">
                  <span>{`Thêm nhân - ${product.more.name}`}</span>
                </div>
              )}
          </div>
        </div>
        <div className="cart_right">
          <div className="right_block">
            <div className="cart_quantity">
              <button onClick={() => setquatity(quatitys ? quatitys - 1 : 1)}>
                <GoDash />
              </button>
              <input
                type="number"
                value={quatitys}
                onChange={(e) => setquatity(Number.parseFloat(e.target.value))}
              />
              <button onClick={() => setquatity(quatitys ? quatitys + 1 : 1)}>
                <GrAdd />
              </button>
            </div>
            <div className="cart_price">
              {checkCategory.includes(items.product.category) ? (
                <span>
                  {formatPrice(
                    (Number(items.product.price) +
                      (Object.keys(items.product.size).length > 0 && items.product.size.price) +
                      (Object.keys(items.product.more).length > 0 && items.product.more.price)) *
                      items.quantity
                  )}
                </span>
              ) : (
                <span>{formatPrice(Number(items.product.price) + items.quantity)}</span>
              )}
            </div>
            <div className="cart_delete">
              <RiDeleteBin6Fill onClick={() => handleDeleteCart(items.id)} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default React.memo(CartItem);
