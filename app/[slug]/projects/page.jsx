import Testimony from '@/components/carouseltestimony'
import Image from 'next/image'
import Link from 'next/link'
import image1 from '../../../public/img/bg-2.jpg'
import imagea from '../../../public/img/bg-3.jpg'
import Tagse from '@/components/Tagse.jsx'
import Bannerservice from '@/components/Bannerservice'
import directus from '@/lib/directus'
import { readItems, readItem } from '@directus/sdk'
import { notFound } from 'next/navigation'
import getAssetURL from '@/lib/get-asset-url'
///http://localhost:8055/items/service?fields=tag_name.tags_id.*

// async function getListPro () {
//   try {
//     const listPro = await directus.request(
//       readItems('services', {
//         fields: [
//           'slug',
//           'id',
//           'title',
//           'sort',
//           'date_created',
//           'main_image',
//           'about_image',
//           'desc',
//           'block',
//           'name',
//           'related_projects.*.*',
//           'service_related.*.*'
//         ],
//         sort: ['sort']
//         // limit: 99
//       }),
//       {
//         next: { revalidate: 7 }
//       }
//     )

//     console.log(listPro)
//     return listPro
//   } catch (error) {
//     notFound('Error fetching data Mr Hamza :', error)
//   }
// }
async function getProject () {
  try {
    const pages = await directus.request(
      readItems('project', {
        fields: [
          'slug',
          'id',
          'title',
          'sort',
          'date_created',
          'main_image',
          'about_image',
          'desc',
          'block',
          'name',
          'related_projects.*.*',
          'service_related.*.*'
        ],
        sort: ['sort']
        // limit: 99
      }),
      {
        // next: { revalidate: 7 }
        cache: 'no-store'
      }
    )

    console.log(pages)
    return pages
  } catch (error) {
    notFound('Error fetching data Mr Hamza :', error)
  }
}

export default async function Service () {
  const pro = await getProject()
  // const listPro = await getListPro()
  console.log(pro)
  // console.log(listPro)
  return (
    <div className=' pt-[80px] wraperitem'>
      <section className='ma bg-gray-900 bg-content text-white'>
        <div className='max-w-[1280px] mx-auto px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16'>
          <div className=' w-full '>
            <h2 className='text-3xl font-bold sm:text-4xl '>OUR WORK</h2>

            <p className='mt-4 text-gray-300 '>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            </p>
          </div>

            {pro?.map((pro) => (
                   <div
                    key={pro?.id}
                    className='mt-8   grid-cols-1 flex flex-wrap gap-8 md:mt-16 md:grid-cols-2 md:gap-12 lg:grid-cols-3'
                  >
                    <div className='flex items-start gap-4'>
                      <span className='shrink-0 rounded-full bg-pr1 p-4'>
                        {/* <svg
                          className='h-5 w-5'
                          fill='none'
                          stroke='currentColor'
                          viewBox='0 0 24 24'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path d='M12 14l9-5-9-5-9 5 9 5z'></path>
                          <path d='M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z'></path>
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth='2'
                            d='M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222'
                          ></path>
                        </svg> */}
                      </span>

                      <div>
                        <Link
                          href={`/${pro?.service_related?.slug}/projects/${pro?.id}`}
                        >
                          <h2 className='text-lg font-bold'>
                            {pro?.service_related?.title}
                          </h2>
                          <p className='mt-1 text-sm line-clamp-3 text-gray-300'>
                            {pro?.service_related?.desc}
                          </p>
                        </Link>
                      </div>
                    </div>
                  </div>

            ))}  
            
            </div>
            {/* <BlogList key={blog?.id} blog={blog} post={selectedPost} /> */}
      </section>

      {/* <section
        className='container-fluid  max-w-[1300px] mx-auto '
        id='service'
      >
        <div className='row m-10-hor'>
          <div className='col-md-8'>
            <div className='left'>
              <div className='col-md-4 w-full'>
                <div className='right bg-blue3'>
                  <ul className='services-list bg-blue3 '></ul>
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-4'>
            <div className='right'>
              {/* <ul className='services-list'>
                  {serv.length > 0 &&
                    serv.map(serv => {
                      return (
                        <li key={serv?.id}>
                          <Link href={`/services/${serv?.id}`}>
                            {serv?.title}
                          </Link>
                          <span>
                            {serv?.date_created} &bull; {serv?.title}
                          </span>
                        </li>
                      )
                      // <BlogList key={blog?.id} blog={blog} post={selectedPost} />
                    })}
                </ul> */}

      {/* <Bannerservice /> */}
      {/* </div>
          </div>
        </div> */}
      {/* // </section> */}
      <Testimony />
    </div>
  )
}
