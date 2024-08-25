'use client'
import { Button, Modal } from 'bootstrap'
import image1 from '../public/img/bg-1.jpg'
//import image2 from '../public/img/bg-3.jpg'
//import image4 from '../public/img/bg-2.jpg'
//import image3 from '../public/img/bg-4.jpg'
import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Prev, Next } from 'react-bootstrap/esm/PageItem'
// import { directus } from '../api/directus'
import getAssetURL from '@/lib/get-asset-url'
import Image from 'next/image'
import Link from 'next/link'

export default function MoreModels () {
  const model = [
    {
      id: 1,
      title: 'Dolor sit amet. Lorem ipsum dolor sit amet.',
      url: 'https://shtheme.info/demosd/main-artha2/wp-content/uploads/2019/04/1.jpg',

      customerDetails: {
        desc: 'Lorem ipsum dolor sit amet.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro debitis perferendis nobis animi laborum dicta.',
        name: 'John Doe',
        email: 'johndoe@example.com'
      },

      image_model: [
        {
          id: 0,
          title: 'Image 1',
          desc: 'This is image 1.',
          url: 'https://shtheme.info/demosd/main-artha2/wp-content/uploads/2019/04/3.jpg'
        },
        {
          id: 1,
          title: 'Image 2',
          desc: 'This is image 2.',
          url: 'https://shtheme.info/demosd/main-artha2/wp-content/uploads/2019/04/1.jpg'
        },
        {
          id: 2,
          title: 'Image 2',
          desc: 'This is image 2.',
          url: 'https://shtheme.info/demosd/main-artha2/wp-content/uploads/2019/04/2.jpg'
        }
        // ... more images
      ]
    },
    {
      id: 2,
      title: 'Dolor sit amet. Lorem ipsum dolor sit amet.',
      url: 'https://shtheme.info/demosd/main-artha2/wp-content/uploads/2019/04/2.jpg',
      customerDetails: {
        desc: 'Lorem ipsum dolor sit amet.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro debitis perferendis nobis animi laborum dicta.',
        name: 'John Doe',
        email: 'johndoe@example.com'
      },
      image_model: [
        {
          id: 1,
          title: 'Image 1',
          desc: 'This is image 1.',
          url: 'https://shtheme.info/demosd/main-artha2/wp-content/uploads/2019/04/3.jpg'
        },
        {
          id: 2,
          title: 'Image 2',
          desc: 'This is image 2.',
          url: 'https://shtheme.info/demosd/main-artha2/wp-content/uploads/2019/04/1.jpg'
        },
        {
          id: 3,
          title: 'Image 2',
          desc: 'This is image 2.',
          url: 'https://shtheme.info/demosd/main-artha2/wp-content/uploads/2019/04/4.jpg'
        }
        // ... more images
      ]
    },
    {
      id: 3,
      title: 'Dolor sit amet. Lorem ipsum dolor sit amet.',
      url: 'https://shtheme.info/demosd/main-artha2/wp-content/uploads/2019/04/2.jpg',
      customerDetails: {
        desc: 'Lorem ipsum dolor sit amet.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro debitis perferendis nobis animi laborum dicta.',
        name: 'John Doe',
        email: 'johndoe@example.com'
      },
      image_model: [
        {
          id: 1,
          title: 'Image 1',
          desc: 'This is image 1.',
          url: 'https://shtheme.info/demosd/main-artha2/wp-content/uploads/2019/04/3.jpg'
        },
        {
          id: 2,
          title: 'Image 2',
          desc: 'This is image 2.',
          url: 'https://shtheme.info/demosd/main-artha2/wp-content/uploads/2019/04/1.jpg'
        },
        {
          id: 3,
          title: 'Image 2',
          desc: 'This is image 2.',
          url: 'https://shtheme.info/demosd/main-artha2/wp-content/uploads/2019/04/4.jpg'
        }
        // ... more images
      ]
    }
  ]
  console.log(model)

  const [activeImage, setActiveImage] = useState(0)
  const [modalIsOpen, setModalIsOpen] = useState(false)
  // const [models, setModels] = useState(null)

  const openModal = () => {
    setModalIsOpen(true)
  }
  const closeModal = () => {
    setModalIsOpen(0)
  }

  const handleNextImage = () => {
    setActiveImage((activeImage + 1) % model?.[0]?.image_model?.length)
  }
  const handlePreviousImage = () => {
    setActiveImage(
      (activeImage - 1 + model?.[0]?.image_model?.length) %
        model?.[0]?.image_model?.length
    )
  }

  // console.log(model.image_model)

  return (
    <div className={`model-1 block  `}>
      <div className=' w-full h-full flex   flex-col justify-start items-center'>
        {/* <Image src={` ${getAssetURL}${models[0]?.filename_disk} `} alt='' /> */}
        <div>
          <Image
            src={model?.[0]?.url}
            alt='{model?.data_created}'
            loading='lazy'
            width={600}
            height={600}
            onClick={openModal}
            className=' max-h-[25vh]   image-modal-trigger relative  cursor-pointer'
          />
        </div>
        <div className=' lg:w-[348px] w-[48%]  m-1 p-1 bg-pr1 '>
          <h4 className='text-white  text-center'> {model?.[0].title}</h4>
        </div>
      </div>

      <div
        className='modal p-16 model-1 bg-black   bg-cover bg-center w-full h-full items-center flex flex-col  justify-center   '
        style={{ display: modalIsOpen ? 'block' : 'none' }}
      >
        <div className=' modal-content   h-[100vh] max-h-[98vh] z-30 object-cover bg-cover bg-center w-full items-center flex flex-col  justify-center p-16 bg-transparent'>
          {/* console.log(model.image_model[1].directus_files_id) */}

          {model.length > 0 &&
            model[0]?.image_model?.map((image, index) => (
              <Image
                key={image?.id}
                onClick={openModal}
                index={index}
                style={{
                  display: activeImage === index ? 'block' : 'none'
                }}
                className='modal-content object-cover bg-cover bg-transparent relative h-full   w-screen   '
                src={image?.url}
                alt='{model?.image_model.client_details_id}'
                loading='lazy'
                width={600}
                height={600}
              />
            ))}

          <Prev
            className='text-white absolute bottom-[50%] left-[3%] text-[65px] z-40 flex justify-center items-center  marker:hidden'
            onClick={handlePreviousImage}
          />

          <Next
            className='text-white absolute bottom-[50%] right-[3%] text-[65px] z-40 flex justify-center items-center  marker:hidden'
            onClick={handleNextImage}
          />

          <span className='image-count'>
            {activeImage + 1}
            <span className='mx-1 text-[15px]'>/</span>
            {model?.[0]?.image_model?.length}
          </span>
          <div className=' absolute p-10 bg-black/50 w-full bottom-[0%] z-40  '>
            <p className='caption1 m-10 p-10 max-w-[90%]   text-left  '>
              {model?.[0]?.customerDetails?.desc}
            </p>
          </div>
          <span
            className='close absolute  z-50 top-[5%] left-[5%] text-pr1 text-[35px] cursor-pointer'
            onClick={closeModal}
          >
            &times;
          </span>
          {/* <div className='caption1'>{imageModel?.caption1}</div> */}
        </div>
      </div>
    </div>
  )
}

