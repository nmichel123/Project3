const mongoose = require("mongoose");
const { stringify } = require("querystring");
const Schema = mongoose.Schema;

const profileSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: false },
  picture: { type: string, required: false}
});

const Profile = mongoose.model("Profile", profileSchema);

module.exports = Profile;