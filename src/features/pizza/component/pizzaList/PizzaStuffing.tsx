import React, { useState } from 'react';

import { PizzaFeaturesProps } from './../../page/interface';
import { IoMdAdd } from 'react-icons/io';
import PizzaStuffingItem from '../pizaItem/stuffing';

export interface PizzaStuffingListProps {
  data: PizzaFeaturesProps[];
  setIdPizza: (newId: number) => {};
}

export default function PizzaStuffingList({ data, setIdPizza }: PizzaStuffingListProps) {
  const hanndleIdNew = (newIds: number) => {
    if (setIdPizza) setIdPizza(newIds);
  };
  return (
    <>
      <div className="stuffing_list">
        {data
          .filter((item) => item.category === 'Stuffing')

          .map((items, index) => (
            <PizzaStuffingItem key={index} items={items} handleIds={hanndleIdNew} />
          ))}
      </div>
    </>
  );
}
