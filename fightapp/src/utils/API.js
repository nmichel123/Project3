import axios from "axios";

export default {
  // Gets all fighters
  getFighters: function() {
    return axios.get("/api/books");
  },
  // Gets the fighter with the given id
  getFighter: function(id) {
    return axios.get("/api/books/" + id);
  },
  // Deletes the fighter with the given id
  deleteFighter: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a fighter to the database
  saveFighter: function(bookData) {
    return axios.post("/api/books", bookData);
  }
}
