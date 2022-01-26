import React, { useState } from 'react';

import { PizzaFeaturesProps } from './../../page/interface';
import { IoMdAdd } from 'react-icons/io';
import PizzaStuffingItem from '../pizaItem/stuffing';

export interface PizzaStuffingListProps {
  data: PizzaFeaturesProps[];
}

export default function PizzaStuffingList({ data }: PizzaStuffingListProps) {
  return (
    <>
      <div className="stuffing_list">
        {data
          .filter((item) => item.category === 'Stuffing')

          .map((items, index) => (
            <PizzaStuffingItem key={items.id} items={items} />
          ))}
      </div>
    </>
  );
}
