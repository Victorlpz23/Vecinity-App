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
                <!DOCTYPE html>
          <html lang="en">
            <head>
              <meta charset="UTF-8">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <title>Confirmación de cuenta</title>
            </head>
            <body>
              <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;">
                <tr>
                  <td align="center" bgcolor="#ffffff" style="padding: 40px 0 30px 0;">
                    <img src="https://ibb.co/StqB7fz" alt="Logo">
                  </td>
                </tr>
                <tr>
                  <td bgcolor="#ff914d" style="padding: 40px 30px 40px 30px;">
                    <table border="0" cellpadding="0" cellspacing="0" width="100%">
                      <tr>
                        <td style="font-size: 20px; font-weight: bold; body { color: white }">
                          Welcome to Vecinity App!!
                        </td>
                      </tr>
                      <tr>
                        <td style="padding: 20px 0 30px 0;">
                          Thanks for your registration. Confirm your account Here:
                        </td>
                      </tr>
                      <tr>
                        <td align="center">
                          <a href="https://example.com/confirmar-cuenta" style="background-color: #F3F4F6; color: #ffffff; display: inline-block; font-size: 16px; font-weight: bold; padding: 15px 30px; text-decoration: none; border-radius: 5px;">Confirm Account</a>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding: 30px 0 0 0;">
                        If you did not register on our website, ignore this email.
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td bgcolor="#809d7b" style="padding: 20px 30px 20px 30px;">
                    <table border="0" cellpadding="0" cellspacing="0" width="100%">
                      <tr>
                        <td align="center" style="font-size: 14px; color:#F3F4F6">
                        If you have any questions or need help, contact us at <a href="mailto:support@vecinityapp.com">soporte@example.com</a>.
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </body>
          </html>
    `
      ,
    })
    .then((info) => console.log(info))
    .catch((error) => console.log(error));
};






// <h1>🌇 Welcome to Vecinity App 🌇</h1>
//       <p>Click on the following link to confirm your account:</p>
//       <a href="${process.env.API_URL}/users/${user.id}/confirm">Confirm</a>


