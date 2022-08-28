const { JWTKEY } = require("../private");
const { UserAuth } = require("../model");
const jwt = require("jsonwebtoken");
const response = require("../router/response");

// 关于token放cookie还是header https://www.zhihu.com/question/548042320  
const loginAuth = async (req, res, next) => {
    try {
        const reqToken = String(req.headers.authorization).split(" ").pop();
        const { id } = jwt.verify(reqToken, JWTKEY);
        req.user = await UserAuth.findById(id);
    } catch (e) {
        console.log(e);
        response.message = "请先登录";
        return res.send(response);
    }
    next();
};

module.exports = {
    loginAuth,
};
