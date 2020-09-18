// Database
const connection = require("../database");

const createUser = (req, res) => {
  const user = req.body;
  connection.query(
    "INSERT INTO mng_users() VALUES (?,?,?,?,now(),now())",
    [user.identification, user.name, user.last_name, user.position_id],
    (error, results, fields) => {
      if (error) {
        if (error.code === "ER_DUP_ENTRY")
          return res.status(500).json({
            status: "failed",
            message: "User has already exist.",
          });
        return res.status(500).json({
          status: "failed",
          message: error,
        });
      }
      return res.json({
        status: "success",
        message: "User created.",
      });
    }
  );
};

const updateUser = (req, res) => {
  const user = req.body;
  const identification = req.params.id;
  connection.query(
    "UPDATE mng_users SET name=?, last_name=?, position_id=?, updated_at=now() where identification=?",
    [user.name, user.last_name, user.position_id, identification],
    (error, results, fields) => {
      if (error)
        return res.status(500).json({
          status: "failed",
          message: error,
        });
      return res.json({
        status: "success",
        message: "User updated.",
      });
    }
  );
};

const getUsers = (req, res) => {
  connection.query(
    `select a.identification, a.name, a.last_name, a.position_id, b.name_position
    from mng_users a
    inner join mng_positions b on b.id_position=a.position_id order by a.created_at`,
    (error, results, fields) => {
      if (error)
        return res.status(500).json({
          status: "failed",
          message: error,
        });
      return res.json({
        status: "success",
        message: results,
      });
    }
  );
};

const deleteUser = (req, res) => {
  const identification = req.params.id;
  connection.query(
    "DELETE FROM mng_users where identification=?",
    [identification],
    (error, results, fields) => {
      if (error)
        return res.status(500).json({
          status: "failed",
          message: error,
        });
      return res.json({
        status: "success",
        message: "User deleted.",
      });
    }
  );
};

module.exports = {
  createUser,
  updateUser,
  getUsers,
  deleteUser,
};
