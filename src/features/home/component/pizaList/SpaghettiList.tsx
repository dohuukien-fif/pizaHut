import React, { useState } from 'react';
import SpaghettiItem from '../PizaItem/Spaghetti';
import { HomeFeaturesProps } from './../../page/interface';
import { IoMdAdd } from 'react-icons/io';
import './styles.scss';
export interface SpaghettiListProps {
  data: HomeFeaturesProps[];
  setIdPizza: (newId: number) => {};
}

export default function SpaghettiList({ data, setIdPizza }: SpaghettiListProps) {
  const [isContinent, setisContinent] = useState<number>(4);
  const hanndleIdNew = (newIds: number) => {
    if (setIdPizza) setIdPizza(newIds);
  };
  return (
    <>
      <div className="Spaghetti_list">
        {data
          .filter((item) => item.category === 'Spaghetti')
          .slice(0, isContinent)
          .map((items, index) => (
            <SpaghettiItem key={index} items={items} handleIds={hanndleIdNew} />
          ))}
      </div>
      {isContinent <= data.filter((item) => item.category === 'Spaghetti').length && (
        <div className="newDish_continent" onClick={() => setisContinent((x) => x + 4)}>
          <p> xem thêm</p>
        </div>
      )}
    </>
  );
}