// const fetchImageModels = async () => {
//   const url = 'http://localhost:5173/work.json'
//   const response = await fetch(url)
//   const imageModels = await response.json()

//   console.log(imageModels)
//   return imageModels
//   //setImageModels(imageModels.imageModels)
// }
// const imageModels = await fetchImageModels()

// export default function ImageGallerys () {
//   //const [imageModels, setImageModels] = useState([])
//   const [activeImage, setActiveImage] = useState(0)
//   const [modalIsOpen, setModalIsOpen] = useState(false)

//   useEffect(() => {
//     fetchImageModels()
//   }, [])

//   const openModal = () => {
//     setModalIsOpen(true)
//   }

//   const handleNextImage = () => {
//     setActiveImage((activeImage + 1) % imageModels.imageModels.length)
//   }

//   const handlePreviousImage = () => {
//     setActiveImage(
//       (activeImage - 1 + imageModels.imageModels.length) %
//         imageModels.imageModels.length
//     )
//   }

//   const closeModal = () => {
//     setModalIsOpen(false)
//   }

//   //  "imageModel": {
//   //     "data": {
//   //      "id": 1,
//   //      "model": {
//   //       "attri": {
//   //        "id": 1,
//   //        "thumbnailUrl": "https://www.shutterstock.com/shutterstock/photos/1581145465/display_1500/stock-vector-astronaut-looks-to-earth-from-moon-1581145465.jpg"
//   //       },
{
  /* <div className='image-modal'>
                <Image
                  className=' max-h-[25vh] image-modal-trigger relative scroll-smooth cursor-pointer'
                  src={image_models[0].mode[activeImage]}
                  alt="{imageModels[activeImage].alt}"
                  onClick={handleModalOpen}
                />
              
                <div className='image-modal-nav'>
                  <Prev onClick={handlePreviousImage} />
                  <Next onClick={handleNextImage} />
                </div>
                <div className='image-modal-count'>
                  {activeImage + 1} / {image_models[0].mode.length}
                </div>
              
                {modalIsOpen && (
                  <div className='image-modal-overlay'>
                    <div className='image-modal-container'>
                      <Image
                        src={image_models[0].mode[activeImage]}
                        alt="{imageModels[activeImage].alt}"
                        className='image-modal-img'
                      />
                      <div className='image-modal-nav'>
                        <Prev onClick={handlePreviousImage} />
                        <Next onClick={handleNextImage} />
                      </div>
                      <div className='image-modal-count'>
                        {activeImage + 1} / {image_models[0].mode.length}
                      </div>
                      <button
                        className='image-modal-close-btn'
                        onClick={handleModalClose}
                      >
                        إغلاق
                      </button>
                    </div>
                  </div>
                )}
              </div> */
}
//   return (
//     <>
//       <div className='model-1 '>
//         <Image
//           src={imageModels?.imageModels?.[activeImage]?.thumbnailUrl}
//           alt='{imageModels?.[activeImage]?.alt}'
//           onClick={openModal}
//           className=' max-h-[25vh] image-modal-trigger relative scroll-smooth cursor-pointer'
//         />

