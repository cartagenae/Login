const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 4001;

app.use(express.static('src'));

// Parsing
app.use(bodyParser.json());

// Error-Handling
app.use((err, req, res, next) => {
  if(!err.status) {
    err.status = 500;
  }
  res.status(err.status).send(err.message);
});

// Server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
