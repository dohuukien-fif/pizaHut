import React, { useState } from 'react';

import { PizzaFeaturesProps } from './../../page/interface';
import { IoMdAdd } from 'react-icons/io';
import PizzaNewItem from '../pizaItem/new';
export interface PizzaNewListProps {
  data: PizzaFeaturesProps[];
  setIdPizza: (newId: number) => {};
}

export default function PizzaNewList({ data, setIdPizza }: PizzaNewListProps) {
  const [isContinent, setisContinent] = useState<boolean>(false);
  const hanndleIdNew = (newIds: number) => {
    if (setIdPizza) setIdPizza(newIds);
  };
  return (
    <>
      <div className="new_list">
        {data
          .filter((item) => item.category === 'piza')

          .map((items, index) => (
            <PizzaNewItem key={items.id} items={items} handleIds={hanndleIdNew} />
          ))}
      </div>
    </>
  );
}
