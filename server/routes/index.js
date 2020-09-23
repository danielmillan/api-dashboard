//Libraries
const express = require("express");
const app = express();

// URL ROOT PATH
const path = "/api/v1";

// Import All Routes
app.use(`${path}/users`, require("./users"));
app.use(`${path}/vehicles`, require("./vehicles"));

// Root Path
app.get(path, (req, res) => {
  return res.status(200).json({
    status: "success",
    message: "API active and running.",
  });
});

module.exports = app;
