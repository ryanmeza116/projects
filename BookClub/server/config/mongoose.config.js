const mongoose = require('mongoose'); 

const dBName = "Book_Club"; 

mongoose.connect(`mongodb://localhost/${dBName}`, {
    useNewUrlParser : true, 
    useUnifiedTopology : true
})
.then(() => console.log(`connected to ${dBName} database! `))
.catch((err) => console.log(err)); 