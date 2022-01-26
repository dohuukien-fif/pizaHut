import React, { useState } from 'react';
import SpaghettiItem from '../PizaItem/Spaghetti';
import { HomeFeaturesProps } from './../../page/interface';
import { IoMdAdd } from 'react-icons/io';
import './styles.scss';
export interface SpaghettiListProps {
  data: HomeFeaturesProps[];
}

export default function SpaghettiList({ data }: SpaghettiListProps) {
  const [isContinent, setisContinent] = useState<boolean>(false);
  return (
    <>
      <div className="Spaghetti_list">
        {data
          .filter((item) => item.category === 'Spaghetti')
          .slice(0, 4)
          .map((items, index) => (
            <SpaghettiItem key={items.id} items={items} />
          ))}
      </div>
      {data.filter((item) => item.category === 'Spaghetti').length > 4 && (
        <>
          {isContinent === false ? (
            <div className="newDish_continent" onClick={() => setisContinent((x) => !x)}>
              <p> xem thêm</p>
            </div>
          ) : (
            <div className="Spaghetti_list">
              {data
                .filter((item) => item.category === 'Spaghetti')
                .slice(4)
                .map((items, index) => (
                  <SpaghettiItem key={items.id} items={items} />
                ))}
            </div>
          )}
        </>
      )}
    </>
  );
}
