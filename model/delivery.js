/** @format */
// 投递记录
const mongoose = require("mongoose");

const schema = {
  senderId: { type: String, required: true },
  jobId: { type: String, required: true },
  // 方便公司投递箱查询
  companyId: { type: String, required: true },
  // 求职者可以拥有多份简历
  resumeId: { type: String, required: true },
};

const config = {
  timestamps: true,
};

const deliverySchema = new mongoose.Schema(schema, config);

module.exports = deliverySchema;
