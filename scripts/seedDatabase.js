const mongoose = require("mongoose");
const db = require("../models");
const URI = process.env.MONGODB_URI || "mongodb://localhost/fighters"

const fighterSeed = [
    {
        firstName: "John",
        lastName: "Kim",
        url: ""
    },
    {
        firstName: "Fighter",
        lastName: "One",
        url: ""
    },
    {
        firstName: "Fightman",
        lastName: "Two",
        url: ""
    }
]

db.Profile
.remove({})
.then(() => db.Profile.collection.insertMany(fighterSeed))
.then(data => {
    console.log(data.result.n + "database seeded")
    process.exit(0)
})
.catch(err => {
    console.log(err)
    process.exit(1)
})