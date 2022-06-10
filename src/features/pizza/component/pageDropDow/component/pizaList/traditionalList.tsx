import React, { useState } from 'react';

import { IoMdAdd } from 'react-icons/io';
import PizzaTranditionItem from '../pizaItem/traditionalItem';

export interface PizzaNewListProps {
  data: any[];
  setIdPizza: (newId: number) => {};
}

export default function PizzaTradition({ data, setIdPizza }: PizzaNewListProps) {
  const [isContinent, setisContinent] = useState<boolean>(false);
  const handleId = (newId: number) => {
    if (setIdPizza) setIdPizza(newId);
  };
  return (
    <>
      <div className="salad_list">
        {data
          .filter((item) => item.category === 'tranditional')

          .map((items, index) => (
            <PizzaTranditionItem key={index} items={items} handleIds={handleId} />
          ))}
      </div>
    </>
  );
}
