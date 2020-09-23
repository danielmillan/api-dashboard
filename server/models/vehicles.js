// Libraries
const client = require("../config/elastic");

const getVehicles = (req, res) => {
  client.search(
    {
      index: "vehicles",
      body: {
        query: {
          match_all: {},
        },
      },
    },
    (err, result) => {
      if (err) return res.status(500).json({ status: "failed", message: err });
      return res.json({ status: "success", message: result.body.hits });
    }
  );
};

module.exports = {
  getVehicles,
};
