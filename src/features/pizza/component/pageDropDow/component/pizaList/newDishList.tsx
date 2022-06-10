import React, { useState } from 'react';

import { IoMdAdd } from 'react-icons/io';
import PizzaNewItem from './../pizaItem/newDishItem';
export interface PizzaNewListProps {
  data: any[];
  setIdPizza: (newId: number) => {};
}

export default function PizzaNewList({ data, setIdPizza }: PizzaNewListProps) {
  const [isContinent, setisContinent] = useState<boolean>(false);
  const handleId = (newId: number) => {
    if (setIdPizza) setIdPizza(newId);
  };
  return (
    <>
      <div className="salad_list">
        {data
          .filter((item) => item.category === 'newDish')

          .map((items, index) => (
            <PizzaNewItem key={index} items={items} handleIds={handleId} />
          ))}
      </div>
    </>
  );
}
