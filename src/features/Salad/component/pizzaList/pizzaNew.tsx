import React, { useState } from 'react';

import { SaladFeaturesProps } from './../../page/interface';
import { IoMdAdd } from 'react-icons/io';
import PizzaNewItem from '../pizaItem/new';
export interface PizzaNewListProps {
  data: SaladFeaturesProps[];
  setIdPizza: (newId: number) => {};
}

export default function PizzaNewList({ data, setIdPizza }: PizzaNewListProps) {
  const [isContinent, setisContinent] = useState<boolean>(false);
  const handleId = (newId: number) => {
    if (setIdPizza) setIdPizza(newId);
  };
  return (
    <>
      <div className="new_list">
        {data
          .filter((item) => item.categories === 'Salad')

          .map((items, index) => (
            <PizzaNewItem key={items.id} items={items} handleIds={handleId} />
          ))}
      </div>
    </>
  );
}
