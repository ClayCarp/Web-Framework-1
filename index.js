const express = require('express');
const path = require('path');

const app = express();
const port = 3001;

// Serve static assets like CSS, JS, images from "public"
app.use(express.static(path.join(__dirname, 'public')));

// Serve HTML files from "views"
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.get('/favorites', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'favorites.html'));
});


// 404 Handler
app.use((req, res) => {
  res.status(404).send('Page not found!');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
