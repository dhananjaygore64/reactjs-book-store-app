import "./App.css";
import { useEffect, useState } from "react";
import Header from './Header'
import Home from './Home'
import About from './About'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {

  const [showAdd, setShowAdd] = useState(false);
  const [books, setBooks] = useState();

  useEffect(() => {
    fetch("http://localhost:3001/books")
      .then((response) => response.json())
      .then((data) => {
        setBooks([...data.books]);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <Router>
      <Header headerName="Book Store App" onAdd={()=>setShowAdd(!showAdd)} showAdd={showAdd}/>
      <Routes>
        <Route path="/" element={<Home books={books} setBooks={setBooks} showAdd={showAdd}/>}/>
        <Route exact path="/about" element={<About/>}/>
      </Routes>
    </Router>
  );
}

export default App;
