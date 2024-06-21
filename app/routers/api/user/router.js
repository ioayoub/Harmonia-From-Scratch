const express = require("express")

const router = express.Router()

const {sayHello} = require("../../../controllers/totoActions")

const { add} = require("../../../controllers/userActions")

const validateUserSchema = require("../../../middlewares/validateUserSchema")
const hashPassword = require("../../../services/hashPassword")

router.get("/", sayHello )

router.post("/", validateUserSchema ,hashPassword, add)

module.exports = router;