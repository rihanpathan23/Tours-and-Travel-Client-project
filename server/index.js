require('dotenv').config();
const express = require('express');
const cors = require('cors');
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

    // Send success response with the new booking ID
    res.status(201).json({
      success: true,
      message: "Booking created successfully!",
      bookingId: info.lastInsertRowid
    });
    
  } catch (error) {
    console.error("Error creating booking:", error.message);
    res.status(500).json({ 
      success: false, 
      message: "An error occurred while saving your booking. Please try again later." 
    });
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
