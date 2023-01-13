const users = require("../constants/users");
const Users = require("../models/User");
const bcrypt = require("bcrypt");

const login = async (req, res) => {
  const user = await Users.find({ email: req.body.email });

  if (user.length) {
    const match = bcrypt.compareSync(req.body.password, user[0].password);
    if (match) {
      res.status(200).send({ status: 200, message: "user login successfuly" });
    } else {
      res
        .status(401)
        .send({ status: 401, message: "email/password incorrect" });
    }
  } else {
    res.status(404).send({ status: 404, message: "user not found" });
  }
};

module.exports = login;
