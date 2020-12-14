const express = require("express")
const passport = require("passport")
const { increment } = require("../controller/protectedController")

const router = express.Router()

router.post("/inc", passport.authenticate("jwt", { session: false }), increment)
// router.post("/inc", )

module.exports = router
