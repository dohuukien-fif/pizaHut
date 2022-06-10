import React, { useState } from 'react';
import PizaItem from '../PizaItem/piza';
import { HomeFeaturesProps } from './../../page/interface';
import { IoMdAdd } from 'react-icons/io';
import './styles.scss';
export interface PizaListProps {
  data: HomeFeaturesProps[];
  activeTab: string;
  setIdPizza: (newId: number) => {};
}

export default function PizaList({ data, activeTab, setIdPizza }: PizaListProps) {
  const [isContinent, setisContinent] = useState<number>(4);
  const hanndleIdNew = (newIds: number) => {
    if (setIdPizza) setIdPizza(newIds);
  };
  return (
    <>
      <div className="pizza_list">
        {data
          ?.filter((item) => item?.category === 'piza')
          ?.slice(0, isContinent)
          ?.map((items, index) => (
            <PizaItem key={index} items={items} handleIds={hanndleIdNew} />
          ))}
      </div>
      {isContinent <= data.filter((item) => item.category === 'piza').length && (
        <div className="newDish_continent" onClick={() => setisContinent((x) => x + 4)}>
          <p> xem thêm</p>
        </div>
      )}
    </>
  );
}
