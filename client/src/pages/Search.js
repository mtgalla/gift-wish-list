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
    books: [],
    search: "",
    error: "",
    savedBooks: [],
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
    console.log("this is search on line 48" + this.state.search);
    API.searchBooks(this.state.search)
    // console.log("books here:", books)
    .then(res => {
      console.log("response", res)
      if (res.data.items === "error") {
        throw new Error(res.data.items);
      }
      else {
        console.log(res.data.items);
        let results = res.data.items;
        results = results.map(result => {
          //map each book data into new object 
          result = {
              key: result.id,
              id: result.id,
              title: result.volumeInfo.title,
              authors: result.volumeInfo.authors,
              description: result.volumeInfo.description,
              image: result.volumeInfo.imageLinks.thumbnail,
              link: result.volumeInfo.infoLink
          }
          console.log(this.state);
          return result;
      })
      this.setState({ books: results, error: "" });
    }
  })
    .catch(err => this.setState({ error: err.items }));
};

//save books
 savedBooks = event => {
    event.preventDefault();
    let savedBooks = this.state.books.filter(book => book.id === event.target.id)
    savedBooks = savedBooks[0];
    console.log(savedBooks);
    API.saveBook(savedBooks)
        .then(
          this.setState({savedBooks: savedBooks}),
          this.setState({ message: alert("Your book is saved") })
          )
        .catch(err => console.log(err))
}

  render() {
    return (
      <Container fluid>
        <Row>
        <Col size="12">
         
            <Jumbotron>
              <h1>Google Book Search</h1>
              <h3>Search and save your favorite books</h3>
              <Container fluid>
              <Row>
                <Col size="3"></Col>
                <Col size="6"> 
                <SearchForm
                  value = {this.state.search}
                  handleFormSubmit={this.handleFormSubmit}
                  handleInputChange={this.handleInputChange}
                />
                </Col>
                <Col size="3"></Col>
              </Row>
            </Container>
            </Jumbotron>
            </Col>
        </Row>

      <Container fluid>


            <SearchResults books={this.state.books} savedBooks={this.savedBooks}/>

      

      </Container>
            
          {/* </Col> */}
        {/* </Row> */}
      </Container>
    );
  }
}

export default Search;
