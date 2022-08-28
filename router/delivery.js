/** @format */

const { Router } = require("express");
const router = Router();
const { Delivery } = require("../model");
const { loginAuth } = require("../middleware");

// 公司查询投递箱
router.get("/api/delivery", loginAuth, async (req, res) => {
    deliveries = await Delivery.find();
    res.send(deliveries);
});

// 求职者投递简历
router.post("/api/delivery", loginAuth, async (req, res) => {
    const { senderId, companyId, jobId, resumeId } = req.body;
    const newDelivery = new Delivery({
        companyId,
        jobId,
        resumeId,
        senderId,
    });
    await newDelivery.save();

    res.send({
        code: 200,
        msg: "投递成功",
    });
});

module.exports = router;
