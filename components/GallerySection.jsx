'use client'
import React, { useState, useEffect } from 'react'
import { HiOutlineChevronLeft, HiOutlineChevronRight } from 'react-icons/hi'
import { Card, CardHeader, CardBody, CardFooter } from '@nextui-org/react'
import Image from 'next/image'
import getAssetURL from '@/lib/get-asset-url'
// import axios from 'axios'
export const revalidate = 5
const GallerySection = ({ proj }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [activeImage, setActiveImage] = useState(0)
  const [activeImageInGallery, setActiveImageInGallery] = useState(0)
  const [images, setImages] = useState([])
  console.log('proj', proj)
  useEffect(() => {
    setImages(proj?.gallery?.map(client => client))
  }, [proj])

  console.log(proj?.gallery?.map(client => client))

  // useEffect(() => {
  //   // Handle wrapping around to the beginning or end of the array
  //   if (activeImage < 0) {
  //     setActiveImage(proj?.related_client?.gallery?.length - 1)
  //   } else if (activeImage >= proj?.related_client?.gallery?.length) {
  //     setActiveImage(0)
  //   }
  // }, [activeImage, proj])

  // const projectGallery =
  //   proj?.related_client?.length > 0 &&
  //   proj?.related_client?.map(client => {
  //     return client?.gallery.map(gallery => {
  //       return gallery
  //     })
  //   })

  // console.log('projectGallery', projectGallery)
  // console.log('projectGallery', projectGallery.length)

  // const toggleModal = () => {
  //   setModalIsOpen(!modalIsOpen)
  // }

  // const handleNextImage = () => {
  //   setActiveImage(prevActiveImage => prevActiveImage + 1)
  // }

  // const handlePreviousImage = () => {
  //   setActiveImage(prevActiveImage => prevActiveImage - 1)
  // }
  // const [data, setData] = useState([])

  // useEffect(() => {
  //   axios
  //     .get('https://jsonplaceholder.typicode.com/posts/1/comments')
  //     .then(response => {
  //       setData(response.data)
  //       console.log('response.data', response)
  //     })
  //     .catch(error => {
  //       console.log(error)
  //     })
  // }, [])

  const closeModal = () => {
    setModalIsOpen(false)
  }

  const openModal = () => {
    setModalIsOpen(true)
  }

  const handleNextImageInGallery = () => {
    setActiveImageInGallery((activeImageInGallery + 1) % images.length)
  }

  // Handle wrapping around to the beginning or end of the array
  const handlePreviousImageInGallery = () => {
    setActiveImageInGallery(
      (activeImageInGallery - 1 + images.length) % images.length
    )
  }

  return (
    <div>
      <div
        onClick={() => {
          openModal()
        }}
      >
        <Card
          isFooterBlurred
          shadow='sm'
          className='w-full cursor-pointer  group  bg-transparent   hover:drop-shadow  hover:shadow-2xl   rounded-b-lg rounded-t-none rounded-r-lg rounded-l-lg rounded-lg h-[250px]  '
        >
          <Image
            className='w-full h-[300px] object-cover z-0  rounded-lg group-hover:shadow-lg group-hover:scale-95  transition duration-700 ease-in-out '
            src={getAssetURL(proj?.main_image?.filename_disk)}
            alt=''
            loading='lazy'
            height={600}
            width={600}
          />
          <CardFooter className='absolute w-[100%] space-x-3 items-start object-cover bg-cover rounded-b-none rounded-t-none rounded-r-lg rounded-l-lg  bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100'>
            <div className='flex items-center  bg-black rounded-full w-[30px] h-[30px]'>
              <img
                alt='Breathing app icon'
                className='rounded-full object-cover bg-cover w-[30px] h-[30px] bg-black/50'
                src={getAssetURL(proj?.client_image?.filename_disk)}
              />
            </div>

            <div className='flex w-[90%] object-cover flex-col gap-1 items-start'>
              <p className='text-tiny text-white/60'>{proj?.client_name}</p>
              <p className='text-tiny line-clamp-2 text-white/60'>
                {proj?.summary}
              </p>
            </div>
            {/* <Button radius='full' size='sm'>
          Get App
            </Button> */}
          </CardFooter>
          {/* {proj?.client_name} */}
        </Card>
      </div>
      {/* modal image  hidden  */}
      <div
        onClose={() => setActiveImage(index)}
        // style={{
        //   display:
        //     index === activeImageInGallery && modalIsOpen
        //       ? 'block'
        //       : 'none'
        //   // zIndex: index === activeImage ? 0 : 1
        // }}
        style={{
          display: activeImage === 0 && modalIsOpen ? 'block' : 'none'
        }}
        className='modal p-3 bg-black scrollbar-none  scrollbar-hide  bg-cover bg-center w-full h-full items-center flex flex-col  justify-center   '
      >
        <div className='grid lg:p-2 grid-cols-1 gap-4 md:grid-cols-1 lg:grid-cols-3 lg:gap-8'>
          <div className=' lg:h-[95vh]  md:h-[95vh]  min-h-[50vh] rounded-lg bg-gray-100 lg:col-span-2'>
            <Card
              isFooterBlurred
              shadow='sm'
              // key={client.id}
              // index={index}
              // style={{
              //   display:
              //     index === activeImageInGallery && modalIsOpen
              //       ? 'block'
              //       : 'none'
              //   // zIndex: index === activeImage ? 0 : 1
              // }}
              className='  h-[100%] relative   w-full scrollbar-none scrollbar-hide modal-content  z-20 object-cover mx-auto cursor-pointer  model-1    bg-cover bg-center   items-center flex flex-col  justify-center  group-hover:drop-shadow  rounded-b-lg rounded-t-none rounded-r-lg rounded-l-lg rounded-lg '
            >
              <CardHeader className='bg-transparent  absolute items-center z-10 top-[2px]   justify-between  flex flex-row p-5 text-right   w-full  '>
                <div className='absolute top-0 left-4'>
                  <span
                    className='close z-50   shadow-black drop-shadow-md font-medium   text-gray-300   text-[35px] cursor-pointer'
                    onClick={closeModal}
                  >
                    &times;
                  </span>
                </div>
                <div className='absolute top-3 right-6'>
                  <span className='image-count  shadow-gray-900 drop-shadow-md drop-sh font-medium text-[18px] text-gray-300 '>
                    {activeImageInGallery + 1}
                    <span className='mx-1 text-[18px]'>-</span>
                    {proj?.gallery?.length}
                  </span>
                </div>
              </CardHeader>

              <HiOutlineChevronLeft
                className=' rounded-full hover:bg-pr1 hover:border hover:border-pr1  hover:text-white  border-gray-300  m-3 border text-gray-300  absolute bottom-[2%]    left-[2%] px-2 text-[35px] z-40 flex justify-center items-center  marker:hidden'
                onClick={() => {
                  handlePreviousImageInGallery()
                }}
              />
              <HiOutlineChevronRight
                className='rounded-full  hover:bg-pr1 hover:border hover:border-pr1  hover:text-white  border-gray-300 m-3 border text-gray-300 absolute bottom-[2%] left-[9%] px-2 text-[35px] z-40 flex justify-center items-center  marker:hidden'
                onClick={() => {
                  handleNextImageInGallery()
                }}
              />

              {/* <p className='caption1 m-10 p-10 max-w-[90%]   text-left  '></p> */}

              {/* <div
                  className='absolute   p-3 w-full z-50 rounded-b-none rounded-t-none rounded-r-lg rounded-l-lg bg-black/50 bottom-0
                  border-t-1 border-default-600 dark:border-default-100'
                >
                  <CardFooter className='flex w-full h-[30%] flex-col gap-1 items-start'>
                    <p className='text-default-600  max-sm:line-clamp-3  dark:text-default-100 text-md font-bold'>
                      {proj?.client_name}
                    </p>

                    <p className=' z-50  max-sm:line-clamp-3  text-white/80 space-y-[0.5px] text-sm font-Montserrat'>
                      {proj.content}
                    </p>
                  </CardFooter>
                </div> */}
              <CardBody className='relative slect-none p-0 m-0  max-w-full h-full overflow-y-hidden scrollbar-none scrollbar-hide'>
                {proj.gallery?.length > 0 &&
                  proj.gallery?.map((images, index) => {
                    return (
                      <img
                        src={getAssetURL(images?.directus_files_id)}
                        alt='image'
                        key={index}
                        loading='lazy'
                        // index={index}
                        className='w-full    cursor-default  select-none h-full object-cover  bg-contain '
                        style={{
                          display:
                            index === activeImageInGallery ? 'block' : 'none'
                        }}
                      />
                    )
                  })}
              </CardBody>
            </Card>
          </div>
          <div className='h-auto text-black p-3 rounded-lg bg-pr6'>
            <div className='flow-root'>
              <dl className='-my-3 divide-y divide-gray-100 text-sm  '>
                <div className='grid grid-cols-1 gap-1 py-3 sm:grid-cols-4 sm:gap-1'>
                  <dt className='font-medium text-gray-900 dark:text-white'>
                    Client
                  </dt>
                  <dd className='text-gray-700 dark:text-gray-100 sm:col-span-3'>
                    <span>: </span> {proj?.client_name}
                  </dd>
                </div>
                <div className='grid grid-cols-1 gap-1 py-3 sm:grid-cols-4 sm:gap-1'>
                  <dt className='font-medium text-gray-900 dark:text-white'>
                    Date
                  </dt>
                  <dd className='text-gray-700 dark:text-gray-100 sm:col-span-3'>
                    : {proj?.project_date}
                  </dd>
                </div>
                <div className='grid grid-cols-1 gap-1 py-3 sm:grid-cols-4 sm:gap-1'>
                  <dt className='font-medium text-gray-900 dark:text-white'>
                    Duration
                  </dt>
                  <dd className='text-gray-700 dark:text-gray-100 sm:col-span-3'>
                    : {proj?.Duration}
                  </dd>
                </div>

                <div className='grid grid-cols-1 gap-1 py-3 sm:grid-cols-4 sm:gap-1'>
                  <dt className='font-medium text-gray-900 dark:text-white'>
                    Budget
                  </dt>
                  <dd className='text-gray-700 dark:text-gray-100 sm:col-span-3'>
                    : {proj?.Budget}
                  </dd>
                </div>
                <div className='grid grid-cols-1 gap-1 py-3 sm:grid-cols-4 sm:gap-1'>
                  <dt className='font-medium text-gray-100 '>Summary</dt>
                  <dd className='text-gray-700 dark:text-gray-100 sm:col-span-3'>
                    {/* {data.map(post => (
                        <div key={post.id}>{post.body}</div>
                      ))} */}

                    {proj?.summary}
                  </dd>
                </div>
              </dl>
            </div>
            <br />
            <div className='flex flex-col gap-2 items-start'>
              <p className=' text-gray-100 text-md font-bold'>OVERVIEW</p>
              <hr className='w-full text-gray-100' />
              <p className=' text-gray-100  text-md font-bold'>
                {proj?.client_name}
              </p>
              <p className=' z-50 text-gray-100   space-y-[0.5px] text-sm font-Montserrat'>
                {proj?.content}
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* modal image  hidden  */}
    </div>
  )
}

