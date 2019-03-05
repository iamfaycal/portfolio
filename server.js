const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const port = process.env.PORT || 5000;
const db = require('./config').mongoURI;

const realisations = require('./routes/api/realisations');

// body parser middleware
app.use(bodyParser.json());

// Connect to DB
mongoose
  .connect(db)
  .then(() => console.log("MongoDB Connected..."))
  .catch(err =>console.log(err))

app.use('/api/realisations', realisations);

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));