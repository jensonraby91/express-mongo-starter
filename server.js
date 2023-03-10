const express = require('express'); // Importing express module

const app = express(); // Creating an express object

const port = 8000;  // Setting an port for this application

const mongoose = require("mongoose");

const bodyParser = require('body-parser');

const productRouter = require('./routes/product');

mongoose.connect("mongodb://localhost:27017/product-test", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/product', productRouter);

app.get('/', function (req, res) {
    res.send('created a server using nodejs');
})

// Starting server using listen function
app.listen(port, function (err) {
    if (err) {
        console.log("Error while starting server");
    }
    else {
        console.log("Server has been started at " + port);
    }
})