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
  const [isContinent, setisContinent] = useState<boolean>(false);
  const hanndleIdNew = (newIds: number) => {
    if (setIdPizza) setIdPizza(newIds);
  };
  return (
    <>
      <div className="seafood_list">
        {data
          .filter((item) => item.category === 'Seafood')
          .slice(0, 4)
          .map((items, index) => (
            <SeafoodItem key={items.id} items={items} handleIds={hanndleIdNew} />
          ))}
      </div>
      {data.filter((item) => item.category === 'Seafood').length > 3 && (
        <>
          {isContinent === false ? (
            <div className="newDish_continent" onClick={() => setisContinent((x) => !x)}>
              <p> xem thêm</p>
            </div>
          ) : (
            <div className="seafood_list">
              {data
                .filter((item) => item.category === 'Seafood')
                .slice(4)
                .map((items, index) => (
                  <SeafoodItem key={items.id} items={items} handleIds={hanndleIdNew} />
                ))}
            </div>
          )}
        </>
      )}
    </>
  );
}
