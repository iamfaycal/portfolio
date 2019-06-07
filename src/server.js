const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const port = process.env.PORT || 5000;
const db = require("../config").mongoURI;

const realisations = require("./routes/api/realisations");
const login = require("./routes/api/login");

// body parser middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Connect to DB
mongoose
    .connect(db, { useNewUrlParser: true })
    .then(() => console.log("MongoDB Connected..."))
    .catch(err => console.log(err));

app.use("/api/realisations", realisations);
app.use("/api/login", login);

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));
