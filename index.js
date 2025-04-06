// index.js
const express = require('express');
const path = require('path');

const app = express();
const port = 3001;

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Route for the homepage
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// Route for the about page
app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'about.html'));
});

// Handle 404 - Page Not Found
app.use((req, res) => {
  res.status(404).send('Page not found!');
});

// Start the server and keep it running
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
