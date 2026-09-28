const Database = require('better-sqlite3');
const path = require('path');

// Resolve the path to the database file in the server directory
const dbPath = path.resolve(__dirname, '../tourist_travel.db');

let db;

try {
  // Connect to the SQLite database (creates the file if it doesn't exist)
  db = new Database(dbPath);

  // Enable foreign keys
  db.pragma('foreign_keys = ON');

  // Create the bookings table
  const createTableQuery = `
    CREATE TABLE IF NOT EXISTS bookings (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      full_name TEXT NOT NULL,
      email TEXT NOT NULL,
      phone TEXT NOT NULL,
      destination TEXT NOT NULL,
      travel_date TEXT NOT NULL,
      guests INTEGER NOT NULL,
      created_at TEXT DEFAULT CURRENT_TIMESTAMP
    );
  `;
  
  db.exec(createTableQuery);
  console.log('Successfully connected to SQLite database and verified bookings table.');

} catch (error) {
  console.error('Database connection or initialization failed:');
  console.error(error.message);
  process.exit(1);
}

module.exports = db;