// import { NextResponse, NextRequest } from 'next/server'
// const nodemailer = require('nodemailer')

// // Handles POST requests to /api
// export async function POST (request) {
//   const username =
//     process.env.NEXT_PUBLIC_BURNER_USERNAME || 'info@prestigedesign-egy.com'
//   const password = process.env.NEXT_PUBLIC_BURNER_PASSWORD || 'Mmnn@1122'
//   const myEmail =
//     process.env.NEXT_PUBLIC_PERSONAL_EMAIL || 'info@prestigedesign-egy.com'

//   console.log('dealing with request')
//   const formData = await request.formData()
//   const name = formData.get('name')
//   const address = formData.get('address')
//   const phone = formData.get('phone')
//   const email = formData.get('email')
//   const message = formData.get('message')

//   // create transporter object
//   const transporter = nodemailer.createTransport({
//     host: 'smtp.office365.com', //'smtpout.secureserver.net',
//     port: 587, //465
//     // tls: {
//     //   ciphers: 'SSLv3',
//     //   rejectUnauthorized: false
//     // },

//     auth: {
//       user: username,
//       pass: password
//     }
//   })

//   try {
//     const mail = await transporter.sendMail({
//       from: username,
//       to: myEmail,
//       replyTo: email,
//       subject: `Website activity from ${email}`,
//       html: `
//                 <p>Name: ${name} </p>
//                 <p>Address: ${address} </p>
//                 <p>Phone: ${phone} </p>
//                 <p>Email: ${email} </p>
//                 <p>Message: ${message} </p>

//                 `
//     })

//     return NextResponse.json({ message: 'Success: email was sent' })
//   } catch (error) {
//     console.log(error)
//     NextResponse.status(500).json({ message: 'COULD NOT SEND MESSAGE' })
//   }
// }

// // export async function POST (request) {
// //   // const username = process.env.NEXT_PUBLIC_BURNER_USERNAME
// //   // const password = process.env.NEXT_PUBLIC_BURNER_PASSWORD
// //   // const myEmail = process.env.NEXT_PUBLIC_PERSONAL_EMAIL

// //   const formData = await request.formData()
// //   const name = formData.get('name')
// //   const address = formData.get('address')
// //   const phone = formData.get('phone')
// //   const email = formData.get('email')
// //   const message = formData.get('message')
// //   const transporter = nodemailer.createTransport({
// //     host: 'smtpout.secureserver.net',
// //     port: 465,
// //     auth: {
// //       user: 'info@prestigedesign-egy.com',
// //       pass: 'Mmnn@1122'
// //     }
// //     // host: 'smtp-mail.outlook.com',
// //     // port: 587,
// //     // tls: {
// //     //   ciphers: 'SSLv3',
// //     //   rejectUnauthorized: false

// //     // auth: {
// //     //   user: username,
// //     //   pass: password
// //     // }
// //   })
// //   try {
// //     const mail = await transporter.sendMail({
// //       from: '"user" <info@prestigedesign-egy.com>',
// //       to: 'hamzamode202@gmail.com', // Mails to array of recipients
// //       subject: 'Testing, testing, 808080',
// //       replyTo: email,
// //       subject: `Website activity from ${email}`,
// //       html: `
// //                <p>Name: ${name} </p>
// //                <p>Name: ${address} </p>
// //                <p>Name: ${phone} </p>
// //                <p>Email: ${email} </p>
// //                <p>Message: ${message} </p>
// //                `
// //     })

// //     return NextResponse.json({ message: 'Success: email was sent' })
// //   } catch (error) {
// //     console.log(error)
// //     NextResponse.status(500).json({ message: 'COULD NOT SEND MESSAGE' })
// //   }
// // }
// // import { NextResponse, NextRequest } from 'next/server'
// // const nodemailer = require('nodemailer')

// // // Handles POST requests to /api

// // export async function POST (request) {
// //   // const username = process.env.NEXT_PUBLIC_BURNER_USERNAME
// //   // const password = process.env.NEXT_PUBLIC_BURNER_PASSWORD
// //   // const myEmail = process.env.NEXT_PUBLIC_PERSONAL_EMAIL

// //   const formData = await request.formData()
// //   const name = formData.get('name')
// //   const address = formData.get('address')
// //   const phone = formData.get('phone')
// //   const email = formData.get('email')
// //   const message = formData.get('message')
// //   const transporter = nodemailer.createTransport({
// //     host: 'smtpout.secureserver.net',
// //     port: 465,
// //     auth: {
// //       user: 'info@prestigedesign-egy.com',
// //       pass: 'Mmnn@1122'
// //     }
// //     // host: 'smtp-mail.outlook.com',
// //     // port: 587,
// //     // tls: {
// //     //   ciphers: 'SSLv3',
// //     //   rejectUnauthorized: false

// //     // auth: {
// //     //   user: username,
// //     //   pass: password
// //     // }
// //   })
// //   try {
// //     const mail = await transporter.sendMail({
// //       from: '"user" <info@prestigedesign-egy.com>',
// //       to: 'hamzamode202@gmail.com', // Mails to array of recipients
// //       subject: 'Testing, testing, 808080',
// //       replyTo: email,
// //       subject: `Website activity from ${email}`,
// //       html: `
// //                <p>Name: ${name} </p>
// //                <p>Name: ${address} </p>
// //                <p>Name: ${phone} </p>
// //                <p>Email: ${email} </p>
// //                <p>Message: ${message} </p>
// //                `
// //     })

// //     return NextResponse.json({ message: 'Success: email was sent' })
// //   } catch (error) {
// //     console.log(error)
// //     NextResponse.status(500).json({ message: 'COULD NOT SEND MESSAGE' })
// //   }
// // }
