import * as React from 'react';
import { formatPrice } from '../../../../utils';
import { AppertizerFeaturesProps } from '../../page/interface';
import './styles.scss';
export interface ThumbnailProps {
  detail: AppertizerFeaturesProps;
  setPrice: any;
}

export default function Thumbnail({ detail, setPrice }: ThumbnailProps) {
  const { image, price } = detail;
  const updatePrice =
    setPrice !== 0 ? price + (setPrice.priceSize || 0 + setPrice.priceMore || 0) : price;
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
