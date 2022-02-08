import * as React from 'react';
import { formatPrice } from '../../../../utils';
import { cartFeaturesProps } from '../../page/interface';
import { RiDeleteBin6Fill } from 'react-icons/ri';
import { GrAdd } from 'react-icons/gr';
import { GoDash } from 'react-icons/go';
import './styles.scss';
import { useDispatch } from 'react-redux';
import { setquantity } from '../../../../app/cartRedux';
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
            <div className="cart_sizeName">
              <span>{`Kích thước - ${product.size.name}`}</span>
            </div>
            <div className="cart_soles">
              <span>{`Đế - ${product.soles}`}</span>
            </div>
            <div className="cart_more">
              <span>{`Thêm nhân - ${product.more.name}`}</span>
            </div>
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
              <span>
                {' '}
                {formatPrice(
                  (items.product.price + items.product.size.price + items.product.more.price) *
                    items.quantity
                )}
              </span>
            </div>
            <div className="cart_delete">
              <RiDeleteBin6Fill />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default React.memo(CartItem);
