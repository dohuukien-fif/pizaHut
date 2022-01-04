import React, { useState } from 'react';
import { HomeFeaturesProps } from './../../page/interface';
import BakedNoodlesItem from './../PizaItem/BakedNoodles/BakedNoodlesItem';
import { IoMdAdd } from 'react-icons/io';

import './styles.scss';

export interface BakedNoodlesListProps {
  data: HomeFeaturesProps[];
}

export default function BakedNoodlesList({ data }: BakedNoodlesListProps) {
  const [isContinent, setisContinent] = useState<boolean>(false);
  return (
    <>
      <div className="BakedNoodles_list">
        {data
          .filter((item) => item.categories === 'BakedNoodles')
          .slice(0, 4)
          .map((items, index) => (
            <BakedNoodlesItem key={items.id} items={items} />
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
              <BakedNoodlesItem key={items.id} items={items} />
            ))}
        </div>
      )}
    </>
  );
}
