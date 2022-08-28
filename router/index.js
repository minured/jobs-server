/** @format */

const delivery = require("./delivery");
const login = require("./login");

const router = [delivery, login];

const registerRouter = (app) => {
  router.forEach((i) => app.use(i));
};

module.exports = registerRouter;
