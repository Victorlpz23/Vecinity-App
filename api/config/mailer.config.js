const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'vecinityapp@gmail.com',
    pass: process.env.MAIL_PASS,
  },
});

module.exports.sendConfirmationEmail = (user) => {
  transporter
    .sendMail({
      from: "Vecinty App <vecinityapp@gmail.com>",
      to: user.email,
      subject: "Confirm your account",
      text: "Welcome to the Vecinity App",
      html: `
      <h1>🌇 Welcome to Vecinity App 🌇</h1>
      <p>Click on the following link to confirm your account:</p>
      <a href="${process.env.API_URL}/users/${user.id}/confirm">Confirm</a>
    `
      ,
    })
    .then((info) => console.log(info))
    .catch((error) => console.log(error));
};


