import React, { useState } from 'react';

import { NoodlesFeaturesProps } from './../../page/interface';
import { IoMdAdd } from 'react-icons/io';
import PizzaNewItem from '../pizaItem/new';
export interface PizzaNewListProps {
  data: NoodlesFeaturesProps[];
  setIdPizza: any;
}

export default function PizzaNewList({ data, setIdPizza }: PizzaNewListProps) {
  const [isContinent, setisContinent] = useState<boolean>(false);
  const handleId = (newId: number) => {
    if (setIdPizza) setIdPizza(newId);
  };
  return (
    <>
      <div className="noodles_list">
        {data
          .filter((item) => item.category === 'piza')

          .map((items, index) => (
            <PizzaNewItem key={index} items={items} handleIds={handleId} />
          ))}
      </div>
    </>
  );
}
