import React, { useState } from 'react';
import PizaItem from '../PizaItem/piza';
import { HomeFeaturesProps } from './../../page/interface';
import { IoMdAdd } from 'react-icons/io';
import './styles.scss';
export interface PizaListProps {
  data: HomeFeaturesProps[];
  activeTab: string;
}

export default function PizaList({ data, activeTab }: PizaListProps) {
  const [isContinent, setisContinent] = useState<boolean>(false);
  return (
    <>
      <div className="pizza_list">
        {data
          .filter((item) => item.categories === 'piza')
          .slice(0, 4)
          .map((items, index) => (
            <PizaItem key={items.id} items={items} />
          ))}
      </div>
      {data.filter((item) => item.categories === 'piza').length > 4 && (
        <>
          {isContinent === false ? (
            <div className="newDish_continent" onClick={() => setisContinent((x) => !x)}>
              <p> xem thêm</p>
            </div>
          ) : (
            <div className="pizza_list">
              {data
                .filter((item) => item.categories === 'piza')
                .slice(4)
                .map((items, index) => (
                  <PizaItem key={items.id} items={items} />
                ))}
            </div>
          )}
        </>
      )}
    </>
  );
}
