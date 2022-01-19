import React, { useState, useEffect } from 'react';
import { BsCart3 } from 'react-icons/bs';
import { FiMenu } from 'react-icons/fi';
import { AiOutlineSearch, AiOutlineClose, AiOutlineLoading3Quarters } from 'react-icons/ai';
import { FaShippingFast, FaStore } from 'react-icons/fa';
import { GrClose } from 'react-icons/gr';
import Menulink from './menuLink';
import { MdOutlineAccountCircle, MdOutlinePlace } from 'react-icons/md';
import { FcRating } from 'react-icons/fc';
import './styles.scss';
import { useNavigate, Link } from 'react-router-dom';
import { cartFeaturesProps } from '../cart/page/interface';
import { formatPrice } from '../../utils';
import { RiDeleteBin6Fill } from 'react-icons/ri';
import LoadingInput from '../loadingFeatures/loadingInput/loadingInput';
export interface HeadersProps {}

export default function Headers(props: HeadersProps) {
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
  ]);
  // const { id, name } = newArrays;
  const [setActive, setsetActive] = useState<string>('');
  const [isorder, setisorder] = useState<boolean>(false);
  const [isopen, setisopen] = useState<boolean>(false);
  const [isScroll, setisScroll] = useState<boolean>(false);
  const [isOpenSearch, setisOpenSearch] = useState(false);
  const [loading, setloading] = useState(false);
  const [SearchTerm, setSearchTerm] = useState('');
  const [activeIco, setactiveIco] = useState<string>('activeIcon_left');
  const navigate = useNavigate();
  const activeTranForm = (value?: string) => {
    if (value === 'l') {
      setsetActive('active_left');
      setactiveIco('activeIcon_left');
      setisorder(false);
    }
    if (value === 'm') {
      setsetActive('active_right');
      setactiveIco('activeIcon_right');
      setisorder(true);
    }
    return '';
  };
  // console.log('iz', setActive);

  useEffect(() => {
    const ScrollNavBar = () => {
      if (screen.width > 1024 && window.scrollY > 500) {
        setisScroll(true);
      } else {
        setisScroll(false);
      }
    };
    window.addEventListener('scroll', ScrollNavBar);
    return () => {
      window.removeEventListener('scroll', ScrollNavBar);
    };
  }, [window.scrollY]);

  const handleClickLinkCart = () => {
    navigate('/cart');
  };
  const handleSubmit = (e: any) => {
    e.preventDefault();
    setSearchTerm('');
    return new Promise<boolean>((resolve) => {
      setloading(true);
      setTimeout(() => {
        navigate(`/search?order=${SearchTerm.replace(' ', '+')}`);
        resolve(true);
        setloading(false);
      }, 1000);
    });

    // navigate({ search: SearchTerm.trim("") });
    // location.search(`${SearchTerm}`);
  };
  return (
    <nav className="nav">
      <div className="nav_block">
        <div className="nav_top">
          {/* logo website */}
          <div className="nav_icon">
            <Link to="/">
              <img
                src="https://image.shutterstock.com/image-vector/pizza-daily-fresh-vector-emblem-600w-1901059681.jpg"
                alt=""
              />
            </Link>
          </div>
          {/* https://vislogo.com.vn/upload/image/pizzanew.jpg */}
          {/* <span onClick={() => setisopen((x) => !x)}> kien dp</span> */}
          {/* check order */}
          <div className="nav_info">
            <div className="nav_order">
              <div className={`nav_block ${setActive}`}></div>
              <span onClick={() => activeTranForm('l')}>
                {' '}
                <FaShippingFast
                  className={activeIco === 'activeIcon_left' ? activeIco : 'color_icon'}
                />
                <span className={activeIco === 'activeIcon_left' ? activeIco : 'color_icon'}>
                  {' '}
                  Đặt giào hàng
                </span>
              </span>
              <span onClick={() => activeTranForm('m')}>
                {' '}
                <FaStore className={activeIco === 'activeIcon_right' ? activeIco : 'color_icon'} />
                <span className={activeIco === 'activeIcon_right' ? activeIco : 'color_icon'}>
                  {' '}
                  Đặt lấy hàng
                </span>
              </span>
            </div>
            {/* torget input search = selectd */}
            <div className="nav_search">
              {isorder === false && (
                <div className="nav_input">
                  <input type="text" placeholder="Nhập địa chỉ của bạn" />
                </div>
              )}
              {isorder === true && (
                <div className="nav_Select">
                  <form action="/action_page.php">
                    <input list="browsers" name="browser" placeholder="Chon cửa hàng" />
                    <datalist id="browsers">
                      <option value="The Piza Company Song Hành Explorer">
                        The Piza Company Song Hành
                      </option>
                      <option value="The Piza Company Estella">The Piza Company Estella</option>
                      <option value="The Piza Nguyễn Thị Minh Khai">
                        The Piza Nguyễn Thị Minh Khai
                      </option>
                      <option value="The Piza Company Lê Van Sỹ">The Piza Company Lê Van Sỹ</option>
                      <option value="The Piza Company Hậu Giang">The Piza Company Hậu Giang</option>
                    </datalist>
                  </form>
                </div>
              )}
            </div>
          </div>
          {/* menu mobile {search , cart ,menu tab} */}
          <div className="nav_menu">
            <div className="menu_block">
              <div className="search_pizzaMobile">
                <AiOutlineSearch onClick={() => setisOpenSearch((x) => !x)} />
                {isOpenSearch && (
                  <form onSubmit={handleSubmit}>
                    <div className="form_add">
                      <input
                        type="text"
                        placeholder="Tìm kiếm sản phẩm"
                        onChange={(e) => setSearchTerm(e.target.value)}
                      />
                      <button type="submit">
                        {' '}
                        {loading ? (
                          <div className="loading_featurees">
                            <AiOutlineLoading3Quarters />
                          </div>
                        ) : (
                          <AiOutlineSearch />
                        )}
                      </button>
                    </div>
                  </form>
                )}
              </div>
              <BsCart3 />
              <span>Giỏ hàng</span>
              {isopen ? (
                <AiOutlineClose className="icon_close" onClick={() => setisopen((x) => !x)} />
              ) : (
                <FiMenu onClick={() => setisopen((x) => !x)} />
              )}
            </div>
          </div>
          {/* menu account mobile : none  ,  tablet : block */}
          <div className="nav_account">
            <MdOutlineAccountCircle />
            <span>
              <Link to="login">Đăng nhập</Link>
            </span>
            /
            <span>
              <Link to="register">Tạo tài khoản</Link>
            </span>{' '}
            <FcRating />
          </div>
        </div>
        <div className={isopen ? 'nav_Link actives_link' : 'nav_Link'}>
          <Menulink
            setActive={setActive}
            activeTranForm={activeTranForm}
            isorder={isorder}
            activeIco={activeIco}
          />
          {/* menu cart tablet =>laptop */}
          <div className="nav_carts">
            <div className="search_pizza">
              <AiOutlineSearch onClick={() => setisOpenSearch((x) => !x)} />
              {isOpenSearch && (
                <form onSubmit={handleSubmit}>
                  <div className="form_add">
                    <input
                      type="text"
                      placeholder="Tìm kiếm sản phẩm"
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <button type="submit">
                      {' '}
                      {loading ? (
                        <div className="loading_featurees">
                          <AiOutlineLoading3Quarters />
                        </div>
                      ) : (
                        <AiOutlineSearch />
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
            <div className="nav_cart" onClick={handleClickLinkCart}>
              <BsCart3 />
              <span>Giỏ hàng</span>
              <span>0</span>

              <div className="nav_miniCart">
                <div className="miniCart_list">
                  {DataCart.map((items: cartFeaturesProps, index: number) => (
                    <div className="miniCart_item" key={index}>
                      <div className="miniCart_blocks">
                        <div className="miniCart_left">
                          <div className="miniCart_aside">
                            <img src={items.product.image} alt={items.product.name} />
                          </div>
                        </div>

                        <div className="miniCart_right">
                          <div className="right_block">
                            <div className="miniCart_add">
                              <div className="miniCart_add-left">
                                <div className="miniCart_name">
                                  <span>{items.product.name}</span>
                                </div>
                                <div className="miniCart_sizeName">
                                  <span>{`Kích thước - ${items.infor.sizeName}`}</span>
                                </div>
                                <div className="miniCart_soles">
                                  <span>{`Đế - ${items.infor.soles}`}</span>
                                </div>
                              </div>
                              <div className="miniCart_delete">
                                <RiDeleteBin6Fill />
                              </div>
                            </div>
                            <div className="miniCart_bottom">
                              <div className="miniCart_quantity">
                                <span>Số lượng: 1</span>
                              </div>
                              <div className="miniCart_price">
                                <span>{formatPrice(items.product.price)}</span>
                              </div>
                            </div>
                            {/* <div className="miniCart_quantity">
                          
                            </div> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="miniCart_total">
                  <div className="miniCart_total-block">
                    <div className="minicart_title">
                      <span>Tổng Tiền:</span> <span>487.000đ</span>
                    </div>
                    <div className="miniCart_bottom">
                      <button>
                        <p>Thanh toán</p>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
