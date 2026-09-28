require('dotenv').config();
const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const db = require('./config/db');

const app = express();

// Middleware
app.use(cors({
  origin: 'http://localhost:5173', // Allow requests from React frontend
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));

// Enable JSON request parsing
app.use(express.json());

// Setup Nodemailer Transporter
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: process.env.SMTP_PORT == 465, // true for 465, false for other ports like 587
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

// Health Check Route
app.get('/api/health', (req, res) => {
  res.status(200).json({
    success: true,
    message: "Tourist & Travel API is running"
  });
});

// Create Booking Route
app.post('/api/bookings', (req, res) => {
  const { full_name, email, phone, destination, travel_date, guests } = req.body;

  // Validate that all required fields are present
  if (!full_name || !email || !phone || !destination || !travel_date || !guests) {
    return res.status(400).json({ 
      success: false, 
      message: "Please fill in all required fields." 
    });
  }

  // Validate that guests is a positive integer
  const guestsCount = parseInt(guests, 10);
  if (isNaN(guestsCount) || guestsCount <= 0) {
    return res.status(400).json({ 
      success: false, 
      message: "Number of guests must be a positive number." 
    });
  }

  try {
    // Insert into SQLite database using a prepared statement to prevent SQL injection
    const stmt = db.prepare(`
      INSERT INTO bookings (full_name, email, phone, destination, travel_date, guests)
      VALUES (?, ?, ?, ?, ?, ?)
    `);
    
    const info = stmt.run(full_name, email, phone, destination, travel_date, guestsCount);
    const bookingId = info.lastInsertRowid;

    // Send success response to the frontend immediately
    res.status(201).json({
      success: true,
      message: "Booking created successfully!",
      bookingId: bookingId
    });

    // Send Email Notification in the background
    const mailOptions = {
      from: process.env.SMTP_USER,
      to: process.env.OWNER_EMAIL || 'rihanpstar723@gmail.com', // Fallback to provided email
      subject: 'New Travel Booking Received',
      text: `Hello,\n\nYou have received a new booking on TravelGo!\n\nBooking Details:\n- Booking ID: ${bookingId}\n- Full Name: ${full_name}\n- Email: ${email}\n- Phone: ${phone}\n- Destination: ${destination}\n- Travel Date: ${travel_date}\n- Number of Guests: ${guestsCount}\n\nPlease contact the customer to confirm their booking.\n\nBest Regards,\nTravelGo System`
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error("Failed to send email notification to owner:", error.message);
      } else {
        console.log("Email notification sent successfully:", info.response);
      }
    });
    
  } catch (error) {
    console.error("Error creating booking:", error.message);
    // Note: If headers are already sent, this won't execute because we return 201 inside the try block.
    // However, if the database fails, it will jump straight to this catch block before sending the 201 response.
    if (!res.headersSent) {
      res.status(500).json({ 
        success: false, 
        message: "An error occurred while saving your booking. Please try again later." 
      });
    }
  }
});

// Port Configuration
const PORT = process.env.PORT || 5000;

// Start Server and Handle Errors
const server = app.listen(PORT, () => {
  console.log(`Server is successfully running on http://localhost:${PORT}`);
});

// Handle Server Startup Errors
server.on('error', (error) => {
  console.error("Failed to start the server:");
  console.error(error.message);
  process.exit(1);
});