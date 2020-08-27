const router = require("express").Router()
const profileController = require("../../controllers/profileControllers")

router.route("/")
    .get(profileController.findAll)
    .post(profileController.create)

router.route("/:id")
    .get(profileController.findById)
    .put(profileController.update)
    .delete(profileController.remove)

module.exports = router