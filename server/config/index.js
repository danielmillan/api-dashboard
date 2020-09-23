// Libraries
const dotenv = require("dotenv");

dotenv.config();

module.exports = {
  PORT: process.env.PORT,
  ELASTICSEARCH_URL: process.env.ELASTICSEARCH_URL,
};
