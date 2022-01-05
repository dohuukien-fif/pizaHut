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
      <div className="Mixed_list">
        {data
          .filter((item) => item.categories === 'mixed')
          .slice(0, 4)
          .map((items, index) => (
            <MixedItem key={items.id} items={items} />
          ))}
      </div>
      {data.filter((item) => item.categories === 'mixed').length > 3 && (
        <>
          {isContinent === false ? (
            <div className="newDish_continent" onClick={() => setisContinent((x) => !x)}>
              <p> xem thêm</p>
            </div>
          ) : (
            <div className="newDish_list">
              {data
                .filter((item) => item.categories === 'mixed')
                .slice(4)
                .map((items, index) => (
                  <MixedItem key={items.id} items={items} />
                ))}
            </div>
          )}
        </>
      )}
    </>
  );
}