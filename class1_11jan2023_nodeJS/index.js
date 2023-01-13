const express = require("express");

const app = express();

app.use(express.json());

app.use("/api/users", require("./users"));
// app.use("/api/posts", require("./posts"));

app.use("/", (req, res) => {
  res.send(new Date());
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
