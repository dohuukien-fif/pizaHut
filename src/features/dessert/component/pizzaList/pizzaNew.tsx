import React, { useState } from 'react';

import { DessertFeaturesProps } from './../../page/interface';
import { IoMdAdd } from 'react-icons/io';
import PizzaNewItem from '../pizaItem/new';
export interface PizzaNewListProps {
  data: DessertFeaturesProps[];
  setIdPizza: (newId: number) => void;
}

export default function PizzaNewList({ data, setIdPizza }: PizzaNewListProps) {
  const [isContinent, setisContinent] = useState<boolean>(false);
  const handleId = (newId: number) => {
    if (setIdPizza) setIdPizza(newId);
  };
  return (
    <>
      <div className="dessert_list">
        {data
          .filter((item) => item.category === 'Dessert')

          .map((items, index) => (
            <PizzaNewItem key={index} items={items} handleIds={handleId} />
          ))}
      </div>
    </>
  );
}
