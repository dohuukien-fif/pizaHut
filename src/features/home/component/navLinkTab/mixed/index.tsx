import React, { useState } from 'react';
// import { HomeFeaturesProps } from './../../page/interface';
import { IoMdAdd } from 'react-icons/io';
import { HomeFeaturesProps } from '../../../page/interface';
import MixedItem from './mixedItem';
import './styles.scss';

export interface MixedListProps {
  data: HomeFeaturesProps[];
}

export default function MixedList({ data }: MixedListProps) {
  const [isContinent, setisContinent] = useState<boolean>(false);
  return (
    <>
      <div className="BakedNoodles_list">
        {data
          .filter((item) => item.categories === 'mixed')
          .slice(0, 4)
          .map((items, index) => (
            <MixedItem key={items.id} items={items} />
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
            .filter((item) => item.categories === 'mixed')
            .slice(4)
            .map((items, index) => (
              <MixedItem key={items.id} items={items} />
            ))}
        </div>
      )}
    </>
  );
}
