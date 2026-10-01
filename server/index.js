
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const db = require('./config/db');
const { Resend } = require('resend');

const app = express();
const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

// Middleware
app.use(cors({
  origin: 'http://localhost:5173',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));

app.use(express.json());

// Health Check Route
app.get('/api/health', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Tourist & Travel API is running'
  });
});

// Get All Bookings Route
app.get('/api/bookings', (req, res) => {
  try {
    const bookings = db.prepare(`
      SELECT * FROM bookings
      ORDER BY id DESC
    `).all();

    res.status(200).json({
      success: true,
      count: bookings.length,
      bookings
    });
  } catch (error) {
    console.error('Error fetching bookings:', error.message);

    res.status(500).json({
      success: false,
      message: 'Failed to fetch bookings.'
    });
  }
});

// Create Booking Route
app.post('/api/bookings', async (req, res) => {
  const {
    full_name,
    email,
    phone,
    destination,
    travel_date,
    guests
  } = req.body;

  // Validate required fields
  if (
    !full_name ||
    !email ||
    !phone ||
    !destination ||
    !travel_date ||
    !guests
  ) {
    return res.status(400).json({
      success: false,
      message: 'Please fill in all required fields.'
    });
  }

  // Validate guests
  const guestsCount = Number(guests);

  if (!Number.isInteger(guestsCount) || guestsCount <= 0) {
    return res.status(400).json({
      success: false,
      message: 'Number of guests must be a positive integer.'
    });
  }

  try {
    // Save booking in SQLite
    const stmt = db.prepare(`
      INSERT INTO bookings
      (full_name, email, phone, destination, travel_date, guests)
      VALUES (?, ?, ?, ?, ?, ?)
    `);

    const info = stmt.run(
      full_name.trim(),
      email.trim(),
      phone.trim(),
      destination.trim(),
      travel_date,
      guestsCount
    );

    const bookingId = info.lastInsertRowid;

    // Send success response
    res.status(201).json({
      success: true,
      message: 'Booking created successfully!',
      bookingId
    });

    // Send email notification (optional)
    if (!resend || !process.env.OWNER_EMAIL) {
      console.log('Email notification skipped: configuration missing.');
      return;
    }

    try {
      const { data, error } = await resend.emails.send({
        from: 'TravelGo <onboarding@resend.dev>',
        to: [process.env.OWNER_EMAIL],
        subject: 'New Travel Booking Received',
        text: `Hello,

You have received a new booking on TravelGo!

Booking Details:
- Booking ID: ${bookingId}
- Full Name: ${full_name}
- Email: ${email}
- Phone: ${phone}
- Destination: ${destination}
- Travel Date: ${travel_date}
- Number of Guests: ${guestsCount}

Please contact the customer to confirm their booking.

Best Regards,
TravelGo System`
      });

      if (error) {
        console.error('Resend email error:', error);
      } else {
        console.log('Email notification sent:', data.id);
      }
    } catch (emailError) {
      console.error('Failed to send email:', emailError.message);
    }
  } catch (error) {
    console.error('Error creating booking:', error.message);

    if (!res.headersSent) {
      res.status(500).json({
        success: false,
        message: 'An error occurred while saving your booking. Please try again later.'
      });
    }
  }
});

// Port Configuration
const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () => {
  console.log(`Server is successfully running on http://localhost:${PORT}`);
});

// Handle Server Startup Errors
server.on('error', (error) => {
  console.error('Failed to start the server:');
  console.error(error.message);
  process.exit(1);
});