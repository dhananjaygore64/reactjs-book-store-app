import React from "react";
import Table from "./Table";
import AddBook from "./AddBook";
import { useState } from "react";
import Footer from "./Footer";

const Home = ({ books, setBooks, showAdd }) => {
  const [disabledObj, setDisabledObj] = useState({});
  const serverUrl = process.env.REACT_APP_SERVER_URL;

  const onEditBook = (idx, key, event) => {
    event.preventDefault();
    books[idx][key] = event.target.value;
    setBooks([...books]);
  };

  const onEditBtnClicked = (_id, event) => {
    event.preventDefault();
    setDisabledObj({
      ...disabledObj,
      [_id]: disabledObj[_id] === undefined ? false : !disabledObj[_id],
    });
  };

  const onDeleteBtnClicked = (_id, event) => {
    event.preventDefault();
    fetch(`${serverUrl}/book/${_id}`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => {
        setBooks(books.filter((book) => book._id !== _id));
      })
      .catch((error) => console.error(error));
  };

  const onSaveBtnClicked = (_id, event) => {
    event.preventDefault();
    const updatedBook = books.find((book) => book._id === _id);
    fetch(`${serverUrl}/book/${_id}`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "PATCH",
      body: JSON.stringify(updatedBook),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Book Updated Successfully :>> ");
        setDisabledObj({ ...disabledObj, [_id]: true });
      })
      .catch((error) => console.error(error));
  };

  const onAdd = (newBook) => {
    fetch(`${serverUrl}/book`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(newBook),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Book Added Successfully :>> ");
        setBooks([...books, newBook]);
      })
      .catch((error) => console.error(error));
  };
  return (
    <div>
      <div className="container">
        {showAdd && <AddBook onAdd={onAdd} />}
        <Table
          books={books}
          onEditBook={onEditBook}
          disabledObj={disabledObj}
          onEditBtnClicked={onEditBtnClicked}
          onDeleteBtnClicked={onDeleteBtnClicked}
          onSaveBtnClicked={onSaveBtnClicked}
        />
      </div>
      <Footer footerLink="/about" footerLinkText="About" />
    </div>
  );
};

export default Home;
