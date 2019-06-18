import React from "react";
import "./style.css";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
function SearchForm(props) {
  return (
    <form className="search">
      <div className="form-group">
        <label htmlFor="search"></label>
        <input
          value={props.search}
          onChange={props.handleInputChange}
          name="search"
          type="text"
          className="form-control"
          placeholder="Enter Book Title"
          id="book"
        />
        <button type="submit" onClick={props.handleFormSubmit} className="btn btn-success" style={{color:"blue"}}>
          Submit
        </button>
      </div>
    </form>
  );
}

export default SearchForm;
