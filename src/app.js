const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Click Fit Server is running....");
});




module.exports = app;
