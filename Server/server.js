const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const BookRouter = require("./routes/book.js");
const mongoose = require("mongoose");

const app = express();

app.use(cors());
app.use(bodyParser.json());
mongoose.connect("mongodb://127.0.0.1:27017/books")
  .then(() => {

    app.use(BookRouter);




    app.listen(process.env.PORT || 3000, function () {
        console.log("Express app running on port " + (process.env.PORT || 3000));
      });
  })
  .catch((error) => {
    console.log("error :>> ", error);
  });


