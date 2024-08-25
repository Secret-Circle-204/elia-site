
'use client';
import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import getAssetURL from '@/lib/get-asset-url';
import directus from '@/lib/directus';
import { readItems, createItem } from '@directus/sdk';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [message, setMessage] = useState('');
  const [formData, setFormData] = useState({
    name: name,
    email: email,
    phone: phone,
    address: address,
    message: message
  });
  const [loading, setLoading] = useState(false);
  const [footerData, setFooterData] = useState({});

  useEffect(() => {
    const getDataFooter = async () => {
      try {
        const response = await directus.request(
          readItems('footer', {
            fields: ['*', 'content'],
          }),
          {
            cache: 'no-store',
          }
        );
        setFooterData(response);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    getDataFooter();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      await directus.request(
        createItem('inbox', {
          ...formData,
        })
      );

      const response = await fetch('/api/mailer', {
        method: 'post',
        body: new FormData(event.target),
      });

      if (!response.ok) {
        throw new Error(`response status: ${response?.status}`);
      }

      toast.success('Message successfully sent', {
        position: 'top-right',
        autoClose: 500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });

      event.target.reset();
      const responseData = await response.json();
      console.log(responseData['message']);
    } catch (error) {
      console.error('Error sending data:', error);
      toast.warning('Warning, please try resending the form', {
        position: 'top-right',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <ToastContainer />
      <div className=' pt-[80px]  wraperitem'>
        <section
          className='  jumbotron breadcumb relative h-[60vh] object-cover items-center bg-center object-center bg-cover w-full'
          style={{
            backgroundImage: `url(${getAssetURL(footerData?.main_image)})`,
          }}
        >
          <div className=' absolute bottom-4 left-0 right-0 items-center  text-center     '>
            <div className='  text-white max-w-[1200px] mx-auto px-16 mt-40 sm:mt-[200px] sm:items-center lg:px-5    flex flex-wrap sm:flex  justify-between  max-sm:justify-center text-center  text-2xl drop-shadow-lg  transition-shadow duration-300 font-semibold'>
              <div className='items-center  text-center    '>
                <h1 className='lg:text-left ml-[-25px] items-center  text-center    '>
                  {footerData?.title}
                </h1>
              </div>

              <div className=' text-sm font-light text-center items-center '>
                {' '}
                <a className='link' href='/'>
                  Home
                </a>
                <span className='dash'>/</span>
                <span>{footerData?.title}</span>
              </div>
            </div>
          </div>
        </section>
        <section className='sm:container-fluid max-w-[1350px] mx-auto  '>
          <div className='row m-10-hor'>
            <div className='col-md-6'>
              <div className='text-side '>
                <h2 className='text-blue3 text-2xl font-semibold'>
                  Get in Touch
                </h2>
                <p>
                  Vestibulum volutpat, lacus a ultrices sagittis, mi neque
                  euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus
                  pede arcu, dapibus eu, fermentum et, dapibus sed, urna.
                </p>


                <div className='address'>
                  <div className='heading'>Our Office</div>
                  <div className='relative lg:max-w-[350px] max-w-[400px] mb-1 p-3 block rounded-3xl space-x-3'>
                    <i className='fa fa-map-marker'></i>
                    <a
                      className='text-blue3'
                      href={`https://maps.google.com/?q=${footerData?.location}`}
                    >
                      {footerData?.location}
                    </a>
                  </div>
                  <div className='relative lg:max-w-[350px] max-w-[400px] px-3 block rounded-3xl space-x-3'>
                    <i className='fa fa-envelope-o text-blue3'></i>
                    <a
                      className='text-blue3'
                      href={`mailto:${footerData?.email}`}
                    >
                      {footerData?.email}
                    </a>
                  </div>
                  <div className='relative lg:max-w-[350px] max-w-[400px] mb-1 p-3 block rounded-3xl space-x-3'>
                    <i className='fa fa-phone'></i>
                    {footerData?.phone}
                  </div>
                </div>
              </div>
            </div>
            <div className='col-md-6 rounded-3xl'>
              <div className='form-side rounded-[80px] bg-blue3'>
                <form
                  onSubmit={handleSubmit}
                  className='formcontact'
                >
                  <label className='text-white' htmlFor='name'>
                    Name
                  </label>
                  <input
                    className='text-blue3'
                    value={formData?.name}
                    onChange={(e) =>
                      setFormData((prevState) => ({
                        ...prevState,
                        name: e.target.value,
                      }))
                    }
                    id='name'
                    autoComplete='name'
                    maxLength={50}
                    size='lg'
                    name='name'
                    type='text'
                    placeholder='Enter Your Name'

                  />
                  <label htmlFor='phone' className='text-white'>
                    Phone
                  </label>
                  <input
                    className='text-blue3'
                    value={formData?.phone}
                    onChange={(e) =>
                      setFormData((prevState) => ({
                        ...prevState,
                        phone: e.target.value,
                      }))
                    }
                    id='phone'
                    autoComplete='phone'
                    maxLength={50}
                    minLength={13}
                    size='lg'
                    name='phone'
                    type='tel'
                    placeholder='Enter Your Phone Number'

                  />
                  <label htmlFor='email' className='text-white'>
                    Email
                  </label>
                  <input
                    className='text-blue3'
                    value={formData?.email}
                    onChange={(e) =>
                      setFormData((prevState) => ({
                        ...prevState,
                        email: e.target.value,
                      }))
                    }
                    id='email'
                    autoComplete='email'
                    maxLength={50}
                    size='lg'
                    name='email'
                    type='email'
                    placeholder='Enter Your Email'

                  />
                  <label htmlFor='address' className='text-white'>
                    Address
                  </label>
                  <input
                    className='text-blue3'
                    value={formData?.address}
                    onChange={(e) =>
                      setFormData((prevState) => ({
                        ...prevState,
                        address: e.target.value,
                      }))
                    }
                    id='address'
                    autoComplete='email'
                    maxLength={50}
                    size='lg'
                    name='address'
                    type='text'
                    placeholder='Enter Your Address'
                  />

                  <label htmlFor='message' className='text-white'>
                    Message
                  </label>
                  <textarea
                    className='text-blue3'
                    value={formData?.message}
                    onChange={(e) =>
                      setFormData((prevState) => ({
                        ...prevState,
                        message: e.target.value,
                      }))
                    }
                    id='message'
                    maxLength={300}
                    name='message'
                    type='text'
                  />
                  <div id='success' className='hide'>
                    Your message has been sent...
                  </div>
                  <div id='failed' className='hide'>
                    Message failed...
                  </div>
                  <button
                    // className='btn btn-blue3'
                    name='submit'
                    type='submit'
                    value='submit'
                    id='buttonsent'
                    disabled={loading || !formData.name || !formData.email || !formData.phone}
                  >
                    <span>{loading ? 'Sending...' : 'Send'}</span>
                    <span className='shine'></span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}





// <div className=' pt-[80px]  wraperitem'>
// <section
//   className='  jumbotron breadcumb relative h-[60vh] object-cover items-center bg-center object-center bg-cover w-full'
//   style={{
//     backgroundImage: `url(${getAssetURL(footerData?.main_image)})`
//   }}
// >
//   <div className=' absolute bottom-4 left-0 right-0 items-center  text-center     '>
//     <div className='  text-white max-w-[1200px] mx-auto px-16 mt-40 sm:mt-[200px] sm:items-center lg:px-5    flex flex-wrap sm:flex  justify-between  max-sm:justify-center text-center  text-2xl drop-shadow-lg  transition-shadow duration-300 font-semibold'>
//       <div className='items-center  text-center    '>
//         <h1 className='lg:text-left ml-[-25px] items-center  text-center    '>
//           {footerData?.title}
//         </h1>
//       </div>

//       <div className=' text-sm font-light text-center items-center '>
//         {' '}
//         <a className='link' href='/'>
//           Home
//         </a>
//         <span className='dash'>/</span>
//         <span>{footerData?.title}</span>
//       </div>
//     </div>
//   </div>
// </section>
// <section className='sm:container-fluid max-w-[1350px] mx-auto  '>
//   <div className='row m-10-hor'>
//     <div className='col-md-6'>
//       <div className='text-side '>
//         <h2 className='text-blue3 text-2xl font-semibold'>
//           Get in Touch
//         </h2>
//         <p>
//           Vestibulum volutpat, lacus a ultrices sagittis, mi neque
//           euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus
//           pede arcu, dapibus eu, fermentum et, dapibus sed, urna.
//         </p>

//         <div className='address'>
//           <div className='heading'>Our Office</div>
//           <div className='relative    max-w-[320px] mb-1 p-3 block rounded-3xl space-x-3'>
//             <i className='fa fa-map-marker'></i>
//             <a className=' text-blue3 ' href={`https://maps.google.com/?q=${footerData?.location}`}>

//               {footerData?.location}
//             </a>
//           </div>
//           <div className='relative    max-w-[320px]  px-3 block rounded-3xl space-x-3'>

//             <i className='fa fa-envelope-o text-blue3'></i>
//             <a className='text-blue3 ' href={`mailto:${footerData?.email}`}>
//               {footerData?.email}
//             </a>
//           </div>
//           <div className='relative    max-w-[320px] mb-1 p-3 block rounded-3xl space-x-3'>
//             <i className='fa fa-phone'></i>
//             {footerData?.phone}
//           </div>
//         </div>
//       </div>
//     </div>
//     <div className=' col-md-6 rounded-3xl'>
//       <div className='form-side     rounded-[80px] bg-blue3'>
//         <form onSubmit={handleSubmit} className='formcontact     '>
//           <label  className='text-white' htmlFor='name'>
//             Name
//           </label>
//           <input
//             className='  text-blue3'
//             value={name}
//             onChange={e => setName(e.target.value)}
//             id='name'
//             autoComplete='name'
//             maxLength={50}
//             size='lg'
//             name='name'
//             type='text'
//             placeholder='Enter Your Name'
//             required
//           />
//           <label htmlFor='phone' className='text-white'>Phone</label>
//           <input
//             className='  text-blue3'
//             value={phone}
//             onChange={e => setPhone(e.target.value)}
//             id='phone'
//             autoComplete='phone'
//             maxLength={50}
//             minLength={13}
//             size='lg'
//             name='phone'
//             type='tel'
//             placeholder='Enter Your Phone Number'
//             required
//           />
//           <label htmlFor='email' className='text-white'>Email</label>
//           <input
//             className='  text-blue3'
//             value={email}
//             onChange={e => setEmail(e.target.value)}
//             id='email'
//             autoComplete='email'
//             maxLength={50}
//             size='lg'
//             name='email'
//             type='email'
//             placeholder='Enter Your Email'
//             required
//           />
//           <label htmlFor='address' className='text-white'>Address</label>
//           <input
//             className='  text-blue3'
//             value={address}
//             onChange={e => setAddress(e.target.value)}
//             id='address'
//             autoComplete='email'
//             maxLength={50}
//             size='lg'
//             name='address'
//             type='text'
//             placeholder='Enter Your Address'
//           />

//           <label htmlFor='message' className='text-white'>Message</label>
//           <textarea
//             className='  text-blue3'
//             value={message}
//             onChange={e => setMessage(e.target.value)}
//             id='message'
//             maxLength={300}
//             name='message'
//             type='text'
//           />
//           <div id='success' className='hide'>
//             Your message has been sent...
//           </div>
//           <div id='failed' className='hide'>
//             Message failed...
//           </div>
//           <button
//             onClick={handleClick}
//             type='submit'
//             value='submit'
//             id='buttonsent'
//             disabled={loading || !name || !email || !phone}
//           >
//             <span>{loading ? 'Sending...' : 'Send'}</span>
//             <span className='shine'></span>
//             {/* <span>Send</span> */}
//           </button>
//         </form>
//       </div>
//     </div>
//   </div>
// </section>
// </div>