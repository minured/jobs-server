/** @format */

const mongoose = require("mongoose");
const { MONGODB } = require("../private");

const delivery = require("./delivery");
const userAuth = require("./userAuth");
const userInfo = require("./userInfo");

mongoose.connect(MONGODB, {
    //   useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    //   useFindAndModify: false,
});

const Delivery = mongoose.model("Delivery", delivery);
const UserAuth = mongoose.model("UserAuth", userAuth);
const UserInfo = mongoose.model("UserInfo", userInfo);

module.exports = { Delivery, UserAuth, UserInfo };
