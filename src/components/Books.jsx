import React, { useEffect, useState } from "react";
import "./Books.css";
import Shimmer from "./Shimmer";

function Books() {
  const [books, setBooks] = useState([]);
  const [term, setTerm] = useState("Harry");
  useEffect(() => {
    if (term !== "") {
      getBooks();
    }
  }, [term]);

  async function getBooks() {
    const data = await fetch(
      `https://openlibrary.org/search.json?title=${term}`
    );
    const byson = await data.json();
    setBooks(byson.docs);
  }

  return books.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="search-main">
        <h3>Search here</h3>
        <input
          type="text"
          className="search"
          placeholder="Search"
          onChange={(e) => {
            setTerm(e.target.value);
          }}
        />
      </div>
      <div className="book-main">
        {console.log(books)}
        {books.slice(0, 28).map((bks) => (
          <div className="books" key={bks.cover_i}>
            <img
              className="pic"
              src={`https:covers.openlibrary.org/b/id/${bks.cover_i}-L.jpg`}
              alt=""
            />
            <h6 className="title">{bks.title}</h6>
          </div>
        ))}
      </div>
    </>
  );
}

export default Books;
