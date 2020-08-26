const express = require("express");

const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 9000;
const URI = process.env.MONGODB_URI || "mongodb://localhost/fighters"

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
  } else {
      app.use(express.static("fightapp/public"));
  }

app.use("/API", routes)

mongoose.connect(URI)

app.listen(PORT, function() {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
  });