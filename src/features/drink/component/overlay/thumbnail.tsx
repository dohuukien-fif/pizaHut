import * as React from 'react';
import { formatPrice } from '../../../../utils';
import { DrinkFeaturesProps } from '../../page/interface';
import './styles.scss';
export interface ThumbnailProps {
  detail: DrinkFeaturesProps;
  setPrice: any;
}

export default function Thumbnail({ detail, setPrice }: ThumbnailProps) {
  const { image, price } = detail;

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
