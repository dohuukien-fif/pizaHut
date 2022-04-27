import * as React from 'react';
import './styles.scss';
export interface FilterPriceProps {
  onchagePrice: (value: string) => void;
}

export default function FilterPrice({ onchagePrice }: FilterPriceProps) {
  const handlePrice = (e: any) => {
    const { value, name } = e.target;

    onchagePrice(value);
  };
  return (
    <div className="filterPrice">
      <select name="_sort" onChange={handlePrice}>
        <option value="desc">Tăng dần</option>
        <option value="asc">Giảm dần</option>
      </select>
    </div>
  );
}
