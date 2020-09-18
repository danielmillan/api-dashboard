//Libraries
const app = require('express')();

// Models
const { getPositions } = require('../models/positions');

// Declare Routes
app.get('/', getPositions);

module.exports = app;