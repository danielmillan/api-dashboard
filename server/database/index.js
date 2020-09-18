// Libraries
const mysql = require('mysql');

// Config
const config = require('../config');
const { DB_URL } = config;

var connection = mysql.createConnection(DB_URL);

module.exports = connection;