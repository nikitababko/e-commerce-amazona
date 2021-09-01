const express = require('express');

const data = require('./data.js');

const app = express();

app.get('/api/products', (req, res) => {
  res.send(data.products);
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
