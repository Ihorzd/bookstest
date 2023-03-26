import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { useState } from "react";

import "./App.css";

import Books from "./pages/books/Books";
import EditBook from "./pages/newBook";
import AddBook from "./pages/newBook";
import PreviewBook from "./pages/previewBook";

import booksData from "./constants/books.json";
function App() {
  const [books, setBooksData] = useState(booksData);
  const addBook = (book) => {
    const id = Math.floor(Date.now() + Math.random());
    book.id = id;
    setBooksData((prew) => [...prew, book]);
  };
  const updateBook = (book) => {
    setBooksData((prew) => {
      const newBooks = prew.map((item) => {
        if (item.id === book.id) {
          item = book;
        }
        return item;
      });
      return newBooks;
    });
  };

  const deleteBook = (id) => {
    setBooksData((prew) => prew.filter((book) => book.id !== id));
  };
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/books" />} />
          <Route
            path="/books"
            element={<Books booksData={books} deleteBook={deleteBook} />}
          />
          <Route
            path="/books/:id"
            element={<PreviewBook books={books} preview handleBook={addBook} />}
          />
          <Route
            path="/books/:id/edit"
            element={<EditBook books={books} handleBook={updateBook} />}
          />
          <Route
            path="/books/new"
            element={<AddBook books={books} handleBook={addBook} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
