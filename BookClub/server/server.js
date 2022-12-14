const express = require('express'); 
const cors = require('cors');
require('./config/mongoose.config');
const userRoutes = require('./routes/user.routes'); 

const app = express(); 
const port = 8000; 
app.use(express.json());
app.use(express.urlencoded({extended:true})); 

app.use(
    cors({
        origin : 'http://localhost:3000'
    })
);
app.use('/api/user', userRoutes); 

require('./routes/book.routes')(app);

app.listen(port, () => {
    console.log(`Server up and running on port : ${port}`);
});

