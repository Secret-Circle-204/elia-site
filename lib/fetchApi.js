export const NEXT_APP_DIRECTUS_URL =
  process.env.NEXT_APP_DIRECTUS_URL ??  'https://admin.eliayoussefdesigns.com' ?? 'http://admin.eliayoussefdesigns.com'
  // process.env.NEXT_APP_DIRECTUS_URL ?? 'https://admin.prestigedesign-egy.com' ?? 'http://admin.prestigedesign-egy.com'

// import {  DIRECTUS_API_URL, DIRECTUS_API_TOKEN } from './urls'
export async function getData () {
  const res = await fetch(NEXT_APP_DIRECTUS_URL, {
    // headers: {
    //   authorization: process.env.API_KEY
    // }
  })

  return res.json()
}

// export const fetchApi = async endpoint => {
//   // const options = {
//   //   method: 'GET',
//   //   headers: {
//   //     Authorization: 'Bearer ' + STRAPI_API_TOKEN
//   //   }
//   // }

//   const res = await fetch(`${NEXT_APP_DIRECTUS_URL}${endpoint}`)
//   const data = await res.json()

//   return data
// }
// export default fetchApi
