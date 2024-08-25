// import MoreModels from './MoreModels'
// import React, { useState, useEffect } from 'react'
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

// export default function GallerySection ({ proj, cld }) {
//   const [activeImage, setActiveImage] = useState(0)
//   const [modalIsOpen, setModalIsOpen] = useState(false)

//   useEffect(() => {
//     if (proj?.related_client?.length > 0) {
//       setActiveImage(0)
//     }
//   }, [proj])

//   const openModal = () => {
//     setModalIsOpen(true)
//   }

//   const closeModal = () => {
//     setModalIsOpen(false)
//   }

//   const handleNextImage = () => {
//     if (proj?.related_client[0]?.gallery?.length > 1) {
//       setActiveImage((activeImage + 1) % proj?.related_client[0]?.gallery?.length)
//     }
//   }

//   const handlePreviousImage = () => {
//     if (proj?.related_client[0]?.gallery?.length > 1) {
//       setActiveImage(
//         (activeImage - 1 + proj?.related_client[0]?.gallery?.length) %
//           proj?.related_client[0]?.gallery?.length
//       )
//     }
//   }

//   return (
//     <>
//       <div className={`model-1 block  `}>
//         {proj?.related_client?.length > 0 &&
//           proj?.related_client?.map((proj, index) => (
//             <li className=' marker:text-transparent ' key={proj?.id}>
//               <div className=' w-full h-full flex   flex-col justify-start items-center'>
//                 <Card
//                   isFooterBlurred
//                   shadow='sm'
//                   onClick={() => openModal()}
//                   index={index}
//                   className=' cursor-pointer w-full group bg-transparent hover:drop-shadow hover:shadow-2xl rounded-b-lg rounded-t-none rounded-r-lg rounded-l-lg rounded-lg h-[250px]'
//                 >
//                   <img
//                     src={getAssetURL(proj?.main_image?.filename_disk)}
//                     alt='Relaxing app background'
//                     className=' w-full rounded-lg group-hover:shadow-lg  h-full object-cover group-hover:scale-95  transition duration-700'
//                     loading='lazy'
//                     onClick={() => openModal()}
//                   />

//                   <CardFooter
//                     className='absolute rounded-b-none rounded-t-none rounded-r-lg rounded-l-lg bg-black/40 bottom-0 z-1
//           border-t-1 border-default-600 dark:border-default-100'
//                   >
//                     <div className='flex flex-grow gap-2 items-center'>
//                       <img
//                         alt='Breathing app icon'
//                         className='w-[40px] h-[40px] rounded-full'
//                         src={getAssetURL(proj?.client_image?.filename_disk)}
//                       />
//                       <p className='text-tiny text-white/80  font-bold'>
//                         {proj?.client_name}
//                       </p>
//                     </div>
//                   </CardFooter>
//                 </Card>
//               </div>

//               <div
//                 className='modal z-40  p-16 bg-gradient-to-tl bg-blend-saturation bg-transparent via-zinc-900 from-pr2 to-black overflow-y-hidden scrollbar-none scrollbar-hide model-1  bg-cover bg-center w-full h-[100vh]   '
//                 style={{ display: modalIsOpen ? 'block' : 'none' }}
//               >
//                 <ImageGallerys proj={proj} activeImage={activeImage} />
//               </div>
//             </li>
//           ))}
//       </div>

//       {/* <MoreModels /> */}
//     </>
//   )
// }

// const ImageGallerys = ({ proj, activeImage }) => {
//   const [modalIsOpen, setModalIsOpen] = useState(false)

//   const openModal = () => {
//     setModalIsOpen(true)
//   }

//   const closeModal = () => {
//     setModalIsOpen(false)
//   }

//   const handleNextImage = () => {
//     if (proj?.gallery?.length > 1) {
//       setActiveImage((activeImage + 1) % proj?.gallery?.length)
//     }
//   }

//   const handlePreviousImage = () => {
//     if (proj?.gallery?.length > 1) {
//       setActiveImage(
//         (activeImage - 1 + proj?.gallery?.length) % proj?.gallery?.length
//       )
//     }
//   }
