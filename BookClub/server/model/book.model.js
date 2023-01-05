const mongoose = require('mongoose'); 

const BookSchema = new mongoose.Schema(
    {
        bookTitle : {
            type:String, 
            required: [
                true, 
                "Please list the title of the book. Example : 'The Lord Of the Rings'. "
            ],
            minlength : [1, "Book name must have at least 1 character."],
        },
        // what is a book and what does it have ? 
        // Title, Author(s), Num of pages, Date written, Publisher, Date published. 
        bookAuthor : {
            type : String, 
            required : [ 
                true, 
                "Please list the name of the author."
            ], 
            minlength : [1, "Authors name must have at least one character. "]

        },

        bookPages : {
            type : Number, 
            required : [ true, "Please specify how many pages the book has."], 
            minlength : [1, "Book must have at least 1 page"]
        },
        bookDateWritten : {
            type : Date, 
            default : null, 
        },
        bookPublisher : {
            type : String, 
            default : "Unknown"
        }, 
        bookDatePublished : {
            type : Date, 
            default : null
        },
    },
    {
        timestamps : true
    },
);

const Book = mongoose.model('Book', BookSchema); 
module.exports = Book; 