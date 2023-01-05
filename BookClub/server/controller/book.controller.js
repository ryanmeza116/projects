const Book = require('../model/book.model'); 

module.exports = {

    createBook : (req,res) => {
        Book.create(req.body)
        .then((newBook) => {
            res.status(201).json(newBook); 
        })
        .catch((err) => {
            res.status(400).json({message: "Something went wrong when creating", error: err});
        }); 
    }, 

    getAllBooks :  (req,res) => {
        Book.find({})
        .then((books) => {
            res.status(200).json(books); 
        })
        .catch((err) => {
            res.status(400).json({message: "Something went wrong when attempting to find all", error: err});
        }); 
    },

    getOneBook : (req,res) => {
        Book.findOne({ _id: req.params.id })
            .then((book) => {
            res.json(book);
    })
        .catch((err) => {
        res.status(400).json({ message: 'Something went wrong in findById', error: err });
    });

}, 
    updateBook : (req,res) => {
    Book.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
    .then((book) => {
    res.json(book);
    })
    .catch((err) => {
    res.status(400).json({ message: 'Something went wrong in update', error: err });
    });
},

    deleteBook : (req,res) => {
    Book.deleteOne({ _id: req.params.id })
    .then((book) => {
    res.json(book);
    })
    .catch((err) => {
    res.status(400).json({ message: 'Something went wrong in delete', error: err });
    });
},

}; 