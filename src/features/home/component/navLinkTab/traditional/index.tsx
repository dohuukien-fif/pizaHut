import React, { useState } from 'react';
// import { HomeFeaturesProps } from './../../page/interface';
import { IoMdAdd } from 'react-icons/io';
import { HomeFeaturesProps } from '../../../page/interface';
import './styles.scss';
import TraditionItem from './traditionalItem';
export interface TraditionalListProps {
  data: HomeFeaturesProps[];
}

export default function TraditionalList({ data }: TraditionalListProps) {
  const [isContinent, setisContinent] = useState<boolean>(false);
  return (
    <>
      <div className="BakedNoodles_list">
        {data
          .filter((item) => item.categories === 'Traditional')
          .slice(0, 4)
          .map((items, index) => (
            <TraditionItem key={items.id} items={items} />
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
            .filter((item) => item.categories === 'Traditional')
            .slice(4)
            .map((items, index) => (
              <TraditionItem key={items.id} items={items} />
            ))}
        </div>
      )}
    </>
  );
}
