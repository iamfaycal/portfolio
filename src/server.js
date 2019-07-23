const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const port = process.env.PORT || 5000;
const db = require("../config").mongoURI;

// const login = require("./routes/api/login");
// const realisations = require("./routes/api/realisations");
const message = require("./routes/api/message");

// body parser middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// app.use("/api/login", login);
// app.use("/api/realisations", realisations);
app.use("/api/message", message);

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));
