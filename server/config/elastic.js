// Libraries
const { Client } = require("@elastic/elasticsearch");

// Config
const config = require("./index");
const {
  ELASTICSEARCH_URL,
  ELASTICSEARCH_USER,
  ELASTICSEARCH_PASSWORD,
} = config;

// Init client
const client = new Client({
  node: ELASTICSEARCH_URL,
  auth: { username: ELASTICSEARCH_USER, password: ELASTICSEARCH_PASSWORD },
});

module.exports = client;
