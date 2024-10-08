const Mock = require("mockjs")

Mock.mock("/v1/user/userInfo", "get", require("./json/userInfo"))