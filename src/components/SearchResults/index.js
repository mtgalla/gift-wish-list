import React from "react";
import "./style.css";
import { Col, Row, } from "../Grid";
import Moment from "react-moment";

const SearchResults = props => {
  console.log(props.tickets.length);
  return (props.tickets.length === 0) ? (
    <div className="card">
        <div className="card-body player">
            <div className="article">
                <h3>No Results to Display</h3>
            </div>
        </div>
    </div>
) : (
        <div className="card">
            <div className="card-body">
                <div className="article">
                    <h3>Search Results</h3>
                    {props.tickets.map(ticket => {
                        return (
                          <div>
                            <li className="list list-group-item" id={ticket.id}>
                                <Row className="SearchResult row" id={ticket.name + "Card"} key={ticket.id}>
                                    <Col size="12" className="ticketImage">
                                        <img src={ticket.image} alt={ticket.name} />
                                    </Col>
                                    <Col size="1" className="emptyCol"/>
                                    <Col size="9" className="ticketInfo">
                                      <Row>
                                          <h2 className="ticketDate"><Moment format ="MMM DD">{ticket.date}</Moment></h2>
                                      </Row>
                                      <Row>
                                          <h3 className="ticketName">{ticket.name}</h3>
                                      </Row>
                                      <Row>
                                          <h4 className="ticketAttraction">{ticket.attraction}</h4>
                                      </Row>
                                      <Row>
                                          <p className="ticketVenue">{ticket.venue}</p>
                                      </Row>
                                    </Col>
                                </Row>
                                <br></br>
                                <Row className="buttonDiv ">
                                    <button className="savedTickets btn btn-primary" id={ticket.id} key={ticket._id} onClick={(event) => props.savedTickets(event)}>
                                        Save ticket
                                    </button>
                                    <a href={ticket.link} target="_blank" rel="noopener noreferrer">
                                        <button className="viewTicket btn btn-success">
                                            View Ticket
                                    </button>
                                    </a>
                                </Row>
                            </li>
                            <br />
                          </div>
                        );
                    })}
                </div>
            </div>
        </div>
    )
}
export default SearchResults;
