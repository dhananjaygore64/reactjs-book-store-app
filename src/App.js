import "./App.css";
import { useEffect, useState } from "react";
import Header from "./Header";
import Home from "./Home";
import About from "./About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
console.log("app is running");

function App() {
  const [showAdd, setShowAdd] = useState(false);
  const [books, setBooks] = useState();
  const serverUrl =
    process.env.REACT_APP_SERVER_URL || "https://localhost:3001";
  console.log("serverUrl", serverUrl);

  useEffect(() => {
    console.log("serverUrl", serverUrl);

    fetch(`${serverUrl}/books`)
      .then((response) => response.json())
      .then((data) => {
        setBooks([...data.books]);
      })
      .catch((error) => console.error(error));
  }, [serverUrl]);

  return (
    <Router>
      <Header
        headerName="Book Store App"
        onAdd={() => setShowAdd(!showAdd)}
        showAdd={showAdd}
      />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              serverUrl={serverUrl}
              books={books}
              setBooks={setBooks}
              showAdd={showAdd}
            />
          }
        />
        <Route exact path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
