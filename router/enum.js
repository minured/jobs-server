const genderMap = new Map([
    [0, ""],
    [1, "male"],
    [2, "female"],
    [3, "?"],
]);

const userTypeMap = new Map([
    [1, "jobSeeker"],
    [2, "company"],
]);

const positionMap = new Map([
    [1, "前端开发工程师"],
    [2, "Golang"],
    [3, "JavaScript"],
    [4, "Java"],
    [5, "C++"],
    [6, "Python"],
    [7, "Node.js"],
    [8, "C#"],
]);

const errorCode = []

module.exports = {
    genderMap,
    userTypeMap,
    positionMap,
};
