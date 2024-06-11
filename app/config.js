const express=  require("express")

const app = express()

const mainRouter = require("../app/routers/api/router")

app.use(express.json())

app.use("/api", mainRouter)

module.exports = app;