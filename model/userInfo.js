/** @format */

const mongoose = require("mongoose");

// 需要一张枚举表: 职位意向分类, 企业规模分类,

// 求职者和企业一张表,先不分开吧
const schema = {
    username: { type: String, require: true, unique: true },
    nickname: { type: String },
    avatar: String,
    gender: Number,
    signature: String,
    positions: Array,
    resume: Array,

    // enum: | 1 求职者 | 2 企业 |
    type: { type: Number, require: true },
};

const config = {
    timestamps: true,
};

const userInfoSchema = new mongoose.Schema(schema, config);

module.exports = userInfoSchema;