export default GallerySection

// const GallerySection = ({ proj }) => {
//   const [activeImage, setActiveImage] = useState(0)
//   const [images, setImages] = useState([])

//   useEffect(() => {
//     const images = proj?.related_client?.map(client =>
//       client?.gallery?.map(gallery => gallery)
//     )
//     setImages(images)
//     console.log(images)
//   }, [proj])

//   return (
//     <>
//       <div>
//         {proj?.related_client?.map((client, index) => (
//           <div key={client.id}>
//             <modaltitle index={index} onClick={() => setActiveImage(index)}>
//               {client.client_name}
//             </modaltitle>
//           </div>
//         ))}
//       </div>
//       <Modal isOpen={true} onClose={() => setActiveImage(0)}>
//         <ModalBody>
//           {images?.length > 0 &&
//             images[activeImage]?.map((image, index) => {
//               console.log(image)
//               return (
//                 <Card
//                   key={image.id}
//                   index={index}
//                   activeImage={activeImage === index}
//                 >
//                   <img
//                     src={getAssetURL(image.directus_files_id)}
//                     alt='image'
//                     loading='lazy'
//                     index={index}
//                     className='w-full h-full object-cover'
//                     // style={{
//                     //   display: activeImage === index ? 'block' : 'none'
//                     // }}
//                   />
//                   <p>{image.summary}</p>
//                 </Card>
//               )
//             })}
//         </ModalBody>
//       </Modal>
//     </>
//   )
// }

