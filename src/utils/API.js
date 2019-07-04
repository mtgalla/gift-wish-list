import axios from "axios";

  //ticketmaster search variables
   const tUrl = "https://app.ticketmaster.com/discovery/v2/events.json?";
   const tApiKey = "&apikey=JXnaWBjyRcEQwWBS2tO1DRxzbaP4CKl1"
   const location = "&radius=25&unit=miles&city=boston"
   const category = "&classificationName="
   const resultSize = "&size=10"

export default {

  // Search ticketmaster
  searchTickets: function(search) {
<<<<<<< Updated upstream
    return axios.get(tUrl + search + tApiKey + resultSize + location + category)
=======
    return axios.get("https://app.ticketmaster.com/discovery/v2/events.json?keyword=" +search+ "&apikey=JXnaWBjyRcEQwWBS2tO1DRxzbaP4CKl1&size=12")
>>>>>>> Stashed changes
  },
  //search StubHub
  searchStubhub: function(search) {
    return axios.get( "https://api.stubhub.com/sellers/search/events/v3",
    {params: {q:search},
  headers: { 'Authorization':'Bearer HXYFUF7ufrQ9EuxZ1lKZDnKehYpI' }
})
  },
// Search category
  searchCategory: function(category) {
    return axios.get(tUrl + tApiKey + resultSize + category)
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
