import React, { useState } from 'react';

import { IoMdAdd } from 'react-icons/io';
import PizzaNewItem from '../pizaItem/new';
import { SaladFeaturesProps } from '../../../Salad/page/interface';
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
          .filter((item) => item.categories === 'Spaghetti')

          .map((items, index) => (
            <PizzaNewItem key={items.id} items={items} handleIds={handleId} />
          ))}
      </div>
    </>
  );
}
