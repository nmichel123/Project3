const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");
const homePage = "../fightapp/public/index.html" || "../client/build/index.html"

router.use("/api", apiRoutes);

router.use( (req, res) => {
    res.sendFile(path.join(__dirname, homePage))
})

module.exports = router