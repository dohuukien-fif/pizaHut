import React, { useState } from 'react';
// import { HomeFeaturesProps } from './../../page/interface';
import { IoMdAdd } from 'react-icons/io';
import { HomeFeaturesProps } from '../../../page/interface';
import SeafoodItem from './seafoodItem';
import './styles.scss';

export interface SeafoodListProps {
  data: HomeFeaturesProps[];
}

export default function SeafoodList({ data }: SeafoodListProps) {
  const [isContinent, setisContinent] = useState<boolean>(false);
  return (
    <>
      <div className="BakedNoodles_list">
        {data
          .filter((item) => item.categories === 'Seafood')
          .slice(0, 4)
          .map((items, index) => (
            <SeafoodItem key={items.id} items={items} />
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
            .filter((item) => item.categories === 'Seafood')
            .slice(4)
            .map((items, index) => (
              <SeafoodItem key={items.id} items={items} />
            ))}
        </div>
      )}
    </>
  );
}
