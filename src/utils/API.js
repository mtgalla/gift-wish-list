import axios from "axios";



export default {
  // Search books
  searchTickets: function(search) {
    return axios.get("https://app.ticketmaster.com/discovery/v2/events.json?keyword=" +search+ "&apikey=JXnaWBjyRcEQwWBS2tO1DRxzbaP4CKl1&size=4&page="+5)
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
