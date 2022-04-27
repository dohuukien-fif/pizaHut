import React, { useState } from 'react';
// import { HomeFeaturesProps } from './../../page/interface';
import { IoMdAdd } from 'react-icons/io';
import { HomeFeaturesProps } from '../../../page/interface';
import SeafoodItem from './seafoodItem';
import './styles.scss';

export interface SeafoodListProps {
  data: HomeFeaturesProps[];
  activeTab: string;
  setIdPizza: (newId: number) => {};
}

export default function SeafoodList({ data, activeTab, setIdPizza }: SeafoodListProps) {
  const [isContinent, setisContinent] = useState<number>(4);
  const hanndleIdNew = (newIds: number) => {
    if (setIdPizza) setIdPizza(newIds);
  };
  return (
    <>
      <div className="seafood_list">
        {data
          .filter((item) => item.category === 'Seafood')
          .slice(0, isContinent)
          .map((items, index) => (
            <SeafoodItem key={items.id} items={items} handleIds={hanndleIdNew} />
          ))}
      </div>
      {isContinent <= data.filter((item) => item.category === 'Seafood').length && (
        <div className="newDish_continent" onClick={() => setisContinent((x) => x + 4)}>
          <p> xem thêm</p>
        </div>
      )}
    </>
  );
}
