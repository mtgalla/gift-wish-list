import React from "react";
import "./style.css";
import { Col, Row, } from "../Grid";

const SearchResults = props => {
  return (props.books.length === 0) ? (
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
                    {props.books.map(book => {
                        return (
                          <div>
                            <li className="list list-group-item">
                                <Row className="SearchResult row" id={book.title + "Card"} key={book._id}>
                                    <Col size="12" className="bookImage">
                                        <img src={book.image} alt={book.title} />
                                    </Col>
                                    <Col size="1" className="emptyCol"/>
                                    <Col size="9" className="bookInfo">
                                        <Row>
                                            <h3 className="bookTitle">{book.title}</h3>
                                        </Row>
                                        <Row>
                                            <h4 className="bookAuthor">{book.authors}</h4>
                                        </Row>
                                        <Row>
                                            <p className="bookDescription">{book.description}</p>
                                        </Row>
                                    </Col>
                                </Row>
                                <br></br>
                                <Row className="buttonDiv ">
                                    <button className="savedBooks btn btn-primary" id={book.id} onClick={(event) => props.savedBooks(event)}>
                                        Save Book
                                    </button>
                                    <a href={book.link} target="_blank" rel="noopener noreferrer">
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
export default SearchResults;
