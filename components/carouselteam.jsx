'use client'

import Slider from 'react-slick'
import 'react-animated-slider/build/vertical.css'
import React, { useState, useEffect, Component } from 'react'
import directus from '@/lib/directus'
import { readItems } from '@directus/sdk'
import getAssetURL from '@/lib/get-asset-url'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Image from 'next/image'

import 'react-animated-slider/build/horizontal.css'

// const data = [
//   {
//     id: 1,
//     name: 'John Doe',

//     job_title: 'CEO',

//     image: '/img/team-12.jpg',
//     description:
//       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
//   },
//   {
//     id: 2,
//     name: 'Jane Doe',

//     job_title: 'CTO',

//     image: '/img/team-15.jpg',
//     description:
//       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
//   },
//   {
//     id: 3,
//     name: 'John Smith',

//     job_title: 'CFO',

//     image: '/img/team-19.jpg',
//     description:
//       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
//   },
//   {
//     id: 4,
//     name: 'Jane Smith',

//     job_title: 'COO',

//     image: '/img/team-22.jpg',
//     description:
//       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
//   },
//   {
//     id: 5,
//     name: 'John Smith',

//     job_title: 'CFO',

//     image: '/img/team-23.jpg',
//     description:
//       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
//   }
// ]

class CustomSlide extends Component {
  render () {
    const { index, ...props } = this.props
    return <div {...props}></div>
  }
}

export default function carouselteam () {
  const [data, setData] = useState([])
  const [team_page, setTeam_page] = useState([])

  const get_page_Data = async () => {
    try {
      const fetchedTeam_page = await directus.request(
        readItems('team_page', {
          fields: ['id', 'title', 'main_image', 'description']   
        }),
        {
          // next: { revalidate: 7 }
          cache: 'no-store'
        }
      )
      setTeam_page(fetchedTeam_page)
    } catch (error) {
      console.error('Error fetching data:', error)
      // Handle errors as needed
    }
  }
  const getData = async () => {
    try {
      const fetchedTeam = await directus.request(
        readItems('team', {
          fields: ['*', 'id', 'name', 'job_title', 'image', 'description' ]
        }),
        {
          // next: { revalidate: 7 }
          cache: 'no-store'
        }
      )
      setData(fetchedTeam)
    } catch (error) {
      console.error('Error fetching data:', error)
      // Handle errors as needed
    }
  }

  useEffect(() => {
    get_page_Data()
    getData()
  }, [])

  console.log('team', data)
  console.log('team_page', team_page)
  console.log(
    'teammm',
    data.map(item => item?.name)
  )

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 5000,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }

  return (
    <>
      <div className=' p-md-5    max-w-[1350px] mx-auto'>
        <div className=' heading '> {team_page?.title}</div>

        <div>
          <div
            className='text-sm font-light text-left items-center max-sm:justify-center  drop-shadow-lg  transition-shadow duration-300  '
            dangerouslySetInnerHTML={{
              __html: team_page?.description
            }}
          ></div>
        </div>
      </div>

      <div className='slickteam max-w-[1350px] mx-auto text-white '>
        <Slider {...settings}>
          {data?.map((item, index) => {
            return (
              <CustomSlide key={item?.id} index={index} className='itm'>
                <div className='bg rounded-3xl'>
                  <Image
                    //loading='lazy'
                    src={getAssetURL(item?.image)} // item?.image}
                    className='img-fluid rounded-3xl'
                    alt='Imageteam'
                    width={500}
                    height={500}
                    //quality={100}
                  />
                </div>
                <div className='desc  icon flex flex-col space-y-0    '>
                  <span className=' text-left uppercase p-0 mt-16 text-2xl font-semibold '>
                    {item?.name}
                  </span>
                  <span className=' text-left p-0 mt-16 mb-2 '>
                    {item?.job_title}
                  </span>
                  <span className=' text-left p-0 mt-16  max-h-[180px] overflow-y-hidden'>
                    {item?.description}
                  </span>
                </div>
                {/* <div className='icon'>
              <span onClick={() => window.open('//facebook.com/', '_blank')}>
              <i className='fa fa-facebook' aria-hidden='true'></i>
              </span>
              <span onClick={() => window.open('//linkedin.com/', '_blank')}>
              <i className='fa fa-linkedin' aria-hidden='true'></i>
              </span>
              <span onClick={() => window.open('//twitter.com/', '_blank')}>
              <i className='fa fa-twitter' aria-hidden='true'></i>
              </span>
            </div> */}
              </CustomSlide>
            )
          })}
        </Slider>
      </div>
    </>
  )
}
