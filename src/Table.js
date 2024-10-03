import React from "react";
import {FaEdit, FaSave} from 'react-icons/fa'
import {FaXmark} from 'react-icons/fa6'

const Table = ({books, onEditBook, disabledObj, onEditBtnClicked, onDeleteBtnClicked, onSaveBtnClicked}) => {
  return (
    <div>
      <table className="styled-table">
        <thead>
          <tr>
            <th>Sr No.</th>
            <th>Book Name</th>
            <th>Book Author</th>
            <th>Publish Date</th>
            <th>Book Publisher</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {books && books.map((book, idx) => (
              <tr key={idx}>
                <td>{idx+1}</td>
                <td><input type="text" value={books[idx].name} placeholder="Book Name" onChange={(event)=>onEditBook(idx, "name",event)} disabled={disabledObj[book._id] === undefined && true || disabledObj[book._id]}></input></td>
                <td><input type="text" value={books[idx].author} placeholder="Book Author" onChange={(event)=>onEditBook(idx, "author",event)} disabled={disabledObj[book._id] === undefined && true || disabledObj[book._id]}></input></td>
                <td><input type="text" value={books[idx].publishDate} placeholder="Book Publish Date" onChange={(event)=>onEditBook(idx, "publishDate",event)} disabled={disabledObj[book._id] === undefined && true || disabledObj[book._id]}></input></td>
                <td><input type="text" value={books[idx].publisher} placeholder="Book Publisher" onChange={(event)=>onEditBook(idx, "publisher",event)} disabled={disabledObj[book._id] === undefined && true || disabledObj[book._id]}></input></td>
                <td><FaEdit className="editIcon" onClick={(event)=>onEditBtnClicked(book._id,event)} /> {disabledObj[book._id] === false && <FaSave className="saveIcon" onClick={(event)=>onSaveBtnClicked(book._id, event)}/>} <FaXmark  className="deleteIcon" onClick={(event)=>onDeleteBtnClicked(book._id,event)}/></td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
