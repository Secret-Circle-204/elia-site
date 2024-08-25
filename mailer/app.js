const nodemailer = require('nodemailer')

const maillist = [
  'info@prestigedesign-egy.com'
  // 'info@omarbahaeg.online',
  // 'hamzamode202@gmail.com',
  // 'mozaman688@gmail.com'
]
// 'mozaman688@gmail.com'

// 'hamzamode202@gmail.com',
// Defines recipients

async function main () {
  // **Important:** Use environment variables for credentials
  // const user = process.env.EMAIL_USER
  // const pass = process.env.EMAIL_PASSWORD

  let transporter = nodemailer.createTransport({
    host: 'smtp.office365.com', //'smtpout.secureserver.net',
    port: 587, //465
    // secure: false, // Not recommended for production
    auth: {
      user: 'info@prestigedesign-egy.com',
      pass: 'Mmnn@1122'
    }
  })

  let info = await transporter.sendMail({
    from: '"user" <info@prestigedesign-egy.com>',
    to: maillist, // Mails to array of recipients
    subject: 'Testing, testing, 123',
    html: `
      <h1>Hello there</h1>
      <p>Isn't Mailer useful?</p>
    `
  })

  console.log(info.messageId)
  console.log(info.accepted) // Array of emails that were successful
  console.log(info.rejected) // Array of unsuccessful emails
}

main().catch(err => console.log(err))

// const nodemailer = require('nodemailer')

// const maillist = [
//   'hamzamode202@gmail.com',
//   'info@prestigedesign-egy.com',
//   'mozaman688@gmail.com'
// ]
// // Defines recipients

// async function main () {
//   let transporter = nodemailer.createTransport({
//     host: 'smtp.office365.com',
//     port: 587,
//     // secure: false,
//     auth: {
//       user: 'info@prestigedesign-egy.com',
//       pass: 'Mmnn@1122'
//       // ⚠️ Use environment variables set on the server for these values when deploying
//     }
//   })

//   let info = await transporter.sendMail({
//     from: '"user" <prestigedesign-egy.com>',
//     to: maillist, // Mails to array of recipients
//     subject: 'Testing, testing, 123',
//     html: `
//     <h1>Hello there</h1>
//     <p>Isn't Mailer useful?</p>
//     `
//   })

//   console.log(info.messageId)
//   console.log(info.accepted) // Array of emails that were successful
//   console.log(info.rejected) // Array of unsuccessful emails
// }

// main().catch(err => console.log(err))
