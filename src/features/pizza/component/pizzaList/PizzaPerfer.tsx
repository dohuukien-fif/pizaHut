import React, { useState } from 'react';

import { PizzaFeaturesProps } from './../../page/interface';
import { IoMdAdd } from 'react-icons/io';
import PizzaPerferItem from '../pizaItem/perfer';

export interface PizzaPerferListProps {
  data: PizzaFeaturesProps[];
  setIdPizza: (newId: number) => {};
}

export default function PizzaPerferList({ data, setIdPizza }: PizzaPerferListProps) {
  const [isContinent, setisContinent] = useState<boolean>(false);
  const hanndleIdNew = (newIds: number) => {
    if (setIdPizza) setIdPizza(newIds);
  };
  return (
    <>
      <div className="perfer_list">
        {data
          .filter((item) => item.category === 'piza')

          .map((items, index) => (
            <PizzaPerferItem key={index} items={items} handleIds={hanndleIdNew} />
          ))}
      </div>
    </>
  );
}
