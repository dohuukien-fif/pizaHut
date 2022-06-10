import React, { useState } from 'react';
import PizzaStuffingItem from '../pizaItem/stuffingItem';

export interface PizzaNewListProps {
  data: any[];
  setIdPizza: (newId: number) => {};
}

export default function PizzaStuffing({ data, setIdPizza }: PizzaNewListProps) {
  const [isContinent, setisContinent] = useState<boolean>(false);
  const handleId = (newId: number) => {
    if (setIdPizza) setIdPizza(newId);
  };
  return (
    <>
      <div className="salad_list">
        {data
          .filter((item) => item.category === 'Stuffing')

          .map((items, index) => (
            <PizzaStuffingItem key={index} items={items} handleIds={handleId} />
          ))}
      </div>
    </>
  );
}
