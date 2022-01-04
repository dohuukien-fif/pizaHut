import React, { useState } from 'react';
// import { HomeFeaturesProps } from './../../page/interface';
import { IoMdAdd } from 'react-icons/io';
import { HomeFeaturesProps } from '../../../page/interface';
import StuiffingItem from './stuffingItem';
import './styles.scss';

export interface StuffingListProps {
  data: HomeFeaturesProps[];
}

export default function StuffingList({ data }: StuffingListProps) {
  const [isContinent, setisContinent] = useState<boolean>(false);
  return (
    <>
      <div className="BakedNoodles_list">
        {data
          .filter((item) => item.categories === 'Stuffing')
          .slice(0, 4)
          .map((items, index) => (
            <StuiffingItem key={items.id} items={items} />
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
            .filter((item) => item.categories === 'Stuffing')
            .slice(4)
            .map((items, index) => (
              <StuiffingItem key={items.id} items={items} />
            ))}
        </div>
      )}
    </>
  );
}
