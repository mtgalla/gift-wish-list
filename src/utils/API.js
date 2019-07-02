import axios from "axios";

export default {
  // Search ticket
  searchTickets: function(search) {
    // return axios.get("https://app.ticketmaster.com/discovery/v2/events.city.json?keyword=" +search+ "&apikey=JXnaWBjyRcEQwWBS2tO1DRxzbaP4CKl1&size=4&page="+5)
    return axios.get( "https://api.stubhub.com/sellers/search/events/v3",
      {params: {q:search},
    headers: { 'Authorization':'Bearer HXYFUF7ufrQ9EuxZ1lKZDnKehYpI' }
  })
  },
  // Gets all tickets
  getTickets: function() {
    return axios.get("/api/tickets/");
  },
  // Gets the ticket with the given id
  getTicket: function(id) {
    return axios.get("/api/tickets/" + id);
  },
  // Deletes the ticket with the given id
  deleteTicket: function(id) {
    return axios.delete("/api/tickets/" + id);
  },
  // Saves a ticket to the database
  saveTicket: function(savedTickets) {
    return axios.post("/api/tickets", savedTickets);
  },
  saveUserTicket: function(id, ticketId){
    return axios.put("/api/user/" + id, {ticket: ticketId})
  }
};
