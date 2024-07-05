const express = require('express');
const { PrismaClient } = require('@prisma/client');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
const prisma = new PrismaClient();
const port = process.env.PORT || 3000;

app.use(express.json());

// Nodemailer transporter setup
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS,
  },
});

// API endpoint for handling referrals
app.post('/api/referrals', async (req, res) => {
  const { referrerName, referrerEmail, refereeName, refereeEmail } = req.body;

  if (!referrerName || !referrerEmail || !refereeName || !refereeEmail) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  try {
    // Save referral to database
    const referral = await prisma.referral.create({
      data: {
        referrerName,
        referrerEmail,
        refereeName,
        refereeEmail,
      },
    });

    // Send referral email
    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: refereeEmail,
      subject: 'You have been referred!',
      text: `Hello ${refereeName},\n\nYou have been referred by ${referrerName}. Please join our program for exciting benefits.\n\nBest regards,\nYour Company`,
    };

    await transporter.sendMail(mailOptions);

    res.status(201).json(referral);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error.' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