//         <div
//           className='modal pt-16 model-1 '
//           style={{ display: modalIsOpen ? 'block' : 'none' }}
//         >
//           {imageModels?.data?.map((imgm, index) => {
//             return (
//               <div
//                 key={index}
//                 className=' modal-content h-[100vh] max-h-[98vh] z-30 object-cover bg-cover bg-center w-full items-center flex flex-col  justify-center p-16 bg-transparent'
//               >
//                 <div>
//                   <Image
//                      key={imgm.id}
//                     className='modal-content object-cover bg-cover bg-transparent relative h-full w-screen'
//                     src={imgm?.[activeImage]?.thumbnailUrl}
//                     alt='{imageModels?.[activeImage]?.alt}'
//                   />
//                 </div>
//                 <Prev
//                   className='text-white absolute bottom-[50%] left-[3%] text-[65px] z-40 flex justify-center items-center  marker:hidden'
//                   onClick={handlePreviousImage}
//                 />
//                 <Next
//                   className='text-white absolute bottom-[50%] right-[3%] text-[65px] z-40 flex justify-center items-center  marker:hidden'
//                   onClick={handleNextImage}
//                 />

//                 <span className='image-count'>
//                    {activeImage + 1}
//                    <span className='mx-1 text-[15px]'>/</span>
//                     {imgm.thumbnailUrl.length}

//                 </span>
//                 <span className='caption1 absolute bottom-[8%] z-40 text-5xl text-red '>
//                   {imgm?.title}
//                 </span>
//                 <span
//                   className='close absolute  z-50 top-[5%] left-[5%] text-pr1 text-[35px] cursor-pointer'
//                   onClick={closeModal}
//                 >
//                   &times;
//                 </span>
//                 {/* <div className='caption1'>{imageModel?.caption1}</div> */}
//               </div>
//             )
//           })}
//         </div>
//       </div>
//     </>
//   )
// }

//   return (
//     <>
//       <section className='image-modal  '>
//         <div className='model-1'>
//           <Image
//             src={images[activeImage]?.imageModels.thumbnailUrl}
//             alt={images[activeImage]?.alt}
//             onClick={openModal}
//             className=' max-h-[25vh] image-modal-trigger relative scroll-smooth cursor-pointer'
//           />

