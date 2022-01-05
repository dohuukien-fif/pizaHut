import React, { useState } from 'react';
import SaladItem from '../PizaItem/Salad';
import { HomeFeaturesProps } from './../../page/interface';
import { IoMdAdd } from 'react-icons/io';
import './styles.scss';
export interface SaladListProps {
  data: HomeFeaturesProps[];
}

export default function SaladList({ data }: SaladListProps) {
  const [isContinent, setisContinent] = useState<boolean>(false);
  return (
    <>
      <div className="Salad_list">
        {data
          .filter((item) => item.categories === 'Salad')
          .slice(0, 4)
          .map((items, index) => (
            <SaladItem key={items.id} items={items} />
          ))}
      </div>
      {data.filter((item) => item.categories === 'Salad').length > 4 && (
        <>
          {isContinent === false ? (
            <div className="newDish_continent" onClick={() => setisContinent((x) => !x)}>
              <p> xem thêm</p>
            </div>
          ) : (
            <div className="Salad_list">
              {data
                .filter((item) => item.categories === 'Salad')
                .slice(4)
                .map((items, index) => (
                  <SaladItem key={items.id} items={items} />
                ))}
            </div>
          )}
        </>
      )}
    </>
  );
}
