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
  const handleChangePrice = (newValue: any) => {
    const newValues = {
      _sort: newValue.name,
      _order: newValue.value,
    };

    onChanges(newValues);
  };
  return (
    <div className="Filter">
      <FilterCategories onChangeCategories={handleChangeCategories} />
      <FilterPrice onchagePrice={handleChangePrice} />
    </div>
  );
}
