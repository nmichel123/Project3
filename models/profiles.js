const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const profileSchema = new Schema({
  fightId: { type: Number, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: false },
  image: { type: String, required: false},
  stats: {
    weight: { type: Number },
    height: { type: Number },
    reach: { type: Number },
    class: { type: String }
  },
  location: {
    latitude: { type: Number },
    longitude: { type: Number }
  },
  userCred: {
      userName: {type: String, required: true},
      password: {type: String, required: true}
  }
});

const Profile = mongoose.model("Profile", profileSchema);

module.exports = Profile;