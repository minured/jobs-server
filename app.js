/** @format */

const express = require("express");
const core = require("cors");
const { port } = require("./config");
const registerRouter = require("./router");

const app = express();

app.use(express.json());
// app.use(core());
registerRouter(app);

app.get("/api", (req, res) => res.send("jobs-server"));

app.listen(port, () => {
  console.log(`jobs-server is running on: http://localhost:${port}`);
});

module.exports = { app };
