const express = require('express');
const app = express();
const mongoose = require('mongoose');
const routes = require('./routes/routes.js');
const cors = require('cors');

// Middleware to enable CORS
app.use(cors());

// Middleware to parse form data
app.use(express.urlencoded({extended: true}));



// Middleware to parse JSON data
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb+srv://bestcoolestFree:santa2153@cluster0.vi5pty8.mongodb.net/abc', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log('Successfully Connected to MongoDB');
})
.catch(err => {
    console.error('Error connecting to MongoDB:', err);
});

// Attach routes to the app
app.use(routes);

// Start the server
app.listen(9992, (err) => {
    if (err) {
        console.log('Error in connecting to the server');
    } else {
        console.log('Server started at port 9992');
    }
});
