'use client'
import Testimony from '@/components/carouseltestimony'
import Link from 'next/link'
import directus from '@/lib/directus'
import { notFound } from 'next/navigation'
import { readItem, readItems } from '@directus/sdk'
import { useState, useEffect } from 'react'
import getAssetURL from '@/lib/get-asset-url'
import ResentList from '@/components/ResentList'
import BlogList from '@/components/BlogList'
import Bannerservice from '@/components/Bannerservice'

const blogtest = {
  id: 1,
  title: 'About us',
  subtitle: 'Perfection Concept Design',
  content:
    ' We are a company that specializes in designing and manufacturing high-quality furniture pieces for homes, offices, and commercial spaces. Our team of experienced and creative designers work tirelessly to create furniture pieces that not only look great but are also functional and comfortable. We pride ourselves on using the best materials and production techniques to ensure that our pieces last for years to come. Our mission is to provide our customers with exceptional service and quality products that enhance their living and working spaces.',

  main_image: '/img/bg-5.jpg',
  about_image: '/img/bg-1.jpg',
  image_2: '/img/bg-3.jpg'
}

export default function Blog () {
  const [blog, setBlog] = useState([])
  const [posts, setPosts] = useState([])
  const [selectedPost, setSelectedPost] = useState([]) // State for selected video

  // console.log(posts)

  useEffect(() => {
    const fetchBlogData = async () => {
      try {
        const fetchedBlog = await directus.request(readItems('blog',
          {
            fields: ['main_image', 'block']
          }
        ), {
          next: { revalidate: 240 }
        })
        setBlog(fetchedBlog)
      } catch (error) {
        console.error('Error fetching blog data:', error)
      }
    }

    const fetchData = async () => {
      try {
        const fetchedPosts = await directus.request(
          readItems('posts', {
            fields: ['*', 'id', 'title', 'video_link', 'desc', 'date_published']
          }),
          {
            next: {
              revalidate: 500
            }
          }
        )

        setPosts(fetchedPosts)
        // Set selectedPost to the first post
        setSelectedPost(fetchedPosts[0])
      } catch (error) {
        console.error('Error fetching data:', error)
        // Handle errors as needed
      }
    }

    // Fetch blog data
    fetchBlogData()

    // Fetch posts data
    fetchData()
  }, [])
console.log('blog-page',blog)
  return (
    <div className=' pt-[80px]  wraperitem'>
      <section
        className=' jumbotron breadcumb relative h-[60vh] object-cover items-center bg-center object-center bg-cover w-full'
        style={{
          backgroundImage: `url(${getAssetURL(blog?.main_image)})`,
        }}
      >
        <div className=' absolute bottom-4 left-0 right-0 items-center  text-center     '>
          <div className='  text-white max-w-[1200px] mx-auto px-16 mt-40 sm:mt-[200px] sm:items-center lg:px-5    flex flex-wrap sm:flex  justify-between  max-sm:justify-center text-center  text-2xl drop-shadow-lg  transition-shadow duration-300 font-semibold'>
            <div className='items-center  text-center    '>
              <h1 className='lg:text-left ml-[-25px] items-center first-letter:capitalize  text-center    '>
                {blog?.title}
              </h1>
            </div>

            <div className=' text-sm font-light text-center items-center '>
              {' '}
              <a className='link' href='/'>
                Home
              </a>
              <span className='dash'>/</span>
              <span className='first-letter:capitalize'>{blog?.title}</span>
            </div>
          </div>
        </div>
      </section>
      <section className='max-sm:p-5  ' id='blog'>
        <div className='max-w-[1350px] mx-auto grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8'>
          <div className='  rounded-3xl  text-blue3   lg:col-span-2'>
            {posts.length > 0 && (
              <BlogList key={blog?.id} blog={blog} block={blog?.block} post={selectedPost} />
            )}
          </div>
          <div className='  sm:rounded-3xl bg-blue3 text-white p-4 '>
            <h3>Recent posts</h3>
            <ul
              className='recent-post text-white  w-full  scrollbar lg:scrollbar-w-[5px]   scrollbar-h-[5px]    lg:scrollbar-thumb-rounded-full lg:max-h-[750px]   lg:scroll-smooth      lg:overflow-y-scroll
                    lg:scrollbar-thumb-gray-400/50 lg:hover:scrollbar-thumb-pr1 '
            >
              {posts.length > 0 &&
                posts.map(post => (
                  <div
                    className='sm:pb-64 text-white'
                    key={post.id}
                    onClick={() => setSelectedPost(post)}
                  >
                    <ResentList post={post} />
                  </div>
                ))}
            </ul>
            {/* <Bannerservice className='mt-5' /> */}

            <div className='bannerservice '>
              <div className='imgbg'>
                <div className='imgservice' />
              </div>

              <div className='contb   '>
                <div className='headingb'>Get A quote</div>
                <div className='descb'>With Experts Advice</div>
                <div className='btn'>
                  <span className='shine'></span>
                  <Link href={'/'}>
                    <span>Click here</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <section className='      ' id='blog'>
        <div className='row m-10-hor   max-sm:text-blue3     '>
          {posts.length > 0 && (
            <BlogList key={blog?.id} blog={blog} post={selectedPost} />
          )}

          <div className='col-md-4   sm:bg-blue3  max-sm:text-blue3    text-white sm:rounded-3xl max-sm:mt-5 max-sm:py-5 max-sm:px-2 sm:p-5 '>
            <div className='right sm:mb-3  max-sm:text-blue3    '>
              <h3>Recent posts</h3>
              <ul
                className='recent-post  w-full  scrollbar lg:scrollbar-w-[5px]   scrollbar-h-[5px]    lg:scrollbar-thumb-rounded-full lg:max-h-[750px]   lg:scroll-smooth      lg:overflow-y-scroll
                    lg:scrollbar-thumb-gray-400/50 lg:hover:scrollbar-thumb-pr1 '
              >
                {/* ... sidebar list */}
      {/* {posts.length > 0 &&
                  posts.map(post => (
                    <div
                      className='pb-80'
                      key={post.id}
                      onClick={() => setSelectedPost(post)}
                    >
                      <ResentList post={post} />
                    </div>
                  ))}
              </ul>
              <Bannerservice className='mt-5' />

                <div className='bannerservice '>
                  <div className='imgbg'>
                    <div className='imgservice' />
                  </div>

                  <div className='contb   '>
                    <div className='headingb'>Get A quote</div>
                    <div className='descb'>With Experts Advice</div>
                    <div className='btn'>
                      <span className='shine'></span>
                      <Link href={'/'}>
                        <span>Click here</span>
                      </Link>
                    </div>
                  </div>
                </div>   */}
      {/* //     </div> */}
      {/* //   </div> */}
      {/* // </div> */}
      {/* // </section> */}

      {/* <Testimony /> */}
    </div>
  )
}
