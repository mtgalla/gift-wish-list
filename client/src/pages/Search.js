import React, { Component } from "react";
import "./style.css";
import API from "../utils/API";
import Jumbotron from "../components/Jumbotron";
import { Col, Row, Container } from "../components/Grid";
import SearchResults from "../components/SearchResults";
import SearchForm from "../components/SearchForm";
import axios from "axios";
import Calendar from 'react-calendar';
import moment from 'moment'


class Search extends Component {
  state = {
    tickets: [],
    search: "",
    error: "",
    savedTickets: [],
    message:"",
    userTickets: "",
    userId: "",
    ticketId: null,
    location: [],
    date: new Date(),
  };

  componentDidMount() {
    API.searchCategory(this.props.match.path.replace(/\//g, ''))
      .then(
        
        res => {
          const events = res.data._embedded.events;

          if (events === "error" || events === undefined) {
            throw new Error(events);
          }
          else {
            let results = events;

            results = results.map(result => {
              //map each ticket data into new object 
              //with ternary operators to handle missing results
              result = {
                key: result.id,
                id: result.id,
                name: (result.name===undefined) ? ("No title") : (result.name),
                attraction: (result._embedded.attractions===undefined) ? ("No info available") : (result._embedded.attractions[0].name),
                venue: (result._embedded.venues[0].name===undefined) ? ("No venue info available") : (result._embedded.venues[0].name),
                image: (result.images[0].url===undefined) ? ("No image") : (result.images[0].url),
                link: (result.url===undefined) ? ("No link") : (result.url),
                date: (result.dates.start.localDate===undefined) ? ("Date not available") : (result.dates.start.localDate),
                location: (result._embedded.venues[0].location===undefined) ? ("No location info available") : ([result._embedded.venues[0].city.name, parseFloat(result._embedded.venues[0].location.latitude),parseFloat(result._embedded.venues[0].location.longitude)])
              }
              console.log(result);
              return result;
            })

            this.setState({ tickets: results, error: "" });
          }
        }
      )
      .catch(err => this.setState({ error: err.items, tickets:"" }), console.log("this is an error"));
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
    this.searchTM(event)
  };

  onChange = date => {
    this.setState({ date})
    const formatted = moment.utc(date).format()
    console.log("formatted: ", formatted)
    API.searchByDate(formatted).then(res => {
      const events = res.data._embedded.events

          if (events === "error" || events === undefined) {
            throw new Error(events);
          }
          else {
            let results = events;
            console.log("result??? ", events[0])
            results = results.map(result => {
              
              //map each ticket data into new object 
              //with ternary operators to handle missing results
              result = {
                key: result.id,
                id: result.id,
                name: (result.name===undefined) ? ("No title") : (result.name),
                attraction: (result._links.attractions===undefined) ? ("No info available") : (result._links.attractions[0].name),
                venue: "",
                image: (result.images[0].url===undefined) ? ("No image") : (result.images[0].url),
                link: (result.url===undefined) ? ("No link") : (result.url),
                date: (result.dates.start.localDate===undefined) ? ("Date not available") : (result.dates.start.localDate),
                location: ""

              }

              return result;
            })
  
            this.setState({ tickets: results, error: "" });
            console.log("SET STATE: ", results)
          }
        }
      ).catch(err => console.log("error:", err));
      
  }

  searchStub = () => {
    API.searchStubhub(this.state.search)
      .then(res => {
        const events = res.data.events

        if (events === "error" || events === undefined) {
          throw new Error(events);
        }
        else {
          let results = events;

          results = results.map(result => {
            //map each ticket data into new object 
            //with ternary operators to handle missing results
            const prefixUri = "https://www.stubhub.com/"
            const img = "https://marketingland.com/wp-content/ml-loads/2016/08/Stubhub-White-Logo-On-Blue-Background-1.png"
            result = {
              key: result.id,
              id: result.id,
              name: (result.name===undefined) ? ("No title") : (result.name),
              attraction: (result.performers.name===undefined) ? ("No info available") : (result.performers.name),
              venue: (result.venue.name===undefined) ? ("No venue info available") : (result.venue.name),
              image: (img) ? ("No image") : (img),
              link: (result.webURI===undefined) ? ("No link") : (prefixUri+result.webURI),
              date: (result.eventDateLocal===undefined) ? ("Date not available") : (result.eventDateLocal)
            }

            return result;
          })

          this.setState({ tickets: results, error: "" });
        }
      })
    .catch(err => this.setState({ error: err.items, tickets:"" }), console.log("this is an error"));
  };

  //function for category search
  searchCategoryTM = () => {
    API.searchCategory("sports")
  }

  searchTM = () => {
    this.getUserId();

    API.searchTickets(this.state.search)
      .then(
        res => {

          const events = res.data._embedded.events

          if (events === "error" || events === undefined) {
            throw new Error(events);
          }
          else {
            let results = events;

            results = results.map(result => {
              //map each ticket data into new object 
              //with ternary operators to handle missing results
              result = {
                key: result.id,
                id: result.id,
                name: (result.name===undefined) ? ("No title") : (result.name),
                attraction: (result._embedded.attractions===undefined) ? ("No info available") : (result._embedded.attractions[0].name),
                venue: (result._embedded.venues[0].name===undefined) ? ("No venue info available") : (result._embedded.venues[0].name),
                image: (result.images[0].url===undefined) ? ("No image") : (result.images[0].url),
                link: (result.url===undefined) ? ("No link") : (result.url),
                date: (result.dates.start.localDate===undefined) ? ("Date not available") : (result.dates.start.localDate),
                location: (result._embedded.venues[0].location===undefined) ? ("No location info available") : ([result._embedded.venues[0].city.name, parseFloat(result._embedded.venues[0].location.latitude),parseFloat(result._embedded.venues[0].location.longitude)])

              }

              return result;
            })
  
            this.setState({ tickets: results, error: "" });
          }
        }
      )
    .catch(err => this.setState({ error: err.items, tickets:"" }), console.log("this is an error"));
  };

  //save tickets
  savedTickets = event => {
    event.preventDefault();
    let savedTickets = this.state.tickets.filter(ticket => ticket.id === event.target.id)
    savedTickets = savedTickets[0];

    API.saveTicket(savedTickets)
      .then(
        this.setState({savedTickets: savedTickets}),
        this.setState({ message: alert("Your ticket is saved") })
      )

      //get ticket id from newly saved ticket
      .then (res =>
        this.userTickets = res.data._id,
        this.setState({
          userTickets : this.userTickets
        })
      )

      //get current user id from db and then push saved ticket id to user db
      .then(res =>
        this.getUserId(),
        this.userId = this.state.userId,

        axios.put('/api/user/' + this.userId, {$push : {
          userTickets: this.userTickets }}, {new:true}
        )
        .then(response => {
          // update the userTicket state 
          this.setState({userTickets: this.userTickets})
        })
      )
      .catch(err => console.log(err))
  }

  //method to get user id  
  getUserId = () => {
    API.getUser(this.userId)
      .then( response => {
        this.setState({
          userId: response.data.user._id
        })

        let userId = response.data.user._id
        console.log("getUserId: ", userId)
        console.log("getthis.state.userId", this.state.userId)
      })
  };

  loadTickets = () => {
    API.getTickets()
      .then(res => {
        this.setState({ savedTickets: res.data});
      })
      .catch(err => console.log(err));
  };

  render() {
    return (

      <Container fluid>

        <Row>
          <Col size="12">
         
            <Jumbotron>
              <h1>Ticket Tracker</h1>
              <h3>Search and track your favorite tickets</h3>
              <Container fluid>
                <div>
                  <Calendar
                    onChange={this.onChange}
                    value={this.state.date}
                  />
                </div>
                <Row>
                  <Col size="xs-1 sm-3">
                  
                  </Col>

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

      </Container>
    );
  }
}

export default Search;