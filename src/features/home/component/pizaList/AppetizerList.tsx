import React, { useState } from 'react';
import ApptizerItem from '../PizaItem/Appetizer';
import { HomeFeaturesProps } from './../../page/interface';
import { IoMdAdd } from 'react-icons/io';
import './styles.scss';
export interface AppetizerListProps {
  data: HomeFeaturesProps[];
  setIdPizza: (newId: number) => {};
}

export default function AppetizerList({ data, setIdPizza }: AppetizerListProps) {
  const [isContinent, setisContinent] = useState<boolean>(false);
  const hanndleIdNew = (newIds: number) => {
    if (setIdPizza) setIdPizza(newIds);
  };
  return (
    <>
      <div className="Appetizer_list">
        {data
          .filter((item) => item.category === 'Appetizer')
          .slice(0, 4)
          .map((items, index) => (
            <ApptizerItem key={items.id} items={items} handleIds={hanndleIdNew} />
          ))}
      </div>
      {data.filter((item) => item.category === 'Appetizer').length > 4 && (
        <>
          {isContinent === false ? (
            <div className="newDish_continent" onClick={() => setisContinent((x) => !x)}>
              <p> xem thêm</p>
            </div>
          ) : (
            <div className="Appetizer_list">
              {data
                .filter((item) => item.category === 'Appetizer')
                .slice(4)
                .map((items, index) => (
                  <ApptizerItem key={items.id} items={items} handleIds={hanndleIdNew} />
                ))}
            </div>
          )}
        </>
      )}
    </>
  );
}
