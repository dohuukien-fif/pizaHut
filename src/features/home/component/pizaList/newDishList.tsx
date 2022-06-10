import React, { useState } from 'react';
import NewDishItem from '../PizaItem/newDish/newDishItem';
import { HomeFeaturesProps } from './../../page/interface';
import './styles.scss';
export interface NewDishLisstProps {
  data: HomeFeaturesProps[];
  setIdPizza: (newId: number) => {};
}

export default function NewDishLisst({ data, setIdPizza }: NewDishLisstProps) {
  const [isContinent, setisContinent] = useState<number>(4);
  const hanndleIdNew = (newIds: number) => {
    if (setIdPizza) setIdPizza(newIds);
  };
  return (
    <>
      <div className="newDish_list">
        {data
          .filter((item) => item.category === 'newDish')
          .slice(0, isContinent)
          .map((items, index) => (
            <NewDishItem key={index} items={items} handleIds={hanndleIdNew} />
          ))}
      </div>
      {isContinent <= data.filter((item) => item.category === 'newDish').length && (
        <div className="newDish_continent" onClick={() => setisContinent((x) => x + 4)}>
          <p> xem thêm</p>
        </div>
      )}
    </>
  );
}