// export default GallerySection

// //BlackBox Aoutocomplete
// import React, { useState } from 'react'
// import { HiOutlineChevronLeft, HiOutlineChevronRight } from 'react-icons/hi'
// import {
//   Card,
//   CardHeader,
//   CardBody,
//   CardFooter,
//   Image,
//   Button
// } from '@nextui-org/react'
// import getAssetURL from '@/lib/get-asset-url'

// export default function GallerySection ({ proj }) {
//   console.log(proj)

//   const [activeImage, setActiveImage] = useState(0)
//   const [modalIsOpen, setModalIsOpen] = useState(false)

//   const openModal = () => {
//     setModalIsOpen(true)
//   }
//   const closeModal = () => {
//     setModalIsOpen(0)
//   }

//   const handleNextImage = () => {
//     setActiveImage((activeImage + 1) % proj?.related_client?.gallery?.length)
//   }
//   const handlePreviousImage = () => {
//     setActiveImage(
//       (activeImage - 1 + proj?.related_client?.gallery?.length) %
//         proj?.related_client?.gallery?.length
//     )
//   }

//   return (
//     <>
//       <div className={`model-1 block  `}>
//         <div className=' w-full h-full flex   flex-col justify-start items-center'>
//           {proj?.related_client?.length > 0 &&
//             proj?.related_client?.map((proj, index) => {
//               console.log(proj)
//               return (
//                 <>
//                   <Card
//                     isFooterBlurred
//                     shadow='sm'
//                     onClick={() => openModal()}
//                     key={proj?.id}
//                     className=' cursor-pointer w-full group bg-transparent hover:drop-shadow hover:shadow-2xl rounded-b-lg rounded-t-none rounded-r-lg rounded-l-lg rounded-lg h-[250px]'
//                   >
//                     <img
//                       src={getAssetURL(proj?.main_image?.filename_disk)}
//                       alt='Relaxing app background'
//                       className=' w-full rounded-lg group-hover:shadow-lg  h-full object-cover group-hover:scale-95  transition duration-700'
//                       loading='lazy'
//                       onClick={() => openModal()}
//                     />

