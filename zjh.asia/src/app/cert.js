import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

import './cert.css';

// import required modules
import { EffectCards } from 'swiper/modules';

import { useSwiperSlide } from 'swiper/react';
import { useSwiper } from 'swiper/react';

const certArr = [
    { order:1, title: 'test1', color: 'orange', content: contentHello},
    { order: 2, title: 'test2', color: 'purple', content: contentIntro}

];

function SlideTitle() {
    const swiperSlide = useSwiperSlide();
}    

function HrefRender(){
    const hrefList = certArr.map(certItem => 
        <SwiperSlide key={certItem.order} className={"cert-swiper-slide swiper-slide-" + certItem.color}>
            <SlideTitle></SlideTitle>
                <certItem.content />
        </SwiperSlide>
    );

    return (
        <div className='m-auto pt-4'>
                <Swiper
                    effect={'cards'}
                    grabCursor={false}
                    modules={[EffectCards]}
                    className="cert-swiper"
                >
                    {hrefList}  
                </Swiper>
                
        </div>
    );
}


export default function Cert() {
  return (
    <>
      <HrefRender />
    </>
  );
}

function contentHello(){
    return (
        <ContentModel
        logo="🤗" classLogo="text-9xl sm:text-8xl  p-4 sm:px-10"
        text1="欢迎光临" classText1="text-6xl sm:text-4xl p-2 sm:px-10"
        text2="ZJH.ASIA" classText2="text-6xl sm:text-4xl p-2 sm:px-10">
    </ContentModel>
    );
}

function ContentModel({logo, text1, text2, classLogo, classText1, classText2}){
    return (
        <div className="flex w-full flex-col items-stretch rounded-t-[50%] text-white text-center">
            <div className="mb-2 items-center justify-center font-bold">
                <div className={classLogo}>{logo}</div>
                <div className={classText1}>{text1}</div>
                <div className={classText2}>{text2}</div>
            </div>
        </div>
    );
}

function contentIntro(){
    return (
        <ContentModel
            logo="👨‍💻" classLogo="text-9xl sm:text-8xl  p-4 sm:px-10"
            text1="我是张小赫" classText1="text-6xl sm:text-4xl p-2 sm:px-10"
            text2="这里是我的个人网站" classText2="text-6xl sm:text-4xl p-2 sm:px-10">
        </ContentModel>
    );
}


