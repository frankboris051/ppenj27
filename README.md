# Email Sending Utility

A simple Node.js package for sending emails using SMTP.

## Installation

To install the package, use npm:

```bash
npm install email-sending-utility
```

## Usage

```javascript
// Import the sendEmail function from the email-sender.js file
const sendEmail = require('email-sending-utility');

// Example options for sending an email
const emailOptions = {
  host: 'smtp.example.com',
  port: 587,
  secure: false,
  user: 'example@example.com',
  pass: 'password',
  from: 'example@example.com',
  to: 'recipient@example.com',
  subject: 'Test Email',
  text: 'This is a test email sent using the Email Sending Utility package.',
  html: '<p>This is a <b>test email</b> sent using the <i>Email Sending Utility</i> package.</p>',
};

// Call the sendEmail function with the email options
sendEmail(emailOptions)
  .then((messageId) => {
    console.log(`Email sent successfully. Message ID: ${messageId}`);
  })
  .catch((error) => {
    console.error('Error occurred while sending email:', error);
  });
```

## API

### `sendEmail(options)`

Send an email with the specified options.

- `options` (object): An object containing the email configuration options.
  - `host` (string): The SMTP server hostname.
  - `port` (number): The SMTP server port.
  - `secure` (boolean): Whether to use TLS (true for 465, false for other ports).
  - `user` (string): The SMTP server username.
  - `pass` (string): The SMTP server password.
  - `from` (string): The sender email address.
  - `to` (string|array): The recipient email address(es).
  - `subject` (string): The email subject.
  - `text` (string): The plain text email body.
  - `html` (string): The HTML email body.

Returns a Promise that resolves with the message ID if the email is sent successfully, or rejects with an error if sending fails.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
