import axios from "axios";

export default {
  // Gets all fighters
  // getFighters: function() {
  //   return axios.get("/api/fighter");
  // },

  getFighters: function() {
    return axios.get("https://randomuser.me/api/?inc=picture&noinfo");
  },

  // Gets the fighter with the given id
  getFighter: function(id) {
    return axios.get("/api/fighter/" + id);
  },

  // Deletes the fighter with the given id
  deleteFighter: function(id) {
    return axios.delete("/api/fighter/" + id);
  },
  // Saves a fighter to the database
  saveFighter: function(fighterData) {
    return axios.post("/api/fighter", fighterData);
  }
}
