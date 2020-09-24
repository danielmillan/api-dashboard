//Libraries
const app = require("express")();

// Models
const {
  createVechicle,
  updateVechicle,
  getVehicles,
  deleteVehicle,
} = require("../models/vehicles");

// Declare Routes
app.post("/", createVechicle);
app.put("/:id", updateVechicle);
app.get("/", getVehicles);
app.delete("/:id", deleteVehicle);

module.exports = app;
