import React, { useState } from 'react';
import PizaItem from '../PizaItem/piza';
import { HomeFeaturesProps } from './../../page/interface';
import { IoMdAdd } from 'react-icons/io';
import './styles.scss';
export interface PizaListProps {
  data: HomeFeaturesProps[];
}

export default function PizaList({ data }: PizaListProps) {
  const [isContinent, setisContinent] = useState<boolean>(false);
  return (
    <>
      <div className="BakedNoodles_list">
        {data
          .filter((item) => item.categories === 'BakedNoodles')
          .slice(0, 4)
          .map((items, index) => (
            <PizaItem key={items.id} items={items} />
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
              <PizaItem key={items.id} items={items} />
            ))}
        </div>
      )}
    </>
  );
}
