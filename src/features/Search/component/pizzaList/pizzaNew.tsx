import React, { useState } from 'react';

import { AppertizerFeaturesProps } from './../../page/interface';
import { IoMdAdd } from 'react-icons/io';
import PizzaNewItem from '../pizaItem/new';
export interface PizzaNewListProps {
  data: AppertizerFeaturesProps[];
  setIdPizza: (newId: number) => {};
}

export default function PizzaNewList({ data, setIdPizza }: PizzaNewListProps) {
  const [isContinent, setisContinent] = useState<boolean>(false);
  const handleId = (newId: number) => {
    if (setIdPizza) setIdPizza(newId);
  };
  return (
    <>
      <div className="appertizer_list">
        {data.map((items, index) => (
          <PizzaNewItem key={index} items={items} handleIds={handleId} />
        ))}
      </div>
    </>
  );
}
