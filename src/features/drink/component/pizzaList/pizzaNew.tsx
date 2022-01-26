import React, { useState } from 'react';

import { DrinkFeaturesProps } from './../../page/interface';
import { IoMdAdd } from 'react-icons/io';
import PizzaNewItem from '../pizaItem/new';
export interface PizzaNewListProps {
  data: DrinkFeaturesProps[];
  setIdPizza: (newId: number) => {};
}

export default function PizzaNewList({ data, setIdPizza }: PizzaNewListProps) {
  const [isContinent, setisContinent] = useState<boolean>(false);
  const handleId = (newId: number): any => {
    if (setIdPizza) setIdPizza(newId);
  };
  return (
    <>
      <div className="drink_list">
        {data
          .filter((item) => item.category === 'drink')

          .map((items, index) => (
            <PizzaNewItem key={items.id} items={items} handleIds={handleId} />
          ))}
      </div>
    </>
  );
}
