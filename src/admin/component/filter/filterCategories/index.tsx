import * as React from 'react';
import './styles.scss';
export interface FilterCategoriesProps {
  onChangeCategories: (value: string) => void;
}

export default function FilterCategories({ onChangeCategories }: FilterCategoriesProps) {
  const dataCategory = [
    'newDish',
    'piza',
    'BakedNoodles',
    'Appetizer',
    'Spaghetti',
    'Salad',
    'drink',
    'Seafood',
    'mixed',
    'Stuffing',
    'Traditional',
  ];

  const handleCategories = (e: any) => {
    if (onChangeCategories) onChangeCategories(e.target.value);
  };
  return (
    <div className="categories">
      <div className="category__title">
        <span>Chọn Category</span>
      </div>
      <select name="category" onChange={handleCategories}>
        {dataCategory.map((item, index) => (
          <React.Fragment key={index}>
            <option value={item}>{item}</option>
          </React.Fragment>
        ))}
      </select>
    </div>
  );
}
