//Libraries
const app = require("express")();

// Models
const {
  createUser,
  updateUser,
  getUsers,
  deleteUser,
} = require("../models/users");

// Declare Routes
app.post("/", createUser);
app.put("/:id", updateUser);
app.get("/", getUsers);
app.delete("/:id", deleteUser);

module.exports = app;
