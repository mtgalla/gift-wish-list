import React from "react";
import "./style.css";
import { Col, Row, } from "../Grid";

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
                            <li className="list list-group-item">
                                <Row className="SearchResult row" id={ticket.title + "Card"} key={ticket._id}>
                                    <Col size="12" className="ticketImage">
                                        <img src={ticket.image} alt={ticket.title} />
                                    </Col>
                                    <Col size="1" className="emptyCol"/>
                                    <Col size="9" className="ticketInfo">
                                        <Row>
                                            <h3 className="ticketTitle">{ticket.title}</h3>
                                        </Row>
                                        <Row>
                                            <h4 className="ticketAuthor">{ticket.authors}</h4>
                                        </Row>
                                        <Row>
                                            <p className="ticketDescription">{ticket.description}</p>
                                        </Row>
                                    </Col>
                                </Row>
                                <br></br>
                                <Row className="buttonDiv ">
                                    <button className="savedTickets btn btn-primary" id={ticket.id} onClick={(event) => props.savedTickets(event)}>
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
