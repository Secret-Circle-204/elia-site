const express = require('express')
// const nodemailer = require('nodemailer')
const cors = require('cors')
const { createTransport } = require('nodemailer')

// import cors from 'cors'
const app = express()
const sender = createTransport({
  host: 'smtpout.secureserver.net', //smtp.office365.com
  port: 465, //587
  auth: {
    user: 'info@prestigedesign-egy.com',
    pass: 'Mmnn@1122'
  }
})

const PORT = process.env.PORT || 3000

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.post('/', (req, res) => {
  if (req.headers['passcoded']) {
    const { name, phone, email, message } = req.body
    // start
    sender.sendMail({
      from: 'info@prestigedesign-egy.com',
      to: 'hamzamode202@gmail.com',
      subject: 'Client message',
      html: `
        <p>Sender name: <span style="font-weight: bold;">${
          name || 'Undefined'
        }</span></p>
        <p>Sender email: <span style="font-weight: bold;">${
          email || 'Undefined'
        }</span></p>
        <p>Sender phone number: <span style="font-weight: bold;">${
          phonenumber || 'Undefined'
        }</span></p>

        <h3>Message:</h3>

        <p>${message || 'Undefined'}</p>
      `
    })

    // end

    sender.sendMail({
      from: 'info@prestigedesign-egy.com',
      to: 'hamzamode202@gmail.com',
      subject: 'Client message',
      html: `
        <p>Sender name: <span style="font-weight: bold;">${
          name || 'Undefined'
        }</span></p>
        <p>Sender email: <span style="font-weight: bold;">${
          email || 'Undefined'
        }</span></p>
        <p>Sender phone number: <span style="font-weight: bold;">${
          phone || 'Undefined'
        }</span></p>

        <h3>Message:</h3>

        <p>${message || 'Undefined'}</p>
      `
    })

    res.json({ success: true })
    return
  }

  res.json({ success: false })
})

app.listen(PORT, () => console.log('App running on port:', PORT))
