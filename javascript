// server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

mongoose.connect('mongodb://localhost:27017/moneyTrackerDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Define MongoDB schema and model here using Mongoose

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// Routes for handling expense and income data

// Serve the HTML file
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
