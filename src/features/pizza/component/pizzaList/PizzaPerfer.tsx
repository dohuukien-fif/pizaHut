import React, { useState } from 'react';

import { PizzaFeaturesProps } from './../../page/interface';
import { IoMdAdd } from 'react-icons/io';
import PizzaPerferItem from '../pizaItem/perfer';

export interface PizzaPerferListProps {
  data: PizzaFeaturesProps[];
}

export default function PizzaPerferList({ data }: PizzaPerferListProps) {
  const [isContinent, setisContinent] = useState<boolean>(false);
  return (
    <>
      <div className="perfer_list">
        {data
          .filter((item) => item.categories === 'Appetizer')

          .map((items, index) => (
            <PizzaPerferItem key={items.id} items={items} />
          ))}
      </div>
    </>
  );
}
