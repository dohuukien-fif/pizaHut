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
  const [isContinent, setisContinent] = useState<boolean>(false);
  const hanndleIdNew = (newIds: number) => {
    if (setIdPizza) setIdPizza(newIds);
  };
  return (
    <>
      <div className="BakedNoodles_list">
        {data
          .filter((item) => item.category === 'BakedNoodles')
          .slice(0, 4)
          .map((items, index) => (
            <BakedNoodlesItem key={items.id} items={items} handleIds={hanndleIdNew} />
          ))}
      </div>
      {data.filter((item) => item.category === 'BakedNoodles').length > 4 && (
        <>
          {isContinent === false ? (
            <div className="newDish_continent" onClick={() => setisContinent((x) => !x)}>
              <p> xem thêm</p>
            </div>
          ) : (
            <div className="BakedNoodles_list">
              {data
                .filter((item) => item.category === 'BakedNoodles')
                .slice(4)
                .map((items, index) => (
                  <BakedNoodlesItem key={items.id} items={items} handleIds={hanndleIdNew} />
                ))}
            </div>
          )}
        </>
      )}
    </>
  );
}
