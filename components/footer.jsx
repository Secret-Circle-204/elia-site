'use client'

import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import directus from '@/lib/directus'
import { readItems } from '@directus/sdk'
// import getAssetURL from '@/lib/get-asset-url'

export default function Footer () {
  const [data, setData] = useState([])
  // const [team_page, setTeam_page] = useState([])

  // const get_page_Data = async () => {
  //   try {
  //     const fetchedTeam_page = await directus.request(
  //       readItems('team_page', {
  //         fields: ['*']
  //       }),
  //       {
  //         // next: { revalidate: 7 }
  //         cache: 'no-store'
  //       }
  //     )
  //     setTeam_page(fetchedTeam_page)
  //   } catch (error) {
  //     console.error('Error fetching data:', error)
  //     // Handle errors as needed
  //   }
  // }

  const getData = async () => {
    try {
      const fetchedFooter = await directus.request(
        readItems('footer', {
          fields: ['content', 'location', 'phone', 'email', 'facebook']
        }),
        {
          // next: { revalidate: 7 }
          cache: 'no-store'
        }
      )
      setData(fetchedFooter)
    } catch (error) {
      console.error('Error fetching data:', error)
      // Handle errors as needed
    }
  }

  useEffect(() => {
    getData()
    // get_page_Data()
  }, [])

  // console.log('footer', data)
  // console.log('footer_page', footer_page)
  // console.log('footer_data', data.content)

  return (
    <footer className=' container-fluid  text-white  bg-blue3'>
      <div className='  max-w-[1350px] mx-auto  '>
        <div className='row m-10-hor  lg:h-[230px]  '>
          <div className='col-md-5 z-30'>
            <div className='footer-col'>
              <div className='heading'>
                <h2 className='font-weight-bold '>
                  <Link href='/' className='text-decoration-none'>
                    <span className=' text-xl font-semibold inline-block pr-2'>
                      ELIA
                    </span>
                    <span className='text-pr1 font-semibold  text-xl   inline-block '>
                      YOUSSEF
                    </span>
                  </Link>
                </h2>
              </div>
              <div className='content pt-1 w-full '>
                <p className='font-light w-full leading-5 hover:text-gray-200'>
                  {data.content}
                </p>
              </div>
            </div>
          </div>

          <div className='col-md-4 z-30'>
            <div className='footer-col'>
              <div className='heading'>Follow Us</div>
              <div className='content space-y-4'>
                <p>You Can Follow Our Work And The Latest News On.</p>
                <div className='socialicon'>
                  <span className='shine'></span>
                  <i className='fa fa-facebook-f'></i>
                </div>
                <div className='socialicon'>
                  <span className='shine'></span>
                  <i className='fa fa-linkedin'></i>
                </div>
                <div className='socialicon'>
                  <span className='shine'></span>
                  <i className='fa fa-twitter'></i>
                </div>
                <div className='socialicon'>
                  <span className='shine'></span>
                  <i className='fa  fa-instagram'></i>
                </div>
              </div>

              <ul>
                <li>
                  <p
                    className='link-call  text-pr1 z-10'
                    onClick={() => window.open('tel:010-020-0340', '_self')}
                  >
                    Phone: {data?.phone}
                  </p>
                </li>

                <li>
                  <p
                    className='link-call  text-pr1 z-10'
                    onClick={() => window.open('mailto:', '_self')}
                  >
                    {/* Email: {data?.email} */}
                    Email: sales@eliayoussefdesigns.com
                  </p>
                </li>

                <li className=' max-w-[90%] '>
                  <p
                    className=' text-pr1 cursor-pointer z-10 text-xs font-light '
                    onClick={() =>
                      window.open(
                        'https://www.facebook.com/eliayouseefdesigns',
                        '_self'
                      )
                    }
                  >
                    {/* Faceboock: {data?.faceboock} */}
                    Faceboock: https://www.facebook.com/eliayouseefdesigns/
                  </p>
                </li>
                <li>
                  <p
                    className='link-call  text-pr1 z-10 max-w-[90%]'
                    onClick={() => window.open('location:', '_self')}
                  >
                    Location: {data?.location}
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div className='col-md-2   z-30 '>
            <div className='footer-col w-full '>
              <div className='heading'>Usefull link</div>

              <div className='flex lg:flex-row justify-between space-x-4  '>
                <ul className='content w-full space-y-[10px]'>
                  <li>
                    <Link href='/about' className='link'>
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link href='/team' className='link'>
                      Team
                    </Link>
                  </li>
                  <li>
                    <Link href='/works' className='link'>
                      Works
                    </Link>
                  </li>

                  {/* <li>
                  <Link href='/services' className='link'>
                    Services
                  </Link>
                </li> */}
                  <li>
                    <Link href='/blog' className='link'>
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link href='/contact' className='link'>
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className='subfooter'>
          <div className='row m-10-hor'>
            <div className=' z-10  '>
              <div className='content justify-between flex space-x-10 w-full'>
                <div>
                  © Copyrights 2023-2024
                  <span className='font-weight-bold '> </span> All rights
                  reserved.
                </div>
                <div>
                  <span className='font-weight-bold text-right hover:text-pr1'>
                    {' '}
                    <Link href='https://www.xtreme-communication.com/'>
                      xtreme-communication
                    </Link>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
