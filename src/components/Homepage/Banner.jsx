"use client"
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

import './style.css';

// import required modules
import { Autoplay, Pagination, Navigation , EffectFade } from 'swiper/modules';

const bannersContent = [1,2,3,4,5,6]


const Banner = () => {
    return (
        <section className='h-[700px] container mx-auto rounded-2xl'>
        <Swiper
        spaceBetween={30}
        centeredSlides={true}
        effect={'fade'}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation , EffectFade]}
        className="mySwiper"
      >
        {
           bannersContent.map( (item,index) => <SwiperSlide key={index} item={item} >
            <div className='w-full h-full rounded-2xl bg-no-repeat flex  items-center' style={{
                background: `linear-gradient(45deg,rgba(0,0,0,0.7),rgba(0,0,0,0.4)),url("/assets/images/banner/${index+1}.jpg")`,
                backgroundRepeat: 'no-repeat',
                backgroundSize:'cover',
                backgroundPosition:'center',
                }}>
           <div className='text-white space-y-4 max-w-[463px] text-left ml-14'>
           <h1 className='text-6xl font-bold'>
            Affordable <br /> Price For Car Servicing
            </h1>
            <p>
            There are many variations of passages of  available, but the majority have suffered alteration in some form
            </p>
            <div className='space-x-4'>
                <button className='btn btn-primary'>Discover More</button>
                <button className='btn btn-outline btn-primary'>Latest Project</button>
            </div>
           </div>
            </div>
        </SwiperSlide> )
        }
      </Swiper>
        </section>
    );
};

export default Banner;