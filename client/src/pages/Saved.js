import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import SavedBooks from "../components/SavedBooks"
import { Container } from "../components/Grid";

//Save class with saved books state
class Save extends Component {
  state = {
    savedBooks: []

  };

  
  componentDidMount() {
    this.loadBooks();
  }

  //get books and set saved book state 
  loadBooks = () => {
    API.getBooks()
      .then(res => {
        this.setState({ savedBooks: res.data});
        // console.log("looking for savedBooks here: ", this.state.savedBooks)
      })
      .catch(err => console.log(err));
  };

  //delete book
  deleteBook = event => {
    console.log("Delete event here: ", event.target);
    const _id = event.target.id;
    API.deleteBook(_id)
      .then(x => {
        console.log("looking for book id to delete here: ", this.state.savedBooks[0]._id);
        console.log(_id);
        const newSavedBooks = this.state.savedBooks.filter(item => item._id !== _id);
        this.setState({ savedBooks: newSavedBooks});
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
        <Container fluid>
          <Jumbotron>
            <h1>Google Book Search</h1>
            <h3>Search and save your favorite books</h3>
          </Jumbotron>
            <Container>
                <SavedBooks savedBooks={this.state.savedBooks} deleteBook={this.deleteBook} />
            </Container>
        </Container>
    )
}
}

export default Save;
