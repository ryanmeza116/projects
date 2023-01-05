const BookController = require('../controller/book.controller'); 
const Book = require('../model/book.model');

module.exports = (app) => {
    app.post('/api/book', BookController.createBook); 
    app.get('/api/book', BookController.getAllBooks);
    app.get('/api/book/:id', BookController.getOneBook); 
    app.put('/api/book/:id', BookController.updateBook);
    app.delete('/api/book:id', BookController.deleteBook); 
}