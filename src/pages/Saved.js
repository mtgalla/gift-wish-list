import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import SavedTickets from "../components/SavedTickets"
import { Container } from "../components/Grid";

//Save class with saved Tickets state
class Save extends Component {
  state = {
    savedTickets: []

  };

  
  componentDidMount() {
    this.loadTickets();
  }

  //get Tickets and set saved ticket state 
  loadTickets = () => {
    API.getTickets()
      .then(res => {
        this.setState({ savedTickets: res.data});
        // console.log("looking for savedTickets here: ", this.state.savedTickets)
      })
      .catch(err => console.log(err));
  };

  //delete ticket
  deleteTicket = event => {
    console.log("Delete event here: ", event.target);
    const _id = event.target.id;
    API.deleteTicket(_id)
      .then(x => {
        console.log("looking for ticket id to delete here: ", this.state.savedTickets[0]._id);
        console.log(_id);
        const newSavedTickets = this.state.savedTickets.filter(item => item._id !== _id);
        this.setState({ savedTickets: newSavedTickets});
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
        <Container fluid>
          <Jumbotron>
            <h1>Ticket Search and Compare</h1>
            <h3>Search and track your favorite tickets</h3>
          </Jumbotron>
            <Container>
                <SavedTickets savedTickets={this.state.savedTickets} deleteTicket={this.deleteTicket} />
            </Container>
        </Container>
    )
}
}

export default Save;
