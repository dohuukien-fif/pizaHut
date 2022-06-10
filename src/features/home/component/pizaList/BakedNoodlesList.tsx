import React, { useState } from 'react';
import { HomeFeaturesProps } from './../../page/interface';
import BakedNoodlesItem from './../PizaItem/BakedNoodles/BakedNoodlesItem';
import { IoMdAdd } from 'react-icons/io';

import './styles.scss';

export interface BakedNoodlesListProps {
  data: HomeFeaturesProps[];
  setIdPizza: (newId: number) => {};
}

export default function BakedNoodlesList({ data, setIdPizza }: BakedNoodlesListProps) {
  const [isContinent, setisContinent] = useState<number>(4);
  const hanndleIdNew = (newIds: number) => {
    if (setIdPizza) setIdPizza(newIds);
  };

  console.log('isContinent', data.filter((item) => item.category === 'BakedNoodles').length);
  return (
    <>
      <div className="BakedNoodles_list">
        {data
          .filter((item) => item.category === 'BakedNoodles')
          .slice(0, isContinent)
          .map((items, index) => (
            <BakedNoodlesItem key={index} items={items} handleIds={hanndleIdNew} />
          ))}
      </div>
      {isContinent <= data.filter((item) => item.category === 'BakedNoodles').length && (
        <div className="newDish_continent" onClick={() => setisContinent((x) => x + 4)}>
          <p> xem thêm</p>
        </div>
      )}

      {/* {data.filter((item) => item.category === 'BakedNoodles').length > 4 && (
        <>
          <div className="BakedNoodles_list" >
            {data
              .filter((item) => item.category === 'BakedNoodles')
              .slice(4)
              .map((items, index) => (
                <BakedNoodlesItem key={items.id} items={items} handleIds={hanndleIdNew} />
              ))}
          </div>
          <div className="newDish_continent" onClick={() => setisContinent((x) => x + 3)}>
            <p> xem thêm</p>
          </div>
        </>
      )} */}
    </>
  );
}
