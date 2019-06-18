import React from "react";
// import "./style.css";
import { Col, Row, } from "../Grid";

const SavedBooks = props => {
  return (props.savedBooks.length === 0) ? (
    <div className="card">
        <div className="card-body player">
            <div className="article">
                <h3>No Saved Books</h3>
            </div>
        </div>
    </div>
) : (
        <div className="card">
            <div className="card-body">
                <div className="article">
                    <h3>Saved Books</h3>
                    {props.savedBooks.map(saveBook => {
                        return (
                          <div>
                            <li className="list list-group-item">
                                <Row className="SearchResult row" id={saveBook.title + "Card"} key={saveBook._id}>
                                    <Col size="12" className="bookImage">
                                        <img src={saveBook.image} alt={saveBook.title} />
                                    </Col>
                                    <Col size="1" className="emptyCol"/>
                                    <Col size="9" className="bookInfo">
                                        <Row>
                                            <h3 className="bookTitle">{saveBook.title}</h3>
                                        </Row>
                                        <Row>
                                            <h4 className="bookAuthor">{saveBook.authors}</h4>
                                        </Row>
                                        <Row>
                                            <p className="bookDescription">{saveBook.description}</p>
                                        </Row>
                                    </Col>
                                </Row>
                                <br></br>
                                <Row className="buttonDiv ">
                                    <button className="saveBook btn btn-primary" id={saveBook._id} data-bookid={saveBook._id} onClick={(event) => props.deleteBook(event)}>
                                        Delete Book
                                    </button>
                                    <a href={saveBook.link} target="_blank" rel="noopener noreferrer">
                                        <button className="viewBook btn btn-success">
                                            View Book
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
export default SavedBooks;
