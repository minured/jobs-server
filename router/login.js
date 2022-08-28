const { Router } = require("express");
const router = Router();
const { UserAuth, UserInfo } = require("../model");
const jwt = require("jsonwebtoken");
const { JWTKEY } = require("../private");
const response = require("./response");
const bcryptjs = require("bcryptjs");
const { jwtSign } = require("./utils");

// TODO 中间件:
// 自动提取请求体
// 自动格式化响应体 重置响应体
// 登录token校验

router.post("/api/register", async (req, res) => {
    const { username, password, type } = req.body;

    // 账号是否已存在
    const record = await UserAuth.find({
        username,
    });
    if (record.length) {
        response.message = "账号已存在";
        return res.send(response);
    }

    // 创建记录
    const userAuth = await UserAuth.create({
        username,
        password,
        type,
    });

    // 生成token
    const token = jwtSign(userAuth._id);

    // 创建用户信息记录
    const userInfo = UserInfo.create({
        username,
        nickname: "",
        gender: 0,
        avatar: "",
        positions: [],
        resume: [],
        signature: "",
    });

    response.message = "注册成功";
    response.info = {
        username,
        token,
    };

    res.send(response);
});

router.post("/api/login", async (req, res) => {
    const { username, password, type } = req.body;

    const record = await UserAuth.findOne({
        username,
    });

    if (!record) {
        response.message = "账户不存在";
        return res.send(response);
    }

    const passwordValidate = bcryptjs.compareSync(password, record.password);

    if (!passwordValidate) {
        response.message = "账户或密码错误";
        return res.send(response);
    }

    const token = jwtSign(record._id);

    response.message = "登陆成功";
    response.info = {
        token,
    };

    res.send(response);
});

module.exports = router;
