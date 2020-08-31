const db = require("../models/profiles");

module.exports = {
    findAll: function(req, res) {
        db.Profile
        .find({})
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).end(err))
    },
    findById: function(req, res) {
        db.Profile
        .findById(req.params.id)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).end(err))
    },
    create: function(req, res) {
        db.Profile
        .create(req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).end(err))
    },
    update: function(req, res) {
        db.Profile
        .findOneAndUpdate({ _id: req.params.id }, req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).end(err))
    },
    remove: function(req, res) {
        db.Profile
        .findbyId({ _id: req.params.id })
        .then(dbModel => dbModel.remove())
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).end(err))
    }
}