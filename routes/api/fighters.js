const router = require("express").Router()
const db = require("../models")
const profileController = require("../../controllers/profileControllers")

router.route("/")
    .get(profileController.findAll)
    .post(profileController.create)

router.route("/:id")
    .get(profileController.findById)
    .put(profileController.update)
    .delete(profileController.remove)

modeule.exports = router