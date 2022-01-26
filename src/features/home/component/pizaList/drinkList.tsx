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
      <div className="drink_list">
        {data
          .filter((item) => item.category === 'drink')
          .slice(0, 4)
          .map((items, index) => (
            <DrinkItem key={items.id} items={items} />
          ))}
      </div>
      {data.filter((item) => item.category === 'drink').length > 4 && (
        <>
          {isContinent === false ? (
            <div className="newDish_continent" onClick={() => setisContinent((x) => !x)}>
              <p> xem thêm</p>
            </div>
          ) : (
            <div className="drink_list">
              {data
                .filter((item) => item.category === 'drink')
                .slice(4)
                .map((items, index) => (
                  <DrinkItem key={items.id} items={items} />
                ))}
            </div>
          )}
        </>
      )}
    </>
  );
}
