// Libraries
const dotenv = require("dotenv");

dotenv.config();

module.exports = {
  PORT: process.env.PORT,
  ELASTICSEARCH_URL: process.env.ELASTICSEARCH_URL,
  ELASTICSEARCH_USER: process.env.ELASTICSEARCH_USER,
  ELASTICSEARCH_PASSWORD: process.env.ELASTICSEARCH_PASSWORD,
};