//                     <CardFooter
//                       className='absolute rounded-b-none rounded-t-none rounded-r-lg rounded-l-lg bg-black/40 bottom-0 z-1
//                      border-t-1 border-default-600 dark:border-default-100'
//                     >
//                       <div className='flex flex-grow gap-2 items-center'>
//                         <img
//                           alt='Breathing app icon'
//                           className='w-[40px] h-[40px] rounded-full'
//                           src={getAssetURL(proj?.client_image?.filename_disk)}
//                         />
//                         <p className='text-tiny text-white/80  font-bold'>
//                           {proj?.client_name}
//                         </p>
//                       </div>
//                     </CardFooter>
//                   </Card>
//                   <div
//                     className='modal z-40  p-16 bg-gradient-to-tl bg-blend-saturation bg-transparent via-zinc-900 from-pr2 to-black overflow-y-hidden scrollbar-none scrollbar-hide model-1  bg-cover bg-center w-full h-[100vh]   '
//                     style={{ display: modalIsOpen ? 'block' : 'none' }}
//                   >
//                     <Card
//                       isFooterBlurred
//                       shadow='sm'
//                       className=' min-h-[35vh] overflow-y-hidden scrollbar-none scrollbar-hide modal-content  max-h-[96%] z-30 object-cover mx-auto cursor-pointer max-w-[1150px] mt-16 model-1 bg-black   bg-cover bg-center   items-center flex flex-col  justify-center  w-full group hover:drop-shadow  rounded-b-lg rounded-t-none rounded-r-lg rounded-l-lg rounded-lg '
//                     >
//                       <CardHeader className='absolute z-10 top-1 right-1 justify-end p-5 text-right   w-full  '>
//                         <span className='image-count font-medium text-[20px] text-black '>
//                           {activeImage + 1}
//                           <span className='mx-1 text-[18px]'>/</span>
//                           {proj?.gallery?.length}
//                         </span>
//                       </CardHeader>

//                       <HiOutlineChevronLeft
//                         className='text-white absolute bottom-[50%] bg-opacity-90  from-pr1  bg-blend-screen    via-gold3         bg-stripe-gradient  left-[-1%] px-2 text-[65px] z-40 flex justify-center items-center  marker:hidden'
//                         onClick={handlePreviousImage}
//                       />
//                       <HiOutlineChevronRight
//                         className='text-white absolute bottom-[50%] right-[-1%] px-2 text-[65px] z-40 flex justify-center items-center  marker:hidden'
//                         onClick={handleNextImage}
//                       />
//                       <CardFooter
//                         className='absolute  max-h-[40%] p-8 w-full  z-50 rounded-b-none rounded-t-none rounded-r-lg rounded-l-lg bg-black/50 bottom-0
//                             border-t-1 border-default-600 dark:border-default-100'
//                       >
//                         <div className='flex flex-col gap-2 items-start'>
//                           <p className='text-default-600 dark:text-default-100 text-md font-bold'>
//                             {proj?.client_name}
//                           </p>

//                           <p className=' z-50 text-white/80 space-y-[0.5px] text-sm font-Montserrat'>
//                             {proj?.summary}
//                           </p>
//                         </div>
//                       </CardFooter>
//                       <p className='caption1 m-10 p-10 max-w-[90%]   text-left  '></p>

