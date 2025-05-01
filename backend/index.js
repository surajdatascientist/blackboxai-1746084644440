const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { Pool } = require('pg');

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// PostgreSQL pool setup
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'hospitaldb',
  password: 'yourpassword',
  port: 5432,
});

// Test DB connection
pool.connect((err, client, release) => {
  if (err) {
    return console.error('Error acquiring client', err.stack);
  }
  console.log('Connected to PostgreSQL database');
  release();
});

// Basic route
app.get('/', (req, res) => {
  res.send('Hospital Management System Backend');
});

// Start server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
