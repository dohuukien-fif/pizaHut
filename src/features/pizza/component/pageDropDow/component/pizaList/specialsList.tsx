import React, { useState } from 'react';
import PizzaSpecialItem from '../pizaItem/specialItem';

export interface PizzaNewListProps {
  data: any[];
  setIdPizza: (newId: number) => {};
}

export default function PizzaSpecial({ data, setIdPizza }: PizzaNewListProps) {
  const [isContinent, setisContinent] = useState<boolean>(false);
  const handleId = (newId: number) => {
    if (setIdPizza) setIdPizza(newId);
  };
  return (
    <>
      <div className="salad_list">
        {data
          .filter((item) => item.category === 'piza')

          .map((items, index) => (
            <PizzaSpecialItem key={index} items={items} handleIds={handleId} />
          ))}
      </div>
    </>
  );
}
