import React from "react";
// import "./style.css";
import { Col, Row, } from "../Grid";

const SavedTickets = props => {
  return (props.savedTickets.length === 0) ? (
    <div className="card">
        <div className="card-body player">
            <div className="article">
                <h3>No Saved Tickets</h3>
            </div>
        </div>
    </div>
) : (
        <div className="card">
            <div className="card-body">
                <div className="article">
                    <h3>Saved Tickets</h3>
                    {props.savedTickets.map(saveTicket => {
                        return (
                          <div>
                            <li className="list list-group-item">
                                <Row className="SearchResult row" id={saveTicket.title + "Card"} key={saveTicket._id}>
                                    <Col size="12" className="ticketImage">
                                        <img src={saveTicket.image} alt={saveTicket.title} />
                                    </Col>
                                    <Col size="1" className="emptyCol"/>
                                    <Col size="9" className="ticketInfo">
                                        <Row>
                                            <h3 className="ticketTitle">{saveTicket.title}</h3>
                                        </Row>
                                        <Row>
                                            <h4 className="ticketAuthor">{saveTicket.authors}</h4>
                                        </Row>
                                        <Row>
                                            <p className="ticketDescription">{saveTicket.description}</p>
                                        </Row>
                                    </Col>
                                </Row>
                                <br></br>
                                <Row className="buttonDiv ">
                                    <button className="saveTicket btn btn-primary" id={saveTicket._id} data-ticketid={saveTicket._id} onClick={(event) => props.deleteTicket(event)}>
                                        Delete Ticket
                                    </button>
                                    <a href={saveTicket.link} target="_blank" rel="noopener noreferrer">
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
export default SavedTickets;
