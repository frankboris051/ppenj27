// email-sender.js

// Import the nodemailer library
const nodemailer = require('nodemailer');

// Function to send an email
async function sendEmail(options) {
  try {
    // Create a nodemailer transporter with SMTP configuration
    const transporter = nodemailer.createTransport({
      host: options.host,
      port: options.port,
      secure: options.secure, // true for 465, false for other ports
      auth: {
        user: options.user, // generated ethereal user
        pass: options.pass, // generated ethereal password
      },
    });

    // Send mail with defined transport object
    const info = await transporter.sendMail({
      from: options.from, // sender address
      to: options.to, // list of receivers
      subject: options.subject, // Subject line
      text: options.text, // plain text body
      html: options.html, // html body
    });

    console.log('Message sent: %s', info.messageId);
    return info.messageId;
  } catch (error) {
    console.error('Error occurred while sending email:', error.message);
    throw error;
  }
}

module.exports = sendEmail;
