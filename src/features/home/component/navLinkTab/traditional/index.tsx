import React, { useState } from 'react';
// import { HomeFeaturesProps } from './../../page/interface';
import { IoMdAdd } from 'react-icons/io';
import { HomeFeaturesProps } from '../../../page/interface';
import './styles.scss';
import TraditionItem from './traditionalItem';
export interface TraditionalListProps {
  data: HomeFeaturesProps[];
  activeTab: string;
  setIdPizza: (newId: number) => {};
}

export default function TraditionalList({ data, activeTab, setIdPizza }: TraditionalListProps) {
  const [isContinent, setisContinent] = useState<number>(4);
  const hanndleIdNew = (newIds: number) => {
    if (setIdPizza) setIdPizza(newIds);
  };
  return (
    <>
      <div className="Traditional_list">
        {data
          .filter((item) => item.category === 'Traditional')
          .slice(0, isContinent)
          .map((items, index) => (
            <TraditionItem key={items.id} items={items} handleIds={hanndleIdNew} />
          ))}
      </div>
      {isContinent <= data.filter((item) => item.category === 'Traditional').length && (
        <div className="newDish_continent" onClick={() => setisContinent((x) => x + 4)}>
          <p> xem thêm</p>
        </div>
      )}
    </>
  );
}
