import * as React from 'react';
import { formatPrice } from '../../../../utils';
import { PizzaFeaturesProps } from '../../page/interface';
import './styles.scss';
export interface ThumbnailProps {
  detail: PizzaFeaturesProps;
  setPrice: any;
}

export default function Thumbnail({ detail, setPrice }: ThumbnailProps) {
  const { image, price } = detail;
  const updatePrice =
    setPrice.sizePrice !== 0
      ? price + (Number(setPrice.sizePrice || 0) + Number(setPrice.morePrice || 0))
      : price;

  console.log(price, setPrice);
  return (
    <div className="thumbnail_aside">
      <div className="thumbnail_image">
        <img src={image} alt="" />
      </div>
      <div className="thumbnail_price">
        <p>{formatPrice(updatePrice)}</p>
      </div>
    </div>
  );
}
