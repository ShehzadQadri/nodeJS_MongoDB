const users = require("../constants/users");

const getUsers = async (req, res) => {
  const { name } = req.query;
  if (name) {
    return res.status(200).send(users.filter((data) => data.username === name));
  }
  return res.status(200).send(users);
};

module.exports = getUsers;
