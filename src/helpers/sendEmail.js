import nodemailer from 'nodemailer';

const request = require('request');

// const smtpConfig = {
//   host: 'smtp.sendgrid.net',
//   port: 587,
//   secure: false, // upgrade later with STARTTLS
//   auth: {
//     user: 'apikey',
//     pass: sendGrid.apiKey,
//   },
// };

const transporter = nodemailer.createTransport({
  service: 'gmail',
  // port: 465,
  auth: {
    user: process.env.APP_MAIL,
    pass: process.env.APP_PASS,
  },
});

/* const transporter = nodemailer.createTransport({
  host: 'smtp.sendgrid.net',
  port: 587,
  auth: {
    user: 'apikey',
    pass: process.env.sendGridApiKey,
  },
}); */

// const transport = nodemailer.createTransport(transporter);

export default (to, subject, html) => {
  transporter.sendMail({
    from: `"JAGZ" <${process.env.APP_MAIL}>`,
    to,
    subject,
    html,
  }, (error, info) => {
    if (error) {
      console.log(error);
    }
    console.log(info);
  });
};

/* export const addContact = (email, firstName, lastName) => {
  const options = {
    method: 'PUT',
    url: 'https://api.sendgrid.com/v3/marketing/contacts',
    headers:
    {
      'content-type': 'application/json',
      authorization: `Bearer ${process.env.sendGridApiKey}`,
    },
    body:
    {
      contacts: [
        {
          email,
          first_name: firstName,
          last_name: lastName,
        },
      ],
    },
    json: true,
  };

  request(options, (error, response, body) => {
    if (error) {
      console.log(error);
    } else {
      console.log(response);
    }
    console.log(body);
  });
}; */
