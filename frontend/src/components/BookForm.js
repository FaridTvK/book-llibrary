import { useState, useEffect } from "react";
import axios from "axios";
import "./BookForm.css";

const BookForm = () => {
  const [bookTitle, setBookTitle] = useState("");
  const [bookAuthor, setBookAuthor] = useState("");
  const [bookImageURL, setBookImageURL] = useState("");



  const [books, setBooks] = useState({})



  const URL = "http://localhost:3003/books";

  const titleHandler = (e) => {
    setBookTitle(e.target.value);
  };
  const authorHandler = (e) => {
    setBookAuthor(e.target.value);
  };
  const imageHandler = (e) => {
    setBookImageURL(e.target.value);
  };


  const onSubmitHandler = (e) => {
    e.preventDefault();
    const newBook = {
      title: bookTitle,
      author: bookAuthor,
      imageUrl: bookImageURL
    }

    setBooks(newBook);
    console.log(newBook)
    const fetchData = async () => {
      try {
        // debugger
        await axios({
          method: 'post',
          url: URL,
          data: {
            title: bookTitle,
            author: bookAuthor,
            imageUrl: bookImageURL
          },
        });
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  };

  // useEffect(() => {

  // }, []);
  return (
    <form action="POST" className="book-form" onSubmit={onSubmitHandler}>
      <fieldset>
        <legend>Add and save your favourite book to your database</legend>
        <label htmlFor="book-name">Book Title</label>
        <input
          type="text"
          id="book-name"
          placeholder="Please enter the book title..."
          required
          onChange={titleHandler}
        />

        <label htmlFor="book-author">Book Author</label>
        <input
          type="text"
          id="book-author"
          placeholder="Please enter the book author..."
          required
          onChange={authorHandler}
        />

        <label htmlFor="image-url">Book ImageURL</label>
        <input
          type="text"
          id="image-url"
          placeholder="Please add the imageURL..."
          required
          onChange={imageHandler}
        />

        <button>Submit</button>
      </fieldset>
    </form>
  );
};

export default BookForm;
