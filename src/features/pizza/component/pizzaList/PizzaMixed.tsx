import React, { useState } from 'react';

import { PizzaFeaturesProps } from './../../page/interface';
import { IoMdAdd } from 'react-icons/io';
import PizzaMixedItem from '../pizaItem/mixed';
export interface PizzaMixedListProps {
  data: PizzaFeaturesProps[];
}

export default function PizzaMixedList({ data }: PizzaMixedListProps) {
  const [isContinent, setisContinent] = useState<boolean>(false);
  return (
    <>
      <div className="mixed_list">
        {data
          .filter((item) => item.categories === 'mixed')

          .map((items, index) => (
            <PizzaMixedItem key={items.id} items={items} />
          ))}
      </div>
    </>
  );
}
