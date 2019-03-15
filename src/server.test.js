const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const port = process.env.PORT || 5000;
const db = require('../config').mongoURI;

const realisations = require('./routes/api/realisations');
const login = require('./routes/api/login');

// body parser middleware
app.use(bodyParser.json());

// Connect to DB
it('Should connect to Database', () => {
    mongoose
        .connect(db, { useNewUrlParser: true })
        .then(() => console.log("MongoDB Connected..."))
        .catch(err =>console.log(err))
});
