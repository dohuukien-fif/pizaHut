import React, { useState } from 'react';
import DrinkItem from '../PizaItem/drink';
import { HomeFeaturesProps } from './../../page/interface';
import { IoMdAdd } from 'react-icons/io';
export interface drinkListProps {
  data: HomeFeaturesProps[];
}

export default function drinkList({ data }: drinkListProps) {
  const [isContinent, setisContinent] = useState<boolean>(false);
  return (
    <>
      <div className="BakedNoodles_list">
        {data
          .filter((item) => item.categories === 'BakedNoodles')
          .slice(0, 4)
          .map((items, index) => (
            <DrinkItem key={items.id} items={items} />
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
              <DrinkItem key={items.id} items={items} />
            ))}
        </div>
      )}
    </>
  );
}
