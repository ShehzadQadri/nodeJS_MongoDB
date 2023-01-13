const users = require("../constants/users");

let count = users.length;

const addUsers = (req, res) => {
  users.push({ id: ++count, ...req.body });
  res.status(200).send({ status: 200, message: "user added successfuly" });
};

module.exports = addUsers;
