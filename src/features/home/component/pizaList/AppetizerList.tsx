import React, { useState } from 'react';
import ApptizerItem from '../PizaItem/Appetizer';
import { HomeFeaturesProps } from './../../page/interface';
import { IoMdAdd } from 'react-icons/io';
import './styles.scss';
export interface AppetizerListProps {
  data: HomeFeaturesProps[];
  setIdPizza: (newId: number) => {};
}

export default function AppetizerList({ data, setIdPizza }: AppetizerListProps) {
  const [isContinent, setisContinent] = useState<number>(4);
  const hanndleIdNew = (newIds: number) => {
    if (setIdPizza) setIdPizza(newIds);
  };
  return (
    <>
      <div className="Appetizer_list">
        {data
          .filter((item) => item.category === 'Appetizer')
          .slice(0, isContinent)
          .map((items, index) => (
            <ApptizerItem key={items.id} items={items} handleIds={hanndleIdNew} />
          ))}
      </div>
      {isContinent <= data.filter((item) => item.category === 'Appetizer').length && (
        <div className="newDish_continent" onClick={() => setisContinent((x) => x + 4)}>
          <p> xem thêm</p>
        </div>
      )}
    </>
  );
}
