import React, { useState } from 'react';

import { PizzaFeaturesProps } from './../../page/interface';
import { IoMdAdd } from 'react-icons/io';
import PizzaSeafoodItem from '../pizaItem/seafood';

export interface PizzaSeafoodListProps {
  data: PizzaFeaturesProps[];
  setIdPizza: (newId: number) => {};
}

export default function PizzaSeafoodList({ data, setIdPizza }: PizzaSeafoodListProps) {
  const hanndleIdNew = (newIds: number) => {
    if (setIdPizza) setIdPizza(newIds);
  };
  return (
    <>
      <div className="seafood_list">
        {data
          .filter((item) => item.category === 'Seafood')

          .map((items, index) => (
            <PizzaSeafoodItem key={index} items={items} handleIds={hanndleIdNew} />
          ))}
      </div>
    </>
  );
}
