import React, { useState } from 'react';
// import { HomeFeaturesProps } from './../../page/interface';
import { IoMdAdd } from 'react-icons/io';
import { HomeFeaturesProps } from '../../../page/interface';
import MixedItem from './mixedItem';
import './styles.scss';

export interface MixedListProps {
  data: HomeFeaturesProps[];

  setIdPizza: (newId: number) => {};
}

export default function MixedList({ data, setIdPizza }: MixedListProps) {
  const [isContinent, setisContinent] = useState<number>(4);
  const hanndleIdNew = (newIds: number) => {
    if (setIdPizza) setIdPizza(newIds);
  };
  return (
    <>
      <div className="Mixed_list">
        {data
          .filter((item) => item.category === 'mixed')
          .slice(0, isContinent)
          .map((items, index) => (
            <MixedItem key={items.id} items={items} handleIds={hanndleIdNew} />
          ))}
      </div>
      {isContinent <= data.filter((item) => item.category === 'mixed').length && (
        <div className="newDish_continent" onClick={() => setisContinent((x) => x + 4)}>
          <p> xem thêm</p>
        </div>
      )}
    </>
  );
}
