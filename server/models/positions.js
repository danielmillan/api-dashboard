// Database
const connection = require("../database");

const getPositions = (req, res) => {
  connection.query("SELECT * FROM mng_positions", (error, results, fields) => {
    if (error)
      return res.status(500).json({
        status: "failed",
        message: error,
      });
    return res.json({
      status: "success",
      message: results,
    });
  });
};

module.exports = {
  getPositions,
};
