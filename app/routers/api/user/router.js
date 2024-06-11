const express = require("express")

const router = express.Router()

const {sayHello} = require("../../../controllers/totoActions")

const { add} = require("../../../controllers/userActions")

const hashPassword = require("../../../services/hashPassword")

router.get("/", sayHello )

router.post("/", hashPassword, add)

module.exports = router;