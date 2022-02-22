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
  const [isContinent, setisContinent] = useState<boolean>(false);
  const hanndleIdNew = (newIds: number) => {
    if (setIdPizza) setIdPizza(newIds);
  };
  return (
    <>
      <div className="Traditional_list">
        {data
          .filter((item) => item.category === 'Traditional')
          .slice(0, 4)
          .map((items, index) => (
            <TraditionItem key={items.id} items={items} handleIds={hanndleIdNew} />
          ))}
      </div>
      {data.filter((item) => item.category === 'Traditional').length > 3 && (
        <>
          {isContinent === false ? (
            <div className="newDish_continent" onClick={() => setisContinent((x) => !x)}>
              <p> xem thêm</p>
            </div>
          ) : (
            <div className="newDish_list">
              {data
                .filter((item) => item.category === 'Traditional')
                .slice(4)
                .map((items, index) => (
                  <TraditionItem key={items.id} items={items} handleIds={hanndleIdNew} />
                ))}
            </div>
          )}
        </>
      )}
    </>
  );
}
