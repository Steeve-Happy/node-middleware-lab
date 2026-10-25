const express = require('express');
const loggerMiddleware = require('./loggerMiddleware');

const app = express();
const PORT = 3000;

// Register the logger middleware for every request
app.use(loggerMiddleware);

app.get('/', (req, res) => {
  res.send('Hello from the middleware lab!');
});

app.get('/about', (req, res) => {
  res.json({ lab: 'Middleware with Express', author: 'Steeve Happy Tankeu' });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});