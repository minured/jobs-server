/** @format */

const delivery = require("./delivery");

const router = [delivery];

const registerRouter = (app) => {
  router.forEach((i) => app.use(i));
};

module.exports = registerRouter;
