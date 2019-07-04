import React from "react";
import "./style.css";
import { Col, Row, } from "../Grid";
import Moment from "react-moment";

const SearchResults = props => {
  console.log(props.tickets.length);
  return (props.tickets.length === 0) ? (
    <div className="card">
                <h3>No Results to Display</h3>
            </div>
) : (
        <div className="card-group">
                    {props.tickets.map(ticket => {
                        return (
                            <Col size="3">
                          <div className="card">
                            <li className="list list-group-item" id={ticket.id}>
                            
                                    <Row size="12">
                                    <Col size="12" className="ticketImage">
                                        <img id="ticketImage" src={ticket.image} alt={ticket.name} />
                                    </Col>
                                    </Row>
                                      <Row >
                                          <h2 className="ticketDate"><Moment format ="MMM DD">{ticket.date}</Moment></h2>
                                      </Row>
                                      <Row >
                                          <h3 className="ticketName">{ticket.name}</h3>
                                      </Row>
                                      <Row >
                                          <h4 className="ticketAttraction">{ticket.attraction}</h4>
                                      </Row>
                                      <Row >
                                          <p className="ticketVenue">{ticket.venue}</p>
                                      </Row>
                                    {/* </Col> */}
                                
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
                          </Col>
                        );
                    })}

</div> )}

    

export default SearchResults;
