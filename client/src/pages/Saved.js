import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import SavedTickets from "../components/SavedTickets"
import { Container } from "../components/Grid";

//Save class with saved Tickets state
class Save extends Component {
  state = {
    savedTickets: [],
    userTickets: [],
    userId: ""

  };

  componentDidMount() {
    this.loadTickets();
  }
  
  //get Tickets and set saved ticket state 
  loadTickets = () => {
    API.getTickets()
      .then(res => {
        this.setState({ savedTickets: res.data});
      })
      .catch(err => console.log(err));
  };

  //method to get user id  
  getUser = () => {
    API.getUser()
      .then( response => {

        this.setState({
          userId: response.data.user._id
        })

        let userId = response.data.user._id

        this.getUserId()

        console.log("getUserId: ", userId)
      })
  };

  //method to get user id  
  getUserId = () => {
    API.getUserId(this.state.userId)
      .then( response => {

        const id = response.data.userTickets

        id.map(userIds => {
          API.getTicket(userIds)
            .then(res => {
              this.setState({savedTickets : res.data})
              console.log(res.data)
              console.log(res)
            })
            .catch(err => console.log(err));

          return id
        })
      })
  };

  //delete ticket
  deleteTicket = event => {
    const _id = event.target.id;

    API.deleteTicket(_id)
      .then(x => {
        const newSavedTickets = this.state.savedTickets.filter(item => item._id !== _id);
        this.setState({ savedTickets: newSavedTickets});
      })
      .catch(err => console.log(err));
  };

  render() {
    return (

      <Container fluid>

        <Jumbotron>
          <h1>Ticket Tracker</h1>
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