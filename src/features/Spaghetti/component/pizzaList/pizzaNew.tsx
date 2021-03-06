import React, { useState } from 'react';

import { IoMdAdd } from 'react-icons/io';
import PizzaNewItem from '../pizaItem/new';

import { SpaghettiFeaturesProps } from '../../page/interface';
export interface PizzaNewListProps {
  data: SpaghettiFeaturesProps[];
  setIdPizza: (newId: number) => {};
}

export default function PizzaNewList({ data, setIdPizza }: PizzaNewListProps) {
  const [isContinent, setisContinent] = useState<boolean>(false);
  const handleId = (newId: number) => {
    if (setIdPizza) setIdPizza(newId);
  };
  return (
    <>
      <div className="spaghetti_list">
        {data
          .filter((item) => item.category === 'Spaghetti')

          .map((items, index) => (
            <PizzaNewItem key={index} items={items} handleIds={handleId} />
          ))}
      </div>
    </>
  );
}
