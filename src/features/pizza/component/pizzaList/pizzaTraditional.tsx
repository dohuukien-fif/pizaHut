import React, { useState } from 'react';

import { PizzaFeaturesProps } from './../../page/interface';
import { IoMdAdd } from 'react-icons/io';
import TraditionItem from './../pizaItem/traditional/index';
export interface PizzaTraditionalProps {
  data: PizzaFeaturesProps[];
}

export default function PizzaTraditional({ data }: PizzaTraditionalProps) {
  return (
    <>
      <div className="traditional_list">
        {data
          .filter((item) => item.category === 'Traditional')
          .map((items, index) => (
            <TraditionItem key={items.id} items={items} />
          ))}
      </div>
    </>
  );
}
