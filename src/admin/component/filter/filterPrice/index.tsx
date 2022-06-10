import * as React from 'react';
import './styles.scss';
export interface FilterPriceProps {
  onchagePrice: (value: string) => void;
}

export default function FilterPrice({ onchagePrice }: FilterPriceProps) {
  const [isSort, setIsSort] = React.useState<boolean>(false);
  const handlePrice = (name: string, value: string) => {
    console.log(value);

    const newValue: any = {
      name,
      value,
    };
    onchagePrice(newValue);
  };
  return (
    <div className="filterPrice">
      <div className="filterPrice__title">
        <span>Xắp xếp giá</span>
      </div>
      <div className="filterPrice__content">
        <button className={isSort ? 'activeAsc' : ''} onClick={() => handlePrice('price', 'desc')}>
          <span onClick={() => setIsSort(true)}>Tăng dần</span>
        </button>
        <button className={!isSort ? 'activedesc' : ''} onClick={() => handlePrice('price', 'asc')}>
          <span onClick={() => setIsSort(false)}>Giảm dần</span>
        </button>
      </div>
    </div>
  );
}
