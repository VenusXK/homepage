import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './poster.css';

const date1 = new Date("2023/12/23 08:00:00 GMT+0800");
// Sun Dec 17 1995 03:24:00 GMT...


const today = new Date();
// import required modules
import { Pagination, Navigation, HashNavigation } from 'swiper/modules';

export default function Poster() {
  return (
    <>
      <Swiper
        spaceBetween={0}
        className="poster-swiper"
      >
        <SwiperSlide className='poster-swiper-slide' data-hash="slide1" >
          <div className='text-3xl font-bold'>
          Slide 1
          </div>
          </SwiperSlide>
      </Swiper>
    </>
  );
}
