// server.js

const express = require('express');
const cors = require('cors');
const sqlite3 = require('sqlite3').verbose();

const app = express();

// Allow cross-origin requests
app.use(cors());

// Path to SQLite database file
const dbPath = './database.db';

// Open a database handle
const db = new sqlite3.Database(dbPath, sqlite3.OPEN_READWRITE, (err) => {
  if (err) {
    console.error('Failed to open database');
    throw err;
  }

  console.log("Connected successfully to the database");

    // Print all rows from the Users table
    db.all('SELECT * FROM Users', (err, rows) => {
      if (err) {
        console.error('Failed to fetch users');
        throw err;
      } else {
        console.log('Users:', rows);
      }
    });
  
    // Print all rows from the Transactions table
    db.all('SELECT * FROM Transactions', (err, rows) => {
      if (err) {
        console.error('Failed to fetch transactions');
        throw err;
      } else {
        console.log('Transactions:', rows);
      }
    });
  });

  // Define your routes here
  // For example, a route to get all rows from a table:
  app.get('/rows', (req, res) => {
    db.all('SELECT * FROM tablename', (err, rows) => {
      if (err) {
        console.error('Failed to fetch rows');
        res.status(500).send(err);
      } else {
        res.send(rows);
      }
    });
  });

  app.get('/transactions/:userId', (req, res) => {
    const { userId } = req.params;
    const sql = `
      SELECT Users.UserID, Users.LastName, Users.FirstName, Transactions.Amount
      FROM Users
      INNER JOIN Transactions ON Users.UserID = Transactions.UserID
      WHERE Users.UserID = ?
    `;
    db.all(sql, userId, (err, rows) => {
      if (err) {
        console.error('Failed to fetch rows');
        res.status(500).send(err);
      } else {
        res.send(rows);
      }
    });
  });

  // Start the server
  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });