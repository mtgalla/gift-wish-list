import React, { Component } from "react";
// import DeleteBtn from "../components/DeleteBtn";
import API from "../utils/API";
import Jumbotron from "../components/Jumbotron";
// import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
// import { List, ListItem } from "../components/List";
import SearchResults from "../components/SearchResults";
import SearchForm from "../components/SearchForm";
// import { Input, TextArea, FormBtn } from "../components/Form";

class Search extends Component {
  state = {
    tickets: [],
    search: "",
    error: "",
    savedTickets: [],
    message:""
  };

  handleInputChange = event => {
    const { search, value } = event.target;
    console.log("Search:", search, "Value:", value, "Event:", event);
    this.setState({
      search: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    console.log("this is search on line 48 " + this.state.search);
    API.searchTickets(this.state.search)
    // console.log("tickets here:", tickets)
    .then(res => {
      console.log("response", res)
      if (res.data.items === "error" || res.data.items === undefined) {
        console.log(res.data.items);
        throw new Error(res.data.items);
      }
      else {
        console.log(res.data.items);
        let results = res.data.items;
        results = results.map(result => {
          //map each ticket data into new object 
          //with ternary operators to handle missing results
          result = {
              key: result.id,
              id: result.id,
              title: (result.volumeInfo.title===undefined) ? ("No title") : (result.volumeInfo.title),
              authors: (result.volumeInfo.authors===undefined) ? ("No author") : (result.volumeInfo.authors),
              description: (result.volumeInfo.description===undefined) ? ("No description") : (result.volumeInfo.description),
              image: (result.volumeInfo.imageLinks===undefined) ? ("No image") : (result.volumeInfo.imageLinks.thumbnail),
              link: (result.volumeInfo.infoLink===undefined) ? ("No link") : (result.volumeInfo.infoLink)
          }
          // console.log(result);
          return result;
      })
      this.setState({ tickets: results, error: "" });
      console.log(this.state);
      console.log(results)
    }
  })
    .catch(err => this.setState({ error: err.items, tickets:"" }), console.log("this is an error"));
};

//save tickets
 savedTickets = event => {
    event.preventDefault();
    let savedTickets = this.state.tickets.filter(ticket => ticket.id === event.target.id)
    savedTickets = savedTickets[0];
    console.log(savedTickets);
    API.saveTicket(savedTickets)
        .then(
          this.setState({savedTickets: savedTickets}),
          this.setState({ message: alert("Your ticket is saved") })
          )
        .catch(err => console.log(err))
}

  render() {
    return (
      <Container fluid>
        <Row>
        <Col size="12">
         
            <Jumbotron>
              <h1>Ticket Search and Compare</h1>
              <h3>Search and track your favorite tickets</h3>
              <Container fluid>
              <Row>
                <Col size="xs-1 sm-3"></Col>
                <Col size="xs-10 sm-6"> 
                <SearchForm
                  value = {this.state.search}
                  handleFormSubmit={this.handleFormSubmit}
                  handleInputChange={this.handleInputChange}
                />
                </Col>
                <Col size="xs-1 sm-3"></Col>
              </Row>
            </Container>
            </Jumbotron>
            </Col>
        </Row>

      <Container fluid>


            <SearchResults tickets={this.state.tickets} savedTickets={this.savedTickets}/>

      

      </Container>
            
          {/* </Col> */}
        {/* </Row> */}
      </Container>
    );
  }
}

export default Search;
