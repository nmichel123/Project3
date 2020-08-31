const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const path = require('path')
const app = express();
const PORT = process.env.PORT || 3600;
const URI = process.env.MONGODB_URI || "mongodb://localhost/fighters"

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use(express.static("fightapp/public"))
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
})

app.use("/fighter", routes)

mongoose.connect(URI, {useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true})

app.listen(PORT, function() {
    console.log(`API Server now listening on PORT ${PORT}!`);
  });