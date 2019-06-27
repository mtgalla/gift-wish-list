import axios from "axios";



export default {
  // Search books
  searchTickets: function(title) {
    return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + title + "&fields=items(id,volumeInfo(title,authors,description,imageLinks/thumbnail,infoLink))")
    //+ "&fields=items(volumeInfo)"
  },
  // Gets all books
  getTickets: function() {
    return axios.get("/api/tickets/");
  },
  // Gets the book with the given id
  getTicket: function(id) {
    return axios.get("/api/tickets/" + id);
  },
  // Deletes the book with the given id
  deleteTicket: function(id) {
    return axios.delete("/api/tickets/" + id);
  },
  // Saves a book to the database
  saveTicket: function(savedTickets) {
    return axios.post("/api/tickets", savedTickets);
  }
};
