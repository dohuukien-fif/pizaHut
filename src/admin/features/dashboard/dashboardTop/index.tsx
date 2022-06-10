import * as React from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { BiChevronUp } from 'react-icons/bi';
import { FaRegUser } from 'react-icons/fa';
import { MdAccountBalanceWallet } from 'react-icons/md';
import { RiMoneyDollarCircleLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';

import { formatPrice } from '../../../../utils';
export interface userProps {
  createdAt: string;
  username: string;
  _id: string;
  __v: number;
}

export interface DashBoardTopProps {
  user: any;
  data: any;
  income: any;
  totalOrder: number;
}

export default function DashboardTop({ user, data, income, totalOrder }: DashBoardTopProps) {
  return (
    <div className="dashboard__top">
      <div className="dashboard__group">
        <div className="dashboard__group--left">
          <div className="dashboard__group--title">
            <span>USER</span>
          </div>
          <div className="dashboard__group--quantity">
            <span>{user?.length}</span>
          </div>
          <div className="dashboard__group--all">
            <span>
              <Link to="/admin/user">See all user</Link>
            </span>
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
            <span>{data?.length}</span>
          </div>
          <div className="dashboard__group--all">
            <span>
              {' '}
              <Link to="/admin/order">See all order</Link>
            </span>
          </div>
        </div>
        <div className="dashboard__group--right">
          <span>
            <BiChevronUp />
            20%
          </span>
          <div className="dashboard__icon orderss">
            <AiOutlineShoppingCart />
          </div>
        </div>
      </div>
      <div className="dashboard__group">
        <div className="dashboard__group--left">
          <div className="dashboard__group--title">
            <span>TOTAL INCOME</span>
          </div>
          <div className="dashboard__group--quantity">
            <span>${formatPrice(income)}</span>
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
            <span>TOTAL ORDER</span>
          </div>
          <div className="dashboard__group--quantity">
            <span>{formatPrice(totalOrder)}</span>
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
  );
}
