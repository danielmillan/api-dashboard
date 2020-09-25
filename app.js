//Libraries
const express = require("express");
const app = express();
const cors = require("cors");
const fs = require("fs");
const path = require("path");
const morgan = require("morgan");

// App config
const config = require("./server/config");
const { PORT } = config;

// Create a write stream
var accessLogStream = fs.createWriteStream(
  path.join(__dirname, "server/logs/access.log"),
  { flags: "a" }
);

// Init middlewares
app.use(cors());
app.use(morgan("combined", { stream: accessLogStream }));
app.use(require("body-parser").json());

// Start routes
app.use(require("./server/routes"));

module.exports = app; // for testing

// init server
app.listen(PORT, () => {
  console.log(`Server at ready in port: ${PORT}`);
});
