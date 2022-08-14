/** @format */

const mongoose = require("mongoose");
const { MONGODB } = require("../private");

const delivery = require("./delivery");

mongoose.connect(MONGODB, {
//   useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
//   useFindAndModify: false,
});

const Delivery = mongoose.model("Delivery", delivery);

module.exports = { Delivery };
