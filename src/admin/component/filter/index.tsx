import * as React from 'react';
import FilterCategories from './filterCategories';
import FilterPrice from './filterPrice';
import './styles.scss';
export interface FilterProps {
  onChanges: (value: any) => void;
}

export default function Filter({ onChanges }: FilterProps) {
  const handleChangeCategories = (value: string) => {
    const newValue = {
      category: value,
    };
    onChanges(newValue);
  };
  const handleChangePrice = (value: string) => {
    const newValue = {
      _sort: value,
    };
    onChanges(newValue);
  };
  return (
    <div className="Filter">
      <FilterCategories onChangeCategories={handleChangeCategories} />
      <FilterPrice onchagePrice={handleChangePrice} />
    </div>
  );
}
