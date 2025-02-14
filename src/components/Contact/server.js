const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

app.post('/send-message', async (req, res) => {
  const { name, subject, message } = req.body;

  try {
    // Configure the mail transporter
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: 'your-email@gmail.com', // Replace with your email
        pass: 'your-email-password', // Replace with your email password or app password
      },
    });

    // Email options
    const mailOptions = {
      from: 'your-email@gmail.com',
      to: 'bijalwanabhishek0@gmail.com', // Replace with your email or phone-email gateway
      subject: `New Contact Form Submission: ${subject}`,
      text: `Name: ${name}\nMessage: ${message}`,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    res.json({ success: true, message: 'Message sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.json({ success: false, message: 'Failed to send message' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
