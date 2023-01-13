const express = require("express");

const router = express.Router();

router.get("/", require("./get_users"));
router.post("/", require("./add_users"));
router.post("/login", require("./login"));
router.delete("/:id", require("./delete_users"));

module.exports = router;
