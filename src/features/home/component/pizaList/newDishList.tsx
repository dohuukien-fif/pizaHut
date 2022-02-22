import React, { useState } from 'react';
import NewDishItem from '../PizaItem/newDish/newDishItem';
import { HomeFeaturesProps } from './../../page/interface';
import './styles.scss';
export interface NewDishLisstProps {
  data: HomeFeaturesProps[];
  setIdPizza: (newId: number) => {};
}

export default function NewDishLisst({ data, setIdPizza }: NewDishLisstProps) {
  const [isContinent, setisContinent] = useState<boolean>(false);
  const hanndleIdNew = (newIds: number) => {
    if (setIdPizza) setIdPizza(newIds);
  };
  return (
    <>
      <div className="newDish_list">
        {data
          .filter((item) => item.category === 'newDish')
          .slice(0, 4)
          .map((items, index) => (
            <NewDishItem key={items.id} items={items} handleIds={hanndleIdNew} />
          ))}
      </div>
      {data.filter((item) => item.category === 'newDish').length > 3 && (
        <>
          {isContinent === false ? (
            <div className="newDish_continent" onClick={() => setisContinent((x) => !x)}>
              <p> xem thêm</p>
            </div>
          ) : (
            <div className="newDish_list">
              {data
                .filter((item) => item.category === 'newDish')
                .slice(4)
                .map((items, index) => (
                  <NewDishItem key={items.id} items={items} handleIds={hanndleIdNew} />
                ))}
            </div>
          )}
        </>
      )}
    </>
  );
}
