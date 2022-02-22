import React, { useState } from 'react';

import { PizzaFeaturesProps } from './../../page/interface';
import { IoMdAdd } from 'react-icons/io';
import PizzaMixedItem from '../pizaItem/mixed';
export interface PizzaMixedListProps {
  data: PizzaFeaturesProps[];
  setIdPizza: (newId: number) => {};
}

export default function PizzaMixedList({ data, setIdPizza }: PizzaMixedListProps) {
  const [isContinent, setisContinent] = useState<boolean>(false);
  const hanndleIdNew = (newIds: number) => {
    if (setIdPizza) setIdPizza(newIds);
  };
  return (
    <>
      <div className="mixed_list">
        {data
          .filter((item) => item.category === 'mixed')

          .map((items, index) => (
            <PizzaMixedItem key={items.id} items={items} handleIds={hanndleIdNew} />
          ))}
      </div>
    </>
  );
}
