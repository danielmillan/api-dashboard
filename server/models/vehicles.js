// Libraries
const client = require("../config/elastic");

const createVechicle = (req, res) => {
  const vehicle = req.body;
  client
    .create({
      index: "vehicles",
      id: vehicle.identification,
      body: {
        brand: vehicle.brand,
        model: vehicle.model,
        year: vehicle.year,
        color: vehicle.color,
        bodywork: vehicle.bodywork,
        fuel_type: vehicle.fuel_type,
      },
    })
    .then((result) => {
      return res
        .status(200)
        .json({ status: "success", message: result.body.result });
    })
    .catch((err) => {
      return res.status(409).json({ status: "failed", message: err.meta.body });
    });
};

const updateVechicle = (req, res) => {
  const vehicle = req.body;
  const identification = req.params.id;
  client
    .update({
      index: "vehicles",
      id: identification,
      body: {
        doc: {
          brand: vehicle.brand,
          model: vehicle.model,
          year: vehicle.year,
          color: vehicle.color,
          bodywork: vehicle.bodywork,
          fuel_type: vehicle.fuel_type,
        },
      },
    })
    .then((result) => {
      return res
        .status(200)
        .json({ status: "success", message: result.body.result });
    })
    .catch((err) => {
      return res.status(500).json({ status: "failed", message: err });
    });
};

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
      return res.json({ status: "success", message: result.body.hits });
    }
  );
};

const deleteVehicle = (req, res) => {
  const identification = req.params.id;
  client
    .delete({
      index: "vehicles",
      id: identification,
    })
    .then((result) => {
      return res
        .status(200)
        .json({ status: "success", message: result.body.result });
    })
    .catch((err) => {
      return res.status(500).json({ status: "failed", message: err });
    });
};

module.exports = {
  createVechicle,
  updateVechicle,
  getVehicles,
  deleteVehicle,
};
