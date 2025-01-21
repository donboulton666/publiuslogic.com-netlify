import * as React from 'react'
import { render } from "@react-email/components";
import nodemailer from "nodemailer";
import { Email } from "./mail";

const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'dallin.russel@ethereal.email',
        pass: 'HZgCta51SCYrVSwkqz'
    }
});

const emailHtml = await render(<Email url="https://example.com" />);

const options = {
  from: "you@example.com",
  to: "user@gmail.com",
  subject: "hello world",
  html: emailHtml,
};

await transporter.sendMail(options);