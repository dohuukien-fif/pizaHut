import React, { useState } from 'react';
import SaladItem from '../PizaItem/Salad';
import { HomeFeaturesProps } from './../../page/interface';
import { IoMdAdd } from 'react-icons/io';
import './styles.scss';
export interface SaladListProps {
  data: HomeFeaturesProps[];
  setIdPizza: (newId: number) => {};
}

export default function SaladList({ data, setIdPizza }: SaladListProps) {
  const [isContinent, setisContinent] = useState<number>(4);
  const hanndleIdNew = (newIds: number) => {
    if (setIdPizza) setIdPizza(newIds);
  };
  return (
    <>
      <div className="Salad_list">
        {data
          .filter((item) => item.category === 'Salad')
          .slice(0, isContinent)
          .map((items, index) => (
            <SaladItem key={items.id} items={items} handleIds={hanndleIdNew} />
          ))}
      </div>
      {isContinent <= data.filter((item) => item.category === 'Salad').length && (
        <div className="newDish_continent" onClick={() => setisContinent((x) => x + 4)}>
          <p> xem thêm</p>
        </div>
      )}
    </>
  );
}
