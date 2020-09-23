//Libraries
const app = require("express")();

// Models
const { getVehicles } = require("../models/vehicles");

// Declare Routes
app.get("/", getVehicles);

module.exports = app;
