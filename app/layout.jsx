import { Inter } from 'next/font/google'
import 'bootstrap/dist/css/bootstrap.css'
import './globals.css'
// import '../node_modules/font-awesome/css/font-awesome.min.css'
import 'font-awesome/css/font-awesome.min.css'
// import Header from '@/components/header'
import Footer from '@/components/footer'
import Topnav from '@/components/topnav'
// import PropTypes from 'prop-types'

const inter = Inter({ subsets: ['latin'] })
export const metadata = {
  title: 'elia-youssef || interior design',
  description: 'powered by hamza bahaa and xtream-communication',
  charset: 'UTF-8',
  name: 'elia-youssef || INTERIOR DESIGN',
  author: 'hamza bahaa',
  keywords:
    'interior design, design, elia-youssef, interior, decoration, decoration, hamza bahaa, xtream-communication',
  robots: 'index, follow',
  category: 'design, development',
  // url: 'https://elia-youssef.com',
  // url: 'https://www.rania-darkal.com',
  // image: 'https://www.rania-darkal.com/favicon.ico',
  // type: 'website',
  // icon: './fav-icon.svg',
  language: 'en',
  publisher: 'hamza bahaa',
  creator: 'hamza bahaa with xtream-communication',
  date: '2023-12-12',
  format: 'website'
  // twitter: {
  //   card: 'summary',
  //   site: '@xtream-communication',
  //   creator: '@xtream-communication',
  //   // title: 'elia-youssef || interior design',
  //   description: 'powered by hamza-bahaa and xtream-communication',
  //   image: 'http://localhost:3000/favicon.ico'
  //   // image: 'https://www.rania-darkal.com/favicon.ico',
  // }
}
export const revalidate = 30 // revalidate at most 1800 seconds

export default function RootLayout ({ children }) {
  // console.log('children', children)

  return (
    <html lang='en'>
      <head>
        {/* <link rel='icon' href='./fav-icon.svg' /> */}
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        {/* <link
            rel='preconnect'
            href='https://fonts.gstatic.com'
            // // // // // crossOrigin='true'
          /> */}
        {/* <meta property='og:site_url' content='http://localhost:3000' /> */}

        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </head>
      <body className={inter.className}>
        {/* <ThemeWrapper > */}
        {/* <Loder /> */}
        {/* <Header /> */}
        <Topnav />
        {children}
        <Footer />
        {/* </ThemeWrapper > */}
      </body>
    </html>
  )
}
// RootLayout.propTypes = {
//   children: PropTypes.string.isRequired
//   // children: PropTypes.shape({ props: PropTypes.object }).isRequired
// }
