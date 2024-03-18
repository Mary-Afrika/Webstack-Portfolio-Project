// app.js

const express = require('express');
const connectDB = require('./db'); // Import the connectDB function

const app = express();

// Connect to the database
connectDB();

// Other application setup and middleware

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
