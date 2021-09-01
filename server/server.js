const express = require('express');
const cors = require('cors');

const data = require('./data.js');

const app = express();
app.use(cors());

app.get('/api/products', (req, res) => {
  res.send(data.products);
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
