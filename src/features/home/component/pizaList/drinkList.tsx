import React, { useState } from 'react';
import DrinkItem from '../PizaItem/drink';
import { HomeFeaturesProps } from './../../page/interface';
import { IoMdAdd } from 'react-icons/io';
export interface drinkListProps {
  data: HomeFeaturesProps[];
  setIdPizza: (newId: number) => {};
}

export default function drinkList({ data, setIdPizza }: drinkListProps) {
  const [isContinent, setisContinent] = useState<number>(4);
  const hanndleIdNew = (newIds: number) => {
    if (setIdPizza) setIdPizza(newIds);
  };
  return (
    <>
      <div className="drink_list">
        {data
          .filter((item) => item.category === 'drink')
          .slice(0, isContinent)
          .map((items, index) => (
            <DrinkItem key={index} items={items} handleIds={hanndleIdNew} />
          ))}
      </div>
      {isContinent <= data.filter((item) => item.category === 'drink').length && (
        <div className="newDish_continent" onClick={() => setisContinent((x) => x + 4)}>
          <p> xem thêm</p>
        </div>
      )}
    </>
  );
}
