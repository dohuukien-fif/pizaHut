import React, { useState } from 'react';
// import { HomeFeaturesProps } from './../../page/interface';
import { IoMdAdd } from 'react-icons/io';
import { HomeFeaturesProps } from '../../../page/interface';
import StuiffingItem from './stuffingItem';
import './styles.scss';

export interface StuffingListProps {
  data: HomeFeaturesProps[];
  activeTab: string;
}

export default function StuffingList({ data, activeTab }: StuffingListProps) {
  const [isContinent, setisContinent] = useState<boolean>(false);
  return (
    <>
      <div className="Stuffing_list">
        {data
          .filter((item) => item.category === 'Stuffing')
          .slice(0, 4)
          .map((items, index) => (
            <StuiffingItem key={items.id} items={items} />
          ))}
      </div>
      {data.filter((item) => item.category === 'Stuffing').length > 3 && (
        <>
          {isContinent === false ? (
            <div className="newDish_continent" onClick={() => setisContinent((x) => !x)}>
              <p> xem thêm</p>
            </div>
          ) : (
            <div className="Stuffing_list">
              {data
                .filter((item) => item.category === 'Stuffing')
                .slice(4)
                .map((items, index) => (
                  <StuiffingItem key={items.id} items={items} />
                ))}
            </div>
          )}
        </>
      )}
    </>
  );
}
