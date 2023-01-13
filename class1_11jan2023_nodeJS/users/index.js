const express = require("express");

const router = express.Router();

router.get("/", require("./get_users"));
router.post("/", require("./add_users"));
router.delete("/:id", require("./delete_users"));

module.exports = router;
