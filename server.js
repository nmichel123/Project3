const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const routes = require("./routes");
const path = require('path')
const app = express();
<<<<<<< HEAD
const PORT = process.env.PORT || 3600;
const URI = process.env.MONGODB_URI || "mongodb://localhost/fighters"
=======
const PORT = process.env.PORT || 9000;
const URI = process.env.MONGODB_URI || "mongodb://localhost/fighters";
>>>>>>> dcf7d3e8f765426addf48e88351444ca7830f43f

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


<<<<<<< HEAD
app.use(express.static("fightapp/public"))
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
})

app.use("/fighter", routes)
=======
app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
>>>>>>> dcf7d3e8f765426addf48e88351444ca7830f43f

mongoose.connect(URI, {useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true})

app.listen(PORT, function() {
    console.log(`API Server now listening on PORT ${PORT}!`);
  });