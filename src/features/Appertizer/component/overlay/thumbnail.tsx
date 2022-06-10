import * as React from 'react';
import { formatPrice } from '../../../../utils';
import { AppertizerFeaturesProps } from '../../page/interface';
import './styles.scss';
export interface ThumbnailProps {
  detail: AppertizerFeaturesProps;
  Price: any;
}

export default function Thumbnail({ detail, Price }: ThumbnailProps) {
  const { image, price } = detail;
  const updatePrice =
    (Price.priceSize && Price.priceMore) !== 0
      ? price + (Number(Price.priceSize) + Number(Price.priceMore))
      : price;

  console.log('setPrice', Price);
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
