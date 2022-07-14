import * as React from 'react';
import { formatPrice } from '../../../../utils';
import { SpaghettiFeaturesProps } from '../../page/interface';
import './styles.scss';
export interface ThumbnailProps {
  detail: SpaghettiFeaturesProps;
  setPrice: any;
}

export default function Thumbnail({ detail, setPrice }: ThumbnailProps) {
  const { image, price } = detail;
  const updatePrice =
    setPrice !== 0 ? price + (setPrice.priceSize || 0 + setPrice.priceMore || 0) : price;
  return (
    <div className="thumbnail_asidess">
      <div className="thumbnail_image">
        <img src={image} alt="" />
      </div>
      <div className="thumbnail_price">
        <p>{formatPrice(price)}</p>
      </div>
    </div>
  );
}
