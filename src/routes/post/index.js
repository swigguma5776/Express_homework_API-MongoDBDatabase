const PostDashboardRouter = require("express").Router()

PostDashboardRouter.route("/create")
    .post(require("./submit.js"))

module.exports = PostDashboardRouter