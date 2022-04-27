import * as React from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { BiChevronUp } from 'react-icons/bi';
import { FaRegUser } from 'react-icons/fa';
import { MdAccountBalanceWallet } from 'react-icons/md';
import { RiMoneyDollarCircleLine } from 'react-icons/ri';
import './styles.scss';
import Table from './table';
export interface DashBoardProps {}

export default function DashBoard(props: DashBoardProps) {
  const data = [
    {
      code: 123,
      product: 'piza ',
      image: 'https://www.freepnglogos.com/uploads/pizza-png/pizza-images-download-pizza-33.png',
      date: '12 / 10 / 2020',
      amount: 152346,
      payment: 'dat lay hang',
      status: 'Pending',
    },
    {
      code: 123,
      product: 'piza ',
      image: 'https://www.freepnglogos.com/uploads/pizza-png/pizza-images-download-pizza-33.png',
      date: '12 / 10 / 2020',
      amount: 152346,
      payment: 'dat giao hang',
      status: 'Pending',
    },
    {
      code: 123,
      product: 'piza ',
      image: 'https://www.freepnglogos.com/uploads/pizza-png/pizza-images-download-pizza-33.png',
      date: '12 / 10 / 2020',
      amount: 152346,
      payment: 'dat giao hang',
      status: 'Success',
    },
  ];
  return (
    <div className="dashboard">
      <div className="dashboard__top">
        <div className="dashboard__group">
          <div className="dashboard__group--left">
            <div className="dashboard__group--title">
              <span>USER</span>
            </div>
            <div className="dashboard__group--quantity">
              <span>100</span>
            </div>
            <div className="dashboard__group--all">
              <span>See all user</span>
            </div>
          </div>
          <div className="dashboard__group--right">
            <span>
              <BiChevronUp />
              20%
            </span>
            <div className="dashboard__icon">
              <FaRegUser />
            </div>
          </div>
        </div>
        <div className="dashboard__group">
          <div className="dashboard__group--left">
            <div className="dashboard__group--title">
              <span>ORDER</span>
            </div>
            <div className="dashboard__group--quantity">
              <span>100</span>
            </div>
            <div className="dashboard__group--all">
              <span>See all order</span>
            </div>
          </div>
          <div className="dashboard__group--right">
            <span>
              <BiChevronUp />
              20%
            </span>
            <div className="dashboard__icon orders">
              <AiOutlineShoppingCart />
            </div>
          </div>
        </div>
        <div className="dashboard__group">
          <div className="dashboard__group--left">
            <div className="dashboard__group--title">
              <span>EARNINGS</span>
            </div>
            <div className="dashboard__group--quantity">
              <span>$100</span>
            </div>
            {/* <div className="dashboard__group--all">
            <span>See all earnings</span>
          </div> */}
          </div>
          <div className="dashboard__group--right">
            <span>
              <BiChevronUp />
              20%
            </span>
            <div className="dashboard__icon earning">
              <RiMoneyDollarCircleLine />
            </div>
          </div>
        </div>
        <div className="dashboard__group">
          <div className="dashboard__group--left">
            <div className="dashboard__group--title">
              <span>BALANCE</span>
            </div>
            <div className="dashboard__group--quantity">
              <span>100</span>
            </div>
          </div>
          <div className="dashboard__group--right">
            <span>
              <BiChevronUp />
              20%
            </span>
            <div className="dashboard__icon  balance">
              <MdAccountBalanceWallet />
            </div>
          </div>
        </div>
      </div>
      <div className="dashboard__body">
        <div className="dashboard__body--swapper">
          <div className="dashboard__body--title">
            <span>Latest transactions</span>
          </div>
          <div className="dashboard__tables--title">
            <div className="dashboard__tables--left">
              <span>Tracking Id</span>
              <span>Product</span>
            </div>
            <div className="dashboard__tables--right">
              <span>Date</span>
              <span>Amount</span>
              <span>Payment</span>
              <span>status</span>
            </div>
          </div>
          <div className="dashboard__table--list">
            {data.map((item, index) => (
              <Table item={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
