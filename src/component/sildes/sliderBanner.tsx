import * as React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Autoplay, Pagination, Mousewheel, Keyboard } from 'swiper';
import './slidebaner.scss';
export interface ISliderFeaturesProps {}

export default function SliderFeatures(props: ISliderFeaturesProps) {
  return (
    <>
      <Swiper
        navigation={true}
        loop={true}
        slidesPerView={'auto'}
        cssMode={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
        className="mySwiper"
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide>
          <img
            src="https://media.istockphoto.com/photos/piza-and-hot-dog-picture-id510408944?b=1&k=20&m=510408944&s=170667a&w=0&h=eIIfqHjXwpi3RXxY6PGi6qIe5dZDaVq44mpJjR3ddG8="
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://www.teahub.io/photos/full/33-330733_italy-pizza.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://swall.teahub.io/photos/small/33-331908_simple-simons-pizza.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swall.teahub.io/photos/small/32-327924_pizza-background.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swall.teahub.io/photos/small/33-330609_pizza-restaurant.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://swall.teahub.io/photos/small/33-330406_photo-wallpaper-black-pizza-italian-pizza-italian-pizza.jpg"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
