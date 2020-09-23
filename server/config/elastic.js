// Libraries
const { Client } = require("@elastic/elasticsearch");

// Config
const config = require("./index");
const { ELASTICSEARCH_URL } = config;

// Init client
const client = new Client({ node: ELASTICSEARCH_URL });

module.exports = client;
