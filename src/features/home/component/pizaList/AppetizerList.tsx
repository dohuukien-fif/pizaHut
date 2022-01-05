import React, { useState } from 'react';
import ApptizerItem from '../PizaItem/Appetizer';
import { HomeFeaturesProps } from './../../page/interface';
import { IoMdAdd } from 'react-icons/io';
import './styles.scss';
export interface AppetizerListProps {
  data: HomeFeaturesProps[];
}

export default function AppetizerList({ data }: AppetizerListProps) {
  const [isContinent, setisContinent] = useState<boolean>(false);
  return (
    <>
      <div className="Appetizer_list">
        {data
          .filter((item) => item.categories === 'Appetizer')
          .slice(0, 4)
          .map((items, index) => (
            <ApptizerItem key={items.id} items={items} />
          ))}
      </div>
      {data.filter((item) => item.categories === 'Appetizer').length > 4 && (
        <>
          {isContinent === false ? (
            <div className="newDish_continent" onClick={() => setisContinent((x) => !x)}>
              <p> xem thêm</p>
            </div>
          ) : (
            <div className="Appetizer_list">
              {data
                .filter((item) => item.categories === 'Appetizer')
                .slice(4)
                .map((items, index) => (
                  <ApptizerItem key={items.id} items={items} />
                ))}
            </div>
          )}
        </>
      )}
    </>
  );
}
