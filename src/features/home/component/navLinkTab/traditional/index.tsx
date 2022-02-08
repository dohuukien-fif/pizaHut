import React, { useState } from 'react';
// import { HomeFeaturesProps } from './../../page/interface';
import { IoMdAdd } from 'react-icons/io';
import { HomeFeaturesProps } from '../../../page/interface';
import './styles.scss';
import TraditionItem from './traditionalItem';
export interface TraditionalListProps {
  data: HomeFeaturesProps[];
  activeTab: string;
}

export default function TraditionalList({ data, activeTab }: TraditionalListProps) {
  const [isContinent, setisContinent] = useState<boolean>(false);
  return (
    <>
      <div className="Traditional_list">
        {data
          .filter((item) => item.category === 'Traditional')
          .slice(0, 4)
          .map((items, index) => (
            <TraditionItem key={items.id} items={items} />
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
                  <TraditionItem key={items.id} items={items} />
                ))}
            </div>
          )}
        </>
      )}
    </>
  );
}