//           <div
//             className='modal pt-16  model-1 '
//             style={{ display: modalIsOpen ? 'block' : 'none' }}
//           >
//             <div className=' modal-content h-[100vh] max-h-[98vh] z-30 object-cover bg-cover bg-center w-full items-center flex flex-col  justify-center p-16 bg-transparent'>
//               <div>
//                 <Image
//                   className='modal-content object-cover bg-cover relative h-full w-screen'
//                   src={images[activeImage]?.imageModels.thumbnailUrl}
//                   alt={images[activeImage]?.alt}
//                 />
//               </div>
//               <Prev
//                 className='text-white absolute bottom-[50%] left-[3%] text-[65px] z-50 flex justify-center items-center  marker:hidden'
//                 onClick={handlePreviousImage}
//               />

//               <Next
//                 className='text-white absolute bottom-[50%] right-[3%] text-[65px] z-50 flex justify-center items-center  marker:hidden'
//                 onClick={handleNextImage}
//               />
//               <span className='image-count'>
//                 {activeImage + 1}
//                 <span className='mx-1 text-[15px]'>/</span>
//                 {images.length}
//               </span>

//               <span className='caption1 absolute bottom-[8%] z-50 text-5xl text-red '>
//                 {caption1s.caption1}
//               </span>
//             </div>

//             <span
//               onClick={closeModal}
//               className='close absolute z-50 top-[5%]   left-[5%] text-pr1 text-[35px] cursor-pointer'
//             >
//               &times;
//             </span>
//           </div>
//         </div>
//         <div className='model-2'>
//           <Image
//             src={images[activeImage].src2}
//             alt={images[activeImage]?.alt}
//             onClick={openModal}
//             className=' max-h-[25vh] image-modal-trigger relative scroll-smooth cursor-pointer'
//           />

//           <div
//             className='modal pt-16  model-1 '
//             style={{ display: modalIsOpen ? 'block' : 'none' }}
//           >
//             <div className=' modal-content h-[100vh] max-h-[98vh] z-30 object-cover bg-cover bg-center w-full items-center flex flex-col  justify-center p-16 bg-transparent'>
//               <div>
//                 <Image
//                   src={images[activeImage].src2}
//                   alt={images[activeImage]?.alt}
//                   className='modal-content object-cover bg-cover relative h-full w-screen'
//                 />
//               </div>
//               <Prev
//                 className='text-white absolute bottom-[50%] left-[3%] text-[65px] z-50 flex justify-center items-center  marker:hidden'
//                 onClick={handlePreviousImage}
//               />

//               <Next
//                 className='text-white absolute bottom-[50%] right-[3%] text-[65px] z-50 flex justify-center items-center  marker:hidden'
//                 onClick={handleNextImage}
//               />
//               <span className='image-count'>
//                 {activeImage + 1}
//                 <span className='mx-1 text-[15px]'>/</span>
//                 {images.length}
//               </span>

//               <span className='caption1 absolute bottom-[8%] z-50 text-5xl text-red '>
//                 {caption1s.caption1}
//               </span>
//             </div>

//             <span
//               onClick={closeModal}
//               className='close absolute z-50 top-[5%]   left-[5%] text-pr1 text-[35px] cursor-pointer'
//             >
//               &times;
//             </span>
//           </div>
//         </div>
//       </section>
//     </>
//   )
// }

// export default ImageModal

//  <div className='grid gap-3 '>
//   <div className=' relative'>
//     <Image
//       className='h-auto max-w-full relative  '
//       src='https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg'
//       alt=''
//     />

//     <div className='absolute inset-0 flex flex-col items-start justify-end p-3'>
//       <h3 className='text-lg font-medium text-black '>Skinny Jeans Blue</h3>
//       <Link
//         href='/'
//         className='mt-1.5 inline-block bg-black px-3 py-2 text-xs font-medium uppercase tracking-wide text-white'
//       >
//         Shop Now
//       </Link>
//     </div>
//   </div>
//   <div className=' relative'>
//     <Image
//       className='h-auto max-w-full relative  '
//       src='https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg'
//       alt=''
//     />

//     <div className='absolute inset-0 flex flex-col items-start justify-end p-3'>
//       <h3 className='text-lg font-medium text-black '>Skinny Jeans Blue</h3>
//       <Link
//         href='/'
//         className='mt-1.5 inline-block bg-black px-3 py-2 text-xs font-medium uppercase tracking-wide text-white'
//       >
//         Shop Now
//       </Link>
//     </div>
//   </div>
// </div>
