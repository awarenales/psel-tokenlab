const express = require("express");
const mongoose = require("mongoose");
const requireDir = require("require-dir");

// start App
const app = express();
app.use(express.json());

// start DB
mongoose.connect("mongodb://localhost:27017/nodeapi", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
requireDir("./src/models");

// routes
app.use('/api', require('./src/routes'));

app.listen(3001);
