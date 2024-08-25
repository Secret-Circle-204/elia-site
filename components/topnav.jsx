'use client'

import React, { useState, useEffect } from 'react'
import { Menu } from '@headlessui/react'
import { HiOutlineMenu } from 'react-icons/hi'
//import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'
import { HiOutlineChevronDown } from 'react-icons/hi2'
import Link from 'next/link'
import directus from '@/lib/directus'
import { readItems } from '@directus/sdk'
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button
} from '@nextui-org/react'
import { FaBars, FaTimes } from 'react-icons/fa'

export default function Topnav () {
  const [nav, setNav] = useState(false)
  const icons = {
    chevron: <HiOutlineChevronDown fill='currentColor' size={16} />
  }

  const links = [
    {
      id: 2,
      link: 'about'
    },
    {
      id: 3,
      link: 'team'
    },
    {
      id: 4,
      link: 'blog'
    },
    {
      id: 6,
      link: 'projects'
    },
    {
      id: 5,
      link: 'contact'
    }
  ]
  // Fetch services data from API

  const [service, setService] = useState([])
  // const [selectedPost, setSelectedPost] = useState([]) // State for selected video

  console.log(service)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedServices = await directus.request(
          readItems('services', {
            fields: ['slug', 'title', 'desc', 'date_published']
          }),
          {
            cashe: 'no-store'
          }
        )

        setService(fetchedServices)
        // Set selectedPost to the first post
        // setSelectedPost(fetchedServices[0])
      } catch (error) {
        console.error('Error fetching data:', error)
        // Handle errors as needed
      }
    }

    fetchData()
  }, [])

  return (
    <div className='  w-screen h-24 z-40  text-white bg-blue3 fixed nav'>
      <div className='max-w-[1300px] m-auto  flex flex-row justify-between items-center   w-full   px-5 text-white '>
        {/* <h1 className="text-5xl font-signature ml-2"><a className="link-underline hover:transition ease-in-out delay-150 hover:underline hover:decoration-solid" href="">Logo</a></h1> */}
        <div className='  flex-1 md:flex z-50 md:max-w-[1220px] max-sm:w-[90px]  link-underline link-underline-black  '>
          <Link href='/' className=''>
            {/* for mohamed */}
            <svg
              className=' fill-pr1  py-3 hover:scale-110 duration-500 hover:text-pr1 max-w-[140px] max-sm:max-w-[130px] lg:min-w-[160px] '
              xmlns='http://www.w3.org/2000/svg'
              x='0'
              y='0'
              enableBackground='new 0 0 646.172 300.014'
              version='1.1'
              viewBox='0 0 55.9 18.5'
              xmlSpace='preserve'
              fill='#FFF'
            >
              <path
                d='M-99.2,81.2h-3.4V76.6h3.4v.9h-2.5v1h2.4v.8h-2.4v1h2.5Z'
                transform='translate(127.2 -69.9)'
                fill='#fbfbfb'
              />
              <path
                d='M-97.5,76.6v3.8h2.3v.8h-3.1V76.6Z'
                transform='translate(127.2 -69.9)'
                fill='#fbfbfb'
              />
              <path
                d='M-94.4,81.2V76.6h.9v4.6Z'
                transform='translate(127.2 -69.9)'
                fill='#fbfbfb'
              />
              <path
                d='M-89.3,80.3h-2.4l-.3.9h-.9l1.9-4.6h1l2,4.6h-1Zm-1.2-2.7-.8,1.9h1.6Z'
                transform='translate(127.2 -69.9)'
                fill='#fbfbfb'
              />
              <path
                d='M-100.7,85.7l1.2-1.9h1l-1.7,2.6v1.9h-.9V86.5l-1.7-2.6h1Z'
                transform='translate(127.2 -69.9)'
                fill='#fbfbfb'
              />
              <path
                d='M-93.5,86.1a2.2,2.2,0,0,1-2.3,2.4,2.3,2.3,0,0,1-2.3-2.4,2.3,2.3,0,0,1,2.3-2.4A2.2,2.2,0,0,1-93.5,86.1Zm-3.7,0a1.4,1.4,0,0,0,1.4,1.6,1.4,1.4,0,0,0,1.5-1.6,1.5,1.5,0,0,0-1.5-1.6A1.5,1.5,0,0,0-97.2,86.1Z'
                transform='translate(127.2 -69.9)'
                fill='#fbfbfb'
              />
              <path
                d='M-88.7,83.8v2.6a1.8,1.8,0,0,1-1.9,2.1,1.9,1.9,0,0,1-2-2.1V83.8h.8v2.6a1.2,1.2,0,0,0,1.2,1.3c.7,0,1.1-.5,1.1-1.3V83.8Z'
                transform='translate(127.2 -69.9)'
                fill='#fbfbfb'
              />
              <path
                d='M-84.9,84.9a1.4,1.4,0,0,0-1.1-.5c-.6,0-.9.3-.9.6s.5.5,1,.6,1.8.4,1.8,1.4-.9,1.5-1.9,1.5a1.8,1.8,0,0,1-1.9-1.1l.7-.4a1.3,1.3,0,0,0,1.3.7c.5,0,1-.2,1-.7s-.5-.6-1.1-.6-1.7-.4-1.7-1.4.9-1.3,1.7-1.3a1.9,1.9,0,0,1,1.8.9Z'
                transform='translate(127.2 -69.9)'
                fill='#fbfbfb'
              />
              <path
                d='M-80.4,84.9a1.6,1.6,0,0,0-1.1-.5c-.6,0-.9.3-.9.6s.4.5,1,.6,1.8.4,1.8,1.4-.9,1.5-1.9,1.5a1.8,1.8,0,0,1-1.9-1.1l.7-.4c.1.5.7.7,1.2.7s1-.2,1-.7-.4-.6-1-.6-1.8-.4-1.8-1.4,1-1.3,1.8-1.3a1.7,1.7,0,0,1,1.7.9Z'
                transform='translate(127.2 -69.9)'
                fill='#fbfbfb'
              />
              <path
                d='M-75.4,88.4h-3.4V83.8h3.4v.9h-2.5v1h2.4v.8h-2.4v1h2.5Z'
                transform='translate(127.2 -69.9)'
                fill='#fbfbfb'
              />
              <path
                d='M-74.5,88.4V83.8h3.2v.9h-2.4v1.2h2.2v.8h-2.2v1.7Z'
                transform='translate(127.2 -69.9)'
                fill='#fbfbfb'
              />
              <path
                d='M-108.3,88.1l.4.3h-5l.4-.3V79.6a1.1,1.1,0,0,0-.2-.6l-4.7-8.2a4.1,4.1,0,0,0-.5-.9h5.2l-.2.3,1.1,1.8c1.1,2,2.2,4,3.4,6a1.3,1.3,0,0,1,.1.6v9.5Z'
                transform='translate(127.2 -69.9)'
                fill='#bd9060'
              />
              <path
                d='M-119.4,88.4h-7c0-.1.1-.1.2-.1a9.8,9.8,0,0,0,4.9-2.1,5.1,5.1,0,0,0,1.7-2.9l.2-.3Z'
                transform='translate(127.2 -69.9)'
                fill='#bd9060'
              />
              <path
                d='M-126.3,69.9h6V75h-.1c0-.2,0-.3-.1-.4a6.4,6.4,0,0,0-2.9-3.8,10.7,10.7,0,0,0-2.7-.9h-.2Z'
                transform='translate(127.2 -69.9)'
                fill='#bd9060'
              />
              <path
                d='M-102.8,69.9a12.7,12.7,0,0,0-3.8,4.5,8.9,8.9,0,0,0,.3-1.4V71.3a2.4,2.4,0,0,0-.9-1.4Z'
                transform='translate(127.2 -69.9)'
                fill='#bd9060'
              />
              <path
                d='M-123.8,76.3v5.3a3.7,3.7,0,0,0-1.3-1.7,5.1,5.1,0,0,0-2.1-1,4.7,4.7,0,0,0,3.3-2.6Z'
                transform='translate(127.2 -69.9)'
                fill='#bd9060'
              />{' '}
            </svg>
            {/* for mohamed */}
          </Link>
        </div>

        {/* <a
              className='link-underline link-underline-black'
              href=''
              target='_blank'
              rel='noreferrer'
            >
              Logo
            </a> */}

        <div>
          <ul className='hidden md:flex items-center'>
            <li className='link px-4 cursor-pointer capitalize font-light text-white hover:scale-105 hover:text-white duration-200 '>
              <Link href='/'>home</Link>
            </li>

            <li className='link px-4 cursor-pointer capitalize font-light text-white hover:scale-105 hover:text-white duration-200 '>
              <Link
                className='border-none   bg-transparent text-white transition hover:text-pr1  '
                href='/about'
              >
                About
              </Link>
            </li>
            <li className='link px-4 cursor-pointer capitalize font-light text-white hover:scale-105 hover:text-white duration-200 '>
              <Link
                className='border-none   bg-transparent text-white transition hover:text-pr1  '
                href='/team'
              >
                Team
              </Link>
            </li>
            <li className='link px-4 cursor-pointer capitalize font-light text-white hover:scale-105 hover:text-white duration-200 '>
              <Link
                className='border-none   bg-transparent text-white transition hover:text-pr1  '
                href='/blog'
              >
                Blog
              </Link>
            </li>

            <li className='link px-1 cursor-pointer capitalize font-light text-white hover:scale-105 hover:text-white duration-200 '>
              <Dropdown backdrop='blur' className={` hover:text-white`}>
                <DropdownTrigger className='border-none hover:text-white max-sm:flex max-sm:flex-row max-sm:justify-start max-sm:text-left max-sm:p-0 max-sm:m-0   max-sm:items-center text-white  '>
                  <Button
                    className='border-none   bg-transparent text-white transition hover:text-white  '
                    variant='bordered'
                    endContent={icons.chevron}
                    radius='sm'
                  >
                    Services
                  </Button>
                </DropdownTrigger>
                <DropdownMenu
                  className='hover:text-white'
                  variant='faded'
                  aria-label='Static Actions'
                >
                  {service?.map(item => {
                    return (
                      <DropdownItem
                        className=' group   hover:text-white hover:bg-blue3 hover:border hover:border-white hover:focus:text-white hover:focus:bg-blue3 hover:focus:border-blue3 '
                        key={item.slug}
                      >
                        <Link
                          className='group px-0 mx-1 py-2 text-blue3   hover:border-b-blue3 hover:text-white block max-md:border-b-2 max-sm:w-full  '
                          href={`/${item.slug}`}
                        >
                          {item.title}
                        </Link>
                      </DropdownItem>
                    )
                  })}
                </DropdownMenu>
              </Dropdown>
            </li>
            <li className='link px-4 cursor-pointer capitalize font-light text-white hover:scale-105 hover:text-white duration-200 '>
              <Link
                className='border-none   bg-transparent text-white transition hover:text-pr1  '
                href='/services/projects'
              >
                Projects
              </Link>
            </li>
            <li className='link px-4 cursor-pointer capitalize font-light text-white hover:scale-105 hover:text-white duration-200 '>
              <Link
                className='border-none   bg-transparent text-white transition hover:text-pr1  '
                href='/contact'
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div
          onClick={() => setNav(!nav)}
          className={`md:hidden ${
            nav ? 'text-white absolute top-[40%] left-[10%]' : 'text-white '
          } cursor-pointer z-10`}
        >
          {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>
        {nav && (
          <div className='w-screen  bg-blue3'>
            <ul className='flex flex-col space-y-3 justify-start items-left absolute top-0 px-3 pt-24 left-0 w-screen pb-10 bg-gradient-to-b from-blue3 to-gray-900 text-white'>
              <li className='link px-4 cursor-pointer capitalize font-light text-white hover:scale-105 hover:text-white duration-200 '>
                <Link onClick={() => setNav(!nav)} href='/'>
                  home
                </Link>
              </li>

              <li className='link px-4 cursor-pointer capitalize font-light text-white hover:scale-105 hover:text-white duration-200'>
                <Link onClick={() => setNav(!nav)} href='/about'>
                  About
                </Link>
              </li>
              <li className='link px-4 cursor-pointer capitalize font-light text-white hover:scale-105 hover:text-white duration-200'>
                <Link onClick={() => setNav(!nav)} href='/team'>
                  Team
                </Link>
              </li>
              <li className='link px-4 cursor-pointer capitalize font-light text-white hover:scale-105 hover:text-white duration-200'>
                <Link onClick={() => setNav(!nav)} href='/blog'>
                  Blog
                </Link>
              </li>

              <li className='link px-4 cursor-pointer capitalize font-light text-white hover:scale-105 hover:text-white duration-200 '>
                <Dropdown backdrop='blur' className={``}>
                  <DropdownTrigger className='border-none max-sm:flex max-sm:flex-row max-sm:justify-start max-sm:text-left max-sm:p-0 max-sm:m-0 max-sm:w-full max-sm:items-center text-white transition hover:text-pr1/80'>
                    <Button
                      className='border-none   bg-transparent text-white transition hover:text-pr1  '
                      variant='bordered'
                      endContent={icons.chevron}
                      radius='sm'
                    >
                      <p className=' '>Services</p>
                    </Button>
                  </DropdownTrigger>
                  <DropdownMenu variant='faded' aria-label='Static Actions'>
                    {service?.map(item => {
                      return (
                        <DropdownItem
                          className='hover:text-white hover:bg-blue3 hover:border hover:border-blue3 hover:focus:text-white hover:focus:bg-blue3 hover:focus:border-blue3 '
                          key={item.slug}
                        >
                          <Link
                            onClick={() => setNav(!nav)}
                            className='px-0 mx-1 py-2 text-blue3   hover:border-b-blue3 hover:text-white block max-md:border-b-2 max-sm:w-full transition'
                            href={`/${item.slug}`}
                          >
                            {item.title}
                          </Link>
                        </DropdownItem>
                      )
                    })}
                  </DropdownMenu>
                </Dropdown>
              </li>

              <li className='link px-4 cursor-pointer capitalize font-light text-white hover:scale-105 hover:text-white duration-200'>
                <Link onClick={() => setNav(!nav)} href='/services/projects'>
                  Projects
                </Link>
              </li>
              <li className='link px-4 cursor-pointer capitalize font-light text-white hover:scale-105 hover:text-white duration-200'>
                <Link onClick={() => setNav(!nav)} href='/contact'>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}
