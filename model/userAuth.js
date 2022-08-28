/** @format */

const mongoose = require("mongoose");

const schema = {
  username: { type: String, require: true, unique: true },
  password: {
    type: String,
    require: true,
    set(val) {
      return require("bcryptjs").hashSync(val, 10);
    },
  },
  // enum: | 1 求职者 | 2 企业 |
  type: { type: Number, require: true },
};

const config = {
  timestamps: true,
};

const userAuthSchema = new mongoose.Schema(schema, config);

module.exports = userAuthSchema;
