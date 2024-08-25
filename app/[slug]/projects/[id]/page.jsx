import React from 'react'
import Image from 'next/image'
import Testimony from '@/components/carouseltestimony'
import GallerySection from '@/components/GallerySection'
import directus from '@/lib/directus'
import { readItems, readItem } from '@directus/sdk'
import getAssetURL from '@/lib/get-asset-url'
import { notFound } from 'next/navigation'
// import {
//   Card,
//   CardHeader,
//   CardBody,
//   CardFooter,
//   Image,
//   Button
// } from '@nextui-org/react'
async function getClientDetail () {
  try {
    const clientDtl = await directus.request(
      readItems('projects_details', {
        // filter: {
        //   id: { _eq: id }
        // },
        fields: [
          'id',
          'main_image',
          'title',
          'date_created',
          'desc',
          'summary',
          'block',
          'client_name',
          'gallery',
          'gallery.*.*',
          'sort'
          // 'related_projects',
          // 'related_projects.*.*',

          // { related_projects: ['name'] }
        ]
      }),
      {
        next: { revalidate: 7 }
        // next: {
        //   revalidate: 1
        // }
      }
    )
    // console.log(clientDtl)
    return clientDtl
  } catch (error) {
    notFound('Error fetching data Mr Hamza :', error)
  }
}

async function getProject (id) {
  try {
    const proj = await directus.request(
      readItem('project', id, {
        filter: {
          id: { _eq: id }
        },
        fields: [
          'id',
          'title',
          'sort',
          'main_image',
          'status',
          'related_client',
          'related_client.*.*',
          'project_date',
          'sort'
          // 'related_projects.*.*',

          // 'service_related.*.*'
        ],
        // sta: ['b'],
        // status: ['published']
        // limit: -1
        sort: ['sort']
      }),
      {
        next: { revalidate: 7 }
        // next: {
        //   revalidate: 1
        // }
      }
    )

    // console.log(proj)
    return proj
  } catch (error) {
    notFound('Error fetching data Mr Hamza :', error)
  }
}

export default async function ClientData ({ params }) {
  const proj = await getProject(params.id)
  // const image = cld?.gallery?.map((item) => item.main_image)

  // console.log(cld)
  // console.log(proj)
  // console.log(params.id)
  // console.log(params)
  return (
    <>
      <section
        className=' jumbotron breadcumb relative  h-[60vh]  object-cover items-center bg-center object-center bg-cover w-full'
        style={{
          backgroundImage: `url(${getAssetURL(proj?.main_image)})`
        }}
      >
        <div className=' absolute bottom-4  left-0 right-0 items-center  text-center     '>
          <div className='  text-white max-w-[1200px] mx-auto px-16 mt-40 sm:mt-[200px] sm:items-center lg:px-5    flex flex-wrap sm:flex  justify-between  max-sm:justify-center text-center  text-2xl drop-shadow-lg  transition-shadow duration-300 font-semibold'>
            <div className='items-center  text-center    '>
              <h1 className='lg:text-left ml-[-25px] items-center first-letter:capitalize  text-center    '>
                {proj?.title}
              </h1>
            </div>

            <div className=' text-sm font-light text-center items-center '>
              {/* <span className='first-letter:capitalize'>{serv?.title}</span> */}
            </div>
          </div>
        </div>
      </section>
      <div className=' max-w-[1250px] mx-auto lg:py-24 lg:px-4 p-[20px] gap-3 grid grid-cols-1 sm:grid-cols-3'>
        {proj?.related_client?.map(proj => (
          <GallerySection key={proj?.id} proj={proj} />
        ))}
      </div>
      <Testimony />
    </>
  )
}

// <section
//   className=' jumbotron breadcumb relative  h-[60vh]  object-cover items-center bg-center object-center bg-cover w-full'
//   style={{
//     backgroundImage: `url(${list[0]?.img})`
//   }}
// >
//   <div>
//     <div className='  max-w-[1150px] mx-auto px-16  lg:px-0  lg:pt-[150px]    pt-[20px]   flex justify-left   text-2xl drop-shadow-lg  transition-shadow duration-1000 font-semibold'>
//       <h1 className='text-left mt-40 '>{list[0]?.title}</h1>
//     </div>

//     <div className=' absolute  right-[13%] bottom-[8%] text-right pt-[110px] '></div>
//   </div>
// </section>
// <div className=' max-w-[1200px] mx-auto lg:py-24 lg:px-4 p-[20px] gap-4 grid grid-cols-1 sm:grid-cols-3'>
//   {/* image model detals client */}
//   {list.map((item, index) => (
//     <Card
//       isFooterBlurred
//       shadow='sm'
//       key={index}
//       className='w-full  group  bg-transparent   hover:drop-shadow  hover:shadow-2xl   rounded-b-lg rounded-t-none rounded-r-lg rounded-l-lg rounded-lg h-[250px]  '
//     >
//       <CardHeader className='absolute z-10 top-1 flex-col items-start'>
//         {/* <p className='text-tiny text-white/80   font-bold'>
//         {item.desc}
//       </p> */}
//       </CardHeader>
//       <img
//         alt='Relaxing app background'
//         className='z-0 w-full rounded-lg group-hover:shadow-lg  h-full object-cover group-hover:scale-95  transition duration-700'
//         src={item.img}
//       />
//       <CardFooter className='absolute rounded-b-none rounded-t-none rounded-r-lg rounded-l-lg  bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100'>
//         <div className='flex flex-grow gap-2 items-center'>
//           <img
//             alt='Breathing app icon'
//             className='rounded-full w-10 h-11 bg-black'
//             src={item.img}
//           />
//           <div className='flex flex-col'>
//             <p className='text-tiny text-white/60'>{item.desc}</p>
//             <p className='text-tiny text-white/60'>{item.title}</p>
//           </div>
//         </div>
//         {/* <Button radius='full' size='sm'>
//         Get App
//       </Button> */}
//       </CardFooter>
//     </Card>
//   ))}
// </div>
