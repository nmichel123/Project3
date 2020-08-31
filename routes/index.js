<<<<<<< HEAD
const router = require("express").Router()
const fighterRoutes = require("./fighters")
=======
const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");
const homePage = "../fightapp/public/index.html" || "../fightapp/build/index.html"
>>>>>>> dcf7d3e8f765426addf48e88351444ca7830f43f

router.use("/fighter", fighterRoutes)

module.exports = router