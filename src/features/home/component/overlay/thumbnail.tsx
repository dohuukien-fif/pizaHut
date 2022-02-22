import * as React from 'react';
import { formatPrice } from '../../../../utils';
import { HomeFeaturesProps } from '../../page/interface';
import './styles.scss';
export interface ThumbnailProps {
  detail: HomeFeaturesProps;
  setPrice: any;
  setpriceMore: any;
}

export default function Thumbnail({ detail, setPrice, setpriceMore }: ThumbnailProps) {
  const { image, price } = detail;
  const updatePrice =
    setPrice.sizePrice !== 0 ? price + (setPrice.sizePrice + setPrice.morePrice) : price;

  console.log(price, setPrice, setpriceMore);
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