//                       <span
//                         className='close absolute  z-50 top-[5%] left-[5%] text-black text-[35px] cursor-pointer'
//                         onClick={closeModal}
//                       >
//                         &times;
//                       </span>
//                       {proj?.gallery?.length > 0 &&
//                         proj.gallery?.map((gallery, index) => {
//                           console.log(gallery)
//                           return (
//                             <img
//                               onClick={() => openModal()}
//                               key={gallery.id}
//                               index={index}
//                               className={`  modal-content  object-cover bg-cover bg-transparent relative   w-full  `}
//                               style={{
//                                 display:
//                                   activeImage === index ? 'block' : 'none'
//                               }}
//                               src={getAssetURL(gallery?.directus_files_id.filename_disk)}
//                               alt='{model?.image_model.client_details_id}'
//                               loading='lazy'
//                             />
//                           )
//                         })}
//                     </Card>
//                   </div>
//                 </>
//               )
//             })}
//         </div>
//       </div>
//     </>
//   )
// }

//      [
//        {
//          id: 1,
//          main_image: '1cc3390d-4657-4b07-b04a-f7d7b143b21b',
//          date_created: '2024-01-08T06:49:04.113Z',
//          summary: 'magna aliquam erat volutpat enim ad minim veniam. Duis autem vel eum iriure dolor in hendrerit in. quaerat odit ex exercitationem pariatur quibusdam veritatis quisquam laboriosam esse beatae hic perferendis velit deserunt soluta iste repellendus officia in neque veniam debitis Consectetur, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium vitae, consequuntur minima tempora cupiditate ratione est, ad molestias deserunt in ipsam ea quasi cum culpa adipisci dolores voluptatum fuga at! assumenda provident lorem ipsum dolor sit amet, consectetur.',
//          client_name: 'shady fahim',
//          sort: null,
//          gallery: [ [Object], [Object] ]
//        },
//        {
//          id: 2,
//          main_image: 'e83669a8-a731-45c1-b692-c33f2bfd805b',
//          date_created: '2024-01-08T07:00:15.540Z',
//          summary: 'magna aliquam erat volutpat enim ad minim veniam. Duis autem vel eum iriure dolor in hendrerit in. quaerat odit ex exercitationem pariatur quibusdam veritatis quisquam laboriosam esse beatae hic perferendis velit deserunt soluta iste repellendus officia in neque veniam debitis Consectetur, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium vitae, consequuntur minima tempora cupiditate ratione est, ad molestias d',
//          client_name: 'Rania Darkal',
//          sort: null,
//          gallery: [ [Object], [Object], [Object], [Object], [Object] ]
//        }
//      ]
//      {
//        id: '679cb50c-a282-4106-9b52-c39eda8b96bd',
//        title: 'THE LUXURY RESIDENCE',
//        sort: null,
//        main_image: '1cc3390d-4657-4b07-b04a-f7d7b143b21b',
//        status: 'published',
//        related_client: [
//          {
//            id: 1,
//            status: 'published',
//            sort: null,
//            date_created: '2024-01-08T06:49:04.113Z',
//            date_updated: '2024-01-10T22:24:42.105Z',
//            summary: 'magna aliquam erat volutpat enim ad minim veniam. Duis autem vel eum iriure dolor in hendrerit in. quaerat odit ex exercitationem pariatur quibusdam veritatis quisquam laboriosam esse beatae hic perferendis velit deserunt soluta iste repellendus officia in neque veniam debitis Consectetur, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium vitae, consequuntur minima tempora cupiditate ratione est, ad molestias deserunt in ipsam ea quasi cum culpa adipisci dolores voluptatum fuga at! assumenda provident lorem ipsum dolor sit amet, consectetur.',
//            content: null,
//            client_name: 'shady fahim',
//            service_Categorie: 'modern design',
//            main_image: [Object],
//            project: [Object],
//            client_image: [Object],
//            gallery: [Array]
//          },
//          {
//            id: 2,
//            status: 'published',
//            sort: null,
//            date_created: '2024-01-08T07:00:15.540Z',
//            date_updated: '2024-01-08T15:52:27.440Z',
//            summary: 'magna aliquam erat volutpat enim ad minim veniam. Duis autem vel eum iriure dolor in hendrerit in. quaerat odit ex exercitationem pariatur quibusdam veritatis quisquam laboriosam esse beatae hic perferendis velit deserunt soluta iste repellendus officia in neque veniam debitis Consectetur, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium vitae, consequuntur minima tempora cupiditate ratione est, ad molestias d',
//            content: null,
//            client_name: 'Rania Darkal',
//            service_Categorie: 'Architecture Design',
//            main_image: [Object],
//            project: [Object],
//            client_image: [Object],
//            gallery: [Array]
//          }
//        ]
//      }
