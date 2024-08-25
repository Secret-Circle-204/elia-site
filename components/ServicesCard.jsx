'use client'
import React, { useState, useEffect } from 'react'
import directus from '@/lib/directus'
import { readItems } from '@directus/sdk'
import getAssetURL from '@/lib/get-asset-url'
// import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
// import { useRouter } from 'next/navigation'

// const data = [
//   {
//     slug: 'service-1',
//     title: 'Service 1',
//     desc: 'desc 1',
//     date_published: '2022-01-01',
//     main_image: '/img/bg-1.jpg'
//   },
//   {
//     slug: 'service-2',
//     title: 'Service 2',
//     desc: 'desc 2',
//     date_published: '2022-01-01',
//     main_image: '/img/bg-2.jpg'
//   },
//   {
//     slug: 'service-3',
//     title: 'Service 3',
//     desc: 'desc 3',
//     date_published: '2022-01-01',
//     main_image: '/img/bg-3.jpg'
//   }
// ]
export default function ServicesCard() {
  const [data, setData] = useState([])

  const getData = async () => {
    try {
      const fetchedServices = await directus.request(
        readItems('services', {
          fields: ['slug', 'title', 'desc', 'date_published', 'main_image']
        }),
        {
          next: { revalidate: 7 }
        }
      )
      setData(fetchedServices)
    } catch (error) {
      console.error('Error fetching data:', error)
      // Handle errors as needed
    }
  }

  useEffect(() => {
    getData()
  }, [])

  console.log('servicesCard_data', data)
  return (
    <section className='container-fluid   '>
      <div className=' row mx-auto  max-w-[1350px] '>
        {data?.map(item => (
          <div key={item?.slug} className='col-md-4  p-2'>
            <div className='features rounded-2xl hover:translate-y-[-3%] transition-transform duration-1000 hover:scale-95'>
              <div className='bg '>
                <Image
                  src={getAssetURL(item?.main_image)}
                  alt='bg-features'
                  loading='lazy'
                  width={600}
                  height={600}
                  className='img-fluid blur-[1px] opacity-95 '
                />
              </div>
              <div className='content'>
                <div className='heading   w-full'>{item?.title}</div>
                {/* <div className='con-text   w-full  text-[390px] line-clamp-4'>
                  {item?.desc}
                </div> */}
                <Link className='rounded-2xl' href={`/${item?.slug}`}>
                  <button className='link w-[50%] rounded-2xl '>
                    Read More
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
