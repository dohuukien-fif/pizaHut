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
      <div className="BakedNoodles_list">
        {data
          .filter((item) => item.categories === 'BakedNoodles')
          .slice(0, 4)
          .map((items, index) => (
            <SaladItem key={items.id} items={items} />
          ))}
      </div>
      {isContinent === false ? (
        <div className="BakedNoodles_continent" onClick={() => setisContinent((x) => !x)}>
          <p>
            {' '}
            xem thêm <IoMdAdd />
          </p>
        </div>
      ) : (
        <div className="BakedNoodles_list">
          {data
            .filter((item) => item.categories === 'BakedNoodles')
            .slice(4)
            .map((items, index) => (
              <SaladItem key={items.id} items={items} />
            ))}
        </div>
      )}
    </>
  );
}
