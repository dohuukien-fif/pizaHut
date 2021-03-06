import React, { useState } from 'react';

import { PizzaFeaturesProps } from './../../page/interface';
import { IoMdAdd } from 'react-icons/io';
import TraditionItem from './../pizaItem/traditional/index';
export interface PizzaTraditionalProps {
  data: PizzaFeaturesProps[];
  setIdPizza: (newId: number) => {};
}

export default function PizzaTraditional({ data, setIdPizza }: PizzaTraditionalProps) {
  const hanndleIdNew = (newIds: number) => {
    if (setIdPizza) setIdPizza(newIds);
  };
  return (
    <>
      <div className="traditional_list">
        {data
          .filter((item) => item.category === 'Traditional')
          .map((items, index) => (
            <TraditionItem key={index} items={items} handleIds={hanndleIdNew} />
          ))}
      </div>
    </>
  );
}
