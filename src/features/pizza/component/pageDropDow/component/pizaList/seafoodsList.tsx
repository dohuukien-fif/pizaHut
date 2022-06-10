import React, { useState } from 'react';

import PizzaSeafoodItem from './../pizaItem/seafoodsItem';

export interface PizzaNewListProps {
  data: any[];
  setIdPizza: (newId: number) => {};
}

export default function PizzaSeafood({ data, setIdPizza }: PizzaNewListProps) {
  const [isContinent, setisContinent] = useState<boolean>(false);
  const handleId = (newId: number) => {
    if (setIdPizza) setIdPizza(newId);
  };
  return (
    <>
      <div className="salad_list">
        {data
          .filter((item) => item.category === 'Seafood')

          .map((items, index) => (
            <PizzaSeafoodItem key={index} items={items} handleIds={handleId} />
          ))}
      </div>
    </>
  );
}
