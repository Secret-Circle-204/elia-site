'use client'

import { useSpring, animated } from 'react-spring'
import React, { useState, useEffect, useRef } from 'react'
import Slider from 'react-animated-slider'
import getAssetURL from '@/lib/get-asset-url'
import 'react-animated-slider/build/horizontal.css'
// import 'react-animated-slider/build/vertical.css'

//import 'react-animated-slider/build/vertical.css';
//import Slider from 'react-slick'

// import 'slick-carousel/slick/slick.css'
// import 'slick-carousel/slick/slick-theme.css'

// const SlideImg = [
//   {
//     src: './img/bg-4.jpg'
//   },
//   {
//     src: './img/bg-1.jpg'
//   },
//   {
//     src: './img/bg-5.jpg'
//   },
//   {
//     src: './img/bg-3.jpg'
//   }
// ]

export default function SliderHome({ tagline, headline, slideImg }) {
  // console.log('homedata', homedata.images)
  console.log('SlideImg', slideImg)
  return (
    <Slider
      className='w-screen  max-sm:h-[80vh]  h-[80vh] slider-wrapper'
      autoplay={6000}
    >
      {slideImg.map((item, index) => (
        <div
          key={item.id}
          // index={index}
          className='no-repeat relative bg-no-repeat bg-cover  bg-center w-screen h-full slider-content'
          // style={{
          //   backgroundImage: `url('${item.src}')`
          // }}
          style={{
            backgroundImage: `url('${getAssetURL(item?.directus_files_id)}')`,
          }}
        >
          {/* <img
                  loading='lazy'
                  alt='{`home_slide_${index}`}'
                  src={getAssetURL(item?.directus_files_id?.filename_disk)}
                  className='w-[500px] pt-[500px] bg-no-repeat bg-cover bg-center object-cover overflow-hidden h-[100vh]'
                /> */}
          <div className=' absolute  top-[50%] left-[50%] mx-10  text-left  text-white  w-[90%]  inner  '>
            <h1>{tagline}</h1>
            <p>{headline}</p>
            <button>
              <span className='shine'></span>
              <span>Read More</span>
            </button>
          </div>
        </div>
      ))}
    </Slider>
  )
}
