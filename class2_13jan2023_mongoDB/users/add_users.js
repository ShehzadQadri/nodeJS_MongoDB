const users = require("../constants/users");
const Users = require("../models/User");
const bcrypt = require("bcrypt");
let count = users.length;

const addUsers = async (req, res) => {
  try {
    const hash = bcrypt.hashSync(req.body.password, 10);

    let userObj = {
      ...req.body,
      password: hash,
    };
    const user = new Users(userObj);
    console.log("req.body", req.body);
    const response = await user.save();
    console.log("res", response);
    res.status(200).send({ status: 200, message: "user added successfuly" });
  } catch (err) {
    res.status(401).send({ status: 401, err });
  }
};

module.exports = addUsers;
