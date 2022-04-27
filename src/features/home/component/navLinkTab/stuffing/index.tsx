import React, { useState } from 'react';
// import { HomeFeaturesProps } from './../../page/interface';
import { IoMdAdd } from 'react-icons/io';
import { HomeFeaturesProps } from '../../../page/interface';
import StuiffingItem from './stuffingItem';
import './styles.scss';

export interface StuffingListProps {
  data: HomeFeaturesProps[];
  activeTab: string;
  setIdPizza: (newId: number) => {};
}

export default function StuffingList({ data, activeTab, setIdPizza }: StuffingListProps) {
  const [isContinent, setisContinent] = useState<number>(4);
  const hanndleIdNew = (newIds: number) => {
    if (setIdPizza) setIdPizza(newIds);
  };
  return (
    <>
      <div className="Stuffing_list">
        {data
          .filter((item) => item.category === 'Stuffing')
          .slice(0, isContinent)
          .map((items, index) => (
            <StuiffingItem key={items.id} items={items} handleIds={hanndleIdNew} />
          ))}
      </div>
      {isContinent <= data.filter((item) => item.category === 'Stuffing').length && (
        <div className="newDish_continent" onClick={() => setisContinent((x) => x + 4)}>
          <p> xem thêm</p>
        </div>
      )}
    </>
  );
}
