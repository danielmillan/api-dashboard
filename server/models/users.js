// Libraries
const client = require("../config/elastic");

const createUser = async (req, res) => {
  const user = req.body;
  await client
    .create({
      index: "users",
      id: user.identification,
      body: {
        name: user.name,
        last_name: user.last_name,
        position: user.position_id,
      },
    })
    .then((result) => {
      return res.json({ status: "success", message: result.body.result });
    })
    .catch((err) => {
      if (err)
        return res
          .status(409)
          .json({ status: "failed", message: err.meta.body });
    });
};

const updateUser = (req, res) => {
  const user = req.body;
  const identification = req.params.id;
  client
    .update({
      index: "users",
      id: identification,
      body: {
        doc: {
          name: user.name,
          last_name: user.last_name,
          position: user.position_id,
        },
      },
    })
    .then((result) => {
      return res.json({ status: "success", message: result.body.result });
    })
    .catch((err) => {
      if (err) return res.status(500).json({ status: "failed", message: err });
    });
};

const getUsers = (req, res) => {
  client.search(
    {
      index: "users",
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

const deleteUser = (req, res) => {
  const identification = req.params.id;
  client
    .delete({
      index: "users",
      id: identification,
    })
    .then((result) => {
      return res.json({ status: "success", message: result.body.result });
    })
    .catch((err) => {
      if (err) return res.status(500).json({ status: "failed", message: err });
    });
};

module.exports = {
  createUser,
  updateUser,
  getUsers,
  deleteUser,
};
