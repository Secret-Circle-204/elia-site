import Testimony from '@/components/carouseltestimony'
import Link from 'next/link'
// import image1 from '../../public/img/porto.jpg'
// import imagea from '../../public/img/service2.jpg'
// import Tags from '@/components/Tags.jsx'
import Tagse from '@/components/Tagse.jsx'
import Bannerservice from '@/components/Bannerservice'
import directus from '@/lib/directus'
import { readItems, readItem } from '@directus/sdk'
import { notFound } from 'next/navigation'
import getAssetURL from '@/lib/get-asset-url'
// import ServicesCard from '@/components/ServicesCard'
// const getAssetURL
//   id: 1,
//   title: 'About us',
//   subtitle: 'Perfection Concept Design',
//   content:
//     ' We are a company that specializes in designing and manufacturing high-quality furniture pieces for homes, offices, and commercial spaces. Our team of experienced and creative designers work tirelessly to create furniture pieces that not only look great but are also functional and comfortable. We pride ourselves on using the best materials and production techniques to ensure that our pieces last for years to come. Our mission is to provide our customers with exceptional service and quality products that enhance their living and working spaces.',

//   main_image: '/img/bg-3.jpg',
//   about_image: '/img/bg-1.jpg',
//   image_2: '/img/bg-3.jpg'
// }

async function getList() {
  try {
    const list = await directus.request(
      readItems('services', {
        next: { revalidate: 1 }
        // cache: 'no-store'
      }, {
        fields: ['slug', 'id', 'title', 'sort', 'date_created'],
        sort: ['sort']
        // limit: 99
      }),

    )

    // console.log(list)
    return list
  } catch (error) {
    notFound('Error fetching data Mr Hamza :', error)
  }
}

async function getService(slug) {
  try {
    const serv = await directus.request(readItem('services', slug,
      {
        fields: ['slug', 'id', 'title', 'sort', 'date_created', 'publish_date', 'desc', 'block', 'name', 'main_image','related_projects', 'related_projects.*.*', 'publish_date', { related_projects: ['*', 'name'] }],
        // sort: ['sort']
        // limit: 99
      }
    ));
    return serv;
  } catch (error) {
    notFound();
  }
}


// async function getTags() {
//   return directus.request(
//     readItems('services', {
//       fields: ['slug', 'id', 'title', 'related_projects', 'related_projects.*.*', 'publish_date', { related_projects: ['*', 'name'] }],
//       // sort: ['-publish_date'],
//     })
//   );
// }

export default async function DynamicPage({ params }) {
  const serv = await getService(params.slug);
  const list = await getList();
  // const tags = await getTags()


  // console.log('listPage', list)
  // console.log('servPage', serv)
  // console.log('Tags', tags)

  return (
    <>
      <div className=' pt-[80px]  wraperitem'>
        <section
          className=' jumbotron breadcumb relative  h-[60vh]  object-cover items-center bg-center object-center bg-cover w-full'
          style={{
            backgroundImage: `url(${getAssetURL(serv?.main_image)})`,
          }}
        >
          <div className=' absolute bottom-4 left-0 right-0 items-center  text-center     '>
            <div className='  text-white max-w-[1200px] mx-auto px-16 mt-40 sm:mt-[200px] sm:items-center lg:px-5    flex flex-wrap sm:flex  justify-between  max-sm:justify-center text-center  text-2xl drop-shadow-lg  transition-shadow duration-300 font-semibold'>
              <div className='items-center  text-center    '>
                <h1 className='lg:text-left ml-[-25px] items-center first-letter:capitalize  text-center    '>
                  {serv?.title}
                </h1>
              </div>

              <div className=' text-sm font-light text-center items-center '>
                {/* <span className='first-letter:capitalize'>{serv?.title}</span> */}
              </div>
            </div>
          </div>
        </section>

        <section className='container-fluid max-w-[1350px] mx-auto' id='service'>
          <div className='row m-10-hor'>
            <div className='col-md-8'>
              <div className='left'>
                <div className='mainimg'>
                  {/* <Image src={Image} alt='imgservice' /> */}
                </div>
                <div className='content'>
                  <div className='title'>{serv?.title}</div>
                  <div className='desc'>
                    <p>{serv?.desc}</p>

                    <blockquote>{serv?.block}</blockquote>
                    {/* {serv.project.name} */}
                  </div>
                </div>
              </div>
            </div>
            <div className='col-md-4 rounded-3xl'>
              <div className='right rounded-3xl'>
                {/*  list of services */}
                <ul className='services-list   space-y-2 rounded-2xl'>
                  {list?.length > 0 &&
                    list?.map(list => {
                      return (
                        <li className=' hover:scale-[.98]' key={list?.slug}>
                          <Link href={`/${list?.slug}`}>{list?.title}</Link>
                        </li>
                      )
                    })}
                </ul>

                <div className=' '>
                  <h3 className='h3-tag pt-5'>Projects</h3>
                  <ul className='tagg group  '>
                    {serv?.related_projects && serv?.related_projects?.map((tag, index) => (
                      <li
                        key={index}
                        className='group bg-blue3 li-tag hover:bg-pr1 rounded-[5px] hover:scale-105  '
                      >
                        <Tagse tag={tag} related_projects={serv?.related_projects?.map((tag) => tag.name)} />

                      </li>
                    ))}

                  </ul>
                  {/* <Tagse key={serv?.slug} tag={serv}  /> */}
                </div>

                {/* <div className=''><Tags /></div> */}

                <Bannerservice />
              </div>
            </div>
          </div>
        </section>

        {/* <ServicesCard serv={serv} /> */}
        <Testimony />
      </div>
    </>
  )
}

// export async function getServerSideProps( ) {
//  return {
//   props: {
//    pageComponentProps
//   }
//  }
// }
