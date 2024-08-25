'use client'
import React from 'react'

export default function ResentList ({ post }) {
  console.log(post)
  return (
    <li className='   '>
      <div className=' w-full   flex space-x-3 text-white  '>
        <div className=' w-[40%] h-[100px] overflow-hidden '>
          <iframe
            className=' w-full h-full object-cover'
            width='660'
            height='315'
            src={`https://www.youtube.com/embed/${post?.video_link}`}
            title='YouTube video player'
            frameBorder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
            allowFullScreen
          ></iframe>
        </div>
        <div className=' max-w-[50%] text-white'>
          <div className='  line-clamp-1 text-[14px] mt-2  font-medium'>
            {post?.title}
          </div>
          <div className=' line-clamp-3  text-white  text-[10px]'>
            {post?.desc}
          </div>
        </div>
      </div>
    </li>
  )
}
