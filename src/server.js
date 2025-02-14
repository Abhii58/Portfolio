const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Email configuration (Use your own email settings)
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'bijalwanabhishek0@gmail.com', // Replace with your email
    pass: 'bijalwan@&$123456ABHISHEK',  // Replace with your email password
  },
});

// API route to handle form submission
app.post('/send-message', (req, res) => {
  const { name, email, message } = req.body;

  const mailOptions = {
    from: email,
    to: 'bijalwanabhishek0@gmail.com', 
    subject: `New message from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send({ message: 'Error sending message' });
    }
    res.status(200).send({ message: 'Message sent successfully!' });
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
