const router = require("express").Router()
const db = require("../models")
const profileController = require("../controllers/profileController")

router.route("/")
    .get((req, res) => db.Profile.find({})
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err)))
router.route("/")
    .post(profileController.create)

router.route("/:id")
    .get(profileController.findById)

router.route("/:id")
    .put(profileController.update)
router.route("/:id")
    .delete(profileController.remove)

module.exports = router