'use client'
import directus from '@/lib/directus'
import { notFound } from 'next/navigation'
import { readItem, readItems } from '@directus/sdk'
import Image from 'next/image'
import Link from 'next/link'

// import { useState, useEffect } from 'react'
export default function BlogList ({ blog, post,block }) {
  // console.log(blog)
  // const [posts, setPosts] = useState([])
  // // next: { revalidate: 120 }
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const fetchedPosts = await directus.request(
  //         readItems('posts', {
  //           fields: ['*', 'id', 'title', 'video_link', 'desc', 'date_created']
  //         }),
  //         {
  //           next: { revalidate: 7 }
  //         }
  //       )

  //       setPosts(fetchedPosts)
  //     } catch (error) {
  //       console.error('Error fetching data:', error)
  //       // Handle errors as needed
  //     }
  //   }

  //   fetchData()
  // }, [])

  return (
    <div className='    sm:px-10 sm:py-5   sm:text-white '>
      <div className='left '>
        <div className='mainimg '>
          <iframe
            className='pt-2'
            width='660'
            height='315'
            src={`https://www.youtube.com/embed/${post?.video_link}`}
            title='YouTube video player'
            frameBorder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
            allowFullScreen
          ></iframe>
        </div>
        <div className='  text-blue3 content '>
          <div className='  text-blue3 title'>
            {post?.title}
            <p className='desc text-xs'>&bull; {post?.date_created}</p>
          </div>
          <div className='descblog w-[100%] text-blue3'>{post?.desc}</div>
          <div className='desc'>
            <blockquote className='bg-blue3 text-white'>
              {block}
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  )
}
