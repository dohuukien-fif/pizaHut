import React, { useState } from 'react';

import { PizzaFeaturesProps } from './../../page/interface';
import { IoMdAdd } from 'react-icons/io';
import PizzaSeafoodItem from '../pizaItem/seafood';

export interface PizzaSeafoodListProps {
  data: PizzaFeaturesProps[];
}

export default function PizzaSeafoodList({ data }: PizzaSeafoodListProps) {
  return (
    <>
      <div className="seafood_list">
        {data
          .filter((item) => item.category === 'Seafood')

          .map((items, index) => (
            <PizzaSeafoodItem key={items.id} items={items} />
          ))}
      </div>
    </>
  );
}
