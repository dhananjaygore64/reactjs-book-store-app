const express = require('express');
const router = express.Router();
const Book = require('../models/Book');

function bookValidator(req,res,next){
    if(!req.body.name || !req.body.author || !req.body.publishDate || !req.body.publisher ){
        return res.status("400").send('Please send all required fields!!!');
    }
    next();
}

router.get('/books',(req, res)=>{
    Book.find().then((books)=>{
        return res.send({count:books.length, books})
    });
});

router.get('/book/:id',(req, res)=>{
    const id = req.params.id;
    Book.findById(id).then((book)=>{
        return res.send(book)
    });
});

router.post('/book',bookValidator,(req, res)=>{
    const book = new Book({
        name: req.body.name,
        author: req.body.author,
        publishDate: req.body.publishDate,
        publisher: req.body.publisher
    });
    book.save().then((doc)=>res.send(doc));
})

router.delete('/book/:id',(req, res)=>{
    const id = req.params.id;
    if(!id) return res.send("Please provide an Book Id")
    Book.findByIdAndDelete(id).then((doc)=>{
        return res.send(doc)
    });
});

router.patch('/book/:id',bookValidator,(req, res)=>{
    const id = req.params.id;
    if(!id) return res.send("Please provide an Book Id")
    Book.findByIdAndUpdate(id, req.body).then((doc)=>{
        return res.send(doc)
    });
});


module.exports = router