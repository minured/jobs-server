const jwt = require("jsonwebtoken");
const { JWTKEY } = require("../private");

const jwtSign = (id) => {
    return jwt.sign({ id }, JWTKEY);
};

module.exports = {
    jwtSign,
};
