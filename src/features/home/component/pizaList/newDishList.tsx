import React, { useState } from 'react';
import NewDishItem from '../PizaItem/newDish/newDishItem';
import { HomeFeaturesProps } from './../../page/homeFeaturers';
import './styles.scss';
export interface NewDishLisstProps {
  data: HomeFeaturesProps[];
}

export default function NewDishLisst({ data }: NewDishLisstProps) {
  const [isContinent, setisContinent] = useState<boolean>(false);
  return (
    <>
      <div className="newDish_list">
        {data
          .filter((item) => item.categories === 'newDish')
          .slice(0, 4)
          .map((items, index) => (
            <NewDishItem key={items.id} items={items} />
          ))}
      </div>
      {isContinent === false ? (
        <div className="newDish_continent" onClick={() => setisContinent((x) => !x)}>
          <p> xem thêm</p>
        </div>
      ) : (
        <div className="newDish_list">
          {data
            .filter((item) => item.categories === 'newDish')
            .slice(4)
            .map((items, index) => (
              <NewDishItem key={items.id} items={items} />
            ))}
        </div>
      )}
    </>
  );
}
