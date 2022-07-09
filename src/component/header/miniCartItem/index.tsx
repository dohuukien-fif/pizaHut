import * as React from 'react';
import { RiDeleteBin6Fill } from 'react-icons/ri';
import { formatPrice } from '../../../utils';
import { CheckOutProps } from '../interface';

export interface MinniCartItemProps {
  items: CheckOutProps;

  handleDeleteCart: any;
  checkCategory: any;
}

export default function MinniCartItem({
  handleDeleteCart,
  checkCategory,
  items,
}: MinniCartItemProps) {
  return (
    <div className="miniCart_item">
      <div className="miniCart_blocks">
        <div className="miniCart_left">
          <div className="miniCart_aside">
            <img src={items.product?.image} alt={items.product?.name} />
          </div>
        </div>

        <div className="miniCart_right">
          <div className="right_block">
            <div className="miniCart_add">
              <div className="miniCart_add-left">
                <div className="miniCart_name">
                  <span>{items.product?.name}</span>
                </div>

                {Object.keys(items.product?.size).length > 0 &&
                  Object.values(items.product?.size).every((e) => e !== '') && (
                    <div className="miniCart_sizeName">
                      <span>{`Kích thước - ${items.product?.size?.name}`}</span>
                    </div>
                  )}

                {items.product.soles.length > 0 && !items.product?.soles.includes(null) && (
                  <div className="miniCart_soles">
                    <span>{`Đế - ${items.product?.soles}`}</span>
                  </div>
                )}
                {Object.keys(items.product?.more).length > 0 &&
                  Object.values(items.product?.more).every((e) => e !== '') && (
                    <div className="miniCart_more">
                      <span>{`Thếm nhân - ${items.product?.more?.name}`}</span>
                    </div>
                  )}
              </div>
              <div className="miniCart_delete" onClick={() => handleDeleteCart(items.id)}>
                <RiDeleteBin6Fill />
              </div>
            </div>
            <div className="miniCart_bottom">
              <div className="miniCart_quantity">
                <span>Số lượng: 1</span>
              </div>
              <div className="miniCart_price">
                {checkCategory.includes(items.product.category) ? (
                  <span>
                    {formatPrice(
                      (Number(items.product.price) +
                        ((Object.keys(items.product.size).length > 0 && items.product.size.price) ||
                          0) +
                        ((Object.keys(items.product.more).length > 0 && items.product.more.price) ||
                          0)) *
                        items.quantity
                    )}
                  </span>
                ) : (
                  <span>{formatPrice(items.product.price + items.quantity)}</span>
                )}
              </div>
            </div>
            {/* <div className="miniCart_quantity">
     
       </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
