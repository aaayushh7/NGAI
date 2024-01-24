// app.js

const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Create a MySQL connection
const connection = mysql.createConnection({
  host: '',
  user: '',
  password: '',
  database: 'nextgenai'
});

// Connect to MySQL
connection.connect(err => {
  if (err) {
    console.error('Error connecting to MySQL: ', err);
    return;
  }
  console.log('Connected to MySQL');
});

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve static files
app.use(express.static('public'));

// Handle form submissions
app.post('/submit', (req, res) => {
  const { name, email, message } = req.body;

  // Insert the contact form data into MySQL
  const query = 'INSERT INTO contacts (name, email, message) VALUES (?, ?, ?)';
  connection.query(query, [name, email, message], (error, results) => {
    if (error) {
      console.error('Error inserting data into MySQL: ', error);
      res.status(500).json({ success: false, message: 'Internal server error' });
      return;
    }

    res.status(200).json({ success: true, message: 'Form submitted successfully!' });
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});



app.post('/submit', (req, res) => {
    const { name, email, message } = req.body;
  
    // Insert the contact form data into MySQL
    const query = 'INSERT INTO contacts (name, email, message) VALUES (?, ?, ?)';
    connection.query(query, [name, email, message], (error, results) => {
      if (error) {
        console.error('Error inserting data into MySQL: ', error);
        res.status(500).json({ success: false, message: 'Internal server error' });
        return;
      }
  
      res.status(200).json({ success: true, message: 'Form submitted successfully!' });
    });
  });
