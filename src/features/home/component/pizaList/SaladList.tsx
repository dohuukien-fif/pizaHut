import React, { useState } from 'react';
import SaladItem from '../PizaItem/Salad';
import { HomeFeaturesProps } from './../../page/interface';
import { IoMdAdd } from 'react-icons/io';
import './styles.scss';
export interface SaladListProps {
  data: HomeFeaturesProps[];
  setIdPizza: (newId: number) => {};
}

export default function SaladList({ data, setIdPizza }: SaladListProps) {
  const [isContinent, setisContinent] = useState<boolean>(false);
  const hanndleIdNew = (newIds: number) => {
    if (setIdPizza) setIdPizza(newIds);
  };
  return (
    <>
      <div className="Salad_list">
        {data
          .filter((item) => item.category === 'Salad')
          .slice(0, 4)
          .map((items, index) => (
            <SaladItem key={items.id} items={items} handleIds={hanndleIdNew} />
          ))}
      </div>
      {data.filter((item) => item.category === 'Salad').length > 4 && (
        <>
          {isContinent === false ? (
            <div className="newDish_continent" onClick={() => setisContinent((x) => !x)}>
              <p> xem thêm</p>
            </div>
          ) : (
            <div className="Salad_list">
              {data
                .filter((item) => item.category === 'Salad')
                .slice(4)
                .map((items, index) => (
                  <SaladItem key={items.id} items={items} handleIds={hanndleIdNew} />
                ))}
            </div>
          )}
        </>
      )}
    </>
  );
}
