import * as React from 'react'
import { render } from '@react-email/components'
import nodemailer from 'nodemailer'
import Email from './email'

const transporter = nodemailer.createTransport({
  host: 'smtp.ethereal.email',
  port: 587,
  auth: {
    user: 'dallin.russel@ethereal.email',
    pass: 'HZgCta51SCYrVSwkqz',
  },
})

const EmailHtml = await render(<Email url="https://ethereal.email/messages" />)

const options = {
  from: 'dallin.russel@ethereal.email',
  to: 'dallin.russel@ethereal.email',
  subject: 'hello world',
  html: EmailHtml,
}

await transporter.sendMail(options)

export default EmailHtml
