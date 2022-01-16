import * as React from 'react';
import CartList from '../component/cartLisst';
import './styles.scss';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
export default function CartFeatures(props: any) {
  const [DataCart, setDataCart] = React.useState<any>([
    {
      product: {
        categories: 'piza',
        id: 11,
        image:
          'https://image.shutterstock.com/image-photo/plate-pizza-on-white-background-600w-1637023015.jpg',
        name: 'Pizza Golden 4 Cheese',
        price: 309000,
        detail: 'Phủ phô mai Gouda thơm vàng',
        Spice: 'Tôm, cua, mực và nghêu với sốt Marinara',

        size: [
          {
            name: 'Nhỏ 6',
            price: 0,
          },
          {
            name: 'Vừa 9',
            price: 80000,
          },
          {
            name: 'Lớn 12',
            price: 783000,
          },
        ],
        soles: [
          {
            id: 1,

            items: ['kien'],
          },
          {
            id: 2,
            items: ['cong', 'son'],
          },
          {
            id: 3,
            items: ['Dày', 'Mỏng giòn', 'Viền phô mai', 'Viền phô mai xúc xích'],
          },
        ],
        more: [
          {
            id: 222,
            images:
              'https://image.shutterstock.com/image-photo/tomato-clipping-path-ripe-vegetable-600w-1916880149.jpg',
            name: 'Cà chua',
            price: 39000,
          },
          {
            id: 55,

            images:
              'https://thumbs.dreamstime.com/z/smoked-pork-neck-meat-product-partially-chopped-rolled-slice-beautiful-composition-decorated-leaf-lettuce-isolated-112974248.jpg',
            name: 'Thịt xông khói cắt lát',
            price: 39000,
          },
          {
            id: 77,
            images:
              'https://image.shutterstock.com/image-photo/fresh-mediterranean-cocktail-fish-on-600w-381659629.jpg',
            name: 'Hải sản',
            price: 39000,
          },
        ],
      },
      infor: {
        sizeName: 'Nhỏ 6',
        sizePrice: 360000,
        soles: 'Dày',
        moreName: 'Cà chua',
        morePrice: 34000,
      },
      quantity: 2,
    },
    {
      product: {
        categories: 'piza',
        id: 11,
        image:
          'https://image.shutterstock.com/image-photo/plate-pizza-on-white-background-600w-1637023015.jpg',
        name: 'Pizza Golden 4 Cheese',
        price: 309000,
        detail: 'Phủ phô mai Gouda thơm vàng',
        Spice: 'Tôm, cua, mực và nghêu với sốt Marinara',

        size: [
          {
            name: 'Nhỏ 6',
            price: 0,
          },
          {
            name: 'Vừa 9',
            price: 80000,
          },
          {
            name: 'Lớn 12',
            price: 783000,
          },
        ],
        soles: [
          {
            id: 1,

            items: ['kien'],
          },
          {
            id: 2,
            items: ['cong', 'son'],
          },
          {
            id: 3,
            items: ['Dày', 'Mỏng giòn', 'Viền phô mai', 'Viền phô mai xúc xích'],
          },
        ],
        more: [
          {
            id: 222,
            images:
              'https://image.shutterstock.com/image-photo/tomato-clipping-path-ripe-vegetable-600w-1916880149.jpg',
            name: 'Cà chua',
            price: 39000,
          },
          {
            id: 55,

            images:
              'https://thumbs.dreamstime.com/z/smoked-pork-neck-meat-product-partially-chopped-rolled-slice-beautiful-composition-decorated-leaf-lettuce-isolated-112974248.jpg',
            name: 'Thịt xông khói cắt lát',
            price: 39000,
          },
          {
            id: 77,
            images:
              'https://image.shutterstock.com/image-photo/fresh-mediterranean-cocktail-fish-on-600w-381659629.jpg',
            name: 'Hải sản',
            price: 39000,
          },
        ],
      },
      infor: {
        sizeName: 'Nhỏ 6',
        sizePrice: 360000,
        soles: 'Dày',
        moreName: 'Cà chua',
        morePrice: 34000,
      },
      quantity: 2,
    },
    {
      product: {
        categories: 'piza',
        id: 11,
        image:
          'https://image.shutterstock.com/image-photo/plate-pizza-on-white-background-600w-1637023015.jpg',
        name: 'Pizza Golden 4 Cheese',
        price: 309000,
        detail: 'Phủ phô mai Gouda thơm vàng',
        Spice: 'Tôm, cua, mực và nghêu với sốt Marinara',

        size: [
          {
            name: 'Nhỏ 6',
            price: 0,
          },
          {
            name: 'Vừa 9',
            price: 80000,
          },
          {
            name: 'Lớn 12',
            price: 783000,
          },
        ],
        soles: [
          {
            id: 1,

            items: ['kien'],
          },
          {
            id: 2,
            items: ['cong', 'son'],
          },
          {
            id: 3,
            items: ['Dày', 'Mỏng giòn', 'Viền phô mai', 'Viền phô mai xúc xích'],
          },
        ],
        more: [
          {
            id: 222,
            images:
              'https://image.shutterstock.com/image-photo/tomato-clipping-path-ripe-vegetable-600w-1916880149.jpg',
            name: 'Cà chua',
            price: 39000,
          },
          {
            id: 55,

            images:
              'https://thumbs.dreamstime.com/z/smoked-pork-neck-meat-product-partially-chopped-rolled-slice-beautiful-composition-decorated-leaf-lettuce-isolated-112974248.jpg',
            name: 'Thịt xông khói cắt lát',
            price: 39000,
          },
          {
            id: 77,
            images:
              'https://image.shutterstock.com/image-photo/fresh-mediterranean-cocktail-fish-on-600w-381659629.jpg',
            name: 'Hải sản',
            price: 39000,
          },
        ],
      },
      infor: {
        sizeName: 'Nhỏ 6',
        sizePrice: 360000,
        soles: 'Dày',
        moreName: 'Cà chua',
        morePrice: 34000,
      },
      quantity: 2,
    },
    {
      product: {
        categories: 'piza',
        id: 11,
        image:
          'https://image.shutterstock.com/image-photo/plate-pizza-on-white-background-600w-1637023015.jpg',
        name: 'Pizza Golden 4 Cheese',
        price: 309000,
        detail: 'Phủ phô mai Gouda thơm vàng',
        Spice: 'Tôm, cua, mực và nghêu với sốt Marinara',

        size: [
          {
            name: 'Nhỏ 6',
            price: 0,
          },
          {
            name: 'Vừa 9',
            price: 80000,
          },
          {
            name: 'Lớn 12',
            price: 783000,
          },
        ],
        soles: [
          {
            id: 1,

            items: ['kien'],
          },
          {
            id: 2,
            items: ['cong', 'son'],
          },
          {
            id: 3,
            items: ['Dày', 'Mỏng giòn', 'Viền phô mai', 'Viền phô mai xúc xích'],
          },
        ],
        more: [
          {
            id: 222,
            images:
              'https://image.shutterstock.com/image-photo/tomato-clipping-path-ripe-vegetable-600w-1916880149.jpg',
            name: 'Cà chua',
            price: 39000,
          },
          {
            id: 55,

            images:
              'https://thumbs.dreamstime.com/z/smoked-pork-neck-meat-product-partially-chopped-rolled-slice-beautiful-composition-decorated-leaf-lettuce-isolated-112974248.jpg',
            name: 'Thịt xông khói cắt lát',
            price: 39000,
          },
          {
            id: 77,
            images:
              'https://image.shutterstock.com/image-photo/fresh-mediterranean-cocktail-fish-on-600w-381659629.jpg',
            name: 'Hải sản',
            price: 39000,
          },
        ],
      },
      infor: {
        sizeName: 'Nhỏ 6',
        sizePrice: 360000,
        soles: 'Dày',
        moreName: 'Cà chua',
        morePrice: 34000,
      },
      quantity: 2,
    },
  ]);
  return (
    <div className="cart">
      <div className="cart_wrapper">
        <div className="cart_block">
          <div className="cart_title">
            <span>Sản phẩm</span>
          </div>
          <CartList dataCart={DataCart} />
        </div>
        <div className="cart_total">
          <div className="total_title">
            <span>Tổng Tiền:</span> <span>487.000đ</span>
          </div>
          <div className="total_payload">
            <button>
              <AiOutlineArrowLeft />
              <span>Tiếp tục mua hàng</span>
            </button>
            <button>
              <span>Thanh toán</span>
              <AiOutlineArrowRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
