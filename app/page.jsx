// 'use client'
// import Image from 'next/image'
// // import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
// import 'bootstrap/dist/css/bootstrap.css'
// // import './style.scss'
// // import 'flowbite'
// import './globals.css'
// // Import Font Awesome CSS
// import 'font-awesome/css/font-awesome.min.css'
// import Testimony from '@/components/carouseltestimony'

import Sliderhome from '@/components/sliderhome'
import Carouselteam from '@/components/carouselteam'
import directus from '@/lib/directus'
import { readItems } from '@directus/sdk'
// import getAssetURL from '@/lib/get-asset-url'
import { notFound } from 'next/navigation'
import ServicesCard from '@/components/ServicesCard'

// ;<img
//   src='/vercel.svg'
//   alt='Vercel Logo'
//   className='dark:invert'
//   width={100}
//   height={24}
//   priority
// />
async function getHomeData () {
  try {
    const page = await directus.request(
      readItems('home_page', {
        // filter: {
        //   slug: { _eq: slug }
        // },
        fields: [
          '*',
          'id',
          'content',
          'images.*',
          // 'images.*.*',
          'title',
          'subtitle',
          'tagline',
          'headline',
          'points.*.*'
          //   'id',
          //   'blocks',
          //   'blocks.*.*',
          //   'item',
          //   'item.*.*'
        ]
        // limit: -1
      }),
      {
        // next: { revalidate: 7 }
        next: { revalidate: 7 }
      }
    )

    // console.log('page', page)
    return page
  } catch (error) {
    notFound('Error fetching data Mr Hamza :', error)
  }
}

// async function getHome() {

//   try {
//     const home = await directus.request(
//       readItems('home', {
//         fields: ['slug', 'id', 'title', 'sort', 'date_created'],
//         // sort: ['sort']
//         // limit: 99
//       }),
//       {
//         next: { revalidate: 7 }
//       }
//     )
//     console.log(home)
//     return home
//   } catch (error) {
//     notFound('Error fetching data Mr Hamza :', error)
//   }

// }

export default async function Home () {
  const homedata = await getHomeData()
  // console.log('homedataPage', homedata)
  return (
    <main className='flex min-h-screen flex-col items-center justify-between lg:p-24'>
      <section className='jumbotron jumbomain'>
        <Sliderhome slideImg={homedata?.images} headline={homedata?.headline} tagline={homedata?.tagline} />
        <div className='icon-scroll-wraper'>
          <div className='icon-scroll'>
            <div className='icon-scroll-screen'></div>
          </div>
        </div>
      </section>

      {/* <div className='py-5 h-11 w-screen block bg-blue3' /> */}

      <ServicesCard />

      <section className='bg-blue3 bg-content max-w-[1350px] text-white container-fluid sm:rounded-3xl'>
        <div className='row m-10-hor max-w-[1350px] '>
          <div className=' '>
            <div className='heading'>{homedata?.title}</div>

            <div>{homedata?.subtitle}</div>
          </div>

          {homedata?.points?.map((item, index) => (
            <div key={index} className='col-md-4 mt-5'>
              <div className='sub-color text-gradient'>{index + 1}. </div>
              <div className='heading '>{item?.title}</div>

              <div className='content'>{item?.subtitle}</div>
            </div>
          ))}
        </div>
      </section>

      <div className='  text-white   w-screen py-10 my-10 sm:mt-20 bg-blue3'>
        <div className='row m-10-hor  max-w-[1350px]'>
          {/* <div className='col-12 text-center'>
              <div className='subheading'>Our team</div>
              <div className='heading'>About Our Team</div>
              <div className='row'>
                <div className='col-md-8 mx-auto'>
                  <p className='content'>
                    Curabitur mollis bibendum luctus. Duis suscipit vitae dui
                    sed suscipit. Vestibulum auctor nunc vitae diam eleifend, in
                    maximus metus sollicitudin. Quisque vitae sodales lectus.
                    Nam p orttitor justo sed mi finibus, vel tristique risus
                    faucibus.
                  </p>
                </div>
              </div>
            </div> */}
          <Carouselteam />
        </div>
      </div>
    </main>
  )
}
