require('dotenv').config();
const express = require('express');
const cors = require('cors');

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